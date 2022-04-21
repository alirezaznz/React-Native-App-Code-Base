import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../views/authView/login";

const Stack = createStackNavigator();


const UserStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default UserStackNavigator;