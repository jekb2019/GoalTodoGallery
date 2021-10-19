import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScreenNames } from '../../util/constants';
import React from 'react';

export const displayIcon = (name, color, size) => {
  switch (name) {
    case ScreenNames.WORK:
      return <MaterialIcons name="work-outline" size={size} color={color} />;
    case ScreenNames.LIFE:
      return <Ionicons name="happy-outline" size={size} color={color} />;
    case ScreenNames.GOAL:
      return (
        <Ionicons
          name="md-checkmark-circle-outline"
          size={size}
          color={color}
        />
      );
    default:
      return null;
  }
};
