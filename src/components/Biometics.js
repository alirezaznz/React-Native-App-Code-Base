import ReactNativeBiometrics from 'react-native-biometrics';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal} from 'react-native';

// check locale
export const Biometics = ({navigation, changeAuthStatus = () => {}}) => {
    const [bioIsAvailable, setBioAvailability] = useState(undefined);
    const [bioAuthenticated, setBioAuthenticated] = useState(true);

    //biometrics check
    useEffect(() => {
        if (bioIsAvailable === undefined) {
            biometricsCheck();
        } else if (bioIsAvailable === true) {
            createBioKeyIfNotExists().then(getBioKey);
        } else {
            //todo open modal to enter pin code
        }
    }, [bioIsAvailable]);

    const createBioKeyIfNotExists = () => {
        return new Promise(resolve => {
            ReactNativeBiometrics.biometricKeysExist().then(resultObject => {
                const {keysExist} = resultObject;
                if (keysExist) {
                    resolve();
                } else {
                    ReactNativeBiometrics.createKeys(
                        'Confirm fingerprint',
                    ).then(resultObject => {
                        const {publicKey} = resultObject;
                        LocalStorage.save('BioPublicKey', publicKey);
                        resolve();
                    });
                }
            });
        });
    };

    const biometricsCheck = async () => {
        ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
            const {available, biometryType} = resultObject;
            if (!available) {
                bioAuthenticated(true);
                setBioAvailability(false);
                changeAuthStatus(true);
                console.log('bio available: ', false);
            } else if (biometryType === ReactNativeBiometrics.TouchID) {
                console.log('bio available: ', true);
                setBioAvailability(true);
            } else if (biometryType === ReactNativeBiometrics.FaceID) {
                setBioAvailability(true);
                console.log('bio available: ', true);
            } else if (biometryType === ReactNativeBiometrics.Biometrics) {
                setBioAvailability(true);
                console.log('bio available: ', true);
            }
        });
    };

    const getBioKey = () => {
        ReactNativeBiometrics.simplePrompt({
            promptMessage: 'Confirm fingerprint',
        })
            .then(() => {
                setBioAuthenticated(true);
                changeAuthStatus(true);
            })
            .catch(() => {
                changeAuthStatus(false);
                console.log('fingerprint failed or prompt was cancelled');
            });
    };

    if (bioIsAvailable === false) {
        return null;
    }
    if (bioAuthenticated === true) {
        return null;
    }

    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <ActivityIndicator
                size="large"
                // color={STYLES.Color.success}
            />
        </Modal>
    );
};
