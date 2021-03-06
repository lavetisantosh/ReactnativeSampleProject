import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View,StyleSheet, FlatList, TouchableOpacity, RefreshControl, Alert, SafeAreaView} from "react-native";
import { getMoviesApi } from "../apifactory/APIFactory";
import CustomToolBar from "../customcomponents/CustomToolBar";


const HomeScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data)
    const [refreshing, setRefresh] = useState(false)

    const goBack = () => {
        navigation.navigate('login');
    }

    useEffect(() => {
        fetch('https://mocki.io/v1/69475ecc-8eb2-48a9-8b46-6a9d846dd238')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);


      const onRefresh = () => {
         setRefresh(false)
      }


    return (
         
            <SafeAreaView style={styles.container}>
                <CustomToolBar
                onPressFunction = {goBack}
                title = {'Home Screen'}
                />
                <FlatList 
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item) => item.id}
                data={data.users}
                renderItem={({ item }) => (
                    <TouchableOpacity style = {styles.container1}
                    onPress={() => navigation.navigate('detail')}>
                    <Text style = {{fontSize: 25,fontWeight:"bold"}}>{item.name}</Text>
                    <Text style = {{fontSize: 18,marginTop:5}}>{item.work}</Text>
                    </TouchableOpacity>
                )}
                refreshControl={
                    <RefreshControl
                    refreshing = {refreshing}
                    onRefresh={onRefresh}
                    colors={['#000']}/>
                }/>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },

    container1 : {
        margin:10,
        width : 340,
        backgroundColor: 'lightblue',
        padding:15,
        borderRadius:10
    }
})

export default HomeScreen;