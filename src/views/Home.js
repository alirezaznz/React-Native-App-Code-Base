import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './../redux/reducers/user'

const Home = ({ navigation }) => {
  const count = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button title="Go to About Screen" onPress={() => navigation.navigate('About')} />
      <View>
        <Button
          title="Increment"
          onPress={() => dispatch(incrementByAmount(2))}
        />
        <Text>{count}</Text>
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
        />
      </View>
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

export default Home;