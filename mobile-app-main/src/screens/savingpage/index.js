import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import React from "react";
import { View, ImageBackground, Alert, Platform } from "react-native";

import styles from "../../../styles";
import ButtonComponent from "../../components/ButtonComponent";
import CenteredTitle from "../../components/CenteredTitle";
import GoBackButton from "../../components/GoBackButton";
import InteractionSquare from "../../components/InteractionSquare";
import PhotoSquare from "../../components/PhotoSquare";

const SavingPicturePage = ({ navigation, route }) => {
  const { transformedImageUri } = route.params;

  const saveImage = async () => {
    try {
      const permissionResult = await MediaLibrary.requestPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Fout", "Toestemming mediabibliotheek geweigerd");
        return;
      }

      const base64Content = transformedImageUri.split(",")[1];
      const filename = FileSystem.documentDirectory + "tempImage.png";

      await FileSystem.writeAsStringAsync(filename, base64Content, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const asset = await MediaLibrary.createAssetAsync(filename);
      const albumName = Platform.OS === "ios" ? "Camera Roll" : "DCIM";
      const album = await MediaLibrary.getAlbumAsync(albumName);
      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      } else {
        await MediaLibrary.createAlbumAsync(albumName, asset, false);
      }

      console.log("image saved :", asset.uri);
      Alert.alert("Success", "Afbeelding succesvol opgeslagen.");
      return filename;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const shareLocalImage = async () => {
    try {
      if (!(await Sharing.isAvailableAsync())) {
        alert("Uh oh, sharing isn't available on your platform");
        return;
      }

      const filename = FileSystem.documentDirectory + "tempImage.png";
      const base64Content = transformedImageUri.split(",")[1];

      await FileSystem.writeAsStringAsync(filename, base64Content, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await Sharing.shareAsync(filename);

      // Delete the file after sharing
      await FileSystem.deleteAsync(filename);
      console.log("Image shared successfully.");
    } catch (error) {
      console.error("Error sharing local image:", error);
    }
  };

  return (
    <View style={styles.containerSave}>
      <ImageBackground
        source={require("../../assets/images/blurbackground.png")}
        style={styles.backgroundsaveImage}>
        <GoBackButton onPress={() => navigation.navigate("Home")} />
        {transformedImageUri && (
          <PhotoSquare imageSource={{ uri: transformedImageUri }} style={styles.image} />
        )}
        <InteractionSquare>
          <CenteredTitle title="Opslaan of delen" />
          <View style={styles.buttonContainer}>
            <ButtonComponent label="Opslaan" onPress={saveImage} />
            <ButtonComponent label="Delen" onPress={shareLocalImage} />
            <ButtonComponent
              label="Terug naar het beginscherm"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </InteractionSquare>
      </ImageBackground>
    </View>
  );
};

export default SavingPicturePage;
