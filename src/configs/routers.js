import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import SearchScreen from '../Screens/Search';
import Restaurante from '../Screens/Restaurante';

const Stack = createStackNavigator();

export default ()=>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Restaurante" component={Restaurante} options={{ headerShown: false }}  />
      </Stack.Navigator>
    )
}