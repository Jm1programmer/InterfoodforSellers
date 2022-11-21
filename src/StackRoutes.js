import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();

import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Bank from "./screens/bank";

import { ActivityIndicator } from "react-native";



export default function StackRoutes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

    useEffect(() => {
       const unsubscribe = auth().onAuthStateChanged((user_) =>{
          setUser(user_)
          if (initializing) {
            setInitializing(false)
          }
        })

        return unsubscribe
    }, [])

    if (initializing) {
    return (
      <View style={styles.loading}>
       <ActivityIndicator size={'large'} />
      </View>
     
    )
    }

    return (
      <Stack.Navigator 
      screenOptions={{
    headerShown: false
  }}>
        {user == null ? (
          // User isn`t signed in
          <>
          <Stack.Screen name="SignIn" component={SignIn}  />
          </>
          
         
        ) : (
          <>
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Bank" component={Bank}  />
          </>
          // User is signed in
  
        )}
      </Stack.Navigator>
    );

  

  
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
})