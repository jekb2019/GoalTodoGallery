import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkTodo from '../screens/todo/WorkTodo';
import LifeTodo from '../screens/todo/LifeTodo';
import GoalTodo from '../screens/todo/GoalTodo';
import { ScreenNames } from '../util/constants';
import { displayIcon } from './util/displayer';
import { TodoContext } from '../context/TodoContext';
import useTodo from '../hooks/useTodo';

const Tab = createBottomTabNavigator();

const TodoTab = (props) => {
  const [todo, dispatch] = useTodo([
    {
      title: 'title1',
      id: '123',
      isDone: false,
    },
    {
      title: 'title2',
      id: '456',
      isDone: true,
    },
    {
      title: 'title3',
      id: '789',
      isDone: false,
    },
  ]);

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          component={WorkTodo}
          initialParams={{ val: 'value' }}
          name={ScreenNames.WORK}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(ScreenNames.WORK, color, size),
          }}
        />
        <Tab.Screen
          component={LifeTodo}
          name={ScreenNames.LIFE}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(ScreenNames.LIFE, color, size),
          }}
        />
        <Tab.Screen
          component={GoalTodo}
          name={ScreenNames.GOAL}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(ScreenNames.GOAL, color, size),
          }}
        />
      </Tab.Navigator>
    </TodoContext.Provider>
  );
};

export default TodoTab;
