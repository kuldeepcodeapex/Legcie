import { View, Text, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Setting = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
    const toggleSwitch3 = () => setIsEnabled3(previousState3 => !previousState3);
    const toggleSwitch4 = () => setIsEnabled4(previousState4 => !previousState4);
    const toggleSwitch5 = () => setIsEnabled5(previousState5 => !previousState5);
    const [id, setiD] = useState(1)

    const [formdata, setFormdata] = useState(
        {
            name: "",
            phone: "",
            address: "",
            email: "",
            website: ""
        }
    )

    console.log(formdata.name)
    return (
        <View style={{ backgroundColor: "rgb(255, 254, 248)", height: "100%" }}>
            <Header></Header>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ gap: 10 }} >
                    <Text style={{ fontSize: 24, fontWeight: '300' }}>Setting</Text>
                    <Text style={{ fontSize: 12, fontWeight: '300' }}>Manage your establishment settings</Text>
                </View>
                <View style={{ width: "100%",
                    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2,
                    borderRadius: 10, marginTop: 40, backgroundColor: "white", paddingBottom: 10 }}>
                    <View style={{ width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-between", borderRadius: 10, marginTop: 18, backgroundColor: "white" }}>
                        <Pressable style={{ flexDirection: "row", borderBottomWidth: id == 1 ? 2 : 2, alignItems: "center", gap: 5, borderColor: id == 1 ? "rgb(185, 131, 82)" : "rgb(241, 235, 195)", paddingBottom: 16, width: "34%", justifyContent: "center" }} onPress={() => {
                            setiD(1)
                        }}>
                            <AntDesign name='setting' size={16} style={{ color: "black" }} />
                            <Text style={{ fontSize: 12, fontWeight: '400' }}>Setting</Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: "row", borderBottomWidth: id == 2 ? 2 : 2, paddingBottom: 16, alignItems: "center", gap: 5, width: "33%", borderColor: id == 2 ? "rgb(185, 131, 82)" : "rgb(241, 235, 195)", justifyContent: "center" }}
                            onPress={() => {
                                setiD(2)
                            }}
                        >
                            <Feather name='users' size={16} style={{ color: "black" }} />
                            <Text style={{ fontSize: 12, fontWeight: '400', width: "50%" }}>Team</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setiD(3)
                            }}
                            style={{ flexDirection: "row", borderBottomWidth: id == 3 ? 2 : 2, paddingBottom: 16, alignItems: "center", gap: 5, width: "33%", borderColor: id == 3 ? "rgb(185, 131, 82)" : "rgb(241, 235, 195)", justifyContent: "center" }}>
                            <Ionicons name='notifications-outline' size={16} style={{ color: "black" }} />
                            <Text style={{ fontSize: 12, fontWeight: '400', width: "80%" }}>Notifications</Text>
                        </Pressable>


                    </View>
                    {
                        (id == 1) ?
                            <View>
                                <View style={{ alignItems: "center", width: "90%",borderColor:"#cecdcf", paddingVertical: 20, marginHorizontal: 18, borderWidth: 1, marginVertical: 24, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                                    <View style={{ width: "20%" }}>
                                        <Feather name='calendar' size={16} style={{ color: "green" }} />

                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontSize: 16, fontWeight: '300' }}>Synchronize Google Calendar</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '200' }}>Enable to automatically add your activities.</Text>
                                    </View>

                                    <View>
                                        <Switch
                                            trackColor={{ false: '#cecdcf', true: 'rgb(185, 131, 82)' }}
                                            thumbColor={isEnabled5 ? 'white' : 'white'}
                                            ios_backgroundColor="#f5eded"
                                            onValueChange={toggleSwitch5}
                                            value={isEnabled5}
                                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                        />

                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: 20 }}>
                                    <Text>
                                        Property information
                                    </Text>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ paddingVertical: 10 }}>
                                            Name of establishment
                                        </Text>
                                        <TextInput style={{ borderWidth: 0.2, borderRadius: 10 }} value={formdata.name} onChangeText={(value) => setFormdata({ ...formdata, name: value })}></TextInput>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ paddingVertical: 10 }}>
                                            Phone

                                        </Text>
                                        <TextInput style={{ borderWidth: 0.2, borderRadius: 10 }} value={formdata.phone} onChangeText={(value) => setFormdata({ ...formdata, phone: value })}></TextInput>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ paddingVertical: 10 }}>
                                            Address
                                        </Text>
                                        <TextInput style={{ borderWidth: 0.2, borderRadius: 10 }} value={formdata.address} onChangeText={(value) => setFormdata({ ...formdata, address: value })}></TextInput>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ paddingVertical: 10 }}>
                                            Main email
                                        </Text>
                                        <TextInput style={{ borderWidth: 0.2, borderRadius: 10 }} value={formdata.email} onChangeText={(value) => setFormdata({ ...formdata, email: value })}></TextInput>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ paddingVertical: 10 }}>
                                            Website(optional)
                                        </Text>
                                        <TextInput style={{ borderWidth: 0.2, borderRadius: 10 }} value={formdata.website} onChangeText={(value) => setFormdata({ ...formdata, website: value })}></TextInput>
                                    </View>
                                    <Pressable style={{ flexDirection: "row", alignItems: "center", marginVertical: 20, borderRadius: 10, alignSelf: "flex-end", justifyContent: "center", backgroundColor: "rgb(185, 131, 82)", width: "60%", padding: 10 }}
                                        onPress={() => console.log(formdata)}
                                    >
                                        <Feather name='save' size={16} style={{ color: "white" }} />

                                        <Text style={{ width: "80%", fontSize: 14, fontWeight: "300", color: "white", textAlign: "center" }}>
                                            Save changes
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>

                            : (id == 2) ?
                                <View style={{ padding: 16 }}>
                                    <View style={{ flexDirection: "row", width: '100%', alignItems: "center" }}>
                                        <Text style={{ width: "40%", fontSize: 14, fontWeight: "300", }}>Tearm management </Text>
                                        <Pressable style={{ flexDirection: "row", alignItems: "center", marginVertical: 20, borderRadius: 10, alignSelf: "flex-end", justifyContent: "center", backgroundColor: "rgb(185, 131, 82)", width: "60%", padding: 10 }}
                                            onPress={() => console.log(formdata)}
                                        >
                                            <Feather name='plus' size={18} style={{ color: "white" }} />

                                            <Text style={{ width: "80%", fontSize: 14, fontWeight: "300", color: "white", textAlign: "center" }}>
                                                Create a user
                                            </Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ gap: 16, backgroundColor: "rgb(255, 254, 248)", padding: 10 }}>
                                        <Text style={{ width: "100%", fontSize: 22, fontWeight: "300", }}>Roles and permissions</Text>

                                        <View>
                                            <Text style={{ width: "100%", fontSize: 14, fontWeight: "300", color: "red" }}>Administrator: </Text>
                                            <Text style={{ width: "100%", fontSize: 14, fontWeight: "200", }}>Full access, team management</Text>

                                        </View>
                                        <View>
                                            <Text style={{ width: "100%", fontSize: 14, fontWeight: "300", color: "blue" }}>Contributor:</Text>
                                            <Text style={{ width: "100%", fontSize: 14, fontWeight: "200", }}>Can respond and edit</Text>

                                        </View>
                                        <View>
                                            <Text style={{ width: "100%", fontSize: 14, fontWeight: "300", color: "green" }}>Reader: </Text>
                                            <Text style={{ width: "100%", fontSize: 14, fontWeight: "200", }}>Consultation only</Text>

                                        </View>
                                    </View>
                                    <ScrollView
                                        horizontal={true}
                                        style={{ padding: 10, flexDirection: "row", marginVertical: 10, backgroundColor: "rgb(255, 254, 248)" }}>
                                        <View style={{ backgroundColor: 'rgb(185, 131, 82)', height: 40, width: 40, borderRadius: '50%', alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ color: "white", fontSize: 16 }}>TP</Text>
                                        </View>
                                        <View style={{ marginHorizontal: 20 }}>
                                            <Text style={{ fontWeight: 400 }}>
                                                Name
                                            </Text>
                                            <Text style={{ fontWeight: 200 }}>
                                                email.com
                                            </Text>
                                        </View>
                                        <View style={{ marginHorizontal: 20, backgroundColor: "rgb(219, 234, 254)", alignItems: "center", paddingHorizontal: 5, borderRadius: 20, height: 30, justifyContent: "center" }} >
                                            <Text style={{ color: "blue", fontWeight: "300" }}>
                                                Contributor
                                            </Text>
                                        </View>
                                        <View style={{ marginHorizontal: 20 }}>
                                            <Text style={{ fontWeight: 200 }}>
                                                Status:
                                            </Text>
                                            <Text style={{ fontWeight: 200, color: "orange" }}>
                                                20/12/26
                                            </Text>
                                        </View>
                                        <Feather name='edit' size={18} style={{ color: "black", marginHorizontal: 20 }} />
                                        <MaterialIcons name='delete' size={18} style={{ color: "red", marginHorizontal: 20 }} />


                                    </ScrollView>


                                </View> :
                                <View style={{ padding: 20. }}>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: 200 }}>
                                            Notification preferences
                                        </Text>
                                    </View>
                                    <View style={{ padding: 16, gap: 8, borderRadius: 20, backgroundColor: "rgb(255, 254, 248)", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 30 }}>
                                        <View style={{ width: "80%" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "300" }}>
                                                Email reports
                                            </Text>
                                            <Text style={{ fontSize: 14, fontWeight: "300" }}>
                                                Receive a weekly activity summyary
                                            </Text>

                                        </View>
                                        <Switch
                                            trackColor={{ false: '#cecdcf', true: 'rgb(185, 131, 82)' }}
                                            thumbColor={isEnabled ? 'white' : 'white'}
                                            ios_backgroundColor="#f5eded"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                        />


                                    </View>
                                    <View style={{ padding: 16, gap: 8, borderRadius: 20, backgroundColor: "rgb(255, 254, 248)", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 30 }}>
                                        <View style={{ width: "80%" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "300" }}>
                                                Email reports
                                            </Text>
                                            <Text style={{ fontSize: 14, fontWeight: "300" }}>
                                                Receive a weekly activity summyary
                                            </Text>

                                        </View>
                                        <Switch
                                            trackColor={{ false: '#cecdcf', true: 'rgb(185, 131, 82)' }}
                                            thumbColor={isEnabled2 ? 'white' : 'white'}
                                            ios_backgroundColor="#f5eded"
                                            onValueChange={toggleSwitch2}
                                            value={isEnabled2}
                                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                        />


                                    </View>
                                    <View style={{ padding: 16, gap: 8, borderRadius: 20, backgroundColor: "rgb(255, 254, 248)", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 30 }}>
                                        <View style={{ width: "80%" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "300" }}>
                                                Weekly digest
                                            </Text>
                                            <Text style={{ fontSize: 14, fontWeight: "300" }}>
                                                Summary of new responses and progressions
                                            </Text>

                                        </View>
                                        <Switch
                                            trackColor={{ false: '#cecdcf', true: 'rgb(185, 131, 82)' }}
                                            thumbColor={isEnabled3 ? 'white' : 'white'}
                                            ios_backgroundColor="#f5eded"
                                            onValueChange={toggleSwitch3}
                                            value={isEnabled3}
                                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                        />


                                    </View>
                                    <View style={{ padding: 16, gap: 8, borderRadius: 20, backgroundColor: "rgb(255, 254, 248)", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 30 }}>
                                        <View style={{ width: "80%" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "300" }}>
                                                Inactive residents
                                            </Text>
                                            <Text style={{ fontSize: 14, fontWeight: "300" }}>
                                                Alert if a resident has not responded for 14 days
                                            </Text>

                                        </View>
                                        <Switch
                                            trackColor={{ false: '#cecdcf', true: 'rgb(185, 131, 82)' }}
                                            thumbColor={isEnabled4 ? 'white' : 'white'}
                                            ios_backgroundColor="#f5eded"
                                            onValueChange={toggleSwitch4}
                                            value={isEnabled4}
                                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                        />


                                    </View>
                                    <View style={{ padding: 16, gap: 8, borderRadius: 20, backgroundColor: "rgb(255, 254, 248)", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 30 }}>
                                        <View style={{ width: "80%" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "300" }}>
                                                Completed books
                                            </Text>
                                            <Text style={{ fontSize: 14, fontWeight: "300" }}>
                                                Notification when a book is ready for printing
                                            </Text>

                                        </View>
                                        <Switch
                                            trackColor={{ false: '#cecdcf', true: 'rgb(185, 131, 82)' }}
                                            thumbColor={isEnabled5 ? 'white' : 'white'}
                                            ios_backgroundColor="#f5eded"
                                            onValueChange={toggleSwitch5}
                                            value={isEnabled5}
                                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                                        />


                                    </View>


                                    <Pressable style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, borderRadius: 10, alignSelf: "flex-end", justifyContent: "center", backgroundColor: "rgb(185, 131, 82)", width: "60%", padding: 10 }}
                                        onPress={() => console.log(formdata)}
                                    >
                                        <Feather name='save' size={16} style={{ color: "white" }} />

                                        <Text style={{ width: "80%", fontSize: 14, fontWeight: "300", color: "white", textAlign: "center" }}>
                                            Save changes
                                        </Text>
                                    </Pressable>
                                </View>
                    }


                </View>
                <View
                    style={{ height: 90 }}>

                </View>
            </ScrollView>

        </View>
    )
}

export default Setting