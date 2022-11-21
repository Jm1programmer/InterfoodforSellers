import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ficon from 'react-native-vector-icons/FontAwesome'
import Micon from 'react-native-vector-icons/MaterialIcons'
import Aicon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";

export default function ScreenMenu() {
    const navigation = useNavigation()
    
    return <>
   <View style={styles.Menu}>
    <TouchableOpacity onPress={() => {
         navigation.navigate('Home')
    }}>
           <Aicon style={styles.Icon} name="home" size={30} color="#2B2A41" />
    </TouchableOpacity>
  
  

   <TouchableOpacity onPress={() => {
        navigation.navigate('Bank')
    
   }}>
          <Micon name="attach-money" size={35} color={"#2B2A41"}/>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => {
 
    
   }}>
          <Micon name="fastfood" size={35} color={"#2B2A41"}/>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => {
   
   
   }}>
       <Ficon style={styles.Icon} name="user-circle-o" size={30} color="#2B2A41" />
   </TouchableOpacity>

   </View>
    </>
}

const styles = StyleSheet.create({
    Menu: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        flexDirection: 'row',
        borderRadius: 6,
    },
    Icon: {
        marginHorizontal: 12,
    }
})