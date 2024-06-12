import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { View } from "react-native";

import styles from "../../styles";

const AnimatedVideo = () => {
  const [animationVisible, setAnimationVisible] = useState(true);

  const onAnimationFinish = () => {
    setAnimationVisible(false); // Sets the visibility state of the animation to false once it is completed
  };
  return (
    <View style={styles.animation}>
      {animationVisible && (
        <LottieView
          source={require("../assets/animations/device_rotate.json")}
          autoPlay
          speed={0.6}
          loop={false}
          style={{ width: 400, height: 400 }}
          onAnimationFinish={onAnimationFinish}
        />
      )}
    </View>
  );
};

export default AnimatedVideo;
