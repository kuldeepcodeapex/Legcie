import { supabase } from '@/lib/supabase';
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import * as Progress from 'react-native-progress';

const Support = () => {



  const { setGetUserdata, dataR, setdataR, getuserdata,fetchRasidents, userCount, establishmentid, setRasidents, rasident, rasidentDashboardID, setRasidentDashboardID, setCount, count }: any = useAuth()



  let Rasidentescount = dataR?.length;

  let In_progressRasidents = dataR?.filter((v) => v.Status === "In progress")
  let waitingRasidents = dataR?.filter((v) => v.Status === "waiting")
  let CompletedRasidents = dataR?.filter((v) => v.Status === "Completed")


 
  useEffect(() => {
    fetchRasidents()


  }, [])



  return (
    <ScrollView>


      <View style={{ paddingHorizontal: 20, paddingVertical: 20, gap: 20, backgroundColor: "rgb(255, 254, 248)" }}>
        <Pressable onPress={() => {
          router.back()
        }}>
          <Text style={{ fontSize: 20 }}>Back</Text>
        </Pressable>
        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 30, fontWeight: 500 }}>Resident Management</Text></View>
          <Pressable style={{ backgroundColor: "rgb(37, 99, 235)", flexDirection: "row", padding: 12, borderRadius: 10, width: "40%", alignItems: "center", gap: 10 }} onPress={() => {
            router.push("/Deshboard/pages/Form")
          }}>
            <Entypo name="cross" size={16} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>Add a resident</Text>

          </Pressable>

        </View>
        <View style={{ flexDirection: "row", borderWidth: 0.1, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16 }}>Total</Text>
            <Text style={{ fontSize: 30, fontWeight: 600 }}>{Rasidentescount}</Text>
          </View>
          <Entypo name="user" size={20} color="black" />

        </View>
        <View style={{ flexDirection: "row", borderWidth: 0.1, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16, color: "green" }}>in Progress</Text>
            <Text style={{ fontSize: 30, fontWeight: 600, color: "green" }}>{In_progressRasidents?.length}</Text>
          </View>
          <Entypo name="clock" size={20} color="green" />

        </View>
        <View style={{ flexDirection: "row", borderWidth: 0.1, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16, color: "blue" }}>Completed</Text>
            <Text style={{ fontSize: 30, fontWeight: 600, color: "blue" }}>{CompletedRasidents?.length}</Text>
          </View>
          <Entypo name="check" size={20} color="blue" />

        </View>
        <View style={{ flexDirection: "row", borderWidth: 0.1, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16, color: "orange" }}>Waiting</Text>
            <Text style={{ fontSize: 30, fontWeight: 600, color: "orange" }}>{waitingRasidents?.length}</Text>
          </View>
          <Entypo name="user" size={20} color="orange" />

        </View>
        <View style={{ borderWidth: 0.1, width: "100%", borderRadius: 10, gap: 10, flexDirection: "row", backgroundColor: "white", alignItems: "center", paddingHorizontal: 10 }}>

          <Entypo name="user" size={20} color="black" />
          <TextInput style={{ width: "90%", fontSize: 18 }} placeholder='Search by name or room'></TextInput>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Entypo name="user" size={20} color="black" />
          <Pressable style={{ flexDirection: "row", borderWidth: 0.1, backgroundColor: "white", justifyContent: "space-between", paddingVertical: 10, gap: 20, borderRadius: 10 }}>
            <Text style={{ paddingLeft: 20, fontSize: 20 }}>All statuses</Text>
            <Entypo name="user" size={20} color="black" />

          </Pressable>
        </View>


        <FlatList
          data={dataR}

          renderItem={({ item }) => {



            return (
              <View style={{ paddingHorizontal: 20, paddingVertical: 20, borderWidth: 2, backgroundColor: "white", borderColor: "rgb(214, 157, 103)", borderRadius: 10, marginTop: 12 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", gap: 20 }}>
                    <View style={{ height: 50, width: 50, borderWidth: 1, borderRadius: "50%", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                      <Text>{item.firstName[0]}</Text>
                      <Text>{item.firstName[0]}</Text>
                    </View>
                    <View>
                      <Text>{item.firstName}  {item.lastName}</Text>
                      <Text>Bedroom {item.badRoom}</Text>
                    </View>
                  </View>
                  <Entypo name="edit" size={20} color="black" />

                </View>
                <View style={{ borderBottomWidth: 0.2, paddingBottom: 10, borderColor: "rgb(185, 131, 82)" }}>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", gap: 10, paddingTop: 20, paddingBottom: 10 }}>
                      <Entypo name="edit" size={20} color="black" />
                      <Text>0/52 answer</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: "rgb(185, 131, 82)" }}>0%</Text>
                  </View>
                  <Progress.Bar progress={0.0} width={330} color='rgb(185, 131, 82)' height={12} style={{ backgroundColor: "rgb(252, 248, 230)", borderWidth: 0.5 }} />

                </View>


                {
                  (item.Status === "In progress") ?


                    <View style={{ backgroundColor: "rgb(220, 252, 231)", flexDirection: "row", gap: 10, width: 120, borderRadius: 16, alignItems: "center", justifyContent: "center", paddingVertical: 2, marginVertical: 14 }}>
                      <Entypo name="edit" size={20} color="green" />
                      <Text style={{ color: "green" }}>in prosess</Text>

                    </View>
                    : (item.Status === "Completed") ?

                      <View style={{ backgroundColor: "rgb(219, 234, 254)", flexDirection: "row", gap: 10, width: 120, borderRadius: 16, alignItems: "center", justifyContent: "center", paddingVertical: 2, marginVertical: 14 }}>
                        <Entypo name="edit" size={20} color="rgb(47, 95, 217)" />
                        <Text style={{ color: "rgb(47, 95, 217)" }}>Finished</Text>

                      </View>


                      :

                      <View style={{ backgroundColor: "rgb(255, 237, 213)", flexDirection: "row", gap: 10, width: 120, borderRadius: 16, alignItems: "center", justifyContent: "center", paddingVertical: 2, marginVertical: 14 }}>
                        <Entypo name="edit" size={20} color="rgb(185, 131, 82)" />
                        <Text style={{ color: "rgb(185, 131, 82)" }}>Waiting</Text>

                      </View>


                }



                <Pressable style={{ alignItems: "center", justifyContent: "center", paddingVertical: 10, padding: 10, backgroundColor: "rgb(185, 131, 82)", borderRadius: 10 }} onPress={() => {
                  setRasidentDashboardID(item)
                  router.push("/Deshboard/pages/QA")
                  setCount(count - 1)

                }}>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>Continue my Book</Text>
                </Pressable>
              </View>

            )
          }}>

        </FlatList>



      </View>
    </ScrollView>
  )
}

export default Support