import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoBoard from '../screens/todo/TodoBoard';
import { SCREEN_NAMES } from '../util/constants';
import { displayIcon } from './util/displayer';
import { TodoContext } from '../context/TodoContext';
import { useTodo } from '../hooks/useTodo';
import { capitalizeFirstLetter } from '../util/helpers';

const Tab = createBottomTabNavigator();

const TodoTab = (props) => {
  const [todo, dispatch] = useTodo();

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={SCREEN_NAMES.WORK}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(SCREEN_NAMES.WORK, color, size),
            tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.WORK),
          }}
        >
          {() => <TodoBoard type={SCREEN_NAMES.WORK} />}
        </Tab.Screen>
        <Tab.Screen
          name={SCREEN_NAMES.LIFE}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(SCREEN_NAMES.LIFE, color, size),
            tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.LIFE),
          }}
        >
          {() => <TodoBoard type={SCREEN_NAMES.LIFE} />}
        </Tab.Screen>
        <Tab.Screen
          name={SCREEN_NAMES.GOAL}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(SCREEN_NAMES.GOAL, color, size),
            tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.GOAL),
          }}
        >
          {() => <TodoBoard type={SCREEN_NAMES.GOAL} />}
        </Tab.Screen>
      </Tab.Navigator>
    </TodoContext.Provider>
  );
};

export default TodoTab;
