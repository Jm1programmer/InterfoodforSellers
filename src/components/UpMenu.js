import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity  } from "react-native";

import Ficon from 'react-native-vector-icons/Feather'
import Aicon from 'react-native-vector-icons/AntDesign'



import auth from '@react-native-firebase/auth'




    
export default function UpHeader() {


    
    

    function signOut() {
        auth().signOut()
    }
    

    return <>
    <View style={styles.header} >
        <TouchableOpacity style={styles.menu} onPress={signOut}>
            <Aicon name="logout" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.info}>
            <Ficon name="map-pin" size={20} color="#2B2A41" />
            <Text style={styles.LocationText}>Colegio Ideal, QNG 26 Taguatinga</Text>
            <TouchableOpacity>
            <Ficon name="chevron-down" size={20} color="#181818" />
            </TouchableOpacity>
        </View>

        <TouchableOpacity>
            <Ficon name="bell" size={20} color="#2B2A41" />
        </TouchableOpacity>
        

    </View>
    </>
}



const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 250,
        
    },
    LocationText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#000'
    },

    userImg: {
        width: 45,
        height: 45,
        borderRadius: 6,
    },

    menu: {
        width: 40,
        height: 40,
        backgroundColor: '#2B2A41',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
})