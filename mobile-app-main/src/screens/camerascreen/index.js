import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Alert, Platform, Linking } from "react-native";

import styles from "../../../styles";
import AnimatedVideo from "../../animation/Animation";

const CameraScreen = ({ navigation, route }) => {
  const [camera, setCamera] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const openAppSettings = () => {
    console.log("Trying to open app settings...");
    if (Platform.OS === "ios") {
      console.log("Opening iOS settings...");
      Linking.openURL("app-settings:");
    } else {
      console.log("Opening Android settings...");
      Linking.openSettings();
    }
  };

  const takePicture = async () => {
    if (camera) {
      try {
        const photo = await camera.takePictureAsync();
        console.log("Photo taken:", photo);
        const { width, height } = photo;
        const orientation = width > height ? "horizontal" : "vertical";
        console.log("Orientation:", orientation);

        navigation.navigate("SelectedImagePage", { imageUri: photo.uri, origin: route.name });
      } catch (error) {
        console.error("Failed to take picture:", error);
      }
    }
  };

  useEffect(() => {
    const requestCameraPerms = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        setHasCameraPermission(status === "granted");
        console.log("Camera permission denied");
        Alert.alert(
          "Toegang tot camera geweigerd",
          "We hebben toegang tot de camera nodig om foto's te maken die we kunnen transformeren naar een groenere versie.",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Open Settings",
              onPress: openAppSettings,
            },
          ],
        );
        navigation.navigate("Home");
      }
    };
    requestCameraPerms();
  }, [navigation, hasCameraPermission]);

  const isFocused = useIsFocused();

  return (
    <View style={styles.cameraContainer}>
      {isFocused && (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          autoFocus
          orientation="landscape"
          ref={(ref) => setCamera(ref)}
        />
      )}
      <View style={styles.animationeffect}>
        <AnimatedVideo />
      </View>
      <View style={styles.buttonContainerCamera}>
        <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
          <MaterialIcons name="camera-alt" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            navigation.navigate("Home");
          }}>
          <MaterialIcons name="close" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
