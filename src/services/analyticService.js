import Instabug from 'instabug-reactnative';
import RNUxcam from 'react-native-ux-cam';
import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';

export const initUxcam = condition => {
    if (condition) {
        NetInfo?.fetch?.().then(state => {
            if (state?.isConnected && state?.type === 'wifi') {
                DeviceInfo.getBatteryLevel().then(batteryLevel => {
                    if (batteryLevel > 0.6) {
                        RNUxcam.optIntoSchematicRecordings();
                        RNUxcam.startWithKey('51iqke5vt0fgeoh');
                    }
                });
            }
        });
    } else {
        RNUxcam.stopSessionAndUploadData();
        RNUxcam.deletePendingUploads();
        RNUxcam.pauseScreenRecording();
    }
};

export const stopMonitoringServices = () => {
    RNUxcam.stopSessionAndUploadData();
    RNUxcam.deletePendingUploads();
    RNUxcam.pauseScreenRecording();
};

export const setUserIdentity = id => {
    RNUxcam.setUserProperty('id', id?.toString?.());
};

export const initInstaBug = condition => {
    if (condition) {
        Instabug.start('33ca5f0094051bbb604c82d60d1698bb', [
            Instabug.invocationEvent.shake,
            Instabug.invocationEvent.screenshot,
        ]);
    } else {
        Instabug.disable?.();
    }
};
