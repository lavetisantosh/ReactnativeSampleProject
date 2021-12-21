import React from "react";
import { StyleSheet, View,Text } from "react-native";


const detailscreen = () => {

    const URL = 'https://mocki.io/v1/849787a8-3151-44e9-9679-f7012c57d5ee'

    return(
        <View style = {styles.container}>
        <Text style = {{fontSize:20, textAlign: 'center'}}>Detail Screen</Text>
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