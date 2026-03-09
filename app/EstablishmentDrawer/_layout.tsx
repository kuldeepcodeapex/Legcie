
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';

export default function RootLayout() {
  return (
     <Drawer  screenOptions={{ headerShown: true }}>
      <Drawer.Screen 
        name="index" 
        options={{
           headerShown: true,
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
        <Drawer.Screen
        name="login" 
        options={{
           headerShown: true,
         drawerLabel: "Login Out",
          title: 'Login Out',
        }}
        
      />
         <Drawer.Screen
         
        name="ReadyBook" 
        options={{
        
          title: 'ReadyBook',
        }}
      />
 
      
    </Drawer>
  )
}
