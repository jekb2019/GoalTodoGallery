import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const TodoInput = (props) => (
  <View style={styles.container}>
    <TextInput style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 20,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

export default TodoInput;
