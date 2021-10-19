import { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useTodo = (initialTodo) => {
  const reducer = (todo, action) => {
    switch (action.type) {
      case 'add-todo':
        console.log('add todo');
        return todo;
      case 'delete-todo':
        console.log('delete todo');
        return todo;
      default:
        console.log('default action');
        return todo;
    }
  };

  const [todo, dispatch] = useReducer(reducer, initialTodo);

  //   const ACTIONS = {
  //     ADD_TODO: 'add-todo',
  //     DELETE_TODO: 'delete-todo',
  //   };

  return [todo, dispatch];
};

export default useTodo;
