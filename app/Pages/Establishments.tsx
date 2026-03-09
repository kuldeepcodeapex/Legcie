import { View, Text, Pressable, StyleSheet, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo, Feather, FontAwesome, Foundation } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuth } from '@/Myauth/auth';
import { supabase } from '@/lib/supabase';
import Option from './Option';
import UpdateEstablishments from './updateEstablishment';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';



const Establishments = ({ item }: any) => {

  const { establishmentid, setEstablishmentid, establishmentscount, setEstablishmentscount }: any = useAuth()
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const deleteEstablishments = async (item: any) => {


    console.log(item)
    const response = await supabase
      .from('')
      .delete()
      .eq('id', item.id)
      .eq('Establishments-id', establishmentid)

  }


  return (
    <View >
      <View style={{ borderRadius: 10, shadowOpacity: 10 }}>
        <View style={{ backgroundColor: "rgb(185, 131, 82)", borderTopEndRadius: 10, borderTopStartRadius: 10, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center" }}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>

            <FontAwesome name="calculator" size={20} color="black" />
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 20, color: "white" }}>
                {item.name}
              </Text>
              <Text style={{ color: "white" }}>
                {item.subscription}
              </Text>
            </View>
          </View>
          <Menu style={{ borderRadius: 10 }}>
            <MenuTrigger>
              <Entypo name="dots-three-vertical" size={16} color="black" />
            </MenuTrigger>
            <MenuOptions customStyles={{}}>
              <MenuOption onSelect={() => {
                setEstablishmentid(item.id)
                router.push("/Pages/Rasidents")
              }

              } text='Resident' />
              <MenuOption
              onSelect={() => {
                setEstablishmentid(item.id)
                router.push('/Pages/user')
              }

              } text='Members'
              />

            </MenuOptions>
          </Menu>


        </View>

        <View style={{ backgroundColor: "white", gap: 18, paddingVertical: 12 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
            <Feather name="mail" size={16} color="rgb(185, 131, 82)" />
            <Text>
              {item.email}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
            <FontAwesome name="map-marker" size={16} color="rgb(185, 131, 82)" />
            <Text>
              {item.address}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
            <FontAwesome name="users" size={16} color="rgb(185, 131, 82)" />
            <Text>
              {item.MR} residents max
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
            <FontAwesome name="users" size={16} color="rgb(185, 131, 82)" />
            <Text>
              {item.MU} max users
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
            <FontAwesome name="calendar" size={16} color="rgb(185, 131, 82)" />
            <Text>
              {item.created_at}
            </Text>
          </View>

        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <View style={styles.centeredView2}>
            <Pressable onPress={() => {
              setModal(false)
            }}
              style={{ height: "100%", width: '100%', position: 'absolute' }}
            >
            </Pressable>
            <View style={styles.modalViewTwo}>
              <UpdateEstablishments setModal={setModal} />

            </View>
          </View>
        </Modal>
        <Pressable style={{
          flexDirection: "row", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, gap: 10, backgroundColor: "rgb(255, 254, 248)",
          alignItems: "center", justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10, borderTopWidth: 1, borderColor: "rgb(234, 202, 173)"
        }}
          onPress={() => {
            setEstablishmentid(item)
            setModal(true)

          }}

        >
          <Entypo name="edit" size={16} color="rgb(185, 131, 82)" style={{ width: 40, paddingLeft: 20 }} />
          <Text>
            Edit
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    left: 20
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },

  modalViewTwo: {
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



  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    left: 220,
    bottom: 20,
    width: 100,
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

export default Establishments