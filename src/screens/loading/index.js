import ReactNativeBiometrics from 'react-native-biometrics';
import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Dimensions,
  I18nManager,
  Platform,
  Image,
} from 'react-native';
import { Images } from '@Constants';
import { Picker } from "@Components"
import { LocalStorage } from '@Utils';
import { ThemeContext } from '@Theme';
const { width, height } = Dimensions.get('window');

// check locale
const Loading = ({ navigation }) => {
  const [bioIsAvailable, setBioAvailability] = useState(undefined);
  const [selectedLang, setSelectedLang] = useState("en");
  const [detectLocation, setDetectLocation] = useState(false);
  const {theme, setDirection} = useContext(ThemeContext)

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
    setTimeout(() => {
      setDetectLocation(true)
    }, 1000)
  }, []);

  //biometrics check
  useEffect(() => {
    if (bioIsAvailable === undefined) {
      biometricsCheck();
    } else if (bioIsAvailable === true) {
      getBioKey();
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
        console.log('failed to create sig: ', e);
      });
  };

  useEffect(() => {
    if (selectedLang == "fa") {
      I18nManager.forceRTL(true);
      I18nManager.swapLeftAndRightInRTL(true);
      setDirection("rtl")
    } else {
      I18nManager.forceRTL(false);
      I18nManager.swapLeftAndRightInRTL(false);
      setDirection("ltr")
    }
  }, [selectedLang])

  const selectLang = value => {
    setSelectedLang(value)
  };

  const getLangIcon = () => {
    switch (selectedLang) {
      case "fa":
        return <Image source={Images.LangFlags.fa} style={{ height: 32, width: 32, marginTop: -8 }} />
      case "en":
        return <Image source={Images.LangFlags.en} style={{ height: 32, width: 32, marginTop: -8 }} />
      case "tr":
        return <Image source={Images.LangFlags.tr} style={{ height: 32, width: 32, marginTop: -8 }} />
      default:
        return null
    }
  }

  return (
    <ImageBackground
      source={Images.SplashImage}
      style={styles.container}
      resizeMode={'cover'}>
      <View style={styles.indicatorWrapper}>

        {
          detectLocation ?
            <Picker
              style={{
                width: width * 0.8,
                maxWidth: 192,
                height: height * 0.1,
                maxHeight: 72,
                paddingHorizontal: theme.spacing.xl,
                color: "white",
                // marginHorizontal: theme.spacing.xl,
                iconContainer: {
                },
                input: {color: 'white'}
              }}
             
              // itemStyle={{ color: "white" }}
              items={[
                // { label: 'English', value: 'en' },
                { label: 'Persian', value: 'fa' },
                { label: 'Turkey', value: 'tr' },
              ]}
              onChange={selectLang}
              Icon={getLangIcon}
              placeholder={{ label: 'English', value: 'en' }}
            />
            :
            <ActivityIndicator
              style={{ marginBottom: '15%' }}
              size="large"
            // color={STYLES.Color.success}
            />
        }


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
  splash: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrapper: {
    minHeight: 40,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    bottom: -20,
    position: 'relative',
  },
  bottomContainer: {
    paddingVertical: stepSize / 2,
    overflow: 'visible',
  },
  logo: {
    height: height / 3,
    width: width / 2,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  stepHeader: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: width / 2,
    marginLeft: -stepSize / 2,
    marginTop: -stepSize / 2,
  },
  stepHeaderCircle: {
    borderWidth: 5,
    borderRadius: stepSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepHeaderIcon: {
    position: 'absolute',
    zIndex: 2,
  },
  tab: {
    flex: 1,
  },
  indicatorWrapper: {
    width: '100%',
    height: height * 0.9,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: "center"
  },
  passWrapper: { width: '100%', height: '90%', alignItems: 'center' },
  //sells: {backgroundColor: STYLES.Color.thirdBg, marginLeft: 8, marginRight: 8},
  passText: { marginTop: '3%', fontSize: 15 },
  pinText: { marginTop: '10%' },
});

export default Loading;
