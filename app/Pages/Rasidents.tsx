import { View, Text,FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useAuth } from '@/Myauth/auth';
import Rasidentsshow from '@/component/Rasidentsshow'
import { canGoBack } from 'expo-router/build/global-state/routing'
import { supabase } from '@/lib/supabase'


const Rasidents = () => {

 const {  setGetUserdata, getuserdata, userCount, establishmentid,setRasidents ,rasident}: any = useAuth()

      const fetchRasidents = async () => {
                const { data, error } = await supabase
                    .from('Residents')
                    .select('*')
                    .eq('Establishments-id',establishmentid)


                    
        
                setRasidents(data)
                console.log(establishmentid)
            }
        
        
            useEffect(()=>{
                fetchRasidents()
                console.log(rasident,"skgjsiuhgsuhydguyhdguy")
             
            },[])
    





    return (
        <View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,borderBottomWidth:1}}>
                <View>
                    <Text style={{ fontSize: 18 }}>Residents - Matt Test 2</Text>
                    <Text>1 resident in total</Text>
                </View>
                <Entypo name="cross" size={32} color="black"  />
            </View>

<View style={{gap:60, flexDirection:"row",padding:12,backgroundColor:"rgb(255, 254, 248)",alignItems:"center",marginTop:10}}>
    <Text>Name</Text>
    <Text>Email</Text>
    <Text>Phone</Text>
    <Text>Status</Text>
    <Text>Data added</Text>
    <Text>Book</Text>
    <Text>Remove</Text>
</View>



<FlatList
data={rasident}
     renderItem={({item})=> <Rasidentsshow item={item}/>}
>
 </FlatList>


        </View>

        
    )
}

export default Rasidents