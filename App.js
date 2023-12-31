import { StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import Gallery from './Pages/Gallery'
import Home from './Pages/Home'


const Stack = createNativeStackNavigator()
export default function StackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Group>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Gallery' component={Gallery}/>
    </Stack.Group>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})