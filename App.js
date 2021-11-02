import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from 'expo-font';
import { Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';

export default function App() {
  const [assets] = useAssets([require('./casa.jpg')]);
  const [loaded] = Font.useFonts(Ionicons.font); // useFonts는 fonts 로드 여부에 따라 T or F를 준다.
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return <Text>We are done loading!</Text>;
}