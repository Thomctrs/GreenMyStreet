import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import ButtonComponent from "../../components/ButtonComponent";
import CenteredTitle from "../../components/CenteredTitle";
import GoBackButton from "../../components/GoBackButton";
import InteractionSquare from "../../components/InteractionSquare";
import PhotoSquare from "../../components/PhotoSquare";
import VergroenSlider from "../../components/VergroenSlider";

const ImageSettings = ({ navigation, route }) => {
  const { imageUri } = route.params;
  const [sliderValue, setSliderValue] = useState(0.25);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/blurbackground.png")}
        style={styles.backgroundImage}>
        <GoBackButton onPress={() => navigation.goBack()} />
        <PhotoSquare imageSource={{ uri: imageUri }} />
        <InteractionSquare>
          <CenteredTitle title="Hoeveel procent wil je vergroenen?" />
          <VergroenSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
          <ButtonComponent
            label={`Vergroen foto ${(sliderValue * 100).toFixed(0)}%`}
            onPress={() => navigation.navigate("LoadingScreen", { imageUri, sliderValue })}
          />
        </InteractionSquare>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageSettings;
