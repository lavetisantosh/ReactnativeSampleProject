import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const MyCustomButton = (props) => {

    return(
        <TouchableOpacity
        style = {styles.buttonStyle}
        onPress={() => props.onPressFunction()}>
       <Text style = {{fontSize:20, textAlign: 'center'}}>{props.title}</Text>
       </TouchableOpacity>
    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
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

})


export default MyCustomButton;