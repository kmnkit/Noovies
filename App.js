import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native"; // DarkTheme, DefaultTheme 커스텀 안한 다크, 라이트 모드 사용 가능
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./styled";
import { useColorScheme } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  const [assets] = useAssets([require("./casa.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font); // useFonts는 fonts 로드 여부에 따라 T or F를 준다.
  const isDark = useColorScheme() === "dark";
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  // return <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}><Tabs /></NavigationContainer>
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
