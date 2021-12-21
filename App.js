import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/homescreen';
import splash from './src/screens/splashscreen';
import DetailScreen from './src/screens/detailsscreen'


const Stack = createNativeStackNavigator();

const APP = () => {
  return (
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
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default APP;