import { useAuth } from '@/Myauth/auth'
import { Entypo, Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native'

const EntertainmentWork = () => {

    const { rasidentDashboardID, fetchQ,q, setQ, fetchA,en, fetchRasidentsQuestion, test, setTest, setRasidentDashboardID, qid, setqid, aid, setAid, setCount, pro, setpro, dataA, setdataA, dataQ, setdataQ }: any = useAuth()

    const [id, setId] = useState()
 

    const [chapterdata, setChapterdata] = useState()
    useEffect(() => {
       fetchRasidentsQuestion()
        fetchA()
    } ,[] )
       
         
    
    const chaptercheck = (str:any) => {
        if (str === "Childhood") {
            let a = dataQ.filter((v:any) => v.chapter === "Childhood&Origi")
            setQ(a)
         
        }
        else if (str === "Adolescence&Schooling") {
            let a = dataQ.filter((v:any) => v.chapter === "Adolescence&Schooling")
            setQ(a)
        }
        else if (str === "Adult&life&Work") {
            let a = dataQ.filter((v:any) => v.chapter === "Adult&life&Work")
            setQ(a)
        }
        else if (str === "Love&Family") {
            let a = dataQ.filter((v:any) => v.chapter === "Love&Family")
            setQ(a)
        }
        else if (str === "Society&World") {
            let a = dataQ.filter((v:any) => v.chapter === "Society&World")
            setQ(a)
        }
        else if (str === "ValuesMemories&Philosopgy") {
            let a = dataQ.filter((v:any) => v.chapter === "ValuesMemories&Philosopgy")
            setQ(a)
        }
        else{
        setQ(dataQ)
        }
    }
    return (
        <ScrollView style={{ backgroundColor: "rgb(255, 254, 248)", padding: 20 }}>
            <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                <Pressable
                    onPress={() => {
                        router.back()
                    }}>
                    <Feather style={{}} name='arrow-left' size={32} />
                </Pressable>
                <Text style={{ fontSize: 16, paddingVertical: 12 }}>Return to the dashboard </Text>
            </View>
            <View style={{ gap: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 24 }}>EntertainmentWork of the week </Text>
                <Text style={{ fontSize: 16, width: "100%" }}>Personalized animation guides for each life book question </Text>

            </View>

            <View style={{ backgroundColor: "white", borderWidth: 0.1, borderRadius: 10, margin: 10, padding: 16 }}>
                <View style={{ flexDirection: "row", gap: 10, paddingTop: 20, paddingBottom: 10, alignItems: "center" }}>
                    <Entypo name="book" size={34} color="rgb(185, 131, 82)" />
                    <Text style={{ fontSize: 24 }}>Select A chapter</Text>

                </View>
                <View style={{ gap: 12 }}>
                    <View style={{ borderRadius: 10, backgroundColor: "rgb(238, 235, 218)", padding: 10, alignItems: "center", width: "80%", justifyContent: "center" }}>
                        <Pressable onPress={() => {
                            chaptercheck("Childhood")
                            // setChapterdata()
                        }}>
                            <Text style={{ fontSize: 20 }}>Childhood & Origi</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={
                        ()=>{
                            chaptercheck("Adolescence&Schooling")
                        }
                    } style={{ borderRadius: 10, backgroundColor: "rgb(238, 235, 218)", padding: 10, alignItems: "center", width: "90%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Adolescence & Schooling</Text>
                    </Pressable>
                    <Pressable onPress={
                        ()=>{
                            chaptercheck("Adult&life&Work")
                        }
                    } style={{ borderRadius: 10, backgroundColor: "rgb(238, 235, 218)", padding: 10, alignItems: "center", width: "60%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Adult life & Work</Text>
                    </Pressable>
                    <Pressable onPress={()=>{
                        chaptercheck("Love&Family")
                    }} style={{ borderRadius: 10, backgroundColor: "rgb(238, 235, 218)", padding: 10, alignItems: "center", width: "50%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Love & Family</Text>
                    </Pressable>
                    <Pressable onPress={()=>{
                        chaptercheck("Society&World")
                    }} style={{ borderRadius: 10, backgroundColor: "rgb(238, 235, 218)", padding: 10, alignItems: "center", width: "60%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Society &World</Text>
                    </Pressable>
                    <Pressable onPress={()=>{
                        chaptercheck("ValuesMemories&Philosopgy")
                    }} style={{ borderRadius: 10, backgroundColor: "rgb(238, 235, 218)", padding: 10, alignItems: "center", width: "100%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Values,Memories &Philosopgy</Text>
                    </Pressable>
                </View>
                <View style={{ paddingVertical: 24 }}>
                    <Text style={{ fontSize: 20 }}>
                        Question _Childhood & Origins
                    </Text>
                </View>


                <FlatList
                    data={q}
                    renderItem={({ item }) => {
                        let Ans = en?.find((v: any) => v?.Q_id === item?.id)
                        return (
                            <View style={{ borderWidth: 2, paddingHorizontal: 20, paddingVertical: 20, borderColor: "rgb(238, 235, 218)", borderRadius: 10, marginTop: 20 }}>
                                <View style={{ borderRadius: 10, width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: 18 }}>Question 1</Text>
                                    <Pressable onPress={() => {
                                        if (id == item.id) {
                                            setId("")
                                        } else {
                                            setId(item.id)
                                        }


                                    }}>
                                        <Entypo name="arrow-right" size={34} color="rgb(185, 131, 82)" />
                                    </Pressable>
                                </View>
                                <Text style={{ fontSize: 18, color: "red" }}>{item.Question}</Text>
                                {(id === Ans?.Q_id) ?
                                    <Text style={{ fontSize: 18, color: "green" }}>{Ans?.Answer}</Text>
                                    : <Text></Text>
                                }
                            </View>
                        )
                    }}
                >

                </FlatList>



            </View>

            <View style={{ backgroundColor: "white", borderWidth: 0.1, borderRadius: 10, gap: 16, margin: 10, padding: 24 }}>

                <Text style={{ fontSize: 24 }}>Animation guide</Text>
                <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(239, 246, 255)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                    <Entypo name="arrow-right" size={34} color="rgb(62, 118, 238)" />

                    <Text style={{ color: "rgb(62, 118, 238)", fontSize: 14 }}>Start by asking the city or town of birth</Text>
                </View>
                <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(184, 118, 214)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                    <Entypo name="arrow-right" size={34} color="rgb(106, 18, 133)" />

                    <Text style={{ color: "rgb(106, 18, 133)", fontSize: 14 }}>Explore the context: time, family present, atmosphere</Text>
                </View>
                <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(239, 246, 255)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                    <Entypo name="arrow-right" size={34} color="rgb(238, 97, 62)" />

                    <Text style={{ color: "rgb(238, 88, 62)", fontSize: 14, paddingRight: 20 }}>Some people don't know their exact  stay delicate</Text>
                </View>
                <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(239, 246, 255)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                    <Entypo name="arrow-right" size={34} color="rgb(238, 127, 62)" />

                    <Text style={{ color: "rgb(240, 137, 19)", fontSize: 14 }}>Explore the context: time, family present, atmosphere</Text>
                </View>

                <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(255, 251, 235)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                    <Entypo name="arrow-right" size={34} color="rgb(223, 184, 28)" />

                    <Text style={{ color: "rgb(223, 184, 28)", fontSize: 14 }}>Note the Precise data and location for the book </Text>
                </View>


                <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 10, padding: 10, backgroundColor: "rgb(185, 131, 82)", borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>Continuer mon liver</Text>
                </View>

            </View>




        </ScrollView>
    )
}

export default EntertainmentWork