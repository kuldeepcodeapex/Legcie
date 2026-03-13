import { supabase } from '@/lib/supabase';
import { useAuth } from '@/Myauth/auth';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Image } from 'expo-image';
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from './Header';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {

  const { fetchRasidentsQuestion, dataR, en, dataQ, fetchA, signOut, fetchRasidents }: any = useAuth()

  const [topAns, setTopans] = useState({})
  const topAnswer = async () => {
    const { data, error } = await supabase
      .from('ResidentA')
      .select('*')
      .order('id', { ascending: false })
      .limit(5)
    setTopans(data)
  }


  useFocusEffect(
    useCallback(() => {
      topAnswer()
      fetchRasidentsQuestion()
      fetchRasidents()


    }, [])
  )


  return (
    <View style={{marginBottom:10}}>
<Header></Header>
      <ScrollView>
        


        <View style={{ paddingHorizontal: 16, backgroundColor: "rgb(255, 254, 248)"}}>



          <Text style={{ fontSize: 32, marginTop: 20 }}>Dashboard</Text>
          <Text style={{ fontSize: 18, marginVertical: 10, marginBottom: 50, fontWeight: "200" }}>Overview of your residents and activities</Text>
          <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 24, gap: 20, borderRadius: 10, backgroundColor: "white", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 20, elevation: 2, borderColor: "rgb(185, 131, 82)" }}>
            <View style={{ paddingVertical: 5, flexDirection: "row", alignItems: "center", gap: 10 }} >
              <AntDesign name='thunderbolt' size={22} color={"rgb(185, 131, 82)"} />
              <Text style={{ fontSize: 20, fontWeight: "200" }}>
                Quick Actions
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", borderWidth: 1.5, borderRadius: 5, borderColor: "rgb(245, 243, 230)", paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, }} >
              <Pressable onPress={() => {
                console.log("first")
                router.push("/Frontend/pages/Form")

              }}>
                <View style={{ alignItems: "center", justifyContent: "center", borderRadius: 5, backgroundColor: "rgb(185, 131, 82)", height: 50, width: 50, }}>
                  <Fontisto name='plus-a' size={22} color='white' />


                </View>
              </Pressable >
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "200" }}>Add a resident</Text>
              <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "200" }}>Start a book of life</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", borderWidth: 1.5, borderRadius: 5, borderColor: "rgb(245, 243, 230)", paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, }}>
              <Pressable onPress={() => {
                router.push("/Frontend/pages/Support")
              }}
                style={{ alignItems: "center", justifyContent: "center", borderRadius: 5, backgroundColor: "rgb(236, 72, 153)", height: 50, width: 50, }}>
                <Feather name='heart' size={22} color='white' />


              </Pressable>
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "200" }}>Continue your stories</Text>
              <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "200" }}>
                Support in a response</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%", borderWidth: 1.5, borderRadius: 5, borderColor: "rgb(245, 243, 230)", paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, }} >
              <Pressable style={{ alignItems: "center", justifyContent: "center", borderRadius: 5, backgroundColor: "rgb(234, 179, 8)", height: 50, width: 50, }}
                onPress={() => {
                  router.push("/Frontend/pages/EntertainmentWork")
                }}
              >
                <Feather name='star' size={22} color='white' />


              </Pressable>
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "200" }}>Entertainment of the week</Text>
              <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "200" }}>Plan writing workshops</Text>
            </View>
          </View>
          <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 0.5 }, shadowOpacity: 0.2, shadowRadius: 20, elevation: 2, backgroundColor: "rgb(255, 249, 236)", padding: 20, marginVertical: 20, borderRadius: 10, flexDirection: "row", gap: 10, width: "100%" }}>
            <Fontisto name='plus-a' size={32} color='rgb(185, 131, 82)' />
            <View style={{ width: "90%" }}>
              <Text style={{ lineHeight: 30, marginTop: 5, fontSize: 20, fontWeight: "200" }}>
                "Each memory told is a treasure passed on to future generations."
              </Text>
              <View style={{ paddingTop: 8, flexDirection: "row", gap: 5, alignItems: "center" }}>
                <Feather name='minus' size={22} color='rgb(185, 131, 82)' style=
                  {{ alignSelf: "center" }} />
                <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: 300, color: "rgb(189, 107, 31)" }}>
                  Proverb
                </Text>
              </View>

            </View>
          </View>
          <View style={{
            shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 20, elevation: 2, padding: 20, marginVertical: 20, borderRadius: 10, gap: 10, backgroundColor: "white",
            borderColor: "rgb(185, 131, 82)", width: "100%"
          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Text style={{ marginTop: 5, color: "black", fontSize: 13, fontWeight: 300, width: "50%" }}>
                Question of the day
              </Text>
              <Text style={{ marginTop: 5, fontSize: 10, color: "black", fontWeight: 300, width: "50%", textAlign: "right" }}>
                wednesday February 4
              </Text>
            </View >
            <Text style={{ marginTop: 5, fontSize: 18, color: "black", fontWeight: 300 }}>What were you like as a teenager? </Text>
            <Text style={{ marginTop: 5, fontSize: 16, color: "rgb(138, 79, 25)", fontWeight: 200 }}>See residents →</Text>
          </View>
          <View style={{ height: 50 }}>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2, gap: 20, borderRadius: 10, backgroundColor: "white", borderColor: "rgb(185, 131, 82)" }}>
            <View style={{ paddingVertical: 5, flexDirection: "row", alignItems: "center", gap: 10 }} >
              <FontAwesome name='newspaper-o' size={32} color="green" />
              <Text style={{ fontSize: 20 }}>
                Latest answers
              </Text>
            </View>
            <FlatList
              data={topAns}
              renderItem={({ item }) => {
                let check = dataR?.find((v: any) => v.id === item?.Residents_ID)
                let check2 = dataQ?.find((v: any) => v.id === item?.Q_id)

                return (
                  <View style={{ flexDirection: "row", gap: 14, borderWidth: 0.1, borderRadius: 10, borderColor: "rgb(185, 131, 82)", padding: 14, marginVertical: 10 }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                      {
                        (item?.img) ?

                          <Image
                            source={{ uri: `${item?.img}` }}
                            style={{ width: 60, borderRadius: 50, height: 60 }}
                          >
                          </Image>
                          :
                          <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: "rgb(185, 131, 82)", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 32, color: "white" }}>
                              {check?.firstName[0]}{check?.lastName[0]}
                            </Text>
                          </View>
                      }
                    </View>
                    <View style={{ width: "70%", gap: 8 }}>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <Text style={{ fontSize: 14, width: "70%" }}>{check?.firstName} {check?.lastName}</Text>
                        <Text style={{ fontSize: 12, width: "30%", alignSelf: "flex-start" }}> 2 month ago</Text>
                      </View>
                      <Text style={{ fontSize: 12, color: "rgb(185, 131, 82)" }}> {check2?.Question}</Text>

                      <Text style={{ fontSize: 12 }}>{item?.Answer}</Text>
                    </View>


                  </View>
                )
              }}

            >

            </FlatList>


          </View>
          <View style={{ width: "100%", padding: 20, backgroundColor: "white", borderRadius: 10, marginVertical: 20, marginBottom: 170, borderColor: "rgb(185, 131, 82)", shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 2 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Feather name='camera' size={32} style={{ color: "rgb(219, 39, 119)" }} />
              <Text style={{ fontSize: 24 }}>
                Recent gallary
              </Text>
            </View>


            <View>
              <Image
                source={{ uri: `${topAns[0]?.img}` }}
                style={{ paddingVertical: "80%", width: "100%", margin: 10, borderRadius: 10 }}
              >

              </Image>

            </View>




          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});