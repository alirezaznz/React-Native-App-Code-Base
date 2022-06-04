import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RNText, RNButton, RNInput, Box} from '@Components';
import {useTranslation} from 'react-i18next';

const PhoneNumberStep = () => {
    const {t: translate} = useTranslation();

    return (
        <Box style={styles.container}>
            <RNText variant="header">{translate('login.header')}</RNText>
            <RNText style={styles.description}>
                {translate('login.description')}
            </RNText>
            <RNInput
                placeholder={translate('login.inputPlaceholder')}
                keyboardType="numeric"
            />
            <RNButton
                title={translate('login.btn')}
                style={styles.buttonWrapper}
                type="primary"
                textStyle={styles.buttonText}
            />

            <TouchableOpacity
            // onPress={() => {
            //     navigator.setModal('Modal.Terms', {
            //         title: 'حفظ حریم خصوصی   !!',
            //         props: {
            //             closeButton: true,
            //         },
            //     });
            // }
            // }
            >
                <RNText variant={'body'}>{translate('login.privacy')}</RNText>
            </TouchableOpacity>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: 'red',
        marginBottom: 30,
        marginTop: 10,
    },
    buttonWrapper: {
        marginTop: 15,
    },
    buttonText: {
        color: 'black',
    },
});

export {PhoneNumberStep};
