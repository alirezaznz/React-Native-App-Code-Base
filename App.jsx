import React, {useState} from 'react';
// import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {
    theme,
    ThemeContext,
    themeDirections,
    themeLanguages,
    themeModes,
    themes,
} from '@Theme';
import {ENV} from '@Constants';
import {StyleSheet, Text} from 'react-native';
import store from './src/redux/store';
import {NetworkStateCheck} from '@Components';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

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
    const [direction, setDirection] = useState('rtl');
    const [locale, setLocale] = useState(i18n.language);

    // const locale = 'en';

    const initTheme = {
        ...theme,
        ...themeModes[themeMode],
        textVariants: {
            header: {
                ...themeLanguages[locale].header,
                color: themeModes[themeMode].colors.foreground,
            },
            body: {
                ...themeLanguages[locale].body,
                color: themeModes[themeMode].colors.foreground,
            },
        },
        ...themeDirections[direction],
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: initTheme,
                setThemeMode,
                locale,
                setLocale,
                direction,
                setDirection,
            }}>
            {ENV.name !== 'Prod' && (
                <Text style={styles.environment}>env: {ENV.name}</Text>
            )}

            <Provider store={store}>
                <NavigationContainer>
                    <NetworkStateCheck />
                    <AppNavigation />
                </NavigationContainer>
            </Provider>
        </ThemeContext.Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    environment: {
        fontSize: 12,
        position: 'absolute',
        top: 30,
        right: 10,
        zIndex: 999,
        color: 'red',
    },
});
