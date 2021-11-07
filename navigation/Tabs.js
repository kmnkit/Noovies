import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import {
  DOUBLE_ORAGON_SKIN,
  IMPERIAL_PRIMER,
  LIGHT_BLUE_BALERINA,
  STORM_PETREL,
} from "../colors";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? IMPERIAL_PRIMER : LIGHT_BLUE_BALERINA,
        },
        tabBarActiveTintColor: isDark ? DOUBLE_ORAGON_SKIN : IMPERIAL_PRIMER,
        tabBarInactiveTintColor: isDark ? LIGHT_BLUE_BALERINA : STORM_PETREL,
        headerStyle: {
          backgroundColor: isDark ? IMPERIAL_PRIMER : LIGHT_BLUE_BALERINA,
        },
        headerTitleStyle: {
          color: isDark ? DOUBLE_ORAGON_SKIN : IMPERIAL_PRIMER,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
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
