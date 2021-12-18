import React, { useState } from "react";
import { Button, ScrollView, Text, View, StyleSheet, TextInput, Alert,Image, TouchableOpacity } from "react-native";
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
            <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}

        />
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

          <TouchableOpacity
           style = {styles.buttonStyle}
           onPress={() => validateCredentials()}>
          <Text style = {{fontSize:20, textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
        
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
          backgroundColor: 'lightblue',
          fontSize : 12,
          shadowColor: 'lightblack',
          elevation : 5,
          textAlign : "center",
          justifyContent : 'center',
          marginTop : 50,
          borderRadius : 20
      }
    ,
    tinyLogo: {
      width: 200,
      height: 200,
      margin: 30
  },
})

export default LoginScreen;