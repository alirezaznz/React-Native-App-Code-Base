import React from "react";
import { View,Button, StyleSheet, Text } from "react-native";

const AppIntor = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the AppIntor screen</Text>
      <Button
          title="go to login"
          onPress={() => navigation.replace("AuthNav")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default AppIntor;