import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import * as THEME from '../constants/theme';
import styles from './BottomNavigation.style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

type BottomNavigationParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<BottomNavigationParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.LIGHT_GREY,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Nkwa flip',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Nkwa flip',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
