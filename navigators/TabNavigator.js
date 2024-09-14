import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import StatusDaSemanaScreen from '../screens/StatusdaSemanaScreen';
import BenchmarkingComparativoScreen from '../screens/BenchmarkingComparativoScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Foundation from '@expo/vector-icons/Foundation';
import { Text, StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#6495ED', // Cor de fundo da barra de navegação
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'Home') {
            iconName = 'home';
            IconComponent = AntDesign;
          } else if (route.name === 'StatusDaSemana') {
            iconName = 'event'; // Nome alternativo para o ícone de calendário
            IconComponent = MaterialIcons;
          } else if (route.name === 'BenchmarkingComparativo') {
            iconName = 'graph-bar';
            IconComponent = Foundation;
          }

          return <IconComponent name={iconName} size={size} color="#FFFFFF" />;
        },
        tabBarLabelStyle: {
          display: 'none', // Esconde os rótulos das abas
        },
        headerStyle: {
          backgroundColor: '#6495ED', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicial' }}
      />
      <Tab.Screen
        name="StatusDaSemana"
        component={StatusDaSemanaScreen}
        options={{ title: 'Status da Semana' }}
      />
      <Tab.Screen
        name="BenchmarkingComparativo"
        component={BenchmarkingComparativoScreen}
        options={{ title: 'Benchmarking Comparativo' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
