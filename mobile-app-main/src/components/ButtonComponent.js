import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const horizontalMargin = width * 0.1;

const ButtonComponent = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#093923",
    paddingVertical: 10,
    paddingHorizontal: width * 0.1,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: Dimensions.get("window").height * 0.007,
    width: width - 2 * horizontalMargin,
  },
  buttonText: {
    color: "#F8F7F3",
    fontWeight: "bold",
    fontSize: width < 350 ? 14 : 15,
    fontFamily: "Poppins-SemiBold",
  },
});

export default ButtonComponent;
