
// import { AppStateProvider } from "@/Myauth/auth";
import { Stack } from "expo-router";
// import Home from "./Deshboard/Home";
// import Form from "./Deshboard/pages/Form";
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { ActivityIndicator, View } from "react-native";
import { useEffect } from "react";
import { MenuProvider } from "react-native-popup-menu";

export default function RootLayout() {
  const StackFunction = () => {
    const { token, loding, user, role }: any = useAuth()

    return (
       <MenuProvider>   
           <Stack screenOptions={{headerShown:false
      }}>

        <Stack.Screen
        name="Deshboard"
        options={{
           headerShown: false,
          title: "Home",
         
        }}
          />
        {/* <Stack.Screen
        name="Pages/Rasidents"
        options={{
           headerShown: true,
          title: "Home",
         
        }}
      /> */}
         {/* <Stack.Screen
        name="Pages/Pages/Establishments"
        options={{
           headerShown: true,
          title: "Home",
         
        }}
      /> */}
      
        {/* <Stack.Protected guard={role == "Contributor" && token} >
          <Stack.Screen options={{ headerShown: false }} name="Deshboard" />
        </Stack.Protected>
        <Stack.Protected guard={role == "Administrator" && token} >
          <Stack.Screen options={{ headerShown: true}} name= "EstablishmentDrawer" />
        </Stack.Protected> */}
        {/* <Stack.Protected guard={loding}>
          <Stack.Screen name="loding" />
        </Stack.Protected> */}
        {/* <Stack.Protected guard={!token}>
          <Stack.Screen name="login" />
        </Stack.Protected>
         */}
        
      </Stack>
      </MenuProvider>


      

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
