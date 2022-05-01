import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useState } from 'react';
import {
    View,
    ActivityIndicator,
    Modal,
    StyleSheet,
    Dimensions,
    I18nManager,
    Platform
} from 'react-native';
import {ENV} from "@Constants";


// check locale
const NetworkStateCheck = ({ }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const netInfo = useNetInfo({
        reachabilityUrl: ENV.BaseURL,
        reachabilityTest: async (response) => response.status === 200,
        reachabilityLongTimeout: 60 * 1000, // 60s
        reachabilityShortTimeout: 5 * 1000, // 5s
        reachabilityRequestTimeout: 60 * 1000, // 15s
        reachabilityShouldRun: () => true,
    });

    let onNetInfoChange = (newNetInfo) => {
        if(!newNetInfo.isConnected){
            setModalVisible(true)
        }else{
            setModalVisible(false)
        }
    };

    useEffect(()=>{
        const currentNetInfo = getNetInfo();
        currentNetInfo.addChangeListener(onNetInfoChange);
        // Somewhere later in code, Remove net info change listener callback
        return ()=>{
            currentNetInfo.removeChangeListener(onNetInfoChange);
        }
    }, [])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <Text>
                check your netowrk connection
            </Text>
        </Modal>
    );
};

const stepSize = Platform.select({ ios: 70, android: 60 });
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

});

export default NetworkStateCheck;
