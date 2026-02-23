import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

const Contect_us = () => {


    const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
    
    
    
        const itemData = [
            { label: 'Without subscription', value: '1' },
        ];
        const [visible, setVisible] = useState(false);
    
        const toggleDropdown = () => {
            setVisible(!visible);
        };

  return (
    <View>
     

                <View style={{ backgroundColor: "white" }}>
                    <Text style={{ paddingVertical: 20, fontSize: 20 }}>Send Message</Text>
                    <View>
                        <Text style={{ paddingVertical: 20, fontSize: 16 }}>Subject</Text>
                        <TextInput style={{ borderWidth: 0.5, borderRadius: 10, paddingHorizontal: 20, height: 50, fontSize: 18 }} placeholder='Briefly describe your request'></TextInput>
                    </View>
                    <View>
                        <Text style={{ paddingVertical: 20, fontSize: 16 }}>Priority</Text>
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
                                // setFormdata({ ...formdata, subscription:item.label})

                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ paddingVertical: 20, fontSize: 16 }}>Message</Text>
                        <TextInput placeholder='Describe your problem or question in detail....' multiline={true} numberOfLines={5} textAlignVertical='top' style={{ height: 200, width: "100%", borderWidth: 0.5, borderRadius: 10, fontSize: 16 }}></TextInput>
                    </View>
                    <Pressable style={{ backgroundColor: "rgb(185, 131, 82)", padding: 20, borderRadius: 10, marginVertical: 20 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: 600 }}>
                            Send the message
                        </Text>
                    </Pressable>

                    <View>
                        <Text style={{ fontSize: 20, paddingVertical: 20 }}>Other means of contact</Text>
                    </View>
                    <View style={{ gap: 32 }}>
                        <View style={{ flexDirection: "row", gap: 10, borderWidth: 1, padding: 20, backgroundColor: "rgb(255, 254, 248)", borderRadius: 10 }}>
                            <Feather style={{}} name='arrow-left' size={32} />
                            <View>
                                <Text style={{ fontSize: 28 }}>Phone</Text>
                                <Text style={{ fontSize: 18 }}>+41792172823</Text>
                                <Text style={{ fontSize: 18 }}>Mon-Fri, 9 a.m.-6 p.m</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10, borderWidth: 1, padding: 20, backgroundColor: "rgb(255, 254, 248)", borderRadius: 10 }}>
                            <Feather style={{}} name='arrow-left' size={32} />
                            <View>
                                <Text style={{ fontSize: 28 }}>Email</Text>
                                <Text style={{ fontSize: 18 }}>+41792172823</Text>
                                <Text style={{ fontSize: 18 }}>Mon-Fri, 9 a.m.-6 p.m</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10, borderWidth: 1, padding: 20, backgroundColor: "rgb(255, 254, 248)", borderRadius: 10 }}>
                            <Feather style={{}} name='arrow-left' size={32} />
                            <View>
                                <Text style={{ fontSize: 24 }}>Personalized appointment</Text>
                                <Text style={{ fontSize: 18 }}>Schedule a call with our team</Text>
                                
                                <Pressable >
                                <Text style={{ fontSize: 18 }}>Reserve a slot →</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row",gap: 10, borderWidth: 1, padding: 20, backgroundColor: "rgb(239, 246, 255)", borderRadius: 10 }}>
                            
                            <View style={{gap:14 }}>
                                <Text style={{ fontSize: 28 }}>Response time</Text>
                                <Text style={{ fontSize: 18 }}>• Email: Within 24 hours</Text>
                                <Text style={{ fontSize: 18 }}>• Telephone: Immediate (working hours)</Text>
                                <Text style={{ fontSize: 18 }}>• Appointment: Within 48 hours</Text>
                            </View>
                        </View>
                    </View>



                </View>


            
    </View>
  )
}

export default Contect_us


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 20
    },
    dropdown: {
        height: 50,
        borderColor: 'rgb(240, 231, 204)',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 20,
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
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        width: '90%',
        paddingHorizontal: 10,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown2: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },



})