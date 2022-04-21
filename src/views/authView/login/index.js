import React from "react";
import { View,Button, StyleSheet, Text } from "react-native";

const Login = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Login screen</Text>
      <Button
          title="go to user nav"
          onPress={() => navigation.replace("UserNav")}
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

export default Login;