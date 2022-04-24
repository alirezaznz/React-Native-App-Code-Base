import React from "react";
import {
  View,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Images} from "./../../constants"

const Loading = ({ navigation }) => {
  return (
    <ImageBackground source={Images.SplashImage} style={styles.container} resizeMode={'cover'}>
      <View style={styles.indicatorWrapper}>
        <ActivityIndicator
          style={{ marginBottom: '15%' }}
          size="large"
        // color={STYLES.Color.success}
        />
      </View>
    </ImageBackground>
  );
};

const stepSize = Platform.select({ ios: 70, android: 60 });
const { width, height } = Dimensions.get('window');
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
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  passWrapper: { width: '100%', height: '90%', alignItems: 'center' },
  //sells: {backgroundColor: STYLES.Color.thirdBg, marginLeft: 8, marginRight: 8},
  passText: { marginTop: '3%', fontSize: 15 },
  pinText: { marginTop: '10%' },
});

export default Loading;