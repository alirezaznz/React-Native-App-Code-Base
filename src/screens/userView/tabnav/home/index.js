import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Text>This is the Home screen</Text>
            <Button
                title="go to notification"
                onPress={() => navigation.navigate('Notification')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default Home;
