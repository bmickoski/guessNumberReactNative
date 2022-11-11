import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ rounds, userNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
