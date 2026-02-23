import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { supabase } from '@/lib/supabase';

const Form = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
const [date,setDate] = useState()
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date)
        hideDatePicker();
    };

const [formdata, setFormdata]= useState({
    firstName:"",
    lastName:"",
    badRoom:"",
    dob:date,
    email:"",
    telephone:"",
    contectName:"",
    familyEmail:"",
    familyPhone:"",
    internalNote:""
})


 const submitdata = async () => {
        const { data, error } = await supabase.from('Residents').insert(formdata)
  
        if (error) console.log(error.message)
        if (error) console.log(error)
            console.log(formdata)

    }

const check =()=>{
    console.log(formdata)
}

    return (
        <ScrollView>
            <View style={{ backgroundColor: "rgb(255, 254, 248)", }}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, paddingVertical: 28 }}>
                   <Pressable onPress={()=>{
                    router.push("/Deshboard/Home")
                   }}>
                     <Feather name='arrow-left' size={32} />;
                   </Pressable>
                    <View>
                        <Text style={{ fontSize: 32 }}>Add a resident</Text>
                        <Text style={{ fontSize: 20 }}>Create a new profile to start a book</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, backgroundColor: "white", marginHorizontal: 20, borderWidth: 0.1, borderRadius: 10 }}>
                    <View>
                        <Text style={{ fontSize: 26 }}>
                            Personal information
                        </Text>
                        <View style={{ alignItems: "center", width: "100%", paddingVertical: 20 }}>
                            <View style={{ height: 100, width: 100, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(250, 249, 240)", borderWidth: 5, borderColor: "rgb(200, 151, 104)", borderRadius: "50%" }}>
                                <Feather name='camera' size={32} />;
                            </View>
                        </View>
                    </View>
                    <View style={{ gap: 16, paddingVertical: 20 }}>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 600 }}>First name*</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }} value={formdata.firstName} onChangeText={(value)=>setFormdata({...formdata,firstName:value})}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 600 }}>Last Name *</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.lastName} onChangeText={(value)=>setFormdata({...formdata,lastName:value})}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 600 }}>Bedroom*</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.badRoom} onChangeText={(value)=>setFormdata({...formdata,badRoom:value})}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 600 }}>Date of birth</Text>
                            <View>


                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                                <View style={{ flexDirection: "row", borderWidth: 0.8, borderColor: "rgb(233, 228, 199)", borderRadius: 10, alignItems: "center" }}>
                                    <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderRadius: 0.8, width: "90%" }}
                                        placeholder='dd/mm/yyyy'  value={formdata.badRoom} onChangeText={(value)=>setFormdata({...formdata,badRoom:value})} >
                                    </TextInput>
                                    <Feather onPress={() => {
                                        showDatePicker()
                                    }} style={{}} name='camera' size={32} />
                                </View>


                            </View>


                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 600 }}>Email (optional)</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.email} onChangeText={(value)=>setFormdata({...formdata,email:value})}></TextInput>
                        </View>
                        <View style={{ gap: 8 }}>
                            <Text style={{ fontSize: 14, fontWeight: 600 }}>Telephone (optional)</Text>
                            <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.telephone} onChangeText={(value)=>setFormdata({...formdata,telephone:value})}></TextInput>
                        </View>

                    </View>

                </View>
                <View style={{ paddingHorizontal: 30, backgroundColor: "white", marginHorizontal: 20, borderWidth: 0.1, borderRadius: 10, marginTop: 50, paddingVertical: 20, gap: 12 }}>

                    <Text style={{ paddingVertical: 18, fontSize: 24 }}>Family contact (option)</Text>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>Contect name *</Text>
                        <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.contectName} onChangeText={(value)=>setFormdata({...formdata,contectName:value})}></TextInput>
                    </View>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>Family email*</Text>
                        <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.familyEmail} onChangeText={(value)=>setFormdata({...formdata,familyEmail:value})}></TextInput>
                    </View>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>Family Phone</Text>
                        <TextInput style={{ borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}  value={formdata.familyPhone} onChangeText={(value)=>setFormdata({...formdata,familyPhone:value})}></TextInput>
                    </View>
                </View>
                <View style={{
                    paddingHorizontal: 30, backgroundColor: "white", marginHorizontal: 20, borderWidth: 0.1, borderRadius: 10,
                    marginTop: 50, paddingVertical: 20, gap: 12
                }}>

                    <Text style={{ paddingVertical: 18, fontSize: 24 }}>Internal notes (optional)</Text>
                    <View style={{ gap: 8, width: "100%", }}>
                        
                        <TextInput  multiline={true} numberOfLines={5} textAlignVertical='top' style={{ height: 200, borderColor: "rgb(233, 228, 199)", borderWidth: 0.8, borderRadius: 10 }}
                            placeholder='Add note about the resident, their perferences,or important information for the team...'  value={formdata.internalNote} onChangeText={(value)=>setFormdata({...formdata,internalNote:value})}></TextInput>
                    </View>

                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal: 20, marginBottom:60,marginTop:20}}>
                    <Pressable style={{paddingVertical:10,paddingHorizontal:18, backgroundColor:"rgb(247, 246, 241)",borderRadius:10,borderWidth:0.4 }}>
                    <Text style={{color:"black" , fontSize:18}}>Cancel</Text>
                </Pressable>

               <Pressable onPress={()=>{submitdata()}} style={{paddingVertical:10,paddingHorizontal:10, backgroundColor:"rgb(185, 131, 82)",borderRadius:10,flexDirection:"row",gap:10}}>
                  <Feather style={{}} name='camera' size={32} />
                    <Text style={{color:"white" , fontSize:18}}>Create the rasident</Text>
                </Pressable>
                </View>
            </View>

        </ScrollView>
    )
}

export default Form