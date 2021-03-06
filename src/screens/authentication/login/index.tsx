import Color from 'color';
import React, {useEffect, useRef, useState} from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Image,
    Platform,
    StyleSheet,
    View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import {TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';

import {RNText} from '@Components';
import {Images, LOGIN_CONST} from '@Constants';
import {checkAuth} from '@Actions';
import {layoutAnimation} from '@Utils';
import {PhoneNumberStep} from './steps';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');
const {routes} = LOGIN_CONST;
const stepSize = Platform.select({ios: 70, android: 60});

const Login = () => {
    const {t: translate} = useTranslation();
    const dispatch = useDispatch();
    const userStatus = useSelector(state => state.UserReducer.status);
    const [index, setIndex] = useState(
        userStatus === 'login' ? 0 : routes.length - 1,
    );
    const pageAnim = useRef(new Animated.Value(0)).current;

    const containerStyle = {
        transform: [
            {
                translateY: pageAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200, 0],
                }),
            },
        ],
        opacity: pageAnim,
    };

    const headerStyle = [
        s.header,
        {
            transform: [
                {
                    translateY: pageAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [150, 0],
                    }),
                },
                {
                    scale: pageAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1.2, 1],
                    }),
                },
            ],
            opacity: pageAnim,
        },
    ];

    useEffect(() => {
        dispatch(checkAuth());
        // storage.save({key: '@firstLaunch', data: false});
    }, []);

    useEffect(() => {
        Animated.timing(pageAnim, {
            toValue: 1,
            duration: 500,
            delay: 10,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start();
    }, [pageAnim]);

    //   const onChangeNumberStep = () => {
    //     setIndex(2);
    //   };

    const renderScene = ({route, jumpTo}) => {
        const onClick = item => {
            layoutAnimation();
            jumpTo(item);
        };
        // switch (route.key) {
        //   case 'NumberStep':
        return (
            <PhoneNumberStep
                jumpTo={onClick}
                isActive={routes[index].key === route.key}
            />
        );
        //   case 'OtpStep':
        //     return (
        //       <OtpStep
        //         jumpTo={onClick}
        //         {...{onChangeNumberStep}}
        //         isActive={routes[index].key === route.key}
        //       />
        //     );
        //   case 'RegisterStep':
        //     return (
        //       <RegisterStep
        //         jumpTo={onClick}
        //         isActive={routes[index].key === route.key}
        //       />
        //     );
        //   default:
        //     return null;
        // }
    };

    return (
        <KeyboardAwareScrollView
            style={s.container}
            contentContainerStyle={s.wrapper}
            keyboardShouldPersistTaps="handled">
            <Animated.View style={headerStyle}>
                <Image source={Images.Logo} style={s.logo} />
                <RNText style={s.firstLogoT}>
                    <RNText style={s.secondLogoT}>
                        {translate('login.appName')}
                    </RNText>
                </RNText>
                <RNText>{translate('login.appDescription')}</RNText>
            </Animated.View>
            <Animated.View style={containerStyle}>
                <View style={s.bottom}>
                    <TabView
                        navigationState={{index, routes}}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{width}}
                        renderTabBar={() => null}
                        swipeEnabled={false}
                    />
                    <View style={s.stepHeader}>
                        <View>
                            <Svg width={stepSize} height={stepSize}>
                                <Defs>
                                    <LinearGradient
                                        id="grad"
                                        x1="50%"
                                        y1="0%"
                                        x2="50%"
                                        y2="100%">
                                        <Stop
                                            offset="0"
                                            stopColor={routes[index].primary}
                                            stopOpacity="1"
                                        />
                                        <Stop
                                            offset="1"
                                            stopColor={routes[index].secondary}
                                            stopOpacity="1"
                                        />
                                    </LinearGradient>
                                </Defs>
                                <Circle
                                    cx={stepSize / 2}
                                    cy={stepSize / 2}
                                    r={stepSize / 2}
                                    fill="url(#grad)"
                                />
                            </Svg>
                            {/* <MIcon
                size={22}
                name={routes[index].icon}
                style={s.stepHeaderIcon}
                color={STYLES.Color.light}
              /> */}
                        </View>
                    </View>
                </View>
            </Animated.View>
        </KeyboardAwareScrollView>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        minHeight: height,
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
        height: '40%',
        resizeMode: 'contain',
        marginBottom: 10,
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
        borderRadius: stepSize / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#313F41',
        shadowOffset: {
            width: 1,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    stepHeaderIcon: {
        position: 'absolute',
        zIndex: 2,
    },
    tab: {
        flex: 1,
    },
    secondLogoT: {
        color: '#39E09A',
        fontSize: 35,
        fontWeight: 'bold',
    },
    firstLogoT: {
        color: '#313F41',
        fontSize: 35,
        fontWeight: 'bold',
    },

    iconWrapper: {
        position: 'absolute',
        top: 15,
        left: 15,
        zIndex: 100,
    },
});

export default Login;
