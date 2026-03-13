import { View, Text, TextInput, Button, Pressable, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { router } from 'expo-router';
import { supabase } from '@/lib/supabase';
import * as ImagePicker from "expo-image-picker";
import { Image } from 'expo-image';

import Header from './Header';


const Form = () => {

    const [formdata, setFormdata] = useState({
        img: "",
        firstName: "",
        lastName: "",
        badRoom: "",
        DateAddad: "",
        email: "",
        telephone: "",
        contectName: "",
        familyEmail: "",
        familyPhone: "",
        internalNote: ""
    })




    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const pickImage = async (fromCamera: any) => {
        try {
            if (!fromCamera) {
                // Gallery
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Permission required to access photos");
                    return;
                }

                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    quality: 1,
                });

                if (!result.canceled) {
                    console.log( result.assets[0].uri)
                    setFormdata({ ...formdata, img: result.assets[0].uri });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };



    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const [date, setDate] = useState()
    const handleConfirm = (date: any) => {
        console.log(typeof (date))
        console.log("A date has been picked: ", date);

        console.log(typeof (date))
        let check = date.toLocaleDateString();

        console.log(typeof check)

        setFormdata({ ...formdata, DateAddad: check })

        // setFormdata({ ...formdata, dob: date })
        setDate(date)
        hideDatePicker();
    };

    // console.log(date)




    const check = () => {

        console.log(formdata)
    }
    const submitdata = async () => {
        const { data, error } = await supabase.from('Resident').insert(formdata)
        if (!error) {
            console.log(formdata)
        }
        if (error) console.log(error.message)
        if (error) console.log(error)


    }





    return (
        <ScrollView>
            <Header></Header>
            <View style={{ backgroundColor: "rgb(255, 254, 248)", }}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, paddingVertical: 28 }}>
                    <Pressable onPress={() => {
                        router.back()
                    }}>
                        <Feather name='arrow-left' size={22} />
                    </Pressable>
                    <View style={{width:"80%"}}>
                        <Text style={{ fontSize: 22, fontWeight:"300" }}>Add a resident</Text>
                        <Text style={{ fontSize: 16 , fontWeight:"200"}}>Create a new profile to start a book</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, backgroundColor: "white", marginHorizontal: 20, borderWidth: 0.1, borderRadius: 10,paddingVertical:40 }}>
                    <View>
                        <Text style={{ fontSize: 20,fontWeight:'200' }}>
                            Personal information
                        </Text>
                        <View style={{ alignItems: "center", width: "100%", paddingVertical: 20 }}>
                            <View style={{ height: 100, width: 100, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(250, 249, 240)", borderWidth: 5, borderColor: "rgb(200, 151, 104)", borderRadius: "50%" }}>

                               {
                                (formdata.img)?
                                <Image
                                    source={{ uri: `${formdata.img}` }}
                                    style={{  width: 100, borderRadius: 50,height:100}}
                                >

                                </Image>

                                :<Pressable onPress={() => {
                                    pickImage()
                                }}
                                style={{alignItems:"center"}}
                                >
                                    <Feather name='camera' size={32} />
                                    <Text style={{fontSize:12}}> Add photo</Text>
                                </Pressable>

                               } 


                            </View>
                        </View>
                    </View>
                    <View style={{ gap: 16, paddingVertical: 20 }}>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 200 }}>First name*</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.firstName} onChangeText={(value) => setFormdata({ ...formdata, firstName: value })}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 200 }}>Last Name *</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.lastName} onChangeText={(value) => setFormdata({ ...formdata, lastName: value })}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 200 }}>Bedroom*</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.badRoom} onChangeText={(value) => setFormdata({ ...formdata, badRoom: value })}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 200 }}>Date of birth</Text>
                            <View>

                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                                <View style={{ flexDirection: "row", borderWidth: 0.8, borderColor: "rgb(233, 228, 199)", borderRadius: 10, alignItems: "center" }}>
                                    <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderRadius: 0.8, width: "90%" }}
                                        placeholder='dd/mm/yyyy' value={formdata.DateAddad} onChangeText={(value) => setFormdata({ ...formdata, DateAddad: value })} >
                                    </TextInput>
                                    <Feather onPress={() => {
                                        showDatePicker()
                                    }} style={{cursor: 'pointer'}} name='calendar' size={32} color={"rgb(107, 101, 89)"} />
                                </View>


                            </View>


                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 200 }}>Email (optional)</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.email} onChangeText={(value) => setFormdata({ ...formdata, email: value })}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 200 }}>Telephone (optional)</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.telephone} onChangeText={(value) => setFormdata({ ...formdata, telephone: value })}></TextInput>
                        </View>

                    </View>

                </View>
                <View style={{ paddingHorizontal: 30, backgroundColor: "white", marginHorizontal: 20, borderWidth: 0.1, borderRadius: 10, marginTop: 50, paddingVertical: 20, gap: 12 }}>

                    <Text style={{ paddingVertical: 18, fontSize: 24, fontWeight:"300" }}>Family contact (option)</Text>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: 200 }}>Contect name *</Text>
                        <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.contectName} onChangeText={(value) => setFormdata({ ...formdata, contectName: value })}></TextInput>
                    </View>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: 200 }}>Family email*</Text>
                        <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.familyEmail} onChangeText={(value) => setFormdata({ ...formdata, familyEmail: value })}></TextInput>
                    </View>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: 200 }}>Family Phone</Text>
                        <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.familyPhone} onChangeText={(value) => setFormdata({ ...formdata, familyPhone: value })}></TextInput>
                    </View>
                </View>
                <View style={{
                    paddingHorizontal: 30, backgroundColor: "white", marginHorizontal: 20, borderWidth: 0.1, borderRadius: 10,
                    marginTop: 50, paddingVertical: 20, gap: 12
                }}>

                    <Text style={{ paddingVertical: 18, fontSize: 24,fontWeight:200 }}>Internal notes (optional)</Text>
                    <View style={{ gap: 8, width: "100%", }}>

                        <TextInput multiline={true} numberOfLines={5} textAlignVertical='top' style={{ height: 200, borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}
                            placeholder='Add note about the resident, their perferences,or important information for the team...' value={formdata.internalNote} onChangeText={(value) => setFormdata({ ...formdata, internalNote: value })}></TextInput>
                    </View>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginBottom: 60, marginTop: 20,width:'90%' }}>
                    <Pressable style={{ paddingVertical: 10, paddingHorizontal: 18, backgroundColor: "rgb(247, 246, 241)", borderRadius: 10, borderWidth: 0.4,width:'30%' }} onPress={() =>

                        // { router.push("/Frontend/Deshboard/Home") }}
                        check()}
                    >
                        <Text style={{ color: "black", fontSize: 16 }}>Cancel</Text>
                    </Pressable>

                    <Pressable onPress={() => { submitdata() }} style={{ paddingVertical: 10, paddingHorizontal:5, backgroundColor: "rgb(185, 131, 82)", borderRadius: 10, flexDirection: "row", gap: 10,width:"60%" }}>
                        <Feather style={{}} name='check' size={32} />
                        <Text style={{ color: "white", fontSize: 16 }}>Create the rasident</Text>
                    </Pressable>
                </View>
            </View>

        </ScrollView>
    )
}

export default Form