import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React, { useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';
import 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/static/Montserrat-Medium.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
    <AppNavigation/>
    </>
  );
}


