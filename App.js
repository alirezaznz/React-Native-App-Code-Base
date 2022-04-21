/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Node } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import Store from "./src/redux/store"
import BottomTabNavigator from "./src/navigation/TabNavigator";

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
