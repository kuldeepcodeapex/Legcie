
import { Checkbox } from 'expo-checkbox';

import { View, Text, TextInput, Pressable } from 'react-native'

import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { router } from 'expo-router';



const Singup = () => {

    const [isChecked, setChecked] = useState(false);


    return (
        <View style={{paddingHorizontal:10}}>
            <View style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 40 }}>Legacy</Text>
                <Text style={{ fontSize: 30 }}>Establishment Space</Text>

                <Text style={{ fontSize: 20 }}>Signup in to your dashboard</Text>
            </View>
            <View style={{ gap: 24, marginTop: 20 }}>
                 <View>
                    <Text>
                    Name
                    </Text>
                    <TextInput placeholder='Enter your Name' style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
                </View>
                <View>
                    <Text>
                        Email address
                    </Text>
                    <TextInput placeholder='Enter your Email' style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
                </View>
                <View>
                    <Text>
                        Password
                    </Text>
                    <TextInput placeholder='Enter your Password' style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                   
                </View>
                <Pressable style={{ backgroundColor: 'rgb(119, 0, 255)', alignItems: "center", paddingVertical: 16, borderRadius: 10 }}>
                    <Text style={{color:"white"}}>
                        Sign Up 
                    </Text>
                </Pressable>

                <View style={{ flexDirection: 'row', width:"100%", justifyContent:"center",gap:8 }}>
                                  <Pressable
               
               onPress={()=>{

    //   router.push('/Pages/login')
  }}             
               >
                 <Text style={{ fontSize: 18,}}>
                Go to Login Page
                </Text>
               </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Singup