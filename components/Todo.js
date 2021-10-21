import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { TodoContext } from '../context/TodoContext';
import { ACTION_TYPES } from '../hooks/useTodo';
import { IsDarkModeContext } from '../context/IsDarkModeContext';
import { darkTheme, lightTheme } from '../util/colors';

const Todo = ({ id, title, isDone }) => {
  const { todo, dispatch } = useContext(TodoContext);
  const isDarkMode = useContext(IsDarkModeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View
      style={{
        ...styles.todo,
        backgroundColor: theme.todoBg,
      }}
    >
      <View style={styles.checkTitleWrapper}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          value={isDone}
          onValueChange={(newValue) =>
            dispatch({
              type: ACTION_TYPES.TOGGLE_ISDONE,
              payload: { id, bool: newValue },
            })
          }
          tintColor={theme.checkBox}
          onCheckColor={theme.checkBox}
          onTintColor={theme.checkBox}
        />
        <Text
          style={{
            ...styles.text,
            color: theme.todoText,
          }}
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: { id } })
        }
      >
        <Feather
          style={{
            ...styles.deleteBtn,
            color: isDarkMode ? '#F9F871' : '#FFFFD0',
          }}
          name="trash-2"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  checkTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 20,
  },
  text: {
    fontSize: 20,
  },
  deleteBtn: {
    fontSize: 24,
  },
});

export default Todo;
