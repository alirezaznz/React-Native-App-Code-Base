import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserStackNavigator from './UserNavigation';
import AuthStackNavigation from './AuthNavigation';
import Loading from '../screens/loading';
import AppIntro from '../screens/intro';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {/* <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Intor" component={AppIntro} /> */}
            <Stack.Screen name="AuthNav" component={AuthStackNavigation} />
            <Stack.Screen name="UserNav" component={UserStackNavigator} />
        </Stack.Navigator>
    );
};

export default AppNavigation;
