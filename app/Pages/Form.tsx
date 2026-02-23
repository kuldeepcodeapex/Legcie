import { View, Text, Pressable, TextInput, ScrollView, Alert, StyleSheet } from 'react-native'
import { Foundation, Ionicons } from '@expo/vector-icons';
import { createClient } from '@supabase/supabase-js'
import React, { useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/Myauth/auth';
import { router } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';


const Form = ({setModalVisible}:any) => {


     const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
    
    
    
        const itemData = [
            { label: 'Without subscription', value: '1' },
            { label: 'Starter - 49$', value: '2' },
            { label: 'Groth', value: '3' },
            { label: 'Pro', value: '4' },
            { label: 'Without Subscription', value: '5' },
    
        ];
    
    
  
    
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
        subscription: "",
        MR: "",
        MU: "",
        country: "",
        city: "",
        postcode: "",
        address: ""
    })
    const submitdata = async () => {
        const { data, error } = await supabase.from('Establishment').insert(formdata)
     setModalVisible(false)
        if (error) console.log(error.message)
        if (error) console.log(error)

    }

const { setdata } : any = useAuth()




    // const fetchdata = async () => {
    //     const { data, error } = await supabase
    //         .from('Establishment')
    //         .select('*');
    //     setdata(data)
    //     console.log(data)


    // }

 

    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View >
                <View style={{ paddingVertical: 20, borderBottomWidth: 1, paddingLeft: 10 }}>
                    <Text>
                        New Establishment
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 12 }}>
                    <Text>
                        Name


                    </Text>
                    <TextInput  style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.name} onChangeText={(value) => { setFormdata({...formdata,name:value}) }}>

                    </TextInput>
                    <Text>
                        Billing email


                    </Text>
                    <TextInput  style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.email} onChangeText={(value) => {  setFormdata({...formdata,email:value}) }}>

                    </TextInput>
                    <Text>
                        Phone

                    </Text>
                    <TextInput  style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.phone} onChangeText={(value) => {  setFormdata({...formdata,phone:value})}}>

                    </TextInput>
                      <Text>
                        Subscription plan


                    </Text>

                    <View style={styles.container}>

                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={itemData}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                setFormdata({ ...formdata, subscription:item.label})

                            }}


                        />
                    </View>
                    <Text>
                        Maximum residents

                    </Text>
                    <TextInput  style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.MR} onChangeText={(value) => {  setFormdata({...formdata,MR:value}) }}>

                    </TextInput>
                    <Text>


                        Maximum users
                    </Text>
                    <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.MU} onChangeText={(value) => {  setFormdata({...formdata,MU:value}) }}>

                    </TextInput>
                    <Text>
                        Country
                    </Text>
                    <TextInput  style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.country} onChangeText={(value) => {  setFormdata({...formdata,country:value}) }}>

                    </TextInput>
                    <Text>
                        City


                    </Text>
                    <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.city} onChangeText={(value) => {  setFormdata({...formdata,city:value}) }}>


                    </TextInput>
                    <Text>
                        Postcode


                    </Text>
                    <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.postcode} onChangeText={(value) => {  setFormdata({...formdata,postcode:value}) }}>


                    </TextInput>
                    <Text>
                        Address

                    </Text>
                    <TextInput  style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.address} onChangeText={(value) => { setFormdata({...formdata,address:value}) }}

                    >

                    </TextInput>
                    <View style={{ paddingTop:20,gap:60, flexDirection: "row", justifyContent: "space-between", marginBottom: 80 }} >
                        <Pressable style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 8 }}
                            onPress={() => {setModalVisible(false)}}

                        >
                            <Text >
                                Cancle

                            </Text>
                        </Pressable>
                        <Pressable style={{ borderWidth: 1, backgroundColor: "rgb(186, 134, 89)", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10 }}
                            onPress={() => { submitdata() }}

                        >
                            <Text style={{color:"white",fontSize:16,fontWeight:600}}>
                                Create the establishment

                            </Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 20
    },
    dropdown: {
        height: 40,
        borderColor: 'rgb(240, 231, 204)',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 6,
    },
    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },



})

export default Form