import  React from 'react'
import{
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import { colors } from '../assets/colors';


export default props => {

const stylesButton = [styles.button]
if(props.double) stylesButton.push(styles.buttonDouble)        
if(props.entrar) stylesButton.push(styles.buttonEntrar)        
if(props.triple) stylesButton.push(styles.buttonTriple)        
if(props.operation) stylesButton.push(styles.operationButton)        
if(props.texto) stylesButton.push(styles.text)        

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        fontSize: 20,
        justifyContent:'center',
        alignContent: 'center',
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth:1,
        borderColor:'#888',
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble:{
        width:(Dimensions.get('window').width/4)*2,
    },
    buttonTriple:{
        width:(Dimensions.get('window').width/4)*3,
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonEntrar: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        padding: 20,
        minWidth: 150,
    },
})