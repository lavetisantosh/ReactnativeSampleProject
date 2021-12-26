import React, { useState } from "react";
import { Button, ScrollView, Text, View, StyleSheet, TextInput, Alert,Image, TouchableOpacity, Modal } from "react-native";
import MyCustomButton from "../customcomponents/MyCustomButton";
import HomeScreen from "./homescreen";


const LoginScreen = ({ navigation }) => {

    const image = { uri: "https://reactjs.org/logo-og.png" };

    const [password, onChangePassword] =  useState(null);
  const [username, onChangeName] = useState(null);
  const [showWaring, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState('');

 const validateCredentials = () => {
  
  // if(username == null || password  == null){
  //     setWarningText('Please enter the UserName and Password.');
  //     setShowWarning(true);
  // } else  if(username == 'Santosh' && password == 'Kumar'){
  //       navigation.navigate('home');
  //   } else {
  //     setWarningText('UserName and Password are incorrect.');
  //     onChangeName(null);
  //     onChangePassword(null);
  //      setShowWarning(true);
  //   }

    navigation.navigate('home');
    
  }
  

    return (
            <View style={styles.container}>
            <Modal
            visible={showWaring}
            onRequestClose={()=>setShowWarning(false)}>
            <View style = {styles.cardViewStyle}>
            <View style = {styles.customDialog}>
            <View>
            <Text style = {styles.warning_text}>Warning</Text>
            </View>
            <Text style = {{fontSize : 15,marginTop : 20}}>{warningText}</Text>
            <TouchableOpacity
           style = {styles.dialogButton}
           onPress={() => setShowWarning(false)}>
          <Text style = {{fontSize:20, textAlign: 'center'}}>Okay</Text>
          </TouchableOpacity>
            </View>
            </View>
            </Modal>
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
          <MyCustomButton
          onPressFunction = {validateCredentials}
          title = {'Login'}/>
        
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
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
          height: 45,
          width : '50%',
          backgroundColor: 'lightblue',
          fontSize : 12,
          shadowColor: 'lightblack',
          elevation : 5,
          textAlign : "center",
          justifyContent : 'center',
          marginTop : 50,
          borderRadius : 25
      }
    ,
    tinyLogo: {
      width: 200,
      height: 200,
      margin: 30
  },
  cardViewStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems : "center",
    backgroundColor : '#00000099'
  },
  customDialog : {
    width : 250,
    height : 200,
    backgroundColor : '#fff',
    alignItems: 'center',
    borderRadius : 20
  },
  warning_text : {
    fontSize : 30,
    marginTop : 20,
    color : 'red'
  },
  dialogButton : {
    height: 35,
    width : 100,
    backgroundColor: 'lightgrey',
    fontSize : 10,
    shadowColor: 'lightblack',
    elevation : 5,
    textAlign : "center",
    justifyContent : 'center',
    marginTop : 30,
    borderRadius : 25
}

})

export default LoginScreen;