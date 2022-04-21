import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={MainStackNavigator} />
      <Tab.Screen name="Tab2" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;