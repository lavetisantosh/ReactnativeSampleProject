import React from "react";
import { StyleSheet, View,Text } from "react-native";


const detailscreen = () => {

    return(
        <View style = {styles.container}>
        <Text style = {{fontSize:20, textAlign: 'center'}}>Login</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default detailscreen