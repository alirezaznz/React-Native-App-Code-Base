import React from "react";
import { View,Button, StyleSheet, Text } from "react-native";

const Loading = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Loading screen</Text>
      <Button
          title="go to intro"
          onPress={() => navigation.replace("Intor")}
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

export default Loading;