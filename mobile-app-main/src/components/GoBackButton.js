import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const GoBackButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "6%",
    left: "3%",
    margin: 10,
    zIndex: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default GoBackButton;
