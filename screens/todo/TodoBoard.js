import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';

const TodoBoard = ({ type }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TodoInput type={type} />
      </View>
      <View style={styles.listWrapper}>
        <TodoList type={type} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'pink',
    flex: 1,
  },
  inputWrapper: {
    height: 80,
    paddingVertical: 20,
  },
  listWrapper: {
    flex: 1,
  },
});

export default TodoBoard;
