import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movie from '../screens/Movie';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => (
    // initialRouteName는 기본 선택되어 있는 탭을 설정함
    // <Tab.Navigator initialRouteName="Search">
    <Tab.Navigator>
        <Tab.Screen
            name="Movies"
            component={Movie}
            options={{
                headerTitleStyle: { color: 'tomato' },
                headerRight: () => (
                    <View>
                        <Text>Hello</Text>
                    </View>
                )
            }}
        />
        <Tab.Screen name="TV" component={Tv} options={{ tabBarBadge: 5 }} />
        <Tab.Screen name="Search!" component={Search} />
    </Tab.Navigator>
);

export default Tabs;