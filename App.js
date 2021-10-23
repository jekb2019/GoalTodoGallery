import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
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
    await Font.loadAsync(Ionicons.font);
    await Font.loadAsync(MaterialIcons.font);
    await Font.loadAsync(Feather.font);
    setIsFontLoaded(true);
  };

  useEffect(() => {
    loadFonts().catch(console.error);
  });

  if (assets && isFontLoaded) {
    return (
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    );
  }

  return <AppLoading onFinish={() => setIsAppLoaded(true)} />;
}
