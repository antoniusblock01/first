import React from "react";
import { StyleSheet, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // React.useEffect(() => {
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync();
  //   }, 2000); // Adjust the delay to your preference
  // }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/4b43604dd8b3e3cb3ff21e8cd8f3da00.png")}
        style={styles.logo}
      />

      <Image source={require("./assets/Vector1.png")} style={styles.vector1} />
      <Image source={require("./assets/Vector2.png")} style={styles.vector2} />
      <Image source={require("./assets/Vector1.png")} style={styles.vector3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#ffffffff",
  },
  logo: {
    width: 224, // Adjusted width
    height: 241, // Adjusted height
    marginBottom: 380,
  },
  vector1: {
    position: "absolute",
    bottom: 0,
    width: 420,
    height: 210,
    // left: 15.91,
    opacity: 0.8,
  },
  vector2: {
    position: "absolute",
    bottom: 0,
    width: 510,
    height: 280,
    opacity: 0.8,
  },
  vector3: {
    position: "absolute",
    bottom: 0,
    width: 375,
    height: 175,
    top: 600,
    // left: 28.18,
    // right: 15.91,
    opacity: 0.8,
  },
});
