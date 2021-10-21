import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SwitchBtn } from './style';
import { ThemeContext } from 'styled-components/native';

const NavSwitcher = ({ screenToSwitch }) => {
  const theme = useContext(ThemeContext);
  const TodoIcon = <AntDesign name="edit" size={24} color={theme.headerText} />;
  const GalleryIcon = (
    <FontAwesome5 name="images" size={24} color={theme.headerText} />
  );

  const navigation = useNavigation();

  const switchScreen = () => {
    navigation.navigate(screenToSwitch);
  };

  const displayButton = () => {
    switch (screenToSwitch) {
      case 'Gallery':
        return GalleryIcon;
      case 'Todo':
        return TodoIcon;
      default:
        return null;
    }
  };

  return (
    <SwitchBtn onPress={switchScreen}>
      <Text>{displayButton()}</Text>
    </SwitchBtn>
  );
};

export default NavSwitcher;
