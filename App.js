import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Button from './components/Button';


const App = () => {
  const sendMessage = (message) =>{
    Alert.alert(message)
        
  }
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <Button label='APERTE AQUI'  onClick={() => sendMessage('Alim')}/>
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