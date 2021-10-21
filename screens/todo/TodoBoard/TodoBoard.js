import React from 'react';
import TodoInput from '../../../components/TodoInput/TodoInput';
import TodoList from '../../../components/TodoList/TodoList';
import { TodoBoardContainer, TodoInputWrapper, TodoListWrapper } from './style';

const TodoBoard = ({ type }) => {
  return (
    <TodoBoardContainer>
      <TodoInputWrapper>
        <TodoInput type={type} />
      </TodoInputWrapper>
      <TodoListWrapper>
        <TodoList type={type} />
      </TodoListWrapper>
    </TodoBoardContainer>
  );
};

export default TodoBoard;
