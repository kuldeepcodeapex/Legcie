import { View, Text, ScrollView, Pressable, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown';
import Frequently_asked from '@/component/Frequently_asked';
import Contect_us from '@/component/Contect_us';
import Rasidents from '@/app/Pages/Rasidents';
import Resources from '@/component/Resources';
import { WebView } from 'react-native-webview';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';


const Help = () => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [check, setCheck] = useState(1)



    const itemData = [
        { label: 'Without subscription', value: '1' },
    ];
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

const VideoList = [
    {link:<iframe width="560" height="315" src="https://www.youtube.com/embed/XbiObxjyAkE?si=-b_cqeEm8M-8xdrz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>},
    {link:<iframe width="560" height="315" src="https://www.youtube.com/embed/XbiObxjyAkE?si=-b_cqeEm8M-8xdrz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>},
    {link:<iframe width="560" height="315" src="https://www.youtube.com/embed/XbiObxjyAkE?si=-b_cqeEm8M-8xdrz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
]




    return (
        <ScrollView style={{ padding: 20, backgroundColor: "rgb(255, 254, 248)" }}>
            <View style={{ alignItems: "center", justifyContent: "center", padding: 10 }}>
                <Text style={{ fontSize: 32 }}>Help & Support</Text>
                <Text style={{ fontSize: 18, textAlign: "center" }}>Find answers to your questions or contact our team for personalized help</Text>
            </View>
            <View style={{ alignItems: "center", backgroundColor: "white", borderRadius: 10, borderWidth: 0.1, padding: 28, gap: 10, marginTop: 20 }}>
                <Feather style={{}} name='arrow-left' size={32} />
                <Text style={{ fontSize: 20 }}>Contact us</Text>

                <Text style={{ fontSize: 16 }}>Send us a message</Text>
            </View>
            <View style={{ alignItems: "center", backgroundColor: "white", borderRadius: 10, borderWidth: 0.1, padding: 28, gap: 10, marginTop: 20 }}>
                <Feather style={{}} name='arrow-left' size={32} />
                <Text style={{ fontSize: 20 }}>Book a call</Text>

                <Text style={{ fontSize: 16 }}>Schedule an appointment</Text>


            </View>
            <View style={{ alignItems: "center", backgroundColor: "white", borderRadius: 10, borderWidth: 0.1, padding: 28, gap: 10, marginTop: 20 }}>
                <Feather style={{}} name='arrow-left' size={32} />
                <Text style={{ fontSize: 20 }}>Documentation</Text>

                <Text style={{ fontSize: 16 }}>Guides and tutorials</Text>


            </View>
            <View >
                <View style={{ flexDirection: "row", width: "100%", gap: "5%", padding: 10, backgroundColor: "white", borderBottomColor: "black", borderBottomWidth: 0.5, marginTop: 20, borderTopEndRadius: 10, borderTopStartRadius: 10 ,alignItems:"center"}}>
                    <Pressable style={{ width: "30%" }}><Text style={{ textAlign: "center", borderBottomWidth:(check===1)?2:0}} onPress={() => { setCheck(1) }}>Frequently asked questions</Text></Pressable>
                    <Pressable style={{ width: "30%"}}><Text style={{ textAlign: "center",height:30 , borderBottomWidth:(check===2)?2:0 }} onPress={() => { setCheck(2) }}>Count us</Text></Pressable>
                    <Pressable style={{ width: "30%" }}><Text style={{ textAlign: "center",height:30 , borderBottomWidth:(check===3)?2:0 }} onPress={() => { setCheck(3) }}>Resources</Text></Pressable>
                </View>
                {
                    (check === 1) ?
                        <Frequently_asked></Frequently_asked>
                        : (check === 2) ?
                            <Contect_us></Contect_us>
                            : <Resources />
                }

            </View>
            <View style={{ padding: 20,marginHorizontal:10, borderRadius:10,marginTop:10}} >
                <Text style={{ fontSize: 24, paddingVertical: 20 }}>Tutorial videos</Text>
<FlatList
data={VideoList}
renderItem={({item})=>{

    return(
    <View style={{padding:10,borderWidth:0.2,borderRadius:10}}>
                    <WebView
                        source={{ html: `${item.link}`}}
                        style={{ height: 200, width: "170%" }}
                    />
                    <View style={{ gap: 10 }}>
                        <Text style={{marginTop:10}} >First step</Text>
                        <Text >Initial configuration</Text>
                        <Text >▶️ 5:30</Text>

                    </View>
                </View>)

}}
>

</FlatList>

            
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ paddingVertical: 20 }}>Project</Text>
            </View>

        </ScrollView>
    )
}

export default Help