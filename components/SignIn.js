import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native-web';

import MyTextInput from './MyTextInput';
import Button from './Button';
import MyLink from './MyLink'

import { colors } from '../assets/colors';
import icon from '../assets/icon.png';

import auth from '@react-native-firebase/auth'

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';



export function SignIn() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  function signUp() {
  
    alert('Criando Usuário')
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User account created & signed in!');
        const user = userCredential.user
        console.log(user)
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('user is authenticated');
        const user  = userCredential.user
        console.log(user)
      })
      .catch(error => {
        console.error(error);
      });
  }
    return(
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Image resizeMode="contain"  source = {icon} style = {{with:200}}   />
            <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
            <MyTextInput
                placeholder="senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

      <Button  onClick ={signIn} label="Entrar" entrar texto />

      <MyLink label="Cadastrar" onClick ={signUp} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
    },
    title: {
      fontWeight: 'bold',
  
      fontSize: 20,
      textAlign: 'center',
    },
    coffText: {
      color: colors.primary,
      fontWeight: 'bold',
    },
  });

