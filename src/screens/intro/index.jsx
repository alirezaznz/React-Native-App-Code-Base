import {Box, RNButton, RNText} from '@Components';
import {Images, Routes} from '@Constants';
import {getSpacing, ThemeContext} from '@Theme';
import React, {useContext, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/Ionicons';

const data = [
    {
        key: 1,
        image: Images.Intro1,
        bg: '#59b2ab',
    },
    {
        key: 2,
        image: Images.Intro2,
        bg: '#febe29',
    },
    {
        key: 3,
        image: Images.Intro3,
        bg: '#22bcb5',
    },
    {
        key: 4,
        image: Images.Intro4,
        bg: '#febe00',
    },
];

const AppIntor = ({navigation}) => {
    const slider = useRef();
    const {t: translate} = useTranslation();
    const {theme} = useContext(ThemeContext);

    const renderItem = ({item}) => {
        return (
            <Box style={styles.slide(item.bg, theme)}>
                <RNText style={styles.title}>
                    {translate(`introPage.Intro${item.key}.title`)}
                </RNText>
                <Image source={item.image} style={styles.image} />
                <RNText style={styles.text}>
                    {translate(`introPage.Intro${item.key}.text`)}
                </RNText>
            </Box>
        );
    };

    const renderDots = activeIndex => {
        return (
            <Box style={styles.paginationDots}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={styles.dot(i === activeIndex, theme)}
                    />
                ))}
            </Box>
        );
    };

    const renderNext = activeIndex => {
        if (activeIndex === data.length - 1) {
            return null;
        }
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => slider.current.goToSlide(activeIndex + 1, true)}>
                <Ion name="arrow-back" size={theme.iconSize.xl} />
            </TouchableOpacity>
        );
    };

    const renderPrev = activeIndex => {
        if (activeIndex === data.length - 1) {
            return null;
        }
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => slider.current.goToSlide(activeIndex - 1, true)}
                disabled={activeIndex === 0}>
                <Ion
                    name="arrow-forward"
                    size={theme.iconSize.xl}
                    color={
                        activeIndex === 0
                            ? theme.colors.disabled
                            : theme.colors.foreground
                    }
                />
            </TouchableOpacity>
        );
    };

    const renderDone = activeIndex => {
        if (activeIndex !== data.length - 1) {
            return null;
        }
        return (
            <RNButton
                title={translate('introPage.login_register')}
                onPress={() => {
                    navigation.replace(Routes.AuthNav);
                }}
                style={styles.doneBtn}
                color="background"
            />
        );
    };

    const renderPagination = activeIndex => {
        return (
            <SafeAreaView style={styles.paginationContainer}>
                {renderDots(activeIndex)}
                <Box style={styles.buttonContainer}>
                    {renderPrev(activeIndex)}
                    {renderNext(activeIndex)}
                    {renderDone(activeIndex)}
                </Box>
            </SafeAreaView>
        );
    };

    return (
        <AppIntroSlider
            renderItem={renderItem}
            renderPagination={renderPagination}
            data={data}
            ref={slider}
        />
    );
};

const styles = StyleSheet.create({
    slide: (bg, theme) => ({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg,
        paddingHorizontal: getSpacing('l', theme),
    }),
    image: {
        width: 320,
        height: 320,
        marginVertical: 32,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: 'transparent',
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    dot: (isActive, theme) => ({
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 6,
        backgroundColor: isActive
            ? theme.colors.primary
            : theme.colors.background,
    }),
    buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 24,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    button: {
        paddingVertical: 20,
        marginHorizontal: 8,
    },
    doneBtn: {
        width: '90%',
        height: 72,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default AppIntor;
