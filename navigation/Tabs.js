import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { IMPERIAL_PRIMER } from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? IMPERIAL_PRIMER : "white",
      }}
      screenOptions={{
        unmountOnBlur: true,
        headerStyle: {
          backgroundColor: isDark ? IMPERIAL_PRIMER : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : IMPERIAL_PRIMER,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movie}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
