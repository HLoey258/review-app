import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import { globalStyle } from "./styles/globalStyle";
import * as Font from "expo-font";
import HomeStack from "./routes/homeStack";

// Apploading component with startAsync use when we want the function to run

export default function App() {
  return <HomeStack></HomeStack>;
}
