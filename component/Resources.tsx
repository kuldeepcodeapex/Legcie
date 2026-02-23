import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Resources = () => {
  return (
    <View>
        <View style={{ padding: 20, backgroundColor: "white", }}>
                    <Text style={{fontSize:18, paddingBottom:30}}>Documentation and guides</Text>
                    <View style={{gap:20}}>
                        <View style={{gap:12, paddingVertical:22,backgroundColor:"White",borderWidth:0.5,paddingHorizontal:12,borderRadius:10, borderColor:"rgb(191, 131, 82)"}}>
                        <Text style={{fontSize:20}}>Documentation and guides</Text>
                        <Text style={{fontSize:16}}>Learn how to set up your establishment and add your first residents.</Text>
                        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
                            <Text style={{color:"rgb(191, 131, 82)",fontSize:18}}>Read the guidee</Text>
                            <Feather style={{color:"rgb(191, 131, 82)"}} name='arrow-left' size={20} />

                        </View>

                    </View>
                    <View style={{gap:12, paddingVertical:22,backgroundColor:"White",borderWidth:0.5,paddingHorizontal:12,borderRadius:10, borderColor:"rgb(191, 131, 82)"}}>
                        <Text style={{fontSize:20}}>Resident management</Text>
                        <Text style={{fontSize:16}}>Find out how to support your residents in their book project.</Text>
                        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
                            <Text style={{color:"rgb(191, 131, 82)",fontSize:18}}>See the tutorial</Text>
                            <Feather style={{color:"rgb(191, 131, 82)"}} name='arrow-left' size={20} />

                        </View>

                    </View>
                    <View style={{gap:12, paddingVertical:22,backgroundColor:"rgb(250, 245, 255)",borderWidth:0.5,paddingHorizontal:12,borderRadius:10, borderColor:"rgb(191, 131, 82)"}}>
                        <Text style={{fontSize:20, color:"rgb(107, 33, 168)"}}>Guide to using AI</Text>
                        <Text style={{fontSize:16,color:"rgb(107, 33, 168)"}}>Learn how to use AI features to improve texts and transcriptions.</Text>
                        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
                            <Text style={{color:"rgb(107, 33, 168)",fontSize:18}}>Discover the features</Text>
                            <Feather style={{color:"rgb(107, 33, 168)"}} name='arrow-left' size={20} />

                        </View>

                    </View>
                                        <View style={{gap:12, paddingVertical:22,backgroundColor:"White",borderWidth:0.5,paddingHorizontal:12,borderRadius:10, borderColor:"rgb(191, 131, 82)"}}>
                        <Text style={{fontSize:20}}>Team management</Text>
                        <Text style={{fontSize:16}}>Invite your team and manage access permissions.</Text>
                        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
                            <Text style={{color:"rgb(191, 131, 82)",fontSize:18}}>Learn more</Text>
                            <Feather style={{color:"rgb(191, 131, 82)"}} name='arrow-left' size={20} />

                        </View>

                    </View>
                                        <View style={{gap:12, paddingVertical:22,backgroundColor:"White",borderWidth:0.5,paddingHorizontal:12,borderRadius:10, borderColor:"rgb(191, 131, 82)"}}>
                        <Text style={{fontSize:20}}>Good practices</Text>
                        <Text style={{fontSize:16}}>Tips for maximizing your residents' engagement.</Text>
                        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
                            <Text style={{color:"rgb(191, 131, 82)",fontSize:18}}>Discover</Text>
                            <Feather style={{color:"rgb(191, 131, 82)"}} name='arrow-left' size={20} />

                        </View>

                    </View>
                    </View>
                </View>
    </View>
  )
}

export default Resources