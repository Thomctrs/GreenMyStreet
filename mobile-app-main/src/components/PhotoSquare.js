import React from "react";
import { StyleSheet, View, Image } from "react-native";

const PhotoSquare = ({ children, imageSource }) => {
  return (
    <View style={styles.photoSquare}>
      <Image source={imageSource} style={styles.image} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  photoSquare: {
    width: "90%",
    height: "40%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center", // Toegevoegd voor centreren
    borderRadius: 20,
    bottom: 0,
    marginBottom: "65%",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});

export default PhotoSquare;
