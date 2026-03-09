
import { Checkbox } from 'expo-checkbox';
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase';
import { Redirect, useRouter } from 'expo-router';
import { useAuth } from '@/Myauth/auth';



const Login = () => {


    const { user, setUser, token, setToken, setRole, role }: any = useAuth()

    const [formdata, setFormdata] = useState({
        email: "r@gmail.com",
        password: "123456"

    })

    const router = useRouter()


    const [isChecked, setChecked] = useState(false);


  
    const signInWithEmail = async () => {

        // console.log("INSIDE SIGN IN WITH EMAIL:")
        // console.log("form data", formdata)
        const { error, data } = await supabase.auth.signInWithPassword(formdata)
        // console.log("THis is data after login", data)
        if (error) Alert.alert(error.message)

        // if (data?.session) {
            
            setToken(data?.session)
            // console.log(data?.session,"this is session ")
        // }
console.log(token,"bnsdjksndkcbknswcnjikcfn")
        const { data:check } = await supabase
            .from('User')
            .select('*')
            .eq('email', data?.session?.user?.email)
        setUser(check)

        if (check[0]?.role === "Contributor") {
            console.log(check[0]?.role,"true")
            setRole(user)
            //    console.log(role,"jkgbjkhghbghjgbhjgjgjkjk")
            return <Redirect href="/Pages/Home" />;

            // router.push('/Deshboard/Home')
        } else if (check[0]?.role == "Administrator") {
            console.log(check[0]?.role,"false")
            //  console.log(token,"jkgbjkhghbghjgbhjgjgjkjk")
            // console.log("false")
                        return <Redirect href="/Deshboard/Home" />;

        }


    }

    return (
        <View>
            <View style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 40 }}>Legacy</Text>
                <Text style={{ fontSize: 30 }}>Establishment Space</Text>

                <Text style={{ fontSize: 20 }}>Log in to your dashboard</Text>
            </View>
            <View style={{ gap: 24, marginTop: 20 }}>
                <View>
                    <Text>
                        Email address
                    </Text>
                    <TextInput placeholder='Enter your Email' style={{ borderWidth: 1, borderRadius: 10 }} value={formdata.email} onChangeText={(value) => {
                        setFormdata({ ...formdata, email: value })
                    }}></TextInput>
                </View>
                <View>
                    <Text>
                        Password
                    </Text>
                    <TextInput placeholder='Enter your Password' style={{ borderWidth: 1, borderRadius: 10 }} value={formdata.password}
                        onChangeText={(value) => {
                            setFormdata({ ...formdata, password: value })
                        }}
                    ></TextInput>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", gap: 10 }} >
                        {/* <Checkbox value={isChecked} onValueChange={setChecked} /> */}
                        <Text style={{ fontSize: 12 }} >Remember me</Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>
                        Forgot your password?
                    </Text>
                </View>
                <Pressable style={{ backgroundColor: 'rgb(255, 208, 0)', alignItems: "center", paddingVertical: 16, borderRadius: 10 }} onPress={() => {
                    console.log("inside onPress")
                    signInWithEmail()
                }}>
                    <Text>
                        Log in
                    </Text>
                </Pressable>

                <Pressable style={{ backgroundColor: 'rgb(255, 208, 0)', alignItems: "center", paddingVertical: 16, borderRadius: 10 }} >
                    <Text>
                        SignUp
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => {

                        // router.push('/Pages/signup')
                    }}


                >
                    <Text style={{ fontSize: 11 }}>
                        No account yet?Create an account (by invitation only)
                    </Text>
                </Pressable>
                <View style={{ flexDirection: 'row', width: "100%", justifyContent: "center", gap: 8 }}>
                    {/* <Foundation name="arrow-left" size={24} color="black" /> */}
                    <Text>
                        Return to connection choice
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login