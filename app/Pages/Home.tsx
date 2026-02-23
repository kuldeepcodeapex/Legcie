import { View, Text, Pressable, TextInput, FlatList, StyleSheet, Modal, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Drawer } from 'expo-router/drawer';
import { FontAwesome, Foundation } from '@expo/vector-icons';
// import { DropDownSelect } from 'react-native-simple-dropdown-select';
import SelectDropdown from 'react-native-select-dropdown'
import DropDownPicker from 'react-native-dropdown-picker';
import { router } from 'expo-router';
import { useAuth } from '@/Myauth/auth';
import Establishments from '@/app/Pages/Establishments';
import { supabase } from '@/lib/supabase';
import { Dropdown } from 'react-native-element-dropdown';
import Form from './Form';



const Home = () => {

    const [count, setcount] = useState()
  

const {  establishmentid, setEstablishmentid,setdata, data,signOut}: any = useAuth()

    const [modalVisible, setModalVisible] = useState(false);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);




    const itemData = [
        { label: 'All plans', value: '1' },
        { label: 'Starter-49$', value: '2' },
        { label: 'Groth-149$', value: '3' },
        { label: 'Pro-399$', value: '4' },
        { label: 'Without Subscription', value: '5' },

    ];


    const fetchdata = async () => {
        const { data, error } = await supabase
            .from('Establishment')
            .select('*');
        setdata(data)
        setcount(data?.length)


    }
    // console.log(data)

    const  Check =()=>{

    } 
    useEffect(() => {
        fetchdata()
        Check()
    }, [count])


// console.log("knkldcnkld==========================================",data)

    return (
        <View>
            
        <View style={{ backgroundColor: "rgb(245, 241, 228)", height: "100%",  paddingBottom: 50, paddingHorizontal: 20 }}>
            <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
                <Text style={{ fontSize: 24 ,fontWeight:600}}>Management of Establishments</Text>
                <Text>{count} establishments in total</Text>
                <Pressable onPress={()=>{signOut()}}>
                    <Text>Logout</Text>
                </Pressable>
                <Pressable style={{ flexDirection: "row", gap: 10, backgroundColor: "rgb(186, 134, 89)", alignItems: "center", width: "100%", justifyContent: "center", paddingVertical: 12, borderRadius: 16 }}
                    onPress={() => {
                        setModalVisible(true)

  

                    }}
                >
                    <Foundation name="plus" size={20} color="white" />

                    <Text style={{ color: "white" }}>New establishment</Text>

                </Pressable>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                        
                    }}>
                       
                    <View style={styles.centeredView}>
                        <Form setModalVisible={setModalVisible} />
                    </View>
                </Modal>
            </View>
            <View >


            </View>


            <View style={{ backgroundColor: "white", marginVertical: 20, borderRadius: 10 ,gap:20}}>
                <View style={{ borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center", paddingHorizontal: 10,margin:10 }}>
                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput placeholder='Search for an establishments....'>

                    </TextInput>

                </View>
                
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
                            // setFormdata({ ...formdata, role: item.label })
                            
                        }}


                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 10, paddingVertical: 12 }}>
                    <FontAwesome name="filter" size={24} color="black" />
                    <Text>
                        0 Result
                    </Text>

                </View>


            </View>
            <FlatList
            
                contentContainerStyle={{ gap: 20 }}
                data={data}
                renderItem={({ item }) => <Establishments item={item} />}
                
            >

            </FlatList>


        </View>
        </View>
        
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        borderRadius: 20
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
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


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

})



export default Home