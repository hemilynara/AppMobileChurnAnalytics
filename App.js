import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';  
import LoginScreen from './screens/LoginScreen';
import InicialScreen from './screens/InicialScreen';  
import AboutUsScreen from './screens/AboutUsScreen'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen 
          name="Inicial" 
          component={InicialScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AboutUs" 
          component={AboutUsScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
