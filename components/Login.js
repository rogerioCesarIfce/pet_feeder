import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // Importação do ícone

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Instanciação do objeto de navegação

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Logged in successfully!');
        navigation.navigate('Profile'); // Navegação para a tela de perfil após login bem-sucedido
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <AntDesign name="dog" size={100} color="black" /> {/* Adicionando o ícone */}
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Image source={require('./images/pets.jpg')} style={styles.image} /> {/* Adicionando a imagem */}
      <Button title='Login' onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
