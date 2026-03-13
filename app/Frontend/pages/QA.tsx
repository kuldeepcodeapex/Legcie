import { supabase } from '@/lib/supabase';
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import Header from './Header';


const QA = () => {

    const { rasidentDashboardID, fetchRasidentsQuestion, test, setTest, setRasidentDashboardID, qid, setqid, aid, setAid, setCount, pro, setpro, dataA, setdataA, dataQ, setdataQ }: any = useAuth()

    let totalper = ((dataA?.length * 100) / dataQ?.length)

    useFocusEffect(
        React.useCallback(() => {
            fetchRasidentsQuestion()

        }, [])
    );


    return (

        <ScrollView >
            <Header></Header>

            <View style={{ padding: 20, paddingVertical: 20, gap: 20, width: "100%", backgroundColor: "rgb(255, 254, 248)" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10, marginVertical: 20, width: "100%" }}>
                    <Pressable onPress={() => {
                        router.back()
                    }}>
                        <AntDesign name="arrow-left" style={{ width: 20 }} size={18} color="black" />
                    </Pressable>
                    <View style={{ width: 80, height: 80, alignItems: "center", justifyContent: "center", backgroundColor: "rgb(185, 131, 82)", borderRadius: "50%" }}>
                        <Text style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{rasidentDashboardID?.firstName[0]}</Text>
                    </View>
                    <View style={{ width: "65%", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 26 }}>{rasidentDashboardID?.firstName} {rasidentDashboardID?.lastName}</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", gap: 10 }}>

                            <View style={{ width: "30%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                                <Text style={{ fontSize: 12 }}>35A</Text>
                                <Text style={{ fontSize: 12, }}>.</Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", width: "30%" }}>

                                <View style={{ alignItems: "center", flexDirection: "row" }}>
                                    <View >
                                        <Text style={{ fontSize: 12, }}>Progression:</Text>
                                        <Text>35%</Text>
                                    </View>
                                    <Text>.</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "30%" }}>


                                <View>
                                    <Text>0/52</Text>
                                    <Text>question</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ borderWidth: 0.1, borderRadius: 10, padding: 20, gap: 20, backgroundColor: "white", }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20 }}>Book Progress</Text>
                        <Text style={{ color: "rgb(185, 131, 82)" }}>0%</Text>
                    </View>
                    <Progress.Bar progress={pro} color='rgb(185, 131, 82)' height={12} style={{ width: "100%", backgroundColor: "rgb(252, 248, 230)", borderWidth: 0.1, borderRadius: 10 }} />


                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ width: "50%", fontSize: 12 }}>Strat: 01/01/1970</Text>
                        <Pressable style={{ backgroundColor: "green", width: "50%", paddingVertical: 5, flexDirection: "row", paddingHorizontal: 10, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                            <Feather name="book-open" size={20} color="white" />

                            <Text style={{ color: "white", fontSize: 12 }}> Finalze my book</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ backgroundColor: "white", borderTopRightRadius: 10, borderTopLeftRadius: 10, borderWidth: 0.1, paddingHorizontal: 20, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", width: "100%", gap: 12, paddingVertical: 30, justifyContent: "space-between", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                        <Pressable style={{ justifyContent: "center", flexDirection: "row", gap: 5, alignItems: "center", width: "30%" }}>
                            <MaterialIcons name="notes" size={10} color="rgb(185, 131, 82)" style={{ left: 5 }} />

                            <Text style={{ fontSize: 12, width: "90%", textAlign: "center" }}>Question & Answers</Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: "row", justifyContent: "center", gap: 5, alignItems: "center", width: "30%" }}>
                            <Entypo name="calendar" size={10} color="black" style={{ left: 5 }} />

                            <Text style={{ fontSize: 12, width: "90%", textAlign: "center", }}>Family  tree</Text>
                        </Pressable>
                        <Pressable style={{ flexDirection: "row", gap: 5, alignItems: "center", width: "30%" }}>
                            <Feather name="edit" size={10} color="black" style={{ left: 2 }} />

                            <Text style={{ fontSize: 12, width: "90%" }}>Closing remarks</Text>
                        </Pressable>
                    </View>
                    <View>
                        <View style={{ backgroundColor: "white", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 10, borderWidth: 0.1 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                                    <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                                    <Text style={{ fontSize: 15 }}>All question({dataA?.length}/{dataQ?.length})</Text>
                                </View>
                                <Text style={{ color: "rgb(185, 131, 82)", fontSize: 22, fontWeight: 600 }}>{Math.round(totalper)}%</Text>
                            </View>

                            <Text style={{ fontSize: 15, paddingTop: 10 }}>Click on a question to answer or edit it Progress</Text>
                            <View style={{ paddingVertical: 16 }}>
                                <Progress.Bar progress={pro} color='rgb(185, 131, 82)' height={12} style={{ width: "100%", backgroundColor: "rgb(252, 248, 230)", borderWidth: 0.1, borderRadius: 10 }} />

                            </View>

                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", gap: 18, alignItems: "center", paddingVertical: 20 }}>
                            <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                            <View>
                                <Text style={{ fontSize: 18, paddingTop: 10 }}>Childhood & Origins</Text>
                                <Text style={{ fontSize: 16, }}>{dataA?.length}/{dataQ?.length} questions answered</Text></View>
                        </View>



                        <FlatList
                            data={dataQ}

                            renderItem={({ item }) => {


                                let Ans = dataA?.find((v: any) => v?.Q_id === item?.id)

                                const date = (new Date(Ans?.created_at).toLocaleDateString('en-GB'))


                                return (
                                    (Ans) ?
                                        <View style={{ padding: 20, borderWidth: 1.5, borderRadius: 5, backgroundColor: "rgb(240, 253, 244)", borderColor:"rgb(134, 241, 172)", marginTop: 20 }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <View style={{ paddingVertical: 4, paddingHorizontal: 12, borderRadius: 20, backgroundColor: "rgb(220, 252, 231)", }}>
                                                    <Text style={{ color: "rgb(22, 163, 74)" }}>
                                                        Q{item.q_no}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: "row" }}>
                                                    <MaterialIcons name="rotate-right" size={20} color="rgb(22, 163, 74)" style={{ paddingLeft: 5 }} />

                                                    <Text style={{ color: "rgb(22, 163, 74)" }}>
                                                        Answered
                                                    </Text>

                                                </View>

                                            </View>
                                            <View>
                                                <Text style={{ paddingVertical: 10, fontSize: 12 }}>
                                                    {item.Question}
                                                </Text>
                                                <View style={{ width: "100%", borderWidth: 1, borderRadius: 5, borderColor: "rgb(134, 239, 172)" }}>
                                                    <TextInput multiline={true} numberOfLines={5} textAlignVertical='top' readOnly={true} style={{ height: 60, width: "100%", backgroundColor: "white", borderRadius: 5,fontSize:12 }} value={Ans.Answer}>



                                                    </TextInput>
                                                    <Pressable onPress={() => {
                                                        setAid(Ans.id)
                                                        setqid(item)
                                                        setTest(Ans)
                                                        // router.push("/Deshboard/pages/EditAns")
                                                        router.push({
                                                            pathname: '/Frontend/pages/EditAns',
                                                            params: { a: Ans.Answer, interNote: Ans.interNote }
                                                        })
                                                    }}
                                                        style={{ backgroundColor: "white", borderBottomLeftRadius: 5, borderEndEndRadius: 5, flexDirection: "row", justifyContent: "space-between", padding: 10 }}
                                                    >
                                                        <Text style={{fontSize:10}}>
                                                            {date}
                                                        </Text>
                                                        <Text style={{ alignSelf: "flex-end", paddingHorizontal: 10, color: "rgb(185, 131, 82)", fontSize: 12 }}>
                                                            Click to edit
                                                        </Text>

                                                    </Pressable>
                                                </View>


                                            </View>
                                        </View>

                                        : <View style={{ padding: 20, borderWidth: 1.3, borderColor: "rgb(236, 229, 188)", borderRadius: 5, marginTop: 20 }}>
                                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <View style={{ paddingVertical: 4, paddingHorizontal: 12, borderRadius: 10, }}>
                                                    <Text>
                                                        Q {item.q_no}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <MaterialIcons name="error-outline" size={20} color={"rgb(239, 126, 67)"} style={{ paddingLeft: 5 }} />

                                                    <Text style={{ color: "rgb(239, 126, 67)" }}>
                                                        waiting
                                                    </Text>

                                                </View>

                                            </View>
                                            <View>
                                                <Text style={{ paddingVertical: 10, fontSize: 12 }}>
                                                    {item.Question}
                                                </Text>


                                                <Pressable onPress={() => {
                                                    setqid(item)
                                                    console.log(item)
                                                    router.push("/Frontend/pages/Answer")

                                                }}>
                                                    <Text style={{ alignSelf: "center", paddingHorizontal: 10, color: "rgb(185, 131, 82)", fontSize: 12 }}>
                                                        Click to reply
                                                    </Text>
                                                </Pressable>
                                            </View>
                                        </View>

                                )


                            }}
                        >

                        </FlatList>


                    </View>

                    <View style={{ paddingBottom: 10, marginBottom: 18, borderRadius: 10, padding: 16, borderWidth: 0.2, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <MaterialIcons name="rotate-right" size={20} color="rgb(31, 204, 95)" style={{ paddingLeft: 5 }} />

                            <Text style={{ fontSize: 18 }}>Summary of Progress</Text>
                        </View>
                        <View style={{ gap: 60, marginTop: 20 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 24, fontWeight: "600", color: "green" }}>{dataA?.length}</Text>
                                    <Text style={{ fontSize: 16 }}>Question Answer</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 24, fontWeight: "600", color: "red" }}>{(dataQ?.length) - (dataA?.length)}</Text>
                                    <Text style={{ fontSize: 16 }}>Remaining Questions</Text>
                                </View>


                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ alignItems: "center", left: 40 }}>
                                    <Text style={{ fontSize: 24, fontWeight: "600", color: "rgb(185, 131, 82)" }}>{Math.round(totalper)}%</Text>
                                    <Text style={{ fontSize: 16 }}>Progress</Text>
                                </View>
                                <View style={{ alignItems: "center", }}>
                                    <Text style={{ fontSize: 24, fontWeight: "600", color: "blue" }}>0</Text>
                                    <Text style={{ fontSize: 16 }}>Audio responses</Text>
                                </View>

                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ padding: 30 }}></View>
            </View>

        </ScrollView>
    )
}

export default QA