import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CenteredTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: height * 0.05,
    marginBottom: height * 0.03,
    fontSize: width < 350 ? 20 : 22,
    fontWeight: "bold",
    color: "#093923",
    fontFamily: "Poppins-Bold",
    alignSelf: "stretch",
    textAlign: "center",
  },
});

export default CenteredTitle;
