import React, { useState } from "react";
import { StyleSheet, View,Text,FlatList,RefreshControl } from "react-native";


const detailscreen = () => {

    const URL = 'https://mocki.io/v1/849787a8-3151-44e9-9679-f7012c57d5ee'

    const [refreshing,setRefresh] = useState(false)

    const onRefresh = () => {
        setRefresh(true)
        setUsersList([...users,{"name": "James","address":"Pune"}])
        setRefresh(false)
    }

    const [users,setUsersList] = useState(
            [{
                "name": "Adam Carter",
                "address": "Bangalore",
                "location": "83 Warner Street"
            }, {
                "name": "SPider Man",
                "address": "Hyderabad",
                "location": "USA Kingdom"
            }, {
                "name": "Leanne",
                "address": "Hyderabad"
            }, {
                "name": "Paagal",
                "address": "Vizag"
            }, {
                "name": "Doom",
                "address": "Hyderabad, SR Nagar"
            }, {
                "name": "Doom2",
                "address": "Hyderabad, Uppal"
            }]
    );

    return(
        <View style={styles.container}>
        <FlatList 
        showsVerticalScrollIndicator = {false}
        keyExtractor={(item,index) => index.toString}
        data={users}
        renderItem={({ item }) => (
            <View style = {styles.container1}>
            <Text style = {{fontSize: 25,fontWeight:"bold"}}>{item.name}</Text>
            <Text style = {{fontSize: 18,marginTop:5}}>{item.address}</Text>
            </View>
        )}
        refreshControl={
            <RefreshControl
            refreshing = {refreshing}
            onRefresh={onRefresh}
            colors={['#000']}/>
        }
        />
    </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    container1 : {
        margin:10,
        width : 340,
        backgroundColor: 'lightgrey',
        padding:15,
        borderRadius:10
    }
})

export default detailscreen