import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesApi } from "../redux/actions";
import userReducer from "../redux/reducers";


const detailscreen = () => {

    const {movies} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect( () => {
         dispatch(getMoviesApi());
    });
 

    return (
        <View style={styles.container}>
           <FlatList
           keyExtractor={(item,index) => index.toString()}
           data={movies}
           renderItem={({item}) => (
               <View style = {styles.container1}>
               <Text style = {{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
               <Text style = {{fontSize:15,fontWeight:"normal"}}>{item.address}</Text>
               </View>
           )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container1: {
        margin: 10,
        width: 340,
        backgroundColor: 'lightgrey',
        padding: 15,
        borderRadius: 10
    }
})

export default detailscreen