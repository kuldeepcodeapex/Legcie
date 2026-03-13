import { supabase } from '@/lib/supabase';
import { AppStateProvider, useAuth } from "@/Myauth/auth";
import { Entypo, Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Header from './Header';
import { Image } from 'expo-image';

const Support = () => {



  const { setGetUserdata, fetchRasidentsQuestion, en, pro, fetchA, dataR, fetchRasidents, dataA, rasidentDashboardID, setRasidentDashboardID, setCount, count }: any = useAuth()



  let Rasidentescount = dataR?.length;

  let In_progressRasidents = dataR?.filter((v: any) => v.Status === "In progress")
  let waitingRasidents = dataR?.filter((v: any) => v.Status === "waiting")
  let CompletedRasidents = dataR?.filter((v: any) => v.Status === "Completed")


  useFocusEffect(
    useCallback(() => {
      fetchA()
      fetchRasidents()

    }, [])
  );




  return (
    <ScrollView>

      <Header></Header>
      <View style={{

        paddingHorizontal: 20, paddingVertical: 20, gap: 20, backgroundColor: "rgb(255, 254, 248)"
      }}>
        
        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 20, fontWeight: 300 }}>Resident Management</Text></View>
          <Pressable style={{ backgroundColor: "rgb(37, 99, 235)", width: '38%', flexDirection: "row", padding: 10, borderRadius: 10, alignItems: "center", gap: 10 }} onPress={() => {
            router.push("/Frontend/pages/Form")
          }}>
            <Entypo name="plus" size={16} color="white" />
            <Text style={{ color: "white", fontSize: 16, fontWeight: "300" }}>Add a resident</Text>

          </Pressable>

        </View>
        <View style={{ flexDirection: "row", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16 }}>Total</Text>
            <Text style={{ fontSize: 30, fontWeight: 600 }}>{Rasidentescount}</Text>
          </View>
          <Feather name="user" size={30} color="black" />

        </View>
        <View style={{ flexDirection: "row", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16, color: "green" }}>in Progress</Text>
            <Text style={{ fontSize: 30, fontWeight: 600, color: "green" }}>{In_progressRasidents?.length}</Text>
          </View>
          <Entypo name="clock" size={30} color="green" />

        </View>
        <View style={{ flexDirection: "row", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16, color: "blue" }}>Completed</Text>
            <Text style={{ fontSize: 30, fontWeight: 600, color: "blue" }}>{CompletedRasidents?.length}</Text>
          </View>
          <Entypo name="check" size={30} color="blue" />

        </View>
        <View style={{ flexDirection: "row", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2, alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
          <View >
            <Text style={{ fontSize: 16, color: "orange" }}>Waiting</Text>
            <Text style={{ fontSize: 30, fontWeight: 600, color: "orange" }}>{waitingRasidents?.length}</Text>
          </View>
          <MaterialIcons name="error-outline" size={30} color="rgb(251, 146, 60)" />

        </View>
        <View style={{ borderWidth: 0.1, width: "100%", borderRadius: 10, gap: 10, flexDirection: "row", backgroundColor: "white", alignItems: "center", paddingHorizontal: 10 }}>

          <Feather name="search" size={20} color="black" />
          <TextInput style={{ width: "90%", fontSize: 18, height: 50 }} placeholder='Search by name or room...'></TextInput>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Feather name="filter" size={20} color="black" />
          <Pressable style={{ flexDirection: "row", borderWidth: 0.1, backgroundColor: "white", justifyContent: "space-between", paddingVertical: 10, gap: 20, borderRadius: 10 }}>
            <Text style={{ paddingLeft: 20, fontSize: 20 }}>All statuses</Text>
            <Entypo name="chevron-small-down" size={20} color="black" />

          </Pressable>
        </View>


        <FlatList
          data={dataR}

          renderItem={({ item }) => {


            const options = { year: 'numeric', month: 'long', day: 'long' };
            const test = (new Date(item?.created_at).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }))

            return (
              <View style={{
                paddingHorizontal: 20, paddingVertical: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2, borderLeftWidth: 0.2, borderRightWidth: 0.2,
                backgroundColor: "white", borderRadius: 10, marginTop: 12
              }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", gap: 20 }}>

                    {
                      (item?.img) ?

                        <Image
                          source={{ uri: `${item?.img}` }}
                          style={{ width: 60, borderRadius: 50, height: 60 }}
                        >
                        </Image>
                        : <View style={{ height: 50, width: 50, borderRadius: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(185, 131, 82)", flexDirection: "row" }}>
                          <Text style={{ color: "white" }}>{item.firstName[0]}</Text>
                          <Text style={{ color: "white" }}>{item.firstName[0]}</Text>
                        </View>
                    }


                    <View>
                      <Text style={{ fontSize: 16 }}>{item.firstName}  {item.lastName}</Text>
                      <Text style={{fontSize:12,fontWeight:'300',color:"rgb(155, 161, 165)"}}>Bedroom {item.badRoom}</Text>
                    </View>
                  </View>
                  <Feather name="edit" size={16} color="blue" />

                </View>
                <View style={{ borderBottomWidth: 0.2, borderBottomColor: "rgb(214, 199, 129)", paddingBottom: 15, borderColor: "rgb(185, 131, 82)" }}>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", gap: 10, paddingTop: 20, paddingBottom: 10 }}>
                      <Feather name="book-open" size={20} color="black" />
                      <Text style={{fontWeight:"200",color:"rgb(109, 112, 114)"}}>0/52 answer</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: "rgb(185, 131, 82)" }}>0%</Text>
                  </View>
                  <Progress.Bar progress={pro} color='rgb(185, 131, 82)' height={12} style={{ width: "100%", backgroundColor: "rgb(252, 248, 230)", borderWidth: 0.1 }} />

                </View>


                {
                  (item.Status === "In progress") ?

                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                      <View style={{ backgroundColor: "rgb(220, 252, 231)", flexDirection: "row", gap: 10, width: "50%", borderRadius: 16, alignItems: "center", justifyContent: "center", paddingVertical: 2, marginVertical: 14 }}>
                        <Entypo name="clock" size={20} color="green" />
                        <Text style={{ color: "green" }}>in prosess</Text>
                      </View>
                      <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 8 }}>
                          {test}
                        </Text>
                      </View>
                    </View>

                    : (item.Status === "Completed") ?

                      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ backgroundColor: "rgb(219, 234, 254)", flexDirection: "row", gap: 10, width: 120, borderRadius: 16, alignItems: "center", justifyContent: "center", paddingVertical: 2, marginVertical: 14 }}>
                          <FontAwesome6 name="rotate-right" size={20} color="rgb(47, 95, 217)" />
                          <Text style={{ color: "rgb(47, 95, 217)" }}>Finished</Text>

                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                          <Text style={{ fontSize: 8 }}>
                            {test}
                          </Text>
                        </View>
                      </View>


                      :

                 <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}}>
                       <View style={{ backgroundColor: "rgb(255, 237, 213)", flexDirection: "row", gap: 10, width: 120, borderRadius: 16, alignItems: "center", justifyContent: "center", paddingVertical: 2, marginVertical: 14 }}>
                        <Entypo name="clock" size={20} color="rgb(185, 131, 82)" />
                        <Text style={{ color: "rgb(185, 131, 82)" }}>Waiting</Text>
                        

                      </View>
                       <View style={{ width: "50%", alignItems: "flex-end" }}>
                          <Text style={{ fontSize: 8 }}>
                            {test}
                          </Text>
                        </View>
                 </View>


                }



                <Pressable style={{ alignItems: "center", justifyContent: "center", paddingVertical: 8, padding: 10, backgroundColor: "rgb(185, 131, 82)", borderRadius: 10 }} onPress={() => {
                  setRasidentDashboardID(item)
                  router.push("/Frontend/pages/QA")
                  setCount(count - 1)

                }}>
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Continue my Book</Text>
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