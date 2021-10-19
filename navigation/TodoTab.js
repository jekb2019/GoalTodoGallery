import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoBoard from '../screens/todo/TodoBoard';
import { ScreenNames } from '../util/constants';
import { displayIcon } from './util/displayer';
import { TodoContext } from '../context/TodoContext';
import { useTodo } from '../hooks/useTodo';
import { capitalizeFirstLetter } from '../util/helpers';

const Tab = createBottomTabNavigator();

const TodoTab = (props) => {
  const [todo, dispatch] = useTodo([]);

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={ScreenNames.WORK}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(ScreenNames.WORK, color, size),
            tabBarLabel: capitalizeFirstLetter(ScreenNames.WORK),
          }}
        >
          {() => <TodoBoard type={ScreenNames.WORK} />}
        </Tab.Screen>
        <Tab.Screen
          name={ScreenNames.LIFE}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(ScreenNames.LIFE, color, size),
            tabBarLabel: capitalizeFirstLetter(ScreenNames.LIFE),
          }}
        >
          {() => <TodoBoard type={ScreenNames.LIFE} />}
        </Tab.Screen>
        <Tab.Screen
          name={ScreenNames.GOAL}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
              displayIcon(ScreenNames.GOAL, color, size),
            tabBarLabel: capitalizeFirstLetter(ScreenNames.GOAL),
          }}
        >
          {() => <TodoBoard type={ScreenNames.GOAL} />}
        </Tab.Screen>
      </Tab.Navigator>
    </TodoContext.Provider>
  );
};

export default TodoTab;
