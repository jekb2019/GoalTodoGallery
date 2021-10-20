import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import { ColorSchemeContext } from '../../context/ColorSchemeContext';

const TodoBoard = ({ type }) => {
  colorScheme = useContext(ColorSchemeContext);
  return (
    <View
      style={{
        ...styles.screen,
        backgroundColor: colorScheme === 'dark' ? '#4B4A54' : 'pink',
      }}
    >
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
