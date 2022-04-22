import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Notificaiton from "../views/userView/notification";
import SideNav from "../views/userView/sidenav";
import Home from "../views/userView/tabnav/home";
import About from "../views/userView/about";
import Profile from "../views/userView/tabnav/profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const SideStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={SideNav} />
        </Stack.Navigator>
    );
}

const BottomTabNavigator = () => {

    const MainStackNavigator = () => {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="HomeNav" component={MainStackNavigator} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const NotificationStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notificaiton} />
        </Stack.Navigator>
    );
}

const UserStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="TabNav" component={BottomTabNavigator} />
            <Stack.Screen name="SideNav" component={SideStackNavigator} />
            <Stack.Screen name="NotifcationNav" component={NotificationStackNavigator} />
        </Stack.Navigator>
    );
}

export default UserStackNavigator;