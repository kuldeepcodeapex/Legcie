import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { IconSymbol } from '@/app-example/components/ui/icon-symbol.ios';

const Frequently_asked = () => {

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
       <View>


                    <View style={{ backgroundColor: "white" }}>
                        <View style={{ borderWidth: 0.5, borderRadius: 5, marginTop: 20, flexDirection: "row", alignItems: "center", padding: 5 }}>
                            <Feather style={{}} name='search' size={32} />

                            <TextInput placeholder='Search in Questions...' style={{ padding: 5, fontSize: 20 }}></TextInput>
                        </View>
                    </View> 
                 <View style={{ paddingVertical: 20 }}>
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
                 {
                        visible ?

                            <Text style={styles.dropdown}>
                                This is where the dropdown will be rendered.
                            </Text>

                            : <TouchableOpacity
                                style={styles.button}
                                onPress={toggleDropdown}>

                                <Text style={styles.buttonText}>hii</Text>
                                {/* <IconSymbol type='font-awesome' name='00.square.fill'/> */}
                </TouchableOpacity>


                 } 
                </View>

    </View>
  )
}

export default Frequently_asked
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