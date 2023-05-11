import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Client, Message } from 'paho-mqtt';
import { SignIn } from './components/SignIn';


//const brokerUrl = 'wss://broker.hivemq.com:8883/';
const brokerUrl = '85fda6f3267443b1b38364a8827cefe0.s2.eu.hivemq.cloud';
const username = 'cats_feeders';
const password = '12345678';
const topic = '/led_state';
const port= 8884

const App = () => {
  const [message, setMessage] = useState('');
  const [client, setClient] = useState(null);



  useEffect(() => {
    const mqttClient = new Client(brokerUrl,port, 'clientId-');

    mqttClient.onConnectionLost = (responseObject) => {
      alert('Conexão perdida: ' + responseObject.errorMessage);
    };

    mqttClient.onMessageArrived = (message) => {
      alert('Mensagem recebida: ' + message.payloadString);
    };

    mqttClient.subscribe

    mqttClient.connect({
      useSSL: true,
      userName: 'cats_feeders',
      password: '12345678',
      onSuccess: () => {
        alert('Conexão bem-sucedida');
        setClient(mqttClient);
        mqttClient.subscribe(topic);
      },
      onFailure: (responseObject) => {
        alert('Falha na conexão: ' + responseObject.errorMessage);
      }
    });
  }, []);

  const handleSendMessage = () => {
    if (client && client.isConnected()) {
      const messageToSend = new Message(message);
      messageToSend.destinationName = topic;
      client.send(messageToSend);
      setMessage('');
      alert(message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envio de Mensagens MQTT</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Digite a mensagem a ser enviada"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <SignIn />
      
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
