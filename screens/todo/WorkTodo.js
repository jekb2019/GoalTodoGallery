import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from '../../components/Todo';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import { TodoContext } from '../../context/TodoContext';

const WorkTodo = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TodoInput />
      </View>
      <View style={styles.listWrapper}>
        <TodoList />
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

export default WorkTodo;
