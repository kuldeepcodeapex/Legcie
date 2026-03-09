import { supabase } from '@/lib/supabase';
import { useAuth } from '@/Myauth/auth';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from "expo-router";
import { useEffect } from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";



export default function Home() {

  const { fetchRasidentsQuestion, fetchRasidents, dataR, en, dataQ, fetchA, signOut }: any = useAuth()


  useEffect(
    () => {
      fetchA()
      fetchRasidents()
      fetchRasidentsQuestion()


    }
    , [])
  let a = en?.slice(0, 5)






  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 16, backgroundColor: "rgb(255, 254, 248)", paddingTop: 20 }}>
        <Pressable style={{ marginTop: 40 }}
          onPress={() => {
            signOut()

          }}

        >
          <Text style={{ fontSize: 20 }}>Logout</Text>
        </Pressable>
        <Text style={{ fontSize: 28, marginTop: 20 }}>Dashboard</Text>
        <Text style={{ fontSize: 20, marginVertical: 10, marginBottom: 50 }}>Overview of your residents and activities</Text>
        <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 24, gap: 20, borderRadius: 10, backgroundColor: "white", borderWidth: 0.2, borderColor: "rgb(185, 131, 82)" }}>
          <View style={{ paddingVertical: 5, flexDirection: "row", alignItems: "center", gap: 10 }} >
            <Fontisto name='plus-a' size={32} />
            <Text style={{ fontSize: 20 }}>
              Quick Actions
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", width: "100%", borderWidth: 1.5, borderRadius: 5, borderColor: "rgb(245, 243, 230)", paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, }} >
            <Pressable onPress={() => {
              console.log("first")
              router.push("/Deshboard/pages/Form")

            }}>
              <View style={{ alignItems: "center", justifyContent: "center", borderRadius: 5, backgroundColor: "rgb(185, 131, 82)", height: 50, width: 50, }}>
                <Fontisto name='plus-a' size={32} color='white' />


              </View>
            </Pressable >
            <Text style={{ marginTop: 10, fontSize: 16 }}>Add a resident</Text>
            <Text style={{ marginTop: 5, fontSize: 16 }}>Start a book of life</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", width: "100%", borderWidth: 1.5, borderRadius: 5, borderColor: "rgb(245, 243, 230)", paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, }}>
            <Pressable onPress={() => {
              router.push("/Deshboard/pages/Support")
            }}
              style={{ alignItems: "center", justifyContent: "center", borderRadius: 5, backgroundColor: "rgb(236, 72, 153)", height: 50, width: 50, }}>
              <Feather name='heart' size={32} color='white' />


            </Pressable>
            <Text style={{ marginTop: 10, fontSize: 16 }}>Add a resident</Text>
            <Text style={{ marginTop: 5, fontSize: 16 }}>Start a book of life</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", width: "100%", borderWidth: 1.5, borderRadius: 5, borderColor: "rgb(245, 243, 230)", paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, }} >
            <Pressable style={{ alignItems: "center", justifyContent: "center", borderRadius: 5, backgroundColor: "rgb(234, 179, 8)", height: 50, width: 50, }}
              onPress={() => {
                router.push("/Deshboard/pages/EntertainmentWork")
              }}
            >
              <Feather name='star' size={32} color='white' />


            </Pressable>
            <Text style={{ marginTop: 10, fontSize: 16 }}>Add a resident</Text>
            <Text style={{ marginTop: 5, fontSize: 16 }}>Start a book of life</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "rgb(255, 247, 236)", padding: 20, marginVertical: 20, borderRadius: 10, flexDirection: "row", gap: 10 }}>
          <Fontisto name='plus-a' size={32} color='rgb(185, 131, 82)' />
          <View>
            <Text style={{ marginTop: 5, fontSize: 20 }}>
              "Each memory told is a treasure passed on to future generations."
            </Text>
            <Text style={{ marginTop: 5, fontSize: 20, color: "rgb(185, 131, 82)" }}>
              -Proverb
            </Text>

          </View>
        </View>
        <View style={{ padding: 20, marginVertical: 20, borderRadius: 10, gap: 10, backgroundColor: "white", borderWidth: 0.3, borderColor: "rgb(185, 131, 82)" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ marginTop: 5, color: "black", fontSize: 18, }}>
              Question of the day
            </Text>
            <Text style={{ marginTop: 5, fontSize: 16, color: "black" }}>
              wednesday February 4
            </Text>
          </View >
          <Text style={{ marginTop: 5, fontSize: 18, color: "black" }}>What were you like as a teenager? </Text>
          <Text style={{ marginTop: 5, fontSize: 18, color: "rgb(185, 131, 82)" }}>See residents →</Text>
        </View>
        <View style={{ height: 50 }}>
        </View>
        <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 24, gap: 20, borderRadius: 10, backgroundColor: "white", borderWidth: 0.3, borderColor: "rgb(185, 131, 82)" }}>
          <View style={{ paddingVertical: 5, flexDirection: "row", alignItems: "center", gap: 10 }} >
            <FontAwesome name='newspaper-o' size={32} color="green" />
            <Text style={{ fontSize: 20 }}>
              latest answers
            </Text>
          </View>
          <FlatList
            data={a}
            renderItem={({ item }) => {
              let check = dataR?.find((v) => v.id === item?.Residents_ID)
              let check2 = dataQ?.find((v) => v.id === item?.Q_id)
           
              return (
                <View style={{ flexDirection: "row", gap: 4, borderWidth: 0.3, borderRadius: 10, borderColor: "rgb(185, 131, 82)", padding: 14, marginVertical: 10 }}>
                  <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: "rgb(185, 131, 82)", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 32, color: "white" }}>
                      {check?.firstName[0]}{check?.lastName[0]}
                    </Text>
                  </View>
                  <View style={{ width: "70%", gap: 8 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={{ fontSize: 26 }}>Matt H</Text>
                      <Text > add one month ago</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: "rgb(185, 131, 82)" }}> {check2?.Question}</Text>

                    <Text style={{ fontSize: 18 }}>{item?.Answer}</Text>
                  </View>


                </View>
              )
            }}

          >

          </FlatList>


        </View>
        <View style={{ height: 200, width: "100%", padding: 20, backgroundColor: "white", borderWidth: 0.3, borderRadius: 10, marginVertical: 20, marginBottom: 50, borderColor: "rgb(185, 131, 82)", }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <FontAwesome name='photo' size={32} />
            <Text style={{ fontSize: 24 }}>
              Recent gallary
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
