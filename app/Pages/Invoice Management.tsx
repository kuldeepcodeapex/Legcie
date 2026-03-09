import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown';


const Invoice_Management = () => {




    const [modalVisible, setModalVisible] = useState(false);

    const [value, setValue] = useState();
    const [isFocus, setIsFocus] = useState(false);
    const [value2, setValue2] = useState();
    const [isFocus2, setIsFocus2] = useState(false);
    const [isChecked, setChecked] = useState(false)

    // console.log(checkPlan?.label)


    const itemData = [
        { label: 'All plasn', value: '1' },
        { label: 'Growth', value: '2' },
        { label: 'Starter', value: '3' },
        { label: 'Pro', value: '4' },
        { label: 'Without Subscription', value: '5' },
    ];
    const itemData2 = [
        { label: 'All plasn', value: '1' },
        { label: 'Growth', value: '2' },
        { label: 'Starter', value: '3' },
        { label: 'Pro', value: '4' },
        { label: 'Without Subscription', value: '5' },
    ];

    return (
        <View style={{ padding: 20, gap: 20,backgroundColor:"rgb(255, 254, 248)"}}>
            <View style={{ alignItems: "center", gap: 10 }}>
                <Text style={{ fontSize: 25 }}>Invoice Management</Text>
                <Text style={{ fontSize: 18 }}>9 invoices in total</Text>
                <Pressable style={{ backgroundColor: "rgb(185, 131, 82)", width: "100%", borderRadius: 10, padding: 8 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
                        <FontAwesome name="upload" size={24} color="white" />

                        <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>Upload an invoice</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{gap:20 ,backgroundColor:"white",borderWidth:0.1, borderRadius:10, padding:20}} >

                <View style={{ alignItems: "center", flexDirection: "row", borderRadius: 10, borderWidth: 0.1, paddingHorizontal: 10, }}>
                    <FontAwesome name="search" size={24} color="black" />

                    <TextInput placeholder='Search for an invoice....' style={{ fontSize: 18 }}>

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
                            setValue(item);
                            // setCheckPlan(item)
                            setIsFocus(false);
                            // setFormdata({ ...formdata, role: item.label })

                        }}


                    />
                </View>
                <View style={styles.container2}>

                    <Dropdown
                        style={[styles.dropdown2, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle2}
                        selectedTextStyle={styles.selectedTextStyle2}
                        inputSearchStyle={styles.inputSearchStyle2}
                        iconStyle={styles.iconStyle2}
                        data={itemData2}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus2 ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value2}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}
                        onChange={item => {
                            setValue2(item);
                            // setCheckPlan(item)
                            setIsFocus2(false);
                            // setFormdata({ ...formdata, role: item.label })

                        }}


                    />
                </View>
               <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center",gap:10}}>
                    <FontAwesome name="filter" size={20} color="black" />
                <Text style={{ fontSize: 16 }}>9 results</Text>
                
                </View> 
            </View>




        </View>
    )
}

export default Invoice_Management
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
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
    container2: {
        // flex: 1,
        backgroundColor: 'white',
        // paddingVertical: 10,
        borderRadius: 20,
        // paddingTop:30

    },
    dropdown2: {
        height: 40,
        borderColor: 'rgb(240, 231, 204)',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 6,
    },
    icon2: {
        marginRight: 5,
    },

    placeholderStyle2: {
        fontSize: 16,
    },
    selectedTextStyle2: {
        fontSize: 16,
    },
    iconStyle2: {
        width: 20,
        height: 20,
    },
    inputSearchStyle2: {
        height: 40,
        fontSize: 16,
    },



})