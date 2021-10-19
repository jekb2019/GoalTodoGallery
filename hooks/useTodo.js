import { useReducer } from 'react';
import uuid from 'react-native-uuid';

export const ACTION_TYPES = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  TOGGLE_ISDONE: 'toggle-isDone',
};

export const useTodo = (initialTodo) => {
  const reducer = (todo, action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_TODO:
        const { title, type } = action.payload;
        return addTodo(todo, title, type);
      case ACTION_TYPES.DELETE_TODO:
        return deleteTodo(todo, action.payload.id);
      case ACTION_TYPES.TOGGLE_ISDONE:
        const { id, bool } = action.payload;
        return toggleIsDone(todo, id, bool);
      default:
        console.log('default action');
        return todo;
    }
  };

  const [todo, dispatch] = useReducer(reducer, initialTodo);

  function addTodo(todo, title, type) {
    const newTodo = {
      title,
      id: uuid.v4(),
      isDone: false,
      type,
    };
    return [newTodo, ...todo];
  }

  function deleteTodo(todo, id) {
    return todo.filter((item) => item.id !== id);
  }

  function toggleIsDone(todo, id, bool) {
    const idx = todo.findIndex((item) => item.id === id);
    const tempTodo = [...todo];
    tempTodo[idx].isDone = bool;
    return tempTodo;
  }

  return [todo, dispatch];
};
