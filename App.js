import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SignIn } from './components/SignIn';
import Test_mqtt from './mqtt/test_mqtt';

import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config'


const App = () => {

  const [user, setUser]  = useState(null);
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  useEffect(() => {
   const unsubscribe =   onAuthStateChanged(auth, _user => {
      setUser(_user)
    });

    return unsubscribe;
  }, [])

  return (
    <View style={styles.container}>
      {user ? <Test_mqtt /> : <SignIn />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});


export default App;
