import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';
import {
  Text,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Dimensions,
  I18nManager,
  Platform,
  View,
} from 'react-native';
import { ENV } from '@Constants';

NetInfo.configure({
  reachabilityUrl: "https://google.com",
  reachabilityShortTimeout: 2000, // 2 seconds
  reachabilityRequestTimeout: 15 * 1000, // 15s
  reachabilityTest: async response => response.status === 200,
  reachabilityShouldRun: () => true,
});

// check locale
export const NetworkStateCheck = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { isConnected, isInternetReachable } = useNetInfo();


  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      // debugger
      if (state.isConnected === false || state.isInternetReachable === false) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    });
    return () => {
      //unsubscribe();
    }
  }, [])

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
    >
      <View style={styles.modalView}>
        <Text>
          check your netowrk connection
        </Text>
      </View>

    </Modal>
  );


}

const stepSize = Platform.select({ ios: 70, android: 60 });
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})