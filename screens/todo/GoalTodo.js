import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalTodo = (props) => (
  <View style={styles.screen}>
    <Text>Goal Todo</Text>
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

export default GoalTodo;
