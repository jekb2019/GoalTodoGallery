import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import GoalGallery from '../screens/gallery/GoalGallery';
import LifeGallery from '../screens/gallery/LifeGallery';
import WorkGallery from '../screens/gallery/WorkGallery';
import { ScreenNames } from '../util/constants';
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
      name={ScreenNames.WORK}
      options={{
        tabBarIcon: ({ focused, color, size }) =>
          displayIcon(ScreenNames.WORK, color, size),
      }}
    />
    <Tab.Screen
      component={LifeGallery}
      name={ScreenNames.LIFE}
      options={{
        tabBarIcon: ({ focused, color, size }) =>
          displayIcon(ScreenNames.LIFE, color, size),
      }}
    />
    <Tab.Screen
      component={GoalGallery}
      name={ScreenNames.GOAL}
      options={{
        tabBarIcon: ({ focused, color, size }) =>
          displayIcon(ScreenNames.GOAL, color, size),
      }}
    />
  </Tab.Navigator>
);

export default GalleryTab;
