import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { TodoContext } from '../../context/TodoContext';
import { ACTION_TYPES } from '../../hooks/useTodo';
import { getTodo } from '../../util/asyncStorage';
import Todo from '../Todo/Todo';
import { TodoListContainer } from './style';

const TodoList = ({ type }) => {
  const { todo, dispatch } = useContext(TodoContext);

  const [isTodoLoaded, setIsTodoLoaded] = useState(false);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    const todo = await getTodo();
    dispatch({ type: ACTION_TYPES.LOAD_TODO, payload: { loaded: todo } });
    setIsTodoLoaded(true);
  };

  return (
    <TodoListContainer>
      <ScrollView>
        {isTodoLoaded ? (
          todo.map((item) => {
            if (item.type === type) {
              return (
                <Todo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  isDone={item.isDone}
                />
              );
            }
          })
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    </TodoListContainer>
  );
};

export default TodoList;
