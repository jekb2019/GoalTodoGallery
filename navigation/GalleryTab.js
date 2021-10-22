import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import GoalGallery from '../screens/gallery/GoalGallery';
import LifeGallery from '../screens/gallery/LifeGallery';
import WorkGallery from '../screens/gallery/WorkGallery';
import { SCREEN_NAMES } from '../util/constants';
import { capitalizeFirstLetter } from '../util/helpers';
import { displayIcon } from './util/displayer';

const Tab = createBottomTabNavigator();

const GalleryTab = (props) => {
  const theme = useContext(ThemeContext);

  return (
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
        component={WorkGallery}
        name={SCREEN_NAMES.WORK}
        options={{
          tabBarIcon: ({ _, color, size }) =>
            displayIcon(SCREEN_NAMES.WORK, color, size),
          tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.WORK),
        }}
      />
      <Tab.Screen
        component={LifeGallery}
        name={SCREEN_NAMES.LIFE}
        options={{
          tabBarIcon: ({ _, color, size }) =>
            displayIcon(SCREEN_NAMES.LIFE, color, size),
          tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.LIFE),
        }}
      />
      <Tab.Screen
        component={GoalGallery}
        name={SCREEN_NAMES.GOAL}
        options={{
          tabBarIcon: ({ _, color, size }) => {
            return displayIcon(SCREEN_NAMES.GOAL, color, size);
          },
          tabBarLabel: capitalizeFirstLetter(SCREEN_NAMES.GOAL),
        }}
      />
    </Tab.Navigator>
  );
};

export default GalleryTab;
