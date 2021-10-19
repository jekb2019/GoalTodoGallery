import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import GoalGallery from '../screens/gallery/GoalGallery';
import LifeGallery from '../screens/gallery/LifeGallery';
import WorkGallery from '../screens/gallery/WorkGallery';
import { SCREEN_NAMES } from '../util/constants';
import { displayIcon } from './util/displayer';

const Tab = createBottomTabNavigator();

const GalleryTab = (props) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      component={WorkGallery}
      name={SCREEN_NAMES.WORK}
      options={{
        tabBarIcon: ({ focused, color, size }) =>
          displayIcon(SCREEN_NAMES.WORK, color, size),
      }}
    />
    <Tab.Screen
      component={LifeGallery}
      name={SCREEN_NAMES.LIFE}
      options={{
        tabBarIcon: ({ focused, color, size }) =>
          displayIcon(SCREEN_NAMES.LIFE, color, size),
      }}
    />
    <Tab.Screen
      component={GoalGallery}
      name={SCREEN_NAMES.GOAL}
      options={{
        tabBarIcon: ({ focused, color, size }) =>
          displayIcon(SCREEN_NAMES.GOAL, color, size),
      }}
    />
  </Tab.Navigator>
);

export default GalleryTab;
