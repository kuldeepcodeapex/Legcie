import { View, Text, TextInput, ScrollView, Pressable, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons'
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { supabase } from '@/lib/supabase';
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import { router } from 'expo-router';



const Answer = () => {

  const [fileInfo, setFileInfo] = useState(null);
  const [imageInfo, setImageInfo] = useState(null);

    const { qid, rasidentDashboardID,setCount,count}: any = useAuth()


 

    const [formdata, setFormdata] = useState({
        Answer: "",
        interNote: "",
        img:'',
        Q_id: qid?.id,
        Residents_ID: rasidentDashboardID?.id
    })
   
    const submitdata = async () => {
        const { data, error } = await supabase.from('ResidentA').insert(formdata)

        console.log("submit Form => ",formdata);
        setCount(count+1)
        if(!error){
            
         router.push("/Deshboard/pages/QA")
                
        }
        if (error) console.log(error.message)
        if (error) console.log(error)

    }

   const pickImage = async (fromCamera:any) => {
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
          setFormdata({...formdata,img:result.assets[0].uri});
        }
      } 
    } catch (error) {
      console.log(error);
    }
  };

  // Show option to user
  const chooseOption = () => {
    Alert.alert(
      "Select Option",
      "Choose a source",
      [
        { text: "📷 Camera", onPress: () => pickImage(true) },
        { text: "🖼️ Gallery", onPress: () => pickImage(false) },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

    return (
        <ScrollView style={{ padding: 20, paddingTop: 30, backgroundColor: "rgb(255, 254, 248)" }}>
            <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                <Pressable onPress={()=>{
                    router.push("/Deshboard/pages/QA")
                }}>
                    <Feather  name='arrow-left' size={32} />
                </Pressable>
                <View>
                    <Text style={{ fontSize: 16, paddingLeft: 5 }}>Week</Text>
                    <Text style={{ fontSize: 26 }}>{qid?.Question}</Text>
                </View>

            </View>
            <View >

                <View style={{ backgroundColor: "white", borderWidth: 0.1, borderRadius: 10, gap: 16, margin: 10, padding: 24 }}>
                    <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
                        <Feather  name='arrow-left' size={25} />

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

                <View style={{ paddingVertical: 20, backgroundColor: "white", borderRadius: 10, marginHorizontal: 10, paddingBottom: 50 }}>
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

                    <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "white", borderWidth: 1, height: 40, marginRight: 10, width: 120, alignItems: "center", borderRadius: 10, justifyContent: "center" }}
                        onPress={() => {
                            pickImage()
                        }}

                    >
                        <Entypo name="image" size={20} color="rgb(185, 131, 82)" />


                        <Text style={{ color: "rgb(185, 131, 82)", fontSize: 14, fontWeight: 600 }}>Add photos </Text>

                    </Pressable>

                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "white", borderWidth: 0.1, height: 40, marginRight: 10, width: 120, alignItems: "center", borderRadius: 10, justifyContent: "center" }}
                      onPress={()=>{
                    router.push("/Deshboard/pages/QA")
                }}
                        
                        >
                            <Entypo name="image" size={20} color="rgb(185, 131, 82)" />


                            <Text style={{ color: "rgb(185, 131, 82)", fontSize: 14, fontWeight: 600 }}>Cancel</Text>

                        </Pressable>
                        <Pressable style={{ marginTop: 30, flexDirection: "row", gap: 10, backgroundColor: "rgb(185, 131, 82)", borderWidth: 1, height: 40, marginRight: 10, width: 120, alignItems: "center", borderRadius: 10, justifyContent: "center" }} onPress={() => {
                            submitdata()
                            
                        }}>
                            <Entypo name="image" size={20} color="white" />


                            <Text style={{ color: "white", fontSize: 14, fontWeight: 600 }}>Save</Text>

                        </Pressable>
                    </View>

                </View>

                <View style={{ height: 30 }}>

                </View>




            </View>




        </ScrollView>
    )
}

export default Answer