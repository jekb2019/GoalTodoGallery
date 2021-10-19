import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { TodoContext } from '../context/TodoContext';
import { ACTION_TYPES } from '../hooks/useTodo';
import { getTodo } from '../util/asyncStorage';
import Todo from './Todo';

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
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default TodoList;
