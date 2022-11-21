import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'

export default function Header() {
    const preco = 2564.12;
    const Preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        setImageUrl('https://i.imgur.com/hWf2Itr.png')
      }, []);
    return <>
    <View style={styles.Header}>
       <View style={styles.moneyCart}>
            <View style={styles.MoneyInfo}>
                 <Text style={styles.preco}>{Preco}</Text>
                 <View style={styles.MoneyInfoLocation}>
                     <Text style={styles.MoneyLocation}>Reais</Text>
                    <Image style={styles.Countryimage} source={{uri: imageUrl}} />
                 </View>
            
            </View>

            <View style={styles.InteractiveView}>
                    <TouchableOpacity style={styles.threeDots}>
                    <Icon name="dots-three-horizontal" size={20} color="#000" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.SendButton}>
                        <Text style={styles.SendText}>Mandar</Text>
                    </TouchableOpacity>
            </View>
           
       </View>
    
    </View>
  
    </>
}

const styles = StyleSheet.create({
    Header: {
    alignItems: 'center'
        
    },
    moneyCart: {
        width: '90%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      
    },

    preco: {
        fontSize: 26,
        color: '#000',  
        fontFamily: 'Archivo-Bold',
        
    },

    MoneyInfoLocation: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    MoneyLocation: {
        fontSize: 16,
        color: '#808080',  
        fontFamily: 'Archivo-Regular',
    },
    Countryimage: {
        width: 30,
        height: 30,
        marginHorizontal: 8,
    },

    threeDots: {
        width: 30,
        height: 30,
        backgroundColor: '#C6C6C6',
        borderRadius: 6,
        elevation: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    InteractiveView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    SendButton: {
        width: 90,
        height: 40,
        backgroundColor: '#2B2A41',
        borderRadius: 6,
        elevation: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    SendText: {
        fontSize: 18,
        color: '#F1EFF1',  
        fontFamily: 'Archivo-Regular',
    },
})