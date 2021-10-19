import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_TODO = '@todo';

export const storeTodo = async (todo) => {
  try {
    const jsonTodo = JSON.stringify(todo);
    await AsyncStorage.setItem(KEY_TODO, jsonTodo);
  } catch (e) {
    console.error(e);
  }
};

export const getTodo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEY_TODO);
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(e);
  }
};
