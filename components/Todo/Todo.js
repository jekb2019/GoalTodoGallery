import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { TodoContext } from '../../context/TodoContext';
import { ACTION_TYPES } from '../../hooks/useTodo';
import { TodoContainer, CheckTitleWrapper, Title } from './style';
import { ThemeContext } from 'styled-components/native';

const Todo = ({ id, title, isDone }) => {
  const { _, dispatch } = useContext(TodoContext);
  const theme = useContext(ThemeContext);

  return (
    <TodoContainer>
      <CheckTitleWrapper>
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
        <Title>{title}</Title>
      </CheckTitleWrapper>
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: { id } })
        }
      >
        <Feather
          style={{
            ...styles.deleteBtn,
            color: theme.todoText,
          }}
          name="trash-2"
        />
      </TouchableOpacity>
    </TodoContainer>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginRight: 20,
  },
  deleteBtn: {
    fontSize: 24,
  },
});

export default Todo;
