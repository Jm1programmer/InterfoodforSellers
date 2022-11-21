import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import firestore from '@react-native-firebase/firestore';
export default function Graphics() {
    const [getData, SetgetData] = useState();
    const tempDoc = []
    const [data, setData] = useState([])
    const DataLabel = ["6.00","12.00","18.00","0.00","6.00"]
    const contentInset = { top: 20, bottom: 20 }
    
    function getMarkers() {
        const events =  firestore().collection('foodRequests')
        events.get().then((querySnapshot) => {
           
            querySnapshot.forEach((doc) => {
               tempDoc.push( doc.data().preco )
              
            })
           
         
          
          
         }
         
         )
       }

       

       useState(() => {
            getMarkers()
            setData(tempDoc)
            console.log(data)
       }, [])
    
    return <>
    <View style={styles.titles}>
       <Text style={styles.Title}>Vendas Diárias</Text>
       <TouchableOpacity>
       <Text style={styles.SeeAll}>Veja Tudo</Text>
       </TouchableOpacity>
    
       </View>
       <View style={styles.graphic}>
 <View style={{ height: 200, flexDirection: 'row',  }}>
 
 
           
            <LineChart
                            style={{ height: 200, width: '90%'}}
                            data={data}
                            curve={shape.curveNatural}
                            svg={{ stroke: '#2B2A41' }}
                            contentInset={{ top: 20, bottom: 20 }}
                            
                        >
                            <Grid
                           svg={{ stroke: 'rgba(112, 112, 112, 0.1);' }}
                          
                             />
                             
                        </LineChart>

                        <View style={{ height: 200,  flexDirection: 'row', paddingHorizontal: 10,   }}>
                            <YAxis
                                data={data}
                                contentInset={contentInset}
                                svg={{
                                    fill: '#000',
                                    fontSize: 10,
            	                    fontFamily: 'Archivo-Regular',
                                }}
                                
                                numberOfTicks={7}
                                formatLabel={(value) => `${value}`}
                            />
                            </View>

                           
            </View>
            <View style={{  paddingHorizontal: 20, width: '90%' }}>
            <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={DataLabel}
                    formatLabel={(value, index) => `${index}:00`}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{
                        fill: '#000',
                                    fontSize: 10,
            	                    fontFamily: 'Archivo-Regular',
                    }}
                    numberOfTicks={3}
                />
                </View>
                </View>
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
    graphic: {
        alignItems: 'center'
    }
})