import { View, Text, Pressable, TextInput, ScrollView, Alert, StyleSheet } from 'react-native'
import { Foundation, Ionicons } from '@expo/vector-icons';
import { createClient } from '@supabase/supabase-js'
import React, { useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/Myauth/auth';
import { router } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';


const UpdateEstablishments = ({ setModal }:any) => {


    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);



    const itemData = [
        { label: 'Without subscription', value: '1' },
        { label: 'Starter - 49$', value: '2' },
        { label: 'Groth', value: '3' },
        { label: 'Pro', value: '4' },
        { label: 'Without Subscription', value: '5' },

    ];



    const {  establishmentid, }: any = useAuth()

    const [formdata, setFormdata] = useState({
        name: establishmentid.name,
        email: establishmentid.email,
        phone: establishmentid.phone,
        subscription: establishmentid.subscription,
        MR: establishmentid.MR,
        MU: establishmentid.MU,
        country: establishmentid.country,
        city: establishmentid.city,
        postcode: establishmentid.postcode,
        address: establishmentid.address
    })








    const updatedata = async () => {


        const { error } = await supabase
            .from('Establishment')
            .update(formdata)
            .eq('id', establishmentid.id)
        setModal(false)

    }






    return (
        <ScrollView >

            <View style={{borderBottomWidth:1,borderColor:"rgb(186, 134, 89)", marginBottom:20,paddingBottom:20}}>
                <Text style={{fontSize:20}}>
                    Edit establishment
                </Text>
            </View>
            <View style={{ paddingHorizontal: 12, gap: 20 }}>
                <View style={{ gap: 5 }}>
                    <Text>
                     Name of establishment *
                    </Text>
                    <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.name} onChangeText={(value) => { setFormdata({ ...formdata, name: value }) }}>

                    </TextInput>
                </View>
                <View style={{ gap: 5 }}>
                    <Text>
                        Billing email


                    </Text>
                    <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.email} onChangeText={(value) => { setFormdata({ ...formdata, email: value }) }}>

                    </TextInput>
                </View>
                <View style={{ gap: 5 }}>
                    <Text>
                        Phone

                    </Text>
                    <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.phone} onChangeText={(value) => { setFormdata({ ...formdata, phone: value }) }}>

                    </TextInput>
                </View>
              
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
                                setFormdata({ ...formdata, subscription: item.label })

                            }}


                        />
                    </View>


                    <View style={{ gap: 5 }}>
                        <Text>
                            Maximum residents

                        </Text>
                        <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.MR} onChangeText={(value) => { setFormdata({ ...formdata, MR: value }) }}>

                        </TextInput>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text>


                            Maximum users
                        </Text>
                        <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.MU} onChangeText={(value) => { setFormdata({ ...formdata, MU: value }) }}>

                        </TextInput>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text>
                            Country
                        </Text>
                        <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.country} onChangeText={(value) => { setFormdata({ ...formdata, country: value }) }}>

                        </TextInput>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text>
                            City


                        </Text>
                        <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.city} onChangeText={(value) => { setFormdata({ ...formdata, city: value }) }}>


                        </TextInput>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text>
                            Postcode


                        </Text>
                        <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.postcode} onChangeText={(value) => { setFormdata({ ...formdata, postcode: value }) }}>


                        </TextInput>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text>
                            Address

                        </Text>
                        <TextInput style={{ borderWidth: 0.3, borderRadius: 8, borderColor: "rgb(186, 134, 89)" }} value={formdata.address} onChangeText={(value) => { setFormdata({ ...formdata, address: value }) }}

                        >

                        </TextInput>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 10, paddingTop: 10 ,borderTopWidth:0.5,borderColor:"rgb(186, 134, 89)"}} >
                        <Pressable style={{ borderWidth: 1,borderColor:"rgb(214, 208, 203)", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 }}
                            onPress={() => {
                                setModal(false)
                            }}

                        >
                            <Text style={{fontSize:17,fontWeight:400,}}>
                                Cancel

                            </Text>
                        </Pressable>
                        <Pressable style={{ borderWidth: 1,borderColor:"rgb(186, 134, 89)", backgroundColor: "rgb(186, 134, 89)", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10 }}
                            onPress={() => { updatedata() }}
                        >
                            <Text style={{color:"white",fontSize:16,fontWeight:600}} >
                                Edit the establishment

                            </Text>
                        </Pressable>
                    </View>
                </View>

           
        </ScrollView >

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

export default UpdateEstablishments