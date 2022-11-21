import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View } from "react-native";
import UpHeader from "../../components/UpMenu";
import CantEnter from "./cantEnter";
import firestore from '@react-native-firebase/firestore';
import RequestsFlatlist from "../../components/RequestsFlatlist";
import ScreenMenu from "../../components/screenmenu";
import auth from '@react-native-firebase/auth'


const user = auth().currentUser;

export default function Home() {

    
    const Topo = () => {
        return <>
        <UpHeader />
        <Text style={styles.title}>Pedidos</Text>
       </>
    }


    const [canEnter, NotcanEnter] = useState(null)
    const getUser = () => { 
        firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      
      if (documentSnapshot.exists) {
    
        NotcanEnter(documentSnapshot.data().role)
        
       
      }
    });
}

getUser()

    console.log(canEnter)
    if (canEnter) {
       
    return <>

 
    <View style={styles.screen}>
        <RequestsFlatlist Topo={Topo} />
    </View>
        <ScreenMenu />
    </>
    } else {
        return <>
            <CantEnter />
        </>
    }
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
     
    },
    title: {
        fontSize: 20,
        color: "#2B2A41",
        fontFamily: 'Archivo-SemiBold',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
})

