import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Ficon from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth'

export default function CantEnter() {
    const navigation = useNavigation()

    function signOut() {
        auth().signOut()
    }
    
    return <>
 
 
    <View style={styles.screen}>

   
    <Text style={styles.Title}>Você não tem permissão para entrar.</Text>

     <Ficon name="x-circle" size={120} color="#E81C23" />
       
        
       
    </View>

    <TouchableOpacity style={styles.goback}  onPress={() => {
           signOut()
        }
         }>
        <Ficon style={styles.IconLeft} name="chevron-left" size={50} color="#f2f7f2" />
        </TouchableOpacity>
   
    </>
   
}




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#2B2A41',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    Title: {
        fontFamily: 'Archivo-SemiBold',
        fontSize: 28,
        color: '#fff',
        textAlign: 'center',
        width: '90%',
        marginBottom: 30,
     
    },
    Text: {
        fontFamily: 'Archivo-Regular',
        fontSize: 15,
        color: '#E81C23',
        textAlign: 'center',
      
    },

    goback: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 90,
        position: 'absolute',
        margin: 20,
       },
})

