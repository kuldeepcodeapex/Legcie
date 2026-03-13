import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons'

const ProfileModal = ({setprofileModalVisible}:any) => {
    return (
        <View style={{ backgroundColor:"white",width:"100%"}}>
            <View style={{paddingLeft:28}}>
                <Text style={{fontSize:18, fontWeight:600}}>User</Text>
                <Text  style={{fontSize:16, fontWeight:400}}>divyanshi7252@gmail.com</Text>
                <Text  style={{fontSize:16, fontWeight:400}}>Connected since 11/20/2025</Text>
            </View>
            <View>
         <Pressable
                    style={{ borderTopWidth: 0.2, borderColor: "rgb(231, 224, 182)", paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", marginVertical: "2%", paddingVertical: 18 }}
                onPress={() => setprofileModalVisible(false)}
                >
                    <Feather name='settings' size={20} style={{ color: "black" }} />
                    <Text style={{ fontSize: 16, color: "black" }}>Profile setting</Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={{ borderTopWidth: 0.2, borderColor: "rgb(231, 224, 182)", paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", marginVertical: "2%", paddingVertical: 18 }}
                onPress={() => setprofileModalVisible(false)}
                >
                    <MaterialIcons name='logout' size={20} style={{ color: "rgb(221, 52, 38)" }} />
                    <Text style={{ fontSize: 16, color: "rgb(221, 52, 38)" }}>Disconnect</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ProfileModal