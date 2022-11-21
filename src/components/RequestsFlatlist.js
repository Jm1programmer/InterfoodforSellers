

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import Menu from "./RequestsMenu";
import { ActivityIndicator } from "react-native";

import firestore from '@react-native-firebase/firestore';



export default function RequestsFlatlist({ Topo}) {
    const [initializing, setInitializing] = useState(true);
    const [lista, setLista] = useState([]);
        const getFood = async() => {
            await firestore()
            .collection('foodRequests')
           
            .orderBy('data')
            
            .onSnapshot(
                querySnapshot => {
                    let doc = [];
                     querySnapshot.forEach(documentSnapshot => {
                       //console.log('Food Id: ', documentSnapshot.id, '=>' ,documentSnapshot.data())
                       const food = {
                           nome: documentSnapshot.get('name'),
                           preco: documentSnapshot.get('preco'),
                           quantidade:documentSnapshot.get('quantidade'),
                           foodName:documentSnapshot.get('foodName'),
       
                       }
                       doc.push(food);
                       if (initializing) {
                           setInitializing(false)
                         }
                     });
                   
                     setLista(doc)
                   }
            )
            
            
    }
   
    useEffect(() => {
    
       getFood()
     
    }, []);

    
  if (initializing) {
    return <ActivityIndicator size={'large'} />;
  }
return <>
        <FlatList 
        data={lista}
        renderItem={({ item }) =>  <Menu  {...item}  />  }
 
        ListHeaderComponent={Topo}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
    </>
}


const height = Dimensions.get('screen').height