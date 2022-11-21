import React from "react";
import { Text, StyleSheet, View } from "react-native";

import UpHeader from "../../components/UpMenu";
import ScreenMenu from "../../components/screenmenu";
import Header from "./header";

export default function Bank() {
    return <>
    <View style={styles.screen}>
        <UpHeader />
        <Header />
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
})