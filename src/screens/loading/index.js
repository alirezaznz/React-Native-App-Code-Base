import ReactNativeBiometrics from 'react-native-biometrics';
import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Dimensions,
  I18nManager,
  Platform,
  Image,
  Button,
} from 'react-native';
import { Images } from '@Constants';
import { Box, Picker, RNButton } from '@Components';
import { LocalStorage } from '@Utils';
import { ThemeContext } from '@Theme';
const { width, height } = Dimensions.get('window');

// check locale
const Loading = ({ navigation }) => {
  const [bioIsAvailable, setBioAvailability] = useState(undefined);
  const [selectedLang, setSelectedLang] = useState('en');
  const [detectLocation, setDetectLocation] = useState(false);
  const { theme, setDirection } = useContext(ThemeContext);
  const { t: translate, i18n: langi18n } = useTranslation();

  useEffect(() => {
    // orderServices
    //     .orderLogin(data)
    //     .then((res) => {
    //       let order_access_token = `Bearer ${res.data.token}`;
    //       orderAPI.defaults.headers["Authorization"] = order_access_token;
    //       orderAPI.defaults.headers.Authorization = order_access_token;
    //       res.data = makeIt(JSON.stringify(res.data));
    //       localStorage.setItem(CONST.token, res.data);
    //       resolve();
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });

    //todo get user location from server
    setTimeout(() => {
      setDetectLocation(true);
    }, 2000);
  }, []);

  //biometrics check
  useEffect(() => {
    if (bioIsAvailable === undefined) {
      biometricsCheck();
    } else if (bioIsAvailable === true) {
      createBioKeyIfNotExists().then(getBioKey)
    } else {
      //todo open modal to enter pin code
    }
  }, [bioIsAvailable]);

  // check if we should navigate to intro page
  useEffect(() => {
    (async () => {
      const introAlreadySeen = await LocalStorage.getItem('introAlreadySeen');
      if (introAlreadySeen !== true) {
        //await LocalStorage.setItem('introAlreadySeen', true)
        //setTimeout(() => navigation.replace('Intor'), 100);
      }
    })();
  }, []);

  const createBioKeyIfNotExists = () => {
    return new Promise((resolve) => {
      ReactNativeBiometrics.deleteKeys()
        .then((resultObject) => {
          const { keysDeleted } = resultObject

          if (keysDeleted) {
            console.log('Successful deletion')
          } else {
            console.log('Unsuccessful deletion because there were no keys to delete')
          }
        })
      // ReactNativeBiometrics.createKeys('Confirm fingerprint')
      //   .then((resultObject) => {
      //     const { publicKey } = resultObject
      //     console.log(publicKey)
      //     resolve()
      //   })

      // ReactNativeBiometrics.biometricKeysExist()
      //   .then((resultObject) => {
      //     const { keysExist } = resultObject
      //     debugger
      //     if (keysExist) {
      //       console.log('Keys exist')
      //       resolve()
      //     } else {
      //       ReactNativeBiometrics.createKeys('Confirm fingerprint')
      //         .then((resultObject) => {
      //           const { publicKey } = resultObject

      //           debugger
      //           console.log(publicKey)
      //           resolve()
      //         })
      //     }
      //   })

    })
  }
  const biometricsCheck = async () => {
    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const { available, biometryType } = resultObject;

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        console.log('bio available: ', true);
        setBioAvailability(true);
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        setBioAvailability(true);
        console.log('bio available: ', true);
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
        setBioAvailability(true);
        console.log('bio available: ', true);
      } else {
        setBioAvailability(false);
        console.log('bio available: ', false);
      }
    });
  };

  const getBioKey = () => {
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + 'some message';

    ReactNativeBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: payload,
    })
      .then(resultObject => {
        const { success, signature } = resultObject;
        console.log('create sig result: ', success, signature);
        if (success) {
          console.log(signature);
        }
      })
      .catch(e => {
        debugger
        console.log('failed to create sig: ', e);
      });
  };

  useEffect(() => {
    langi18n.changeLanguage(selectedLang);
    if (selectedLang == 'fa') {
      I18nManager.forceRTL(true);
      I18nManager.swapLeftAndRightInRTL(true);
      setDirection('rtl');
    } else {
      I18nManager.forceRTL(false);
      I18nManager.swapLeftAndRightInRTL(false);
      setDirection('ltr');
    }
  }, [selectedLang]);

  const selectLang = value => {
    setSelectedLang(value);
  };

  const getLangIcon = () => {
    switch (selectedLang) {
      case 'fa':
        return (
          <Image
            source={Images.LangFlags.fa}
            style={styles.flagIcon}
          />
        );
      case 'en':
        return (
          <Image
            source={Images.LangFlags.en}
            style={styles.flagIcon}
          />
        );
      case 'tr':
        return (
          <Image
            source={Images.LangFlags.tr}
            style={styles.flagIcon}
          />
        );
      default:
        return null;
    }
  };

  const renderSelectLang = () => {
    return (
      <Box>
        <Picker
          style={styles.pickerStyle(theme)}
          pickerStyle={{
            inputIOS: { color: 'white' },
            inputAndroid: { color: 'white' },
          }}
          placeholder={{ label: 'English', value: 'en' }}
          items={[
            { label: 'Persian', value: 'fa' },
            { label: 'Turkey', value: 'tr' },
          ]}
          onChange={selectLang}
          Icon={getLangIcon}
        />
        <RNButton
          onPress={() => navigation.replace('Intor')}
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
        {detectLocation ? (
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

const stepSize = Platform.select({ ios: 70, android: 60 });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    transform: [{ scaleX: 1.1 }],
  },
  flagIcon: { height: 32, width: 32, marginTop: -8 },
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
  pickerStyle: (theme) => ({
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

export default Loading;
