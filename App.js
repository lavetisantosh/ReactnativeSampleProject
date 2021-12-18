import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/homescreen';
import splash from './screens/splashscreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default APP;