import { View, Text } from "react-native";
import React from "react";
import { globalStyle } from "../styles/globalStyle";

export default function About({ navigation, route }) {
  const { ItemName, ItemId } = route.params;
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.titleText}>this is {ItemName}</Text>
      <Text style={globalStyle.titleText}>this is {ItemId}</Text>
    </View>
  );
}
