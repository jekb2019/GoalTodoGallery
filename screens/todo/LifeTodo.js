import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LifeTodo = (props) => (
  <View style={styles.screen}>
    <Text>Life Todo</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LifeTodo;
