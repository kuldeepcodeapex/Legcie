import { useAuth } from '@/Myauth/auth'
import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native'
import Header from './Header'

const EntertainmentWork = () => {

    const { rasidentDashboardID, fetchQ, q, setQ, fetchA, en, fetchRasidentsQuestion, test, setTest, setRasidentDashboardID, qid, setqid, aid, setAid, setCount, pro, setpro, dataA, setdataA, dataQ, setdataQ }: any = useAuth()

    const [id, setId] = useState("")


    const [chapterdata, setChapterdata] = useState()
    useEffect(() => {
        fetchRasidentsQuestion()
        fetchA()
    }, [])
const [search,setSearch]=useState()


    const chaptercheck = (str: any) => {
        if (str === "Childhood") {
            let a = dataQ.filter((v: any) => v.chapter === "Childhood&Origi")
            setQ(a)

        }
        else if (str === "Adolescence&Schooling") {
            let a = dataQ.filter((v: any) => v.chapter === "Adolescence&Schooling")
            setQ(a)
        }
        else if (str === "Adult&life&Work") {
            let a = dataQ.filter((v: any) => v.chapter === "Adult&life&Work")
            setQ(a)
        }
        else if (str === "Love&Family") {
            let a = dataQ.filter((v: any) => v.chapter === "Love&Family")
            setQ(a)
        }
        else if (str === "Society&World") {
            let a = dataQ.filter((v: any) => v.chapter === "Society&World")
            setQ(a)
        }
        else if (str === "ValuesMemories&Philosopgy") {
            let a = dataQ.filter((v: any) => v.chapter === "ValuesMemories&Philosopgy")
            setQ(a)
        }
        else {
            setQ(dataQ)
        }
    }
    return (
        <View style={{ marginBottom: 100 }}>
            <Header></Header>

            <ScrollView >
                <View style={{ backgroundColor: "rgb(255, 254, 248)", padding: 20 }}>


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
                        <Text style={{ fontSize: 36, fontWeight: 200 }}>Entertainment of the week </Text>
                        <Text style={{ fontSize: 18, fontWeight: 300, width: "100%" }}>Personalized animation guides for each life book question </Text>

                    </View>

                    <View style={{ backgroundColor: "white", borderWidth: 0.1, borderRadius: 10, padding: 16 }}>
                        <View style={{ flexDirection: "row", gap: 10, paddingTop: 20, paddingBottom: 10, alignItems: "center" }}>
                            <Ionicons name="book-outline" size={34} color="rgb(185, 131, 82)" />
                            <Text style={{ fontSize: 24, fontWeight: 300 }}>Select A chapter</Text>

                        </View>
                        <View style={{ gap: 12 }}>
                            <View style={{ borderRadius: 10,  backgroundColor: (search==1)?"rgb(185, 131, 82)":"rgb(245, 243, 230)", padding: 16, alignItems: "center", width: "80%", justifyContent: "center" }}>
                                <Pressable onPress={() => {
                                    chaptercheck("Childhood")
                                    setSearch(1)
                                }}
                                    style={{ flexDirection: "row", gap: 8, }}
                                >
                                    <Text style={{ fontSize: 16 }}>🧒</Text>
                                    <Text style={{ fontSize: 16,color:(search==1)?"white":"black" }}>Childhood & Origi</Text>
                                </Pressable>
                            </View>
                            <Pressable onPress={
                                () => {
                                    chaptercheck("Adolescence&Schooling")
                                    setSearch(2)
                                }
                            } style={{ flexDirection: "row", gap: 8, borderRadius: 10, backgroundColor: (search==2)?"rgb(185, 131, 82)":"rgb(245, 243, 230)", padding: 10, alignItems: "center", width: "90%" }}>
                                <Text style={{ fontSize: 16 }}>🎒</Text>
                                <Text style={{ fontSize: 16, width: "80%",color:(search==2)?"white":"black" }}>Adolescence & Schooling</Text>
                            </Pressable>
                            <Pressable onPress={
                                () => {
                                    chaptercheck("Adult&life&Work")
                                    setSearch(3)
                                }
                            } style={{ borderRadius: 10, flexDirection: "row", gap: 8, backgroundColor: (search==3)?"rgb(185, 131, 82))":"rgb(245, 243, 230)", padding: 10, alignItems: "center", width: "80%", }}>

                                <Text style={{ fontSize: 16 }}>🧑‍💼</Text>
                                <Text style={{ fontSize: 16, width: "80%",color:(search==3)?"white":"black" }}>Adult life & Work</Text>
                            </Pressable>
                            <Pressable onPress={() => {
                                chaptercheck("Love&Family")
                                setSearch(4)
                            }} style={{ borderRadius: 10, backgroundColor: (search==4)?"rgb(185, 131, 82)":"rgb(245, 243, 230)", padding: 10, alignItems: "center", width: "80%", flexDirection: "row", gap: 8 }}>
                                <Text style={{ fontSize: 16 }}>❤️
                                </Text>
                                <Text style={{ fontSize: 16 ,color:(search==4)?"white":"black"}}>Love & Family</Text>
                            </Pressable>
                            <Pressable onPress={() => {
                                chaptercheck("Society&World")
                                   setSearch(5)
                            }} style={{ borderRadius: 10, backgroundColor: (search==5)?"rgb(185, 131, 82)":"rgb(245, 243, 230)", padding: 10, alignItems: "center", width: "80%", flexDirection: "row", gap: 8 }}>
                                <Text style={{ fontSize: 16 }}>🌍</Text>
                                <Text style={{ fontSize: 16, width: "80%",color:(search==5)?"white":"black" }}>Society &World</Text>
                            </Pressable>
                            <Pressable onPress={() => {
                                chaptercheck("ValuesMemories&Philosopgy")
                                setSearch(6)

                            }} style={{ borderRadius: 10, backgroundColor: (search==6)?"rgb(185, 131, 82)":"rgb(245, 243, 230)", padding: 10, alignItems: "center", width: "100%", flexDirection: "row", gap: 8 }}>
                                <Text style={{ fontSize: 16 }}>🌟</Text>
                                <Text style={{ fontSize: 16, width: "80%",color:(search==6)?"white":"black" }}>Values,Memories &Philosopgy</Text>
                            </Pressable>
                        </View>
                        <View style={{ paddingVertical: 24, flexDirection: "row", gap: 8 }}>
                            <Text style={{ fontSize: 16 }}>🌟</Text>

                            <Text style={{ fontSize: 18, fontWeight: 300 }}>
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
                                            <Text style={{ fontSize: 14 }}>Question 1</Text>
                                            <Pressable onPress={() => {
                                                if (id == item.id) {
                                                    setId("")
                                                } else {
                                                    setId(item.id)
                                                }


                                            }}>
                                                {(id === Ans?.Q_id) ?

                                                    <Entypo name="chevron-down" size={34} />
                                                    : <Entypo name="chevron-right" size={34} />
                                                }
                                            </Pressable>
                                        </View>
                                        <Text style={{ fontSize: 14, }}>{item.Question}</Text>
                                        {(id === Ans?.Q_id) ?
                                            <Text style={{ fontSize: 18, }}>{Ans?.Answer}</Text>
                                            : <Text></Text>
                                        }
                                    </View>
                                )
                            }}
                        >

                        </FlatList>



                    </View>

                    <View style={{ backgroundColor: "white", borderWidth: 0.1, borderRadius: 10, gap: 16, marginVertical: 16, padding: 24 }}>

                        <Text style={{ fontSize: 24 }}>Animation guide</Text>
                        <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(239, 246, 255)", alignItems: "center", gap: 5, padding: 10 }}>
                            <Feather name="message-circle" size={34} color="rgb(62, 118, 238)" />

                            <Text style={{ color: "rgb(62, 118, 238)", width: "90%", padding: 10, fontWeight: 200, fontSize: 14 }}>Start by asking the city or town of birth</Text>
                        </View>

                        <View style={{ borderRadius: 10, width: "100%", padding: 10, flexDirection: "row", backgroundColor: "rgb(250, 245, 255)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                            <MaterialIcons name="wifi-tethering-error-rounded" size={34} color="rgb(166, 86, 238)" />

                            <Text style={{ color: "rgb(166, 86, 238)", fontSize: 14, paddingRight: 20, fontWeight: 200, width: "90%" }}>Some people don't know their exact  stay delicate</Text>
                        </View>
                        <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", backgroundColor: "rgb(253, 242, 248)", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 16 }}>
                            <Entypo name="heart-outlined" size={34} color="rgb(223, 64, 135)" />


                            <Text style={{ color: "rgb(223, 64, 135)", fontSize: 14, fontWeight: 200, width: "85%" }}>Explore the context: time, family present, atmosphere</Text>
                        </View>

                        <View style={{ borderRadius: 10, width: "100%", flexDirection: "row", padding: 10, backgroundColor: "rgb(255, 251, 235)", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 16 }}>
                            <AntDesign name="bulb" size={34} color="rgb(223, 184, 28)" />

                            <Text style={{ color: "rgb(223, 184, 28)", fontSize: 14, fontWeight: 200, width: "90%" }}>Note the Precise data and location for the book </Text>
                        </View>


                        <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 10, padding: 10, backgroundColor: "rgb(185, 131, 82)", borderRadius: 10, flexDirection: "row", gap: 10 }}>
                            <Entypo name="calendar" size={20} color="white" />

                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 300 }}>Plan the activity</Text>
                        </View>

                    </View>



                </View>
            </ScrollView>
        </View>

    )
}

export default EntertainmentWork