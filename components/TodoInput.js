import React, { useContext, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { TodoContext } from '../context/TodoContext';
import { ACTION_TYPES } from '../hooks/useTodo';
import { COLOR_WHITE } from '../util/colors';

const TodoInput = ({ type }) => {
  const { dispatch } = useContext(TodoContext);
  const [inputVal, setInputVal] = useState('');

  const addTodo = () => {
    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: { title: inputVal, type },
    });
    setInputVal('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputVal}
        onChangeText={setInputVal}
        onSubmitEditing={addTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: COLOR_WHITE,
    height: 40,
    borderRadius: 20,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

export default TodoInput;
