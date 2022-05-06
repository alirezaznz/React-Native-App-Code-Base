import React, {useEffect, useState, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {
    View,
    ActivityIndicator,
    ImageBackground,
    StyleSheet,
    Dimensions,
    I18nManager,
    Image,
} from 'react-native';
import {Images, LocalStorageKeys, Routes} from '@Constants';
import {Box, Picker, RNButton, Biometics} from '@Components';
import {LocalStorage} from '@Utils';
import {ThemeContext} from '@Theme';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        transform: [{scaleX: 1.1}],
    },
    flagIcon: {height: 32, width: 32, marginTop: -8},
    splash: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    logo: {
        height: height / 3,
        width: width / 2,
        resizeMode: 'contain',
        marginBottom: 15,
    },
    pickerStyle: theme => ({
        width: width * 0.4,
        height: height * 0.1,
        maxHeight: 72,
        minWidth: 172,
        maxWidth: 256,
        paddingHorizontal: theme.spacing.xl,
    }),
    indicatorWrapper: {
        width: '100%',
        height: height * 0.9,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

// check locale
const Loading = ({navigation}) => {
    const [selectedLang, setSelectedLang] = useState(null);
    const [bioAuthenticated, setBioAuthenticated] = useState(true);
    const [detectLocation, setDetectLocation] = useState(false);
    const {
        theme,
        setDirection,
        direction: appDirection,
    } = useContext(ThemeContext);
    const {t: translate, i18n: langi18n} = useTranslation();

    useEffect(() => {
        //todo get user location from server
        setTimeout(() => {
            setDetectLocation(true);
        }, 2000);

        (async () => {
            const lang = await LocalStorage.getItem(
                LocalStorageKeys.selectedLang,
            );
            if (lang) {
                langi18n.changeLanguage(lang);
                await LocalStorage.remove(LocalStorageKeys.selectedLang);
                setTimeout(() => {
                    navigation.replace(Routes.Intor);
                }, 50);
            }
        })();
    }, []);

    // check if we should navigate to intro page
    useEffect(() => {
        (async () => {
            const introAlreadySeen = await LocalStorage.getItem(
                LocalStorageKeys.introAlreadySeen,
            );
            if (introAlreadySeen !== true) {
                //await LocalStorage.setItem('introAlreadySeen', true)
                //setTimeout(() => navigation.replace('Intor'), 100);
            }
        })();
    }, []);

    useEffect(() => {
        if (!selectedLang) {
            return;
        }
        langi18n.changeLanguage(selectedLang);
        LocalStorage.save(LocalStorageKeys.selectedLang, selectedLang);

        if (appDirection != 'rtl' && selectedLang == 'fa') {
            setDirection('rtl');
        } else if (
            appDirection != 'ltr' &&
            ['en', 'tr'].includes(selectedLang)
        ) {
            setDirection('ltr');
        }
    }, [selectedLang]);

    const renderSelectLang = () => {
        return (
            <Box>
                <Picker
                    style={styles.pickerStyle(theme)}
                    pickerStyle={{
                        inputIOS: {color: 'white'},
                        inputAndroid: {color: 'white'},
                    }}
                    placeholder={{
                        label: translate('lang.Select_Language'),
                        value: null,
                    }}
                    items={[
                        {label: 'English', value: 'en'},
                        {label: 'Persian', value: 'fa'},
                        {label: 'Turkey', value: 'tr'},
                    ]}
                    onDone={setSelectedLang}
                    onClose={setSelectedLang}
                    Icon={() =>
                        selectedLang == null ? null : (
                            <Image
                                source={Images.LangFlags[selectedLang]}
                                style={styles.flagIcon}
                            />
                        )
                    }
                />
                <RNButton
                    onPress={() => {
                        navigation.replace(Routes.Intor);
                        if (appDirection === 'rtl' && !I18nManager.isRTL) {
                            I18nManager.forceRTL(true);
                            I18nManager.swapLeftAndRightInRTL(true);
                            RNRestart.Restart();
                        } else if (
                            appDirection === 'ltr' &&
                            I18nManager.isRTL
                        ) {
                            I18nManager.forceRTL(false);
                            I18nManager.swapLeftAndRightInRTL(false);
                            RNRestart.Restart();
                        }
                    }}
                    title={translate('lang.Enter')}
                />
            </Box>
        );
    };

    return (
        <ImageBackground
            source={Images.SplashImage}
            style={styles.container}
            resizeMode={'cover'}>
            <View style={styles.indicatorWrapper}>
                {/* <Biometics changeAuthStatus={setBioAuthenticated} /> */}
                {detectLocation && bioAuthenticated ? (
                    renderSelectLang()
                ) : (
                    <ActivityIndicator
                        size="large"
                        // color={STYLES.Color.success}
                    />
                )}
            </View>
        </ImageBackground>
    );
};

export default Loading;
