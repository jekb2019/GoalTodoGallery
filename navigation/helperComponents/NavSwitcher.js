import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const TodoIcon = <AntDesign name="edit" size={24} color="black" />;
const GalleryIcon = <FontAwesome5 name="images" size={24} color="black" />;

const NavSwitcher = ({ screenToSwitch }) => {
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
