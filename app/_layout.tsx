
// import { AppStateProvider } from "@/Myauth/auth";
import { Stack } from "expo-router";
// import Home from "./Deshboard/Home";
// import Form from "./Deshboard/pages/Form";
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { ActivityIndicator, View } from "react-native";
import { useEffect } from "react";

export default function RootLayout() {
  const StackFunction = () => {
    const { token, loding, user, role }: any = useAuth()


// console.log(role,"sbcvxhjkesbdvhjkbdjkbes")
// console.log(token,"sbcvxhjkesbdvhjkbdjkbes")


    if (loding) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <Stack>
        {/* <Stack.Protected guard={token} >
          <Stack.Screen options={{ headerShown: false }} name="Pages/Home" />
        </Stack.Protected> */}
        <Stack.Protected guard={role == "Contributor" && token} >
          <Stack.Screen options={{ headerShown: false }} name="Deshboard" />
        </Stack.Protected>
        <Stack.Protected guard={role == "Administrator" && token} >
          <Stack.Screen options={{ headerShown: true}} name= "Pages/Home" />
        </Stack.Protected>
        <Stack.Protected guard={loding}>
          <Stack.Screen name="loding" />
        </Stack.Protected>
        <Stack.Protected guard={!token}>
          <Stack.Screen name="login" />
        </Stack.Protected>
      </Stack>

      

    )
    
  }
  
  return (
    
    <>
      <AppStateProvider>
        {/* <Stack></Stack> */}
        <StackFunction />
      </AppStateProvider>

    </>
  )
}
