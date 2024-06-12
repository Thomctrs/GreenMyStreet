import React from "react";
import { View, ImageBackground } from "react-native";

import styles from "../../../styles";
import ButtonComponent from "../../components/ButtonComponent";
import CenteredTitle from "../../components/CenteredTitle";
import GoBackButton from "../../components/GoBackButton";
import InteractionSquare from "../../components/InteractionSquare";
import PhotoSquare from "../../components/PhotoSquare";

const SelectedImagePage = ({ navigation, route }) => {
  console.log("selectedImagePage");
  const { imageUri, origin } = route.params;

  return (
    <View style={styles.containerSelectied}>
      <ImageBackground
        source={require("../../assets/images/blurbackground.png")}
        style={styles.backgroundImageSelectied}>
        <GoBackButton onPress={() => navigation.navigate("Home")} />
        <PhotoSquare imageSource={{ uri: imageUri }} />
        <InteractionSquare>
          <CenteredTitle title="Wil je deze foto gebruiken?" />
          <ButtonComponent
            label="Gebruik foto" // "Gebruik foto" => Use photo
            onPress={() => {
              console.log("Use photo");
              navigation.navigate("ImageSettings", { imageUri, origin });
            }}
          />
          <ButtonComponent
            label="Probeer opnieuw" // "Probeer opnieuw" => Try again
            onPress={() => {
              console.log("Try again");
              navigation.navigate(origin, { retry: true });
            }}
          />
        </InteractionSquare>
      </ImageBackground>
    </View>
  );
};

export default SelectedImagePage;
