import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Notificaiton from "../screens/userView/notification";
import SideNav from "../screens/userView/sidenav";
import Home from "../screens/userView/tabnav/home";
import About from "../screens/userView/about";
import Profile from "../screens/userView/tabnav/profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const SideStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Menu" component={SideNav} />
        </Stack.Navigator>
    );
}

const UserStackNavigator = () => {
    return (
        <Stack.Navigator  >
            <Stack.Screen name="TabNav" component={BottomTabNavigator} />
            <Stack.Screen name="SideNav" component={SideStackNavigator} />
            <Stack.Screen name="Notification" component={Notificaiton} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

export default UserStackNavigator;