import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  // then can import this to any place
  // global style should be here
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
