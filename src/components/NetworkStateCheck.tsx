import NetInfo from '@react-native-community/netinfo';
import React, {FC, useEffect, useState} from 'react';
import {Text, Modal, StyleSheet, View} from 'react-native';

NetInfo.configure({
    reachabilityUrl: 'https://google.com',
    reachabilityShortTimeout: 2000, // 2 seconds
    reachabilityRequestTimeout: 15 * 1000, // 15s
    reachabilityTest: async response => response.status === 200,
    reachabilityShouldRun: () => true,
});
// check locale
export const NetworkStateCheck: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        // Subscribe
        const listener = NetInfo.addEventListener(state => {
            if (
                state.isConnected === false ||
                state.isInternetReachable === false
            ) {
                setModalVisible(true);
            } else {
                setModalVisible(false);
            }
        });
        return () => {
            listener();
        };
    }, []);

    return (
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
            <View style={styles.modalView}>
                <Text>check your netowrk connection</Text>
            </View>
        </Modal>
    );
};

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
});
