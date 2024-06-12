import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Text, Image, Alert } from "react-native";

import styless from "../../../styles";
import useGetImage from "../../services/useGetImage";

const LoadingScreen = ({ navigation, route }) => {
  const { imageUri, sliderValue } = route.params;
  const [loadingMessage, setLoadingMessage] = useState(
    "Bezig met het groener maken van jouw straat",
  );
  const [isLoading, setIsLoading] = useState(true);
  // console.log("Andere tekst");

  useEffect(() => {
    const ApiCall = async () => {
      try {
        const outputData = await useGetImage(imageUri, sliderValue);
        navigation.navigate("SavingPicturePage", { transformedImageUri: outputData });
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to process image:", error);
        setIsLoading(false);

        Alert.alert(
          "Er gaat iets mis, probeer het later opnieuw.",
          "",
          [
            {
              text: "Terug naar beginscherm",
              onPress: () => {
                console.log("Navigating to homepage");
                navigation.navigate("Home");
              },
            },
          ],
          { cancelable: false },
        );
      }
    };
    ApiCall();
  }, [imageUri, sliderValue, navigation]);

  useEffect(() => {
    const messages = [
      "Planten aan het planten...",
      "Bloemen aan het poten...",
      "Gras aan het maaien...",
      "Water aan het geven...",
    ];
    let messageIndex = 0;

    if (isLoading) {
      const intervalId = setInterval(() => {
        setLoadingMessage(messages[messageIndex % messages.length]);
        messageIndex++;
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [isLoading, setLoadingMessage]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/blurbackground.png")}
        style={styles.backgroundImage}>
        <Image source={require("../../assets/animations/Loading.gif")} />
        <Text style={styless.subtitle}>{loadingMessage}</Text>
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

export default LoadingScreen;
