import React, {useContext} from 'react';
import {View, Dimensions, StyleSheet, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {MText, Box, RNText, RNButton} from '@Components';
import {useTranslation} from 'react-i18next';
import {Images} from '@Constants';
import Ion from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '@Theme';

const {width, height} = Dimensions.get('window');
const paddingBottom = height / 4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: paddingBottom,
    },
    slideImage: {
        width: (width * 9) / 10,
        height: (width * 9) / 10,
    },
    slideDesc: {
        textAlign: 'center',
        maxWidth: '75%',
        marginTop: 15,
        lineHeight: 25,
    },
    arrow: {
        padding: 7,
    },
    disabled: {
        opacity: 0.5,
    },
    button: {
        marginVertical: 20,
    },
});

const AppIntor = ({navigation}) => {
    const {t: translate} = useTranslation();
    const {theme} = useContext(ThemeContext);
    const slides = [
        {
            key: 1,
            image: Images.Intro2,
        },
        {
            key: 2,
            image: Images.Intro2,
        },
        {
            key: 3,
            image: Images.Intro3,
        },
        {
            key: 4,
            image: Images.Intro4,
        },
    ];

    const renderNextButton = () => {
        return <Ion name="arrow-back" size={theme.size.xl} />;
    };

    const renderPrevButton = () => {
        return <Ion name="arrow-forward" size={theme.size.xl} />;
    };

    const renderDoneButton = () => {
        return <RNButton title="Done" onPress={() => {}} />;
    };

    const renderItem = ({item}) => {
        return (
            <Box style={styles.slide}>
                <Image source={item.image} style={styles.slideImage} />
                <RNText type="heading1">
                    {translate(`IntroPage.Intro${item.key}.title`)}
                </RNText>
                <RNText style={styles.slideDesc}>
                    {translate(`IntroPage.Intro${item.key}.text`)}
                </RNText>
            </Box>
        );
    };

    return (
        <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            renderDoneButton={renderDoneButton}
            bottomButton={true}
            activeDotStyle={{
                backgroundColor: theme.colors.primary,
            }}
            onDone={() => {
                navigation.replace('AuthNav');
            }}
        />
    );
};

export default AppIntor;
