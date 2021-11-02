import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movie from '../screens/Movie';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import { View, Text, useColorScheme } from 'react-native';
import { DOUBLE_ORAGON_SKIN, IMPERIAL_PRIMER, LIGHT_BLUE_BALERINA, STORM_PETREL } from '../colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === 'dark';

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: isDark ? IMPERIAL_PRIMER : LIGHT_BLUE_BALERINA
                },
                tabBarActiveTintColor: isDark ? DOUBLE_ORAGON_SKIN : IMPERIAL_PRIMER,
                tabBarInactiveTintColor: isDark ? LIGHT_BLUE_BALERINA : STORM_PETREL,
                headerStyle: {
                    backgroundColor: isDark ? IMPERIAL_PRIMER : LIGHT_BLUE_BALERINA
                },
                headerTitleStyle: {
                    color: isDark ? DOUBLE_ORAGON_SKIN : IMPERIAL_PRIMER,
                }
            }}
        >
            <Tab.Screen
                name="Movies"
                component={Movie}
            />
            <Tab.Screen name="TV" component={Tv} options={{ tabBarBadge: 5 }} />
            <Tab.Screen name="Search!" component={Search} />
        </Tab.Navigator>)
};

export default Tabs;