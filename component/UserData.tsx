import { View, Text, Pressable ,Modal, StyleSheet} from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useAuth } from '@/Myauth/auth';
import { router } from 'expo-router';
import UpdateForm from '@/app/Pages/updateForm';

const UserData = ({ item, deletedata }:any) => {


    const  { getuserdata, userCount, setUserCount, setRasidentId } : any = useAuth()
    const [modalVisible, setModalVisible] = useState(false);

    let b = getuserdata?.length
    setUserCount(b)





    return (

        <View>
            <View style={{ borderWidth: 1, margin: 16, padding: 15, paddingVertical: 20, flexDirection: "row", gap: 10, backgroundColor: "rgb(255, 254, 248)" }}>
                <View style={{ borderWidth: 1, padding: 10, height: 100, width: 100, alignItems: "center", justifyContent: "center", borderRadius: "100%" }}>
                    <Text>
                        XY
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                        <Text style={{ width: 55 }}>
                            {item.name}
                        </Text>
                        <View style={{ backgroundColor: "pink", padding: 3, borderRadius: 10 }}>
                            <Text style={{ color: "red", fontSize: 10 }}>
                                Administrator
                            </Text>
                        </View>
                    </View>

 <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <UpdateForm setModalVisible={setModalVisible}/>
             
            </View>
          </View>
        </Modal>





                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>
                            {item.email}
                        </Text>

                        <Pressable onPress={() => {
                            setRasidentId(item)
                            setModalVisible(true)
                        }}>
                            <Entypo name="edit" size={16} color="rgb(92, 65, 41)" style={{ width: 40, paddingLeft: 20 }} />

                        </Pressable>
                        <Pressable onPress={() => {
                            deletedata(item)
                        }}>

                            <AntDesign name="delete" size={16} color="red" style={{ width: 40, paddingLeft: 20 }} />
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}>
                        <Entypo name="cross" size={16} color="black" />

                        <Text style={{ fontSize: 12 }}>
                            {item.created_at}
                        </Text>
                    </View>
                </View>
            </View>
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


export default UserData