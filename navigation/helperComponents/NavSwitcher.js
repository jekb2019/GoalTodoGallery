import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ColorSchemeContext } from '../../context/ColorSchemeContext';

const NavSwitcher = ({ screenToSwitch }) => {
  const colorScheme = useContext(ColorSchemeContext);
  const iconColor = colorScheme === 'dark' ? '#F9F871' : '#BF209C';
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
