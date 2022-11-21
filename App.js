import React, {useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";

import StackRoutes from "./src/StackRoutes";


export default  function App() {
  
  return <>

    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>

      
    
  </>
 

}

