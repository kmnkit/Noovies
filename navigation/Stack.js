import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { DOUBLE_ORAGON_SKIN } from "../colors";

// 일반 Stack은 Javascript로 이루어져 Customizing이 쉽지만 Native Stack에 비해 느릴 수 있다.
// Native Stack은 Native API가 사용되기에 Customizing의 여지가 별로 없다.
const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>One</Text>
  </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>Two</Text>
  </TouchableOpacity>
);

const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Hello!" })}>
    <Text>Change Title</Text>
  </TouchableOpacity>
);
const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      presentation: "modal",
      animation: "flip",
      headerTintColor: DOUBLE_ORAGON_SKIN,
      headerBackTitleVisible: false,
    }}
  >
    {/* options로 개별 옵션 줄 수 있음 */}
    <NativeStack.Screen name="One" component={ScreenOne} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen name="Three" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
