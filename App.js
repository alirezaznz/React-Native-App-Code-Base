import React, { useState } from 'react';
// import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';
import { ThemeContext, themes } from '@Theme';
import { ENV } from "@Constants"
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
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
