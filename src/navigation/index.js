import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import UserStackNavigator from "./UserNavigation";
import AuthStackNavigation from "./AuthNavigation";
import Loading from "../views/loading";
import AppIntro from "../views/intro"

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Intor" component={AppIntro} />
      <Stack.Screen name="AuthNav" component={AuthStackNavigation} />
      <Stack.Screen name="UserNav" component={UserStackNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigation;