import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View,StyleSheet, FlatList} from "react-native";
import { getMoviesApi } from "./apifactory/APIFactory";


const HomeScreen = ({ navigation }) => {

    // const [people,setPeople] = useState([
    //     {name: 'santosh', description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl',id:'1'},
    //     {name: 'ajay', description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl',id:'2'},
    //     {name: 'shiva', description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl',id:'3'},
    //     {name: 'venki', description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl',id:'4'},
    //     {name: 'ganesh',description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl', id:'5'},
    //     {name: 'ravi',description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl', id:'6'},
    //     {name: 'sai', description:'Somethindfljsfljsfkjslsjfksjdfljfslfsjfkssdlfjsdfl',id:'7'}
    // ])

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data)

    useEffect(() => {
        fetch('https://mocki.io/v1/69475ecc-8eb2-48a9-8b46-6a9d846dd238')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);


    return (
            <View style={styles.container}>
                <FlatList 
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item) => item.id}
                data={data.users}
                renderItem={({ item }) => (
                    <View style = {styles.container1}>
                    <Text style = {{fontSize: 25,fontWeight:"bold"}}>{item.name}</Text>
                    <Text style = {{fontSize: 18,marginTop:5}}>{item.work}</Text>
                    </View>
                )}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
        margin : 10
    },

    container1 : {
        margin:10,
        width: '100%',
        backgroundColor: 'lightblue',
        padding:15,
        borderRadius:10
    }
})

export default HomeScreen;