import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'abc123');  
      navigation.replace('Home');  
    } catch (error) {
      console.error('Erro ao salvar token', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CHURNANALYTICS</Text>
      
      <Image
        source={require('../assets/woman.png')}  
        style={styles.image}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor="#FFFFFF"  
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        placeholderTextColor="#FFFFFF"  
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#FFFFFF" />  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',  
  },
  headerText: {
    position: 'absolute',
    top: 80,  
    right: 20,
    fontSize: 18,
    color: '#FFFFFF',  
    fontWeight: 'bold',
  },
  image: {
    width: 250,  
    height: 250,
    resizeMode: 'contain',  
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#FFFFFF',  
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#FFFFFF',  
  },
  buttonContainer: {
    marginTop: 20,
    width: 250,
  },
});

export default LoginScreen;
