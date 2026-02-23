import UserData from '@/component/UserData'
import { supabase } from '@/lib/supabase'

import { AntDesign, Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View,Modal} from 'react-native'
import UserForm from './UserForm'
import { useAuth } from '@/Myauth/auth';

const User = () => {

    const { setGetUserdata, getuserdata, userCount, establishmentid }: any = useAuth()
    let a
  const [modalVisible, setModalVisible] = useState(false);

    const [count, setcount] = useState()
    const fetchuserdata = async () => {
        const { data, error } = await supabase
            .from('User')
            .select('*')
            .eq('Establishments-id', establishmentid)
        setGetUserdata(data)

        if (error) console.log(error.message)


    }
    useEffect(() => {
        fetchuserdata()
    }, [])

     


    const deletedata = async (item:any) => {

        console.log(item)
        const response = await supabase
            .from('User')
            .delete()
            .eq('id', item.id)
            .eq('Establishments-id', establishmentid)

    }
  
    useEffect(() => {
        fetchuserdata()
    }, [])


    return (
        <View>
            <View style={{ padding: 20, borderBottomWidth: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{}}>
                        <Text>Users - House of </Text>
                        <Text>roses</Text>
                        <Text>{userCount} users</Text>
                    </View>

                    <Pressable>
                        <View style={{ alignItems: "center", flexDirection: "row", gap: 10, justifyContent: "space-between" }}>
                            <Pressable style={{ backgroundColor: "rgb(92, 65, 41)", flexDirection: "row", borderRadius: 10, justifyContent: "center", paddingVertical: 10, alignItems: "center", paddingHorizontal: 28 }}
                                onPress={() => {
                                    setModalVisible(true)
                                }}
                            >
                                <Entypo name="plus" size={16} color="white" style={{ width: 40, }} />
                                <View>
                                    <Text style={{ color: "white" }}>
                                        New
                                    </Text>
                                    <Text style={{ color: "white" }}>
                                        user
                                    </Text>
                                </View>
                            </Pressable>
                             <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
           <UserForm  setModalVisible={setModalVisible}/>
              <Pressable onPress={()=>{
                setModalVisible(true)
              }}>  
              </Pressable>
            </View>
          </View>
        </Modal>
                            <Entypo name="cross" size={16} color="black" />
                        </View>
                    </Pressable>
                </View>
            </View>

            <FlatList
                data={getuserdata}
                renderItem={({ item }) =>

                    <UserData item={item} deletedata={deletedata} />}
            >


            </FlatList>





        </View>
    )
}

const styles = StyleSheet.create({
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default User