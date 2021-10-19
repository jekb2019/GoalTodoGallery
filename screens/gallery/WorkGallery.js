import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WorkGallery = (props) => (
  <View style={styles.screen}>
    <Text>Work Gallery</Text>
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

export default WorkGallery;
