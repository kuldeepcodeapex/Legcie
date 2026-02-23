import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Option = () => {

console.log("sjxkhsjkhcbxhjksbhjksbhjcixb")


  return (
    <View style={{}}>
      <Pressable onPress={()=>{
        router.push('/Pages/user')
      }}>
        <Text>
            Members
        </Text>
      </Pressable>
      <Pressable style={{marginTop:30}}
      onPress={()=>{
        router.push('/Pages/Rasidents')
      }}>
        <Text>
            Residents
        </Text>
      </Pressable>
    </View>
  )
}

export default Option