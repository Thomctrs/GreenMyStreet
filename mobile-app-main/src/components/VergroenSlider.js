import Slider from "@react-native-community/slider";
import * as Haptics from "expo-haptics";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const horizontalMargin = width * 0.1;

const VergroenSlider = ({ sliderValue, setSliderValue }) => {
  const handleValueChange = (value) => {
    setSliderValue(value);
    Haptics.selectionAsync(); // Trigger a light impact haptic feedback
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0.25}
        maximumValue={1}
        step={0.25}
        value={sliderValue}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#093923"
        maximumTrackTintColor="#E5E5E2"
        thumbTintColor="#093923"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: "center",
  },
  slider: {
    height: 90,
    width: width - 2 * horizontalMargin,
  },
});

export default VergroenSlider;
