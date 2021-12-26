import React from "react";
import { Image, ImageStore, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const CustomToolBar = (props) => {
    return (
        <View style = {styles.container}>
        <TouchableOpacity
        onPress={() => props.onPressFunction()}>
        <Text>Back</Text>
        </TouchableOpacity>
        <Text style = {styles.textStyle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height : 50,
        width : '100%',
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems : 'center',
        paddingStart : 20,
        elevation : 10,
        shadowColor : 'black',
        borderRadius : 30,
        marginStart : 15,
        marginEnd: 15
    },
    backButton :{
        width : 50,
        height: 50
    },
    textStyle:{
        fontSize:20,
        justifyContent: 'center',
        alignItems : 'center',
        fontWeight:'bold',
        color : '#ffffff',
        marginStart : 90

    }
});

export default CustomToolBar;