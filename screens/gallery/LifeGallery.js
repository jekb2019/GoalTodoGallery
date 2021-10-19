import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LifeGallery = (props) => (
  <View style={styles.screen}>
    <Text>Life Gallery</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LifeGallery;
