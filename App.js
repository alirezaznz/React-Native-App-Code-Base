import React, { useState } from 'react';
// import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/redux';
import AppNavigation from './src/navigation';
import { ThemeContext, themes, ENV } from '@Theme';
import { NativeModules, Text } from 'react-native';

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
  const env = NativeModules.RNConfig.env
  return (
    <ThemeContext.Provider value={themes[themeMode]}>
      {
        env != "prod" ? <Text style={{ fontSize: 12, position: 'absolute', top: 30, right: 10, zIndex: 999, color: "red" }}>env: {env}</Text> : null
      }
      <Provider store={Store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
