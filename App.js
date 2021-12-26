import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/homescreen';
import splash from './src/screens/splashscreen';
import DetailScreen from './src/screens/detailsscreen'
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


const Stack = createNativeStackNavigator();

const APP = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen
          name="splash"
          component={splash}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ title: 'Login' ,headerBackVisible:false}}
        />
        <Stack.Screen name="home" 
        component={HomeScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="detail" 
        component={DetailScreen}
        options={{headerShown:true}}
         />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default APP;