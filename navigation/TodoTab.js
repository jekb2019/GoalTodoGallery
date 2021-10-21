import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoBoard from '../screens/todo/TodoBoard/TodoBoard';
import { SCREEN_NAMES } from '../util/constants';
import { displayIcon } from './util/displayer';
import { TodoContext } from '../context/TodoContext';
import { useTodo } from '../hooks/useTodo';
import { capitalizeFirstLetter } from '../util/helpers';
import { ThemeContext } from 'styled-components/native';

const Tab = createBottomTabNavigator();

const TodoTab = () => {
  const [todo, dispatch] = useTodo();

  const theme = useContext(ThemeContext);

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.tabBg,
          },
          tabBarActiveTintColor: theme.tabActive,
          tabBarInactiveTintColor: theme.tabInactive,
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name={SCREEN_NAMES.WORK}
          options={{
            tabBarIcon: ({ _, color, size }) =>
              displayIcon(SCREEN_NAMES.WORK, color, size),
            tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.WORK),
          }}
        >
          {() => <TodoBoard type={SCREEN_NAMES.WORK} />}
        </Tab.Screen>
        <Tab.Screen
          name={SCREEN_NAMES.LIFE}
          options={{
            tabBarIcon: ({ _, color, size }) =>
              displayIcon(SCREEN_NAMES.LIFE, color, size),
            tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.LIFE),
          }}
        >
          {() => <TodoBoard type={SCREEN_NAMES.LIFE} />}
        </Tab.Screen>
        <Tab.Screen
          name={SCREEN_NAMES.GOAL}
          options={{
            tabBarIcon: ({ _, color, size }) => {
              return displayIcon(SCREEN_NAMES.GOAL, color, size);
            },
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
