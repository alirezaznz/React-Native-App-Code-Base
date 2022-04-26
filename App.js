import React, {useState} from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Store from './src/redux';
import AppNavigation from './src/navigation';
import {ThemeContext, themes, KEYS} from '@Constants';

// const checkCodePushUpdate = () => {
//   return codePush.sync({
//     checkFrequency: codePush.CheckFrequency.ON_APP_START,
//     installMode: codePush.InstallMode.ON_NEXT_RESTART,
//     deploymentKey:
//       Platform.OS === 'android'
//         ? KEYS.ANDROID_PRODUCTION_SECRET
//         : KEYS.IOS_PRODUCTION_SECRET,
//   });
// };

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <ThemeContext.Provider value={themes[themeMode]}>
      <Provider store={Store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
