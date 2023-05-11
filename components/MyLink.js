import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../assets/colors';


export default props => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>    
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    fontWeight: 'bold',
    color: colors.primaryDark,
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});