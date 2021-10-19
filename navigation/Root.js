import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GalleryTab from './GalleryTab';
import NavSwitcher from './helperComponents/NavSwitcher';
import TodoTab from './TodoTab';

const RootStack = createNativeStackNavigator();

const Root = (props) => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackVisible: false,
      }}
    >
      <RootStack.Screen
        name="Todo"
        component={TodoTab}
        options={{
          headerRight: (props) => <NavSwitcher screenToSwitch="Gallery" />,
        }}
      />
      <RootStack.Screen
        name="Gallery"
        component={GalleryTab}
        options={{
          headerRight: (props) => <NavSwitcher screenToSwitch="Todo" />,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Root;
