import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import { IsDarkModeContext } from '../../context/IsDarkModeContext';
import { darkTheme, lightTheme } from '../../util/colors';

const TodoBoard = ({ type }) => {
  isDarkMode = useContext(IsDarkModeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={{
        ...styles.screen,
        backgroundColor: theme.mainBg,
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
