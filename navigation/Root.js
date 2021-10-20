import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GalleryTab from './GalleryTab';
import NavSwitcher from './helperComponents/NavSwitcher';
import TodoTab from './TodoTab';
import { ColorSchemeContext } from '../context/ColorSchemeContext';
import { useColorScheme } from 'react-native';

const RootStack = createNativeStackNavigator();

const Root = () => {
  const colorScheme = useColorScheme();

  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <RootStack.Navigator
        screenOptions={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFD0',
          },
          headerTitleStyle: {
            color: colorScheme === 'dark' ? '#F9F871' : '#BF209C',
            fontSize: 20,
          },
        }}
      >
        <RootStack.Screen
          name="Todo"
          component={TodoTab}
          options={{
            headerRight: () => <NavSwitcher screenToSwitch="Gallery" />,
          }}
        />
        <RootStack.Screen
          name="Gallery"
          component={GalleryTab}
          options={{
            headerRight: () => <NavSwitcher screenToSwitch="Todo" />,
          }}
        />
      </RootStack.Navigator>
    </ColorSchemeContext.Provider>
  );
};

export default Root;
