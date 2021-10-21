import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { ACTION_TYPES } from '../../hooks/useTodo';
import { TodoInputContainer, TodoTextInput } from './style';

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
    <TodoInputContainer>
      <TodoTextInput
        value={inputVal}
        onChangeText={setInputVal}
        onSubmitEditing={addTodo}
      />
    </TodoInputContainer>
  );
};

export default TodoInput;
