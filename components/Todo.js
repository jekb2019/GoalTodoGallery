import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { TodoContext } from '../context/TodoContext';
import { ACTION_TYPES } from '../hooks/useTodo';
import { IsDarkModeContext } from '../context/IsDarkModeContext';
import { darkTheme, lightTheme } from '../util/colors';
import styled from 'styled-components/native';

const TodoContainer = styled.View`
  flex-direction: row;
  height: 50px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.todoBg};
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.todoText};
`;

const CheckTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Todo = ({ id, title, isDone }) => {
  const { todo, dispatch } = useContext(TodoContext);
  const isDarkMode = useContext(IsDarkModeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

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
