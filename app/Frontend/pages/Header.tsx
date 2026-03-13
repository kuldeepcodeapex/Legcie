import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, Fontisto, MaterialIcons } from '@expo/vector-icons'
import Modal from "react-native-modal";
import { router } from 'expo-router';
import ProfileModal from './ProfileModal';

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [profilemodalVisible, setprofileModalVisible] = useState(false);

    return (
        <View>

            <View style={{ marginTop: 40, }}>
                <View style={{ alignContent: "center", backgroundColor: "white", borderBottomWidth: 0.2, flexDirection: "row", borderColor: "rgb(203, 162, 126)", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 20 }}>

                    <Pressable onPress={() => {
                        setModalVisible(true)
                        console.log("first")
                    }}>
                        <AntDesign name='menu' size={30} style={{ color: "black" }} />
                    </Pressable>


                    <Pressable style={{ height: 40, width: 40, borderRadius: "50%", backgroundColor: "rgb(203, 162, 126)", alignItems: "center", justifyContent: "center" }}
                        onPress={() => {
                            setprofileModalVisible(!profilemodalVisible)
                        }}
                    >
                        <Feather name='user' size={30} style={{ color: "white" }} />
                    </Pressable>
                </View>
              <View>
                  <Modal
                    isVisible={profilemodalVisible}
                    onBackdropPress={() => setprofileModalVisible(false)}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                
                    
                    // presentationStyle={{h}}
                    // hasBackdrop={false}
                    // style={{}}
                    
                  

                >
                    <View style={{ backgroundColor:"white",width:"60%",bottom:270, left:150}}>
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

           
                </Modal>
              </View>



                <Modal
                    isVisible={modalVisible}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutLeft'}
                    style={{ flex: 1 }}
                >
                    <View style={{ height: '105%', backgroundColor: "rgb(255, 255, 255)", width: "80%", marginLeft: -20, marginTop: -0, justifyContent: "space-between" }}>
                        <View style={{ height: '100%', backgroundColor: "rgb(255, 255, 255)", width: "100%", justifyContent: "space-between" }}>

                            <View>
                                <View style={{ justifyContent: "space-between", borderBottomWidth: 0.2, borderColor: "rgb(231, 224, 182)", width: "100%", paddingLeft: 20, flexDirection: "row", alignItems: "center", gap: 2, marginVertical: "2%", paddingVertical: 18 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <AntDesign name='kubernetes' size={30} style={{ color: "rgb(203, 162, 126)" }} />
                                        <Text style={{ fontSize: 24, paddingLeft: 10 }}>Legacy.</Text>
                                    </View>
                                    <Pressable
                                        onPress={() => {
                                            setModalVisible(!modalVisible)
                                        }
                                        }

                                    >
                                        <Entypo name='cross' size={30} style={{ color: "rgb(10, 10, 10)", marginRight: 10 }} />
                                    </Pressable>
                                </View>
                                <Pressable
                                    style={{ paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", paddingVertical: 18 }}
                                    onPress={() => {
                                        setModalVisible(true)
                                        router.replace("/Frontend/pages/Home")
                                    }}



                                >
                                    <Feather name='grid' size={16} />
                                    <Text style={{ fontSize: 16 }}>Dashboard</Text>
                                </Pressable>
                                <Pressable
                                    style={{ paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", paddingVertical: 18 }}
                                    onPress={() => {
                                        setModalVisible(true)
                                        router.replace("/Frontend/pages/Support")
                                    }}>
                                    <Feather name='users' size={16} />
                                    <Text style={{ fontSize: 16 }}>Resident</Text>
                                </Pressable>
                                <Pressable
                                    style={{ paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", paddingVertical: 18 }}
                                    onPress={() => {
                                        setModalVisible(true)
                                        router.replace("/Frontend/pages/Billing")
                                    }}>
                                    <Fontisto name='money-symbol' size={16} />
                                    <Text style={{ fontSize: 16 }}>Billing</Text>
                                </Pressable>
                                <Pressable
                                    style={{ paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", marginVertical: "2%", paddingVertical: 18 }}
                                    onPress={() => {
                                        setModalVisible(true)
                                        router.replace("/Frontend/pages/Setting")
                                    }}>
                                    <Feather name='settings' size={16} />
                                    <Text style={{ fontSize: 16 }}>Settings</Text>
                                </Pressable>
                                  <Pressable
                                    style={{ paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", paddingVertical: 15 }}
                                    onPress={() => {
                                        setModalVisible(true)
                                        router.replace("/Frontend/pages/Setting")
                                    }}>
                                    <AntDesign name='question-circle' size={16} />
                                    <Text style={{ fontSize: 16 }}>Help & Support</Text>
                                </Pressable>
                            </View >


                            <Pressable
                                style={{ borderTopWidth: 0.2, borderColor: "rgb(231, 224, 182)", paddingLeft: 30, backgroundColor: "rgb(255, 255, 255)", alignItems: "center", gap: 12, flexDirection: "row", marginVertical: "2%", paddingVertical: 18 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <MaterialIcons name='logout' size={20} style={{ color: "rgb(221, 52, 38)" }} />
                                <Text style={{ fontSize: 16, color: "rgb(221, 52, 38)" }}>Disconnect</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Header