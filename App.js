import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Button from './components/Button';

const esp8266IPAddress = '192.168.0.13'; // Substitua pelo endereço IP do seu ESP8266
const url = `http://${esp8266IPAddress}/seuarquivo.html`;

alert("teste")
const App = () => {
  alert("teste")
  const handleButtonClick = () => {
    Alert.alert('Botão clicado!', 'Você clicou no botão.', [
      { text: 'OK' }
    ]);
  }

  const sendData = async () => {
    try {
      const response = await axios.post(url, {
        data: 'seus dados aqui',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <Button label='APERTE AQUI'  onClick={() => handleButtonClick('Alim')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App ;