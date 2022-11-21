import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import UpHeader from "../../components/UpMenu";
import ScreenMenu from "../../components/screenmenu";
import Header from "./header";
import Graphics from "./graphic";
import RequestsFlatlist from "../../components/RequestsFlatlist";

function Topo() {
return <>
<UpHeader />
        <Header />
        <Graphics />

        <View style={styles.titles}>
       <Text style={styles.Title}>Transações recentes</Text>
       <TouchableOpacity>
       <Text style={styles.SeeAll}>Veja Tudo</Text>
       </TouchableOpacity>
       </View>
</>
}
export default function Bank() {
    return <>
    <View style={styles.screen}>
  

        <RequestsFlatlist Topo={Topo} />
    </View>
    <ScreenMenu />
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F1EFF1',
        justifyContent: 'flex-start'
    },

    titles: {
        paddingHorizontal: 10,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between' 
    },
    Title: {
        fontSize: 18,
        color: '#000',
      
        fontFamily: 'Archivo-SemiBold',
    },
    SeeAll: {
        fontSize: 15,
        color: '#2B2A41',
      
        fontFamily: 'Archivo-SemiBold',
    },
})