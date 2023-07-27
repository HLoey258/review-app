import { Text, View } from "react-native";
import React, { Component } from "react";
import { globalStyle } from "../styles/globalStyle";
import { Button } from "react-native";
import About from "./about";
export default function Home({ navigation }) {
  const changeScreen = () => {
    navigation.navigate("About Screen");
  };
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.titleText}>App is sadaworking</Text>
      <Button title="Go to detail screen" onPress={changeScreen}></Button>
    </View>
  );
}
