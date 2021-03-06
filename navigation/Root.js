import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GalleryTab from './GalleryTab';
import NavSwitcher from './helperComponents/NavSwitcher/NavSwitcher';
import TodoTab from './TodoTab';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../util/colors';
import { ThemeProvider } from 'styled-components/native';

const RootStack = createNativeStackNavigator();

const Root = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <RootStack.Navigator
        screenOptions={{
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.headerColor,
          },
          headerTitleStyle: {
            color: theme.headerText,
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
    </ThemeProvider>
  );
};

export default Root;
