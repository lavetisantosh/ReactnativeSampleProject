import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";



const splash = ({ navigation }) => {




    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}

            />
            <Text style={styles.text}>React Native</Text>
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey'

    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginTop: 30,
        fontWeight: "bold"

    }
})


export default splash