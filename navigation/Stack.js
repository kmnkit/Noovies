import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DOUBLE_ORAGON_SKIN, IMPERIAL_PRIMER } from "../colors";
import Detail from "../screens/Detail";
import { useColorScheme } from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? IMPERIAL_PRIMER : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : IMPERIAL_PRIMER,
        },
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  );
};

export default Stack;
