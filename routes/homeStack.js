import { View, Text } from "react-native";
import React from "react";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetail from "../screens/reviewDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home Screen"
        activeColor="#000"
        inactiveColor="#f0edf6"
      >
        <Tab.Screen name="Home Screen" component={Home} />
        <Tab.Screen name="About Screen" component={About} />
        <Tab.Screen name="Review Detail" component={ReviewDetail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
