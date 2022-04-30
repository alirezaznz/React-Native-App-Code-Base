import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../screens/authentication/login';

const Stack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
