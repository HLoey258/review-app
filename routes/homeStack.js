// in this file i config my stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "react-navigation";
import { View, Text } from "react-native";
import React from "react";
import Home from "../screens/home";
const Stack = createNativeStackNavigator();

export default function homeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
