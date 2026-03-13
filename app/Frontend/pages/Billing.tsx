import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Header from './Header'
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons'

const Billing = () => {


    const data = [{ Invoice: "25-001", Amount: "2,560.00", Deadline: "11/29/2025", Broadcast: "11/11/2025", Status: "paid", Actions: "done" }]




    return (
        <View>
            <Header></Header>
            <ScrollView style={{ padding: 20, height: "100%", backgroundColor: "rgb(255, 254, 248)", }}>
                <View>
                    <View style={{ gap: 5 }}>
                        <Text style={{ fontSize: 30, fontWeight: '300' }}>Billing</Text>
                        <Text style={{ fontSize: 14 }}>
                            Manage your subscription and view your invoices
                        </Text>
                    </View>
                    <View style={{ borderWidth: 0.2, marginVertical: 18, paddingVertical: 10, borderRadius: 10 }}>
                        <View style={{ gap: 10, borderBottomColor: "rgb(247, 241, 210)", borderBottomWidth: 2 }}>
                            <View style={{ gap: 10, flexDirection: "row", paddingVertical: 12, borderBottomWidth: 2, borderColor: "rgb(185, 131, 82)", width: "50%", justifyContent: "center" }}>
                                <FontAwesome style={{ color: "rgb(185, 131, 82)" }} name='sticky-note-o' size={32} />

                                <Text style={{ color: "rgb(185, 131, 82)" }}>
                                    Invoices
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{}}>
                                    All invoiccs
                                </Text>
                            </View>
                            <View>
                                <View style={{ borderWidth: 0.2, padding: 8, borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 5 }}>

                                    <Text style={{ fontSize: 14 }}>
                                        All invoiccs
                                    </Text>
                                    <Entypo name="chevron-down" size={18} />
                                </View>
                            </View>
                        </View>
                        <ScrollView
                            horizontal={true}
                        >

                            <View>
                                <View style={{ flexDirection: "row", padding: 12, backgroundColor: "rgb(250, 248, 236)", alignItems: "center", width: 700 }}>

                                    <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>Invice</Text>
                                    <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>Amount</Text>
                                    <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>Deadline</Text>
                                    <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>Brodcast</Text>
                                    <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>Status</Text>
                                    <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>Actions</Text>
                                </View>
                                <FlatList

                                    data={data}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={{ flexDirection: "row", padding: 12, backgroundColor: "rgb(255, 254, 248)", alignItems: "center", width: 700 }}>

                                                <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>{item.Invoice}</Text>
                                                <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>{item.Amount}</Text>
                                                <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>{item.Deadline}</Text>
                                                <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>{item.Broadcast}</Text>
                                                <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>{item.Status}</Text>
                                                <Text style={{ flex: 1, width: 150, paddingLeft: 10 }}>{item.Actions}</Text>
                                            </View>
                                        )
                                    }}
                                >

                                </FlatList>

                            </View>




                        </ScrollView>



                        <View style={{ marginVertical: 20, padding: 20, backgroundColor: "rgb(250, 249, 240)", gap: 20, borderRadius: 20 }}>
                            <View style={{ flexDirection: "row", gap: 12 }}>
                                <FontAwesome style={{ color: "rgb(185, 131, 82)" }} name='sticky-note-o' size={32} />
                                <Text>Need help with your billing?</Text>
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: "200" }}>Our team is available to answer all your questions regarding your subscription or invoices.</Text>

                            <View style={{ alignItems: "flex-end" }}>
                                <View style={{ borderWidth: 0.2, padding: 8, borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 5, width: "40%", justifyContent: "flex-end", backgroundColor: "rgb(185, 131, 82)", }}>

                                    <Text style={{ fontSize: 14, width: "100%", color: "white" }}>
                                        All invoiccs
                                    </Text>

                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Billing