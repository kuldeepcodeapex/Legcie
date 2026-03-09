import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Rasidentsshow = ({item}:any) => {

//  console.log(item)
  return (
   
  


<View style={{ flexDirection:"row",padding:12,backgroundColor:"rgb(255, 254, 248)",marginTop:20,alignItems:"center",width:700, }}>
    <Text style={{flex:1,textAlign:"center"}}>{item.firstName}</Text>
    <Text style={{flex:1, textAlign:"center"}}>{item.email}</Text>
    <Text style={{flex:1 ,textAlign:"center"}}>{item.telephone}</Text>
    <Text style={{flex:1,textAlign:"center"}}>{item.Status}</Text>
    <Text style={{flex:1,textAlign:"center"}}>{item.DateAddad}</Text>
    <Text style={{flex:1,textAlign:"center"}}>{item.Book}</Text>
    <Text style={{flex:1,textAlign:"center"}}>Remove</Text>
</View>
    
  )
}

export default Rasidentsshow