import React, { useState } from "react";
import { Button, ScrollView, Text, View, StyleSheet, TextInput, Alert } from "react-native";
import HomeScreen from "./homescreen";


const LoginScreen = ({ navigation }) => {

    const image = { uri: "https://reactjs.org/logo-og.png" };

    const [password, onChangePassword] =  useState(null);
  const [username, onChangeName] = useState(null);

 const validateCredentials = () => {
  
    if(username == 'Santosh' && password == 'Kumar'){
      return  navigation.navigate('home')
    } else {
       return Alert.alert('Enter Correct Details')
    }
    
  }
  

    return (
            <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={username}
            placeholder="Enter Name"
            keyboardType="numeric"
            keyboardAppearance="default"
            keyboardType = "default"
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter Password"
            keyboardType="numeric"
            keyboardAppearance="default"
            keyboardType = "default"
          />

          <Button
            style = {styles.buttonStyle}
            title="Login"
            onPress={() => validateCredentials()}/>
        
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        height: '100%',
        alignItems : 'center',
        margin : 10
    },
    background : {
        width : '9%',
        height : '30%',
       color : 'lightred',
       borderRadius : 20,

    },
    input: {
        height: 45,
        width : '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10
      },
      buttonStyle : {
          height: 50,
          width : '50%',
          color: 'lightblue',
          fontSize : 12,
          textAlign : "center",
          marginTop : 50,
          borderRadius : 20
      }
})

export default LoginScreen;