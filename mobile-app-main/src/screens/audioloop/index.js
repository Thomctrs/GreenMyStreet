import { Audio } from "expo-av";
import { useEffect } from "react";

const AudioLoop = () => {
  useEffect(() => {
    const soundObject = new Audio.Sound();

    const loadSound = async () => {
      try {
        await soundObject.loadAsync(require("../../assets/audio/bird_loop.mp3"));
        await soundObject.setIsLoopingAsync(true);
        await soundObject.playAsync();
      } catch (error) {
        console.error("Cant charge the sound", error);
      }
    };

    loadSound();

    return () => {
      soundObject.stopAsync();
      soundObject.unloadAsync();
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
};

export default AudioLoop;
