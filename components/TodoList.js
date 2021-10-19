import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const TodoList = (props) => {
  const { todo, dispatch } = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        {todo.map((item) => (
          <Todo key={item.id} title={item.title} isDone={item.isDone} />
        ))}
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
