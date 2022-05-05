import React from 'react';
import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import {MText, Input, Button} from '@Components';

const {width} = Dimensions.get('window');

const PhoneNumberStep = () => {
    //   const {formStore, authStore} = useStore();
    //   const isAndroid = Platform.OS === 'android';

    //   const sendOtpCode = async () => {
    //     if (isAndroid) {
    //       const applicationHash = await RNOtpVerify.getHash();
    //       authStore.sendOtp(applicationHash[0], () => jumpTo('OtpStep'));
    //     } else {
    //       authStore.sendOtp(null, () => jumpTo('OtpStep'));
    //     }
    //   };
    //   useEffect(() => {
    //     formStore && formStore?.form?.('LoginForm')?.$?.('mobile')?.set?.('');
    //   }, []);
    return (
        <View style={s.container}>
            <MText type="heading2">ورود / ثبت نام</MText>
            <MText align="center" style={s.description}>
                جهت ورود یا عضویت شماره موبایل خود را وارد نمایید و منتظر کد
                تایید پیامکی باشید
            </MText>
            <Input
                placeholder="شماره موبایل خود را وارد کنید"
                keyboardType="numeric"
                align="center"
                formName="LoginForm"
                name="mobile"
            />
            <Button
                title="ارسال کد تایید"
                style={s.buttonWrapper}
                width={(width * 8) / 10}
                // onPress={sendOtpCode}
                // disabled={
                //   !(
                //     formStore.form('LoginForm') &&
                //     formStore.form('LoginForm').$('mobile').isValid
                //   )
                // }
                // loading={authStore.loading}
            />

            <TouchableOpacity
                style={{marginTop: 30}}
                onPress={() => {
                    navigator.setModal('Modal.Terms', {
                        title: 'حفظ حریم خصوصی   !!',
                        props: {
                            closeButton: true,
                        },
                    });
                }}>
                <MText type={'mini'}>حفظ حریم خصوصی</MText>
            </TouchableOpacity>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginBottom: 30,
        marginTop: 10,
    },
    buttonWrapper: {
        marginTop: 15,
    },
});

export {PhoneNumberStep};
