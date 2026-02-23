import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Dropdown } from 'react-native-element-dropdown';
import { useAuth } from '@/Myauth/auth';
import { router } from 'expo-router';

const UpdateForm = ({ setModalVisible }: any) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const { rasidentId, getuserdata, establishmentid }: any = useAuth()

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    const itemData = [
        { label: 'Administrator', value: '1' },
        { label: 'Contributor', value: '2' },

    ];



    // console.log(establishmentid, "item")


    const [check, setCheck] = useState()

    const [formdata, setFormdata] = useState(
        {
            name: rasidentId.name,
            email: rasidentId.email,
            role: rasidentId.role,
            password: '',
            'Establishments-id': establishmentid
        }
    )
    const updatedata = async () => {
        const { error } = await supabase
            .from('User')
            .update(formdata)
            .eq('id', rasidentId.id)
            console.log(formdata)

        router.push('/Pages/user')
       
        setModalVisible(false)

    }
 console.log(rasidentId.id, "resident id")
    const generate = () => {

        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        const passwordGenerat = (Math.floor(100000 + Math.random() * 900000));

        setFormdata({ ...formdata, password: passwordGenerat.toString() })

        // console.log(passwordGenerat)

        // for(let i = 0;i<)




    }




    // console.log(check, "data")

    return (
        <View>
            <View style={{ borderBottomWidth: 1, padding: 20 }}>
                <Text>Update a user</Text>
            </View>
            <View style={{ padding: 20 }}>
                <View >
                    <Text style={{ paddingVertical: 8 }}>Name</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 10, borderColor: "rgb(240, 231, 204)", padding: 12 }} placeholder='Full name' value={formdata.name} onChangeText={(value) => setFormdata({ ...formdata, name: value })}></TextInput>
                </View>
                <View >
                    <Text style={{ paddingVertical: 8 }}>Email</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 10, borderColor: "rgb(240, 231, 204)", padding: 12 }} placeholder='email@gmail.con' value={formdata.email} onChangeText={(value) => setFormdata({ ...formdata, email: value })}></TextInput>
                </View>
                <View style={styles.container}>
                    {renderLabel()}
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
                            setFormdata({ ...formdata, role: item.label })

                        }}


                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 10 }}>
                    <TextInput style={{ borderWidth: 1, borderRadius: 10, borderColor: "rgb(240, 231, 204)", padding: 12, width: "70%" }} placeholder='Temporary Password' value={formdata.password} onChangeText={(value) => setFormdata({ ...formdata, password: value })}></TextInput>
                    <Pressable style={{ borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: "rgb(209, 213, 219)" }} onPress={() => { generate() }}>
                        <Text>
                            Generate
                        </Text>
                    </Pressable>
                </View>
                <TextInput style={{ borderWidth: 1, borderRadius: 10, backgroundColor: "rgb(239, 246, 255)", color: "rgb(100, 135, 229)", borderColor: "rgb(240, 231, 204)", paddingHorizontal: 12, marginTop: 30 }} editable={false} value='Establishment: Matt Test 2'></TextInput>

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                <Pressable style={{ borderWidth: 1, padding: 10, borderRadius: 10 }} onPress={() => setModalVisible(false)} >
                    <Text>
                        Cancel
                    </Text>
                </Pressable>
                <Pressable style={{ borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: "rgb(160, 111, 64)" }} onPress={() => updatedata()} >
                    <Text style={{ color: "white" }}>
                        Update
                    </Text>
                </Pressable>

            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
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
});

export default UpdateForm