import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown';
import Checkbox from 'expo-checkbox';


const ReadyBook = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [value, setValue] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const [isChecked, setChecked] = useState(false)

  // console.log(checkPlan?.label)


  const itemData = [
    { label: 'All plasn', value: '1' },
    { label: 'Growth', value: '2' },
    { label: 'Starter', value: '3' },
    { label: 'Pro', value: '4' },
    { label: 'Without Subscription', value: '5' },
  ];


  return (
    <ScrollView>
      <View style={{ padding: 30, backgroundColor: "rgb(255, 254, 248)" }}>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 14, justifyContent: "space-between" }}>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 14 }}>
            <View >
              <FontAwesome name="arrow-left" size={24} color="black" />
            </View>

            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="book" size={24} color="rgb(22, 163, 74)" />

                <Text style={{ fontSize: 24, marginHorizontal: 10 }}>ReadyBook</Text>
              </View>
              <Text style={{ fontSize: 15 }}>22 books found • 18 ready to print</Text>
            </View>
          </View>
          <View style={{ alignContent: "center", flexDirection: "row", gap: 8 }}>
            <FontAwesome name="arrow-left" size={24} color="black" />
            <Text style={{ fontSize: 18 }}>update</Text>
          </View>
        </View>
        <View style={{ paddingTop: 20, gap: 30, borderRadius: "10" }}>
          <View style={{ backgroundColor: "white", borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, borderWidth: 0.1 }}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ fontSize: 16 }}>Ready to print</Text>
              <Text style={{ fontSize: 30, fontWeight: "600", color: "rgb(22, 163, 74)" }}>18</Text>
            </View>
            <View style={{ backgroundColor: "rgb(220, 252, 231)", borderRadius: "50%" }}>
              <FontAwesome name="arrow-left" size={24} color="rgb(22, 163, 74)" style={{ padding: 18 }} />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20, gap: 30, borderRadius: "10" }}>
          <View style={{ backgroundColor: "white", borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, borderWidth: 0.1 }}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ fontSize: 16 }}>In progress</Text>
              <Text style={{ fontSize: 30, fontWeight: "600", color: "rgb(37, 99, 235)" }}>4</Text>
            </View>
            <View style={{ backgroundColor: "rgb(219, 234, 254)", borderRadius: "50%" }}>
              <FontAwesome name="arrow-left" size={24} color="rgb(37, 99, 235)" style={{ padding: 18 }} />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20, gap: 30, borderRadius: "10" }}>
          <View style={{ backgroundColor: "white", borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, borderWidth: 0.1 }}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ fontSize: 16 }}>Shipped/delivered</Text>
              <Text style={{ fontSize: 30, fontWeight: "600", color: "rgb(79, 70, 229)" }}>18</Text>
            </View>
            <View style={{ backgroundColor: "#E0E7FF", borderRadius: "50%" }}>
              <FontAwesome name="arrow-left" size={24} color="rgb(79, 70, 229)" style={{ padding: 18 }} />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20, gap: 30, borderRadius: "10" }}>
          <View style={{ backgroundColor: "white", borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, borderWidth: 0.1 }}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ fontSize: 16 }}>Turnover</Text>
              <Text style={{ fontSize: 30, fontWeight: "600", color: "rgb(22, 163, 74)" }}>18</Text>
            </View>
            <View style={{ backgroundColor: "rgb(220, 252, 231)", borderRadius: "50%" }}>
              <FontAwesome name="arrow-left" size={24} color="rgb(22, 163, 74)" style={{ padding: 18 }} />
            </View>
          </View>
          <View style={{ borderRadius: 10, borderWidth: 0.1, }}>
            <View style={{ padding: 0 }}>
              <View style={{ paddingHorizontal: 10, paddingTop: 30, flexDirection: "row" }}>
                <View style={{ height: 40, width: "80%", borderWidth: 0.2, borderRadius: 10, flexDirection: 'row', alignItems: "center", paddingHorizontal: 5 }}>
                  <FontAwesome name="search-minus" size={24} color="rgb(22, 163, 74)" />
                  <TextInput placeholder='Search for a residebent title or room.'></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: 10, padding: 10 }}>
                <Text>
                  Sellect all
                </Text>
                <FontAwesome name="search-minus" size={24} color="rgb(22, 163, 74)" />
                <Text>
                  22 book(s)
                </Text>
                <View style={styles.container}>

                  <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={itemData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item);
                      // setCheckPlan(item)
                      setIsFocus(false);
                      // setFormdata({ ...formdata, role: item.label })

                    }}


                  />
                </View>
              </View>


            </View>
          </View>
          <View style={{ backgroundColor: "white", gap:10, width: "100%", borderWidth: 0.1,borderLeftWidth:5, borderColor:"rgb(34, 197, 94)", borderRadius: 10 ,padding:18 }}>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
              <View style={{ height: 40, width: 40, backgroundColor: "rgb(185, 131, 82)", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                <Text>
                  NR
                </Text>
              </View>

              <View style={{ width: "20%" }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Book of Memories
                  New Resident
                </Text>
                <Text>
                  Room 200
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", width: "20%", height: 60, paddingHorizontal: 10, paddingVertical: 1, borderRadius: 20, backgroundColor: "rgb(220, 252, 231)" }}>
                <FontAwesome name="search-minus" size={10} color="rgb(22, 163, 74)" />
                <Text style={{ color: "rgb(22, 163, 74)" }}>
                  Ready to prity
                </Text>
              </View>
              <View style={{ flexDirection: "row", backgroundColor: "rgb(59, 130, 246)", height: 40, width: "20%", borderRadius: 20, alignItems: "center", justifyContent: "center", gap: 10 }}>
                <FontAwesome name="search-minus" size={12} color="white" />
                <Text style={{ color: 'white', fontWeight: 600 }}>
                  See
                </Text>
              </View>
            </View>
            <View style={{  flexDirection: "row", marginLeft: 60, justifyContent: "space-between" }}>
              <View>
                <Text style={{ color: 'black', fontWeight: 600 }}>
                  Questions:2/52
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: 'black', fontWeight: 600 }}>

                  Additional
                </Text>
                <Text> quantity:</Text>
              </View>
              <View>
                <Text style={{ color: 'black', fontWeight: 600 }}>

                  2
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: 60, gap: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome name="search-minus" size={20} color="black" />

                <Text>
                  Finished it Invalid Date
                </Text>

              </View>

              <Text>
                Finished it Invalid Date
              </Text>
            </View>
          </View>
        </View>



      </View>
    </ScrollView>
  )
}

export default ReadyBook


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    borderRadius: 10
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 6,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },


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

  container2: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },

}

)
