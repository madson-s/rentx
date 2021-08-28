import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium
} from '@expo-google-fonts/archivo'
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home';

import theme from './src/global/styles/theme';
import { CardDetails } from './src/screens/CardDetails';
import { Scheduling } from './src/screens/Scheduling';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="light"/>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        {/* <CardDetails/> */}
        <Scheduling />
      </ThemeProvider>
    </>
  );
}
