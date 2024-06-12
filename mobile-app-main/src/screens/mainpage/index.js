import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Linking,
  Platform,
} from "react-native";

import styles from "../../../styles";
import PrivacyPanel from "../privacypanel/index";

const MainPage = ({ navigation, route }) => {
  const [privacyVisible, setPrivacyVisible] = useState(false);

  const requestLibraryPerms = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Media library permission denied");
      Alert.alert(
        "Toegang tot fotogalerij geweigerd",
        "Wij hebben toegang tot je fotogalerij nodig om foto's te selecteren die we kunnen transformeren naar een groenere versie.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Open Settings",
            onPress: openLibrarySettings,
          },
        ],
      );
    } else {
      choosePhoto();
    }
  };

  const choosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    // verifify if selection is cancelled.
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      console.log("Selected image URI:", result.assets[0].uri);
      navigation.navigate("SelectedImagePage", {
        imageUri: result.assets[0].uri,
        origin: route.name,
      });
    } else {
      console.log("Selection cancelled or no image selected");
      navigation.navigate("Home");
    }
  };

  const openLibrarySettings = () => {
    console.log("Trying to open library settings...");
    if (Platform.OS === "ios") {
      console.log("Opening iOS settings...");
      Linking.openURL("app-settings:");
    } else {
      console.log("Opening Android settings...");
      Linking.openSettings();
    }
  };

  // not 100% sure if this will always work
  if (route.params) {
    console.log("non-first attempt");
    requestLibraryPerms();
  }

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>GreenMyStreet</Text>
        <Text style={styles.subtitle}>Waar ideeën wisselen, groeien perspectieven!</Text>
        <View style={styles.contentContainer}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CameraScreen")}>
              <Text style={styles.buttonText}>Maak foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={requestLibraryPerms}>
              <Text style={styles.buttonText}>Kies foto</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setPrivacyVisible(true)} style={styles.privacyStatement}>
            <Text style={styles.privacyStatementText}>Privacyverklaring</Text>
          </TouchableOpacity>
        </View>
        {privacyVisible && <PrivacyPanel onClose={() => setPrivacyVisible(false)} />}
      </View>
    </ImageBackground>
  );
};

export default MainPage;
