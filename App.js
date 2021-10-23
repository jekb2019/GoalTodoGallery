import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import Root from './navigation/Root';
import * as Font from 'expo-font';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [assets] = useAssets([
    require('./assets/images/work1.jpg'),
    require('./assets/images/work2.jpg'),
    require('./assets/images/work3.jpg'),
    require('./assets/images/life1.jpg'),
    require('./assets/images/life2.jpg'),
    require('./assets/images/goal1.jpg'),
    require('./assets/images/goal2.jpg'),
  ]);

  const loadFonts = async () => {
    await Font.loadAsync({
      Ionicons: Ionicons.font,
      MaterialIcons: MaterialIcons.font,
      Feather: Feather.font,
    });
    setIsFontLoaded(true);
  };

  if (!assets || isFontLoaded) {
    return <AppLoading onFinish={() => setIsAppLoaded(true)} />;
  }

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
