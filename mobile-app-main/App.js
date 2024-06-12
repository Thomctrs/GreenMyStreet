import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import AudioLoop from "./src/screens/audioloop/index";
import CameraScreen from "./src/screens/camerascreen/index";
import ImageSettings from "./src/screens/imagesettings/index";
import LoadingScreen from "./src/screens/loadingscreen/index";
import MainPage from "./src/screens/mainpage/index";
import SavingPicturePage from "./src/screens/savingpage/index";
import SelectedImagePage from "./src/screens/selectedimagepage/index";
import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
        "Poppins-BlackItalic": require("./src/assets/fonts/Poppins-BlackItalic.ttf"),
        "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
        "Poppins-BoldItalic": require("./src/assets/fonts/Poppins-BoldItalic.ttf"),
        "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraBoldItalic": require("./src/assets/fonts/Poppins-ExtraBoldItalic.ttf"),
        "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-ExtraLightItalic": require("./src/assets/fonts/Poppins-ExtraLightItalic.ttf"),
        "Poppins-Italic": require("./src/assets/fonts/Poppins-Italic.ttf"),
        "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
        "Poppins-LightItalic": require("./src/assets/fonts/Poppins-LightItalic.ttf"),
        "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
        "Poppins-MediumItalic": require("./src/assets/fonts/Poppins-MediumItalic.ttf"),
        "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-SemiBoldItalic": require("./src/assets/fonts/Poppins-SemiBoldItalic.ttf"),
        "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
        "Poppins-ThinItalic": require("./src/assets/fonts/Poppins-ThinItalic.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Home" component={MainPage} options={{ orientation: "portrait" }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen
          name="SelectedImagePage"
          component={SelectedImagePage}
          options={{ orientation: "portrait" }}
        />
        <Stack.Screen
          name="ImageSettings"
          component={ImageSettings}
          options={{ orientation: "portrait" }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ orientation: "portrait" }}
        />
        <Stack.Screen
          name="SavingPicturePage"
          component={SavingPicturePage}
          options={{ orientation: "portrait" }}
        />
      </Stack.Navigator>
      <AudioLoop />
    </NavigationContainer>
  );
}
