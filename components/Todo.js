import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { TodoContext } from '../context/TodoContext';
import { ACTION_TYPES } from '../hooks/useTodo';

const Todo = ({ id, title, isDone }) => {
  const { todo, dispatch } = useContext(TodoContext);

  return (
    <View style={styles.todo}>
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
          tintColor="white"
          onCheckColor="white"
          onTintColor="white"
        />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: { id } })
        }
      >
        <Feather style={styles.deleteBtn} name="trash-2" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    backgroundColor: '#bf209c',
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
    color: 'white',
  },
  deleteBtn: {
    fontSize: 24,
    color: 'white',
  },
});

export default Todo;
