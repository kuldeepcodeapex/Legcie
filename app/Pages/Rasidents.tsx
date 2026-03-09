import { View, Text,FlatList, Pressable, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useAuth } from '@/Myauth/auth';
import Rasidentsshow from '@/component/Rasidentsshow'
import { canGoBack } from 'expo-router/build/global-state/routing'
import { supabase } from '@/lib/supabase'


const Rasidents = () => {

 const {  setGetUserdata, getuserdata, userCount, establishmentid,setRasidents ,rasidents}: any = useAuth()

      const fetchRasidents = async () => {
                const { data, error } = await supabase
                    .from('Resident')
                    .select('*')
                    // .eq('Establishment-id',"2b9865db-f8fa-4fc7-ae0e-09d7d8891ce9")
                    .eq('Establishment-id',establishmentid)
                    // console.log(data, "this is resident")
                setRasidents(data)
                console.log(data,"suighiuywghiuyw")
            }
            useEffect(()=>{
                fetchRasidents()
            },[])
             console.log(establishmentid,"wdbnijuehwdgbuhyewgvfhugvuefveueubvy")
    return (
         <ScrollView
               horizontal={true} >
        <View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,borderBottomWidth:1}}>
                <View>
                    <Text style={{ fontSize: 18 }}>Residents - Matt Test 2</Text>
                    <Text>1 resident in total</Text>
                </View>
                <Entypo name="cross" size={32} color="black"  />
            </View>

<View style={{ flexDirection:"row",padding:12,backgroundColor:"rgb(255, 254, 248)",alignItems:"center",width:700}}>
    <Text style={{flex:1,textAlign:"center"}}>Name</Text>
    <Text style={{flex:1, textAlign:"center"}}>Email</Text>
    <Text style={{flex:1 ,textAlign:"center"}}>Phone</Text>
    <Text style={{flex:1,textAlign:"center"}}>Status</Text>
    <Text style={{flex:1,textAlign:"center"}}>Data added</Text>
    <Text style={{flex:1,textAlign:"center"}}>Book</Text>
    <Text style={{flex:1,textAlign:"center"}}>Remove</Text>
</View>



<FlatList
data={rasidents}
     renderItem={({item})=> <Rasidentsshow item={item}/>}
 

>
 </FlatList>


        </View>
        </ScrollView>

        
    )
}

export default Rasidents