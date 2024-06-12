import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const horizontalMargin = width * 0.1;

const InteractionSquare = ({ children }) => {
  return <View style={styles.interactionSquare}>{children}</View>;
};

const styles = StyleSheet.create({
  interactionSquare: {
    width: "100%",
    height: height * 0.35,
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: horizontalMargin / 2,
  },
});

export default InteractionSquare;
