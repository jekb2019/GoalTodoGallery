import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { IsDarkModeContext } from '../../context/IsDarkModeContext';
import { darkTheme, lightTheme } from '../../util/colors';

const NavSwitcher = ({ screenToSwitch }) => {
  const isDarkMode = useContext(IsDarkModeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const iconColor = theme.headerText;
  const TodoIcon = <AntDesign name="edit" size={24} color={iconColor} />;
  const GalleryIcon = (
    <FontAwesome5 name="images" size={24} color={iconColor} />
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
    <TouchableOpacity onPress={switchScreen}>
      <Text>{displayButton()}</Text>
    </TouchableOpacity>
  );
};

export default NavSwitcher;
