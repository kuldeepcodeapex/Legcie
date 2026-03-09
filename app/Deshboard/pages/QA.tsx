import { supabase } from '@/lib/supabase';
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Progress from 'react-native-progress';


const QA = () => {

    const { rasidentDashboardID, fetchRasidentsQuestion, test, setTest, setRasidentDashboardID, qid, setqid, aid, setAid, setCount, pro, setpro, dataA, setdataA, dataQ, setdataQ }: any = useAuth()

    let totalper = ((dataA?.length * 100) / dataQ?.length)

 useFocusEffect(
    React.useCallback(() => {
         fetchRasidentsQuestion()
    console.log(totalper,"jsbnjkwbdnsjkwsbdnjk")
    }, [pro]) 
  );


    return (
        <ScrollView style={{ padding: 20, paddingVertical: 20, gap: 20, backgroundColor: "rgb(255, 254, 248)", paddingBottom: 200 }}
        >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 20 }}>
                <Pressable onPress={() => {
                    router.push("/Deshboard/pages/Support")
                }}>
                    <Entypo name="arrow-left" size={34} color="black" />
                </Pressable>
                <View style={{ height: 100, width: 100, alignItems: "center", justifyContent: "center", backgroundColor: "rgb(185, 131, 82)", borderRadius: "50%" }}>
                    <Text style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{rasidentDashboardID?.firstName[0]}</Text>
                </View>
                <View>
                    <View>
                        <Text style={{ fontSize: 20 }}>{rasidentDashboardID?.firstName} {rasidentDashboardID?.lastName}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 10 }}>

                        <View>

                            <Text>35</Text>
                            <Text>HOURS</Text>
                        </View>

                        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>
                            <Text>.</Text>
                            <View>
                                <Text>35</Text>
                                <Text>HOURS</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", }}>
                            <Text>.</Text>

                            <View>
                                <Text>35</Text>
                                <Text>HOURS</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ borderWidth: 0.1, borderRadius: 10, padding: 20, gap: 20, backgroundColor: "white", }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20 }}>Book Progress</Text>
                    <Text>0%</Text>
                </View>
                <Progress.Bar progress={pro} width={330} color='rgb(185, 131, 82)' height={12} style={{ backgroundColor: "rgb(252, 248, 230)", borderWidth: 0.5, borderRadius: 10 }} />


                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Strat: 01/01/1970</Text>
                    <Pressable style={{ backgroundColor: "green", flexDirection: "row", paddingHorizontal: 10, borderRadius: 10, alignItems: "center" }}>
                        <Entypo name="arrow-left" size={34} color="white" style={{ paddingLeft: 5 }} />

                        <Text style={{ color: "white" }}> Finalze my book</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ backgroundColor: "white", borderTopRightRadius: 10, borderTopLeftRadius: 10, borderWidth: 0.1, paddingHorizontal: 20, borderRadius: 10 }}>
                <View style={{ flexDirection: "row", width: "100%", gap: 12, paddingVertical: 30, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    <Pressable style={{ flexDirection: "row", gap: 10, alignItems: "center", width: "30%" }}>
                        <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                        <Text style={{ fontSize: 16 }}>Question & Answers</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: "row", gap: 10, alignItems: "center", width: "30%" }}>
                        <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                        <Text style={{ fontSize: 16 }}>Family  tree</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: "row", gap: 10, alignItems: "center", width: "30%" }}>
                        <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                        <Text style={{ fontSize: 16 }}>Closing remarks</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={{ backgroundColor: "white", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 10, borderWidth: 0.1 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                                <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                                <Text style={{ fontSize: 20 }}>All question({dataA?.length}/{dataQ?.length})</Text>
                            </View>
                            <Text style={{ color: "rgb(185, 131, 82)", fontSize: 32, fontWeight: 600 }}>{Math.round(totalper)}%</Text>
                        </View>

                        <Text style={{ fontSize: 16, paddingTop: 10 }}>Click on a question to answer or edit it Progress</Text>
                        <View style={{ paddingVertical: 16 }}>
                            <Progress.Bar progress={pro} width={300} color='rgb(185, 131, 82)' height={12} style={{ backgroundColor: "rgb(252, 248, 230)", borderWidth: 0.5, borderRadius: 10 }} />

                        </View>

                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", gap: 18, alignItems: "center", paddingVertical: 20 }}>
                        <Entypo name="arrow-left" size={20} color="black" style={{ paddingLeft: 5 }} />

                        <View>
                            <Text style={{ fontSize: 20, paddingTop: 10 }}>Childhood & Origins</Text>
                            <Text style={{ fontSize: 16, }}>{dataA?.length}/{dataQ?.length} questions answered</Text></View>
                    </View>



                    <FlatList
                        data={dataQ}

                        renderItem={({ item }) => {


                            let Ans = dataA?.find((v: any) => v?.Q_id === item?.id)



                            return (
                                (Ans) ?
                                    <View style={{ padding: 20, borderWidth: 1, borderRadius: 5, backgroundColor: "rgb(240, 253, 244)", marginTop: 20 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ paddingVertical: 4, paddingHorizontal: 12, borderRadius: 10, backgroundColor: "rgb(220, 252, 231)", }}>
                                                <Text style={{ color: "rgb(59, 245, 127)" }}>
                                                    Q{item.Q_no}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Entypo name="arrow-left" size={20} color="rgb(59, 245, 127)" style={{ paddingLeft: 5 }} />

                                                <Text style={{ color: "rgb(59, 245, 127)" }}>
                                                    Answered
                                                </Text>

                                            </View>

                                        </View>
                                        <View>
                                            <Text style={{ paddingVertical: 10 }}>
                                                {item.Question}
                                            </Text>
                                            <View style={{ paddingVertical: 10, width: "100%", borderWidth: 1, borderRadius: 10, borderColor: "rgb(134, 239, 172)" }}>
                                                <TextInput multiline={true} numberOfLines={5} textAlignVertical='top' readOnly={true} style={{ height: 60, width: "100%" }} value={Ans.Answer}>



                                                </TextInput>
                                                <Pressable onPress={() => {
                                                    setAid(Ans.id)
                                                    setqid(item)
                                                    setTest(Ans)
                                                    // router.push("/Deshboard/pages/EditAns")
                                                    router.push({
                                                        pathname: '/Deshboard/pages/EditAns',
                                                          params: { a: Ans.Answer ,interNote:Ans.interNote}
                                                    })
                                                }}>
                                                    <Text style={{ alignSelf: "flex-end", paddingHorizontal: 10, color: "rgb(185, 131, 82)" }}>
                                                        Click to edit
                                                    </Text>
                                                </Pressable>
                                            </View>


                                        </View>
                                    </View>

                                    : <View style={{ padding: 20, borderWidth: 1, borderRadius: 5, marginTop: 20 }}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <View style={{ paddingVertical: 4, paddingHorizontal: 12, borderRadius: 10, }}>
                                                <Text style={{}}>
                                                    Q{item.Q_No}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Entypo name="arrow-left" size={20} color={"red"} style={{ paddingLeft: 5 }} />

                                                <Text style={{ color: "red" }}>
                                                    En attente
                                                </Text>

                                            </View>

                                        </View>
                                        <View>
                                            <Text style={{ paddingVertical: 10 }}>
                                                {item.Question}
                                            </Text>


                                            <Pressable onPress={() => {
                                                setqid(item)
                                                console.log(item)
                                                router.push("/Deshboard/Answer")

                                            }}>
                                                <Text style={{ alignSelf: "center", paddingHorizontal: 10, color: "rgb(185, 131, 82)" }}>
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

                <View style={{ paddingBottom: 10, marginBottom: 28, borderRadius: 10, padding: 16, borderWidth: 0.2, marginTop: 20 }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Entypo name="arrow-left" size={20} color="rgb(59, 245, 127)" style={{ paddingLeft: 5 }} />

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

        </ScrollView>
    )
}

export default QA