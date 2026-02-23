import { View, Text, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons'
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';

const EditAns = () => {

    const { rasidentDashboardID, setRasidentDashboardID, qid, setqid, aid, setAid}: any = useAuth()

    const [imageInfo, setImageInfo] = useState(null);

    // setAid("c19742aa-bdd1-4472-9098-be4ee95148dd")


    const [formdata, setFormdata] = useState({
        Answer: aid?.Answer,
        interNote: aid?.interNote,
        img: aid?.img

    })

console.log(aid)
   



    const update = async () => {
        const { data, error } = await supabase
            .from('ResidentA')
            .update(formdata )
        .eq('id', aid?.id)
     console.log(formdata)

        
        if (error) {
            console.log(error)

        }
    }
    // console.log(aid?.id, ",,,,,,,,,,,,,,,Answerid")


    const pickImage = async (fromCamera) => {
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
                    setFormdata({ ...formdata, img: result.assets[0]?.uri });
                }
            } else {
                // Camera
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== "granted") {
                    alert("Permission required to use camera");
                    Linking.openSettings();
                    return;
                }

                let result = await ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    quality: 1,
                });

                if (!result.canceled) {
                    setImageInfo(result.assets[0]);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView style={{ padding: 20, paddingTop: 30, backgroundColor: "rgb(255, 254, 248)" }}>
            <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                <Pressable onPress={()=>{
                    router.push("/Deshboard/pages/Support")
                }}>
                    <Feather style={{}} name='arrow-left' size={32} />
                </Pressable>
                <View>
                    <Text style={{ fontSize: 16, paddingLeft: 5 }}>Week</Text>
                    <Text style={{ fontSize: 26 }}>Where and when were you born?</Text>
                </View>

            </View>
            <View >

                <View style={{ backgroundColor: "white", borderWidth: 0.1, borderRadius: 10, gap: 16, margin: 10, padding: 24 }}>
                    <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
                        <Feather style={{}} name='arrow-left' size={25} />

                        <Text style={{ fontSize: 18 }}>Animation tips for this question</Text>
                    </View>
                    <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(239, 246, 255)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                        <Entypo name="arrow-right" size={20} color="rgb(62, 118, 238)" />

                        <Text style={{ color: "rgb(62, 118, 238)", fontSize: 14, width: "80%" }}>Ask what they were playing on the street or in the yard</Text>
                    </View>
                    <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(250, 245, 255)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                        <Entypo name="arrow-right" size={20} color="rgb(106, 18, 133)" />

                        <Text style={{ color: "rgb(106, 18, 133)", fontSize: 14, width: "80%" }}>Explore the context: time, family present, atmosphere</Text>
                    </View>

                    <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(253, 242, 248)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                        <Entypo name="arrow-right" size={20} color="rgb(240, 19, 122)" />

                        <Text style={{ color: "rgb(240, 19, 122)", fontSize: 14, width: "80%" }}>Explore the context: time, family present, atmosphere</Text>
                    </View>

                    <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(255, 251, 235)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                        <Entypo name="arrow-right" size={20} color="rgb(243, 197, 11)" />

                        <Text style={{ color: "rgb(243, 195, 5)", fontSize: 14, width: "80%" }}>Note the Precise data and location for the book </Text>
                    </View>

                </View>

                <View style={{ paddingVertical: 20, backgroundColor: "white", borderRadius: 10, padding: 20, marginHorizontal: 10, paddingBottom: 50 }}>
                    <Text style={{ color: "black", fontSize: 18, fontWeight: 600, width: "80%", paddingVertical: 20 }}>Written response </Text>

                    <TextInput multiline={true} numberOfLines={5} textAlignVertical='top' style={{ borderWidth: 0.1, borderRadius: 10, paddingHorizontal: 10, height: 150 }} value={formdata.Answer} onChangeText={(value) => { setFormdata({ ...formdata, Answer: value }) }}>

                    </TextInput>


                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: 600, paddingVertical: 20 }}>AI improvement</Text>

                        <Pressable style={{ flexDirection: "row", backgroundColor: "rgb(147, 51, 234)", height: 40, marginRight: 10, width: 120, alignItems: "center", borderRadius: 10, justifyContent: "center" }}>
                            <Entypo name="arrow-right" size={20} color="white" />


                            <Text style={{ color: "white", fontSize: 12, fontWeight: 600 }}>Show options </Text>

                        </Pressable>


                    </View>
                    <Text style={{ color: "black", fontSize: 18, fontWeight: 600, paddingVertical: 20 }}>Audio response</Text>

                    <Pressable style={{ flexDirection: "row", backgroundColor: "rgb(39, 156, 10)", height: 40, marginRight: 10, width: 130, alignItems: "center", borderRadius: 10, justifyContent: "center" }}>
                        <Entypo name="mic" size={20} color="white" />


                        <Text style={{ color: "white", fontSize: 12, fontWeight: 600 }}>Speak to write </Text>

                    </Pressable>
                    <Text style={{ color: "black", fontSize: 14, fontWeight: 300, paddingTop: 10 }}>💡 Choose "Speak to Write" (real-time text) or "Save Audio" (audio backup only)

                    </Text>
                    <Text style={{ color: "black", fontSize: 24, fontWeight: 600, paddingTop: 20 }}>Internal notes (optional)
                    </Text>
                    <TextInput multiline={true} numberOfLines={5} textAlignVertical='top' style={{ borderWidth: 0.1, borderRadius: 10, paddingHorizontal: 10, height: 80, }} placeholder='Add note for the team  (not visible in the book)....' value={formdata.interNote} onChangeText={(value) => { setFormdata({ ...formdata, interNote: value }) }}>

                    </TextInput>

                    {
                        (formdata.img) ?


                      <View>
                              <Image
                    source={{uri:`${formdata?.img}`}}
                    style={{height:200,width:"100%",margin:10,borderRadius:10}}
                    >

                    </Image>

                    <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "white", borderWidth: 1, height: 40, marginRight: 10, width: 140, alignItems: "center", borderRadius: 10, justifyContent: "center" }} 
                    onPress={()=>{
                        pickImage()
                    }}>
                        <Entypo name="image" size={20} color="rgb(185, 131, 82)" />


                        <Text style={{ color: "rgb(185, 131, 82)", fontSize: 14, fontWeight: 700 }}>Edit photos </Text>

                    </Pressable> 
                      </View>
                    : <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "white", borderWidth: 1, height: 40, marginRight: 10, width: 160, alignItems: "center", borderRadius: 10, justifyContent: "center" }} 
                    onPress={()=>{
                        pickImage()
                    }}>
                        <Entypo name="image" size={20} color="rgb(185, 131, 82)" />


                        <Text style={{ color: "rgb(185, 131, 82)", fontSize: 14, fontWeight: 700 }}>uplode photos </Text>

                    </Pressable> 
                    }
                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "white", borderWidth: 0.1, height: 40, marginRight: 10, width: 140, alignItems: "center", borderRadius: 10, justifyContent: "center" }}>
                            <Entypo name="image" size={20} color="rgb(185, 131, 82)" />


                            <Text style={{ color: "rgb(185, 131, 82)", fontSize: 14, fontWeight: 600 }}>Cancel</Text>

                        </Pressable>
                        <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "rgb(185, 131, 82)", borderWidth: 1, height: 40, marginRight: 10, width: 120, alignItems: "center", borderRadius: 10, justifyContent: "center" }} onPress={() => {
                            update()

                        }}>
                            <Entypo name="image" size={20} color="white" />


                            <Text style={{ color: "white", fontSize: 14, fontWeight: 600 }}>Update</Text>

                        </Pressable>
                    </View>

                </View>

                <View style={{ height: 30 }}>

                </View>




            </View>




        </ScrollView>
    )
}

export default EditAns