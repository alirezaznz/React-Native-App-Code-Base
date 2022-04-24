/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Node} from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Store from './src/redux';
import AppNavigation from './src/navigation';

//todo create newone and move it to constant file
const ANDROID_PRODUCTION_SECRET = 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9';
const ANDROID_STAGE_SECRET = '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T';
const IOS_PRODUCTION_SECRET = '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M';

const checkCodePushUpdate = () => {
  return codePush.sync({
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
    installMode: codePush.InstallMode.ON_NEXT_RESTART,
    deploymentKey:
      Platform.OS === 'android'
        ? ANDROID_PRODUCTION_SECRET
        : IOS_PRODUCTION_SECRET,
  });
};

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
