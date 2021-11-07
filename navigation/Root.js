import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import Tabs from "./Tabs";

const rootNav = createNativeStackNavigator();

const Root = () => (
  <rootNav.Navigator
    screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <rootNav.Screen name="Tabs" component={Tabs} />
    <rootNav.Screen name="Stack" component={Stack} />
  </rootNav.Navigator>
);

export default Root;

// 이 위에서 일어난 일 정리
// Root {
//     Tabs{
//         Movies -> navigate(Stack, {screen: One})
//     }
//     Stack{
//         One -> navigate(Tabs, {screen: Search})
//     }
// }
