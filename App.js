import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import Store from './src/configs/Store'
import Routers from './src/configs/routers'


export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor="#fcd4c8" />
    </Provider>
  );
}