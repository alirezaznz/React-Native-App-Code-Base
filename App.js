import React, { useEffect, useState } from 'react';
// import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native'
import NetInfo from "@react-native-community/netinfo";;
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux'
import { ThemeContext, themes } from '@Theme';
import { ENV } from "@Constants"
import { Text } from 'react-native';
import store from "./src/redux/store"
import {NetworkStateCheck} from "@Components"

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
          <NetworkStateCheck/>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
