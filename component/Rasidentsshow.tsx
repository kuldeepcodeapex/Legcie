import { View, Text } from 'react-native'
import React from 'react'

const Rasidentsshow = ({item}:any) => {

 
  return (
    
    <View style={{gap:60, flexDirection:"row",padding:12,backgroundColor:"rgb(255, 254, 248)",alignItems:"center",marginTop:10}}>
        <Text>{item.Name}</Text>
        <Text>{item.Email}</Text>
        <Text>{item.Phone}</Text>
        <Text>{item.Status}</Text>
        <Text>{item.Date}</Text>
        <Text>Book</Text>
        <Text>Remove</Text>
    </View>
  )
}

export default Rasidentsshow