import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useState } from 'react';
import {
    Text,
    ActivityIndicator,
    Modal,
    StyleSheet,
    Dimensions,
    I18nManager,
    Platform,
    View
} from 'react-native';
import { ENV } from "@Constants";

// check locale
export const NetworkStateCheck = ({ }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const netInfo = useNetInfo(
        // {
        //     reachabilityUrl: "https://google.com",
        //     reachabilityTest: async (response) => response.status === 200,
        //     reachabilityLongTimeout: 60 * 1000, // 60s
        //     reachabilityShortTimeout: 5 * 1000, // 5s
        //     reachabilityRequestTimeout: 1 * 1000, // 15s
        //     reachabilityShouldRun: () => true,
        // }
    );


    // useEffect(() => {
    //     if (netInfo.isConnected === null) {
    //         return
    //     }
    //     debugger
    //     if (!netInfo.isConnected) {
    //         setModalVisible(true)
    //     } else {
    //         setModalVisible(false)
    //     }
    // }, [netInfo])

    useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            debugger
            if (state.isConnected === false || state.isInternetReachable === false) {
                setModalVisible(true)
            } else {
                setModalVisible(false)
            }
        });

        // Unsubscribe
        // return ()=> {
        //     unsubscribe();
        // }
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
};

const stepSize = Platform.select({ ios: 70, android: 60 });
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});
