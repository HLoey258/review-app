import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import { globalStyle } from "./styles/globalStyle";
import * as Font from "expo-font";

// Apploading component with startAsync use when we want the function to run

const getFont = () => {
  return Font.loadAsync({
    // your font : require("// link to font folder"),
    // another fonts
  });
};
export default function App() {
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.titleText}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
