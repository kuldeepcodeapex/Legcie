import { View } from "react-native";
import Login from "./login";
// import Home from "./EstablishmentDrawer/Home";
import Help from "./Deshboard/pages/Help";
import Home from "./Deshboard/Home";
// import { useContext, useEffect, useState } from "react";
// // import { User } from "@supabase/supabase-js";
// import { supabase } from "@/lib/supabase";
// import Home from "./Pages/Home";
// import Form from "./Pages/Form";
// import { AppStateContext } from "@/Myauth/auth";
// import User from "./Pages/user";
// import UserForm from "./Pages/UserForm";
// import Rasidents from "./Pages/Rasidents";
// import Support from "./Deshboard/pages/Support";
// import EntertainmentWork from "./Deshboard/pages/EntertainmentWork";
// import QA from "./Deshboard/pages/QA";
// import Answer from "./Deshboard/Answer";
// import EditAns from "./Deshboard/pages/EditAns";
// import DrawerNavigator from "./DrawerNavigator";
// import User from "./Pages/user";
import { MenuProvider } from 'react-native-popup-menu';

export default function Index() {

  
  return (
    
    <View >
      {/* <Help></Help> */}
      
   <Home></Home>

   {/* <Rasidents></Rasidents> */}
      {/* <Login /> */}
   {/* <Support/> */}
   {/* <Answer></Answer> */}
   {/* <EntertainmentWork/> */}
   {/* <QA></QA> */}
   {/* <Home></Home> */}
   {/* <EditAns></EditAns> */}
   
    
    </View>
  )
}
