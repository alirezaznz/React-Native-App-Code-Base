import React, { useState } from 'react';
// import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux'
import { createStore, configureStore, combineReducers } from 'redux'
import test from "./src/redux/counterReducer"
import { ThemeContext, themes } from '@Theme';
import { ENV } from "@Constants"
import { NativeModules, Text } from 'react-native';

const monitorReducerEnhancer =
  createStore => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now()
      const newState = reducer(state, action)
      const end = performance.now()
      const diff = round(end - start)

      console.log('reducer process time:', diff)

      return newState
    }

    return createStore(monitoredReducer, initialState, enhancer)
  }

const store = createStore(combineReducers({test, monitorReducerEnhancer}))
// const checkCodePushUpdate = () => {
//   return codePush.sync({
//     checkFrequency: codePush.CheckFrequency.ON_APP_START,
//     installMode: codePush.InstallMode.ON_NEXT_RESTART,
//     deploymentKey:
//       Platform.OS === 'android'
//         ? ENV.ANDROID_PRODUCTION_SECRET
//         : ENV.IOS_PRODUCTION_SECRET,
//   });
// };

const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  return (
    <ThemeContext.Provider value={themes[themeMode]}>
      {
        ENV.name != "prod" &&
        <Text
          style={{
            fontSize: 12,
            position: 'absolute',
            top: 30, right: 10, zIndex: 999, color: "red"
          }}>env: {ENV.name}</Text>
      }
      <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
