import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SCREEN_NAMES } from '../../util/constants';
import React from 'react';

export const displayIcon = (name, color, size) => {
  switch (name) {
    case SCREEN_NAMES.WORK:
      return <MaterialIcons name="work-outline" size={size} color={color} />;
    case SCREEN_NAMES.LIFE:
      return <Ionicons name="happy-outline" size={size} color={color} />;
    case SCREEN_NAMES.GOAL:
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
