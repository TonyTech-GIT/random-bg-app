import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
// import { useClipboard } from "@react-native-clipboard/clipboard";
import * as Clipboard from "expo-clipboard";

export default function HomeScreen() {
  const [randomBg, setRandomBg] = useState("#ffffff");
  const [randomBgOne, setRandomBgOne] = useState("#3f824b");
  const [randomBgTwo, setRandomBgTwo] = useState("#3f826d");
  const [isSelectable, setIsSelectable] = useState(false);

  //   const [shapesCount, setShapesCount] = useState(0);

  const generateRandomColor = () => {
    const hexRange = "0123456789ABCDEF";
    // Generate a random hexadecimal color code.

    let randomColor = "#";
    for (let index = 0; index < 6; index++) {
      randomColor += hexRange[Math.floor(Math.random() * 16)];
    }

    return randomColor;
    // let randomColor = "#" + Math.floor(Math.random() * hexValue).toString(6);
  };

  const handleBgchange = () => {
    const newRandomBg = generateRandomColor();
    const newRandomBgOne = generateRandomColor();
    const newRandomBgTwo = generateRandomColor();

    setRandomBg(newRandomBg);
    setRandomBgOne(newRandomBgOne);
    setRandomBgTwo(newRandomBgTwo);
  };

  const copyToClipboard = async (color) => {
    await Clipboard.setStringAsync(color);
    Alert.alert("Copied", `${color} has been copied to clipboard`);
  };

  const handleOutsidePress = () => {
    setIsSelectable(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <SafeAreaView style={[styles.container, { backgroundColor: randomBg }]}>
          <StatusBar
            backgroundColor={randomBg}
            // translucent={false}
            // barStyle={"dark-content"}
          />
          <View style={styles.content}>
            <Text
              style={{ marginBottom: 40, fontSize: 30, fontWeight: "bold" }}
            >
              Random Background Color
            </Text>

            <TouchableOpacity
              onPress={() => {
                copyToClipboard(randomBg);
                setIsSelectable(true);
              }}
            >
              <Text selectable={isSelectable}>{randomBg}</Text>
            </TouchableOpacity>

            <View style={styles.firstSetShapes}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: randomBgOne,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(randomBgOne);
                    setIsSelectable(true);
                  }}
                >
                  <Text selectable={true}>{randomBgOne}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: randomBgTwo,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(randomBgTwo);
                    setIsSelectable(true);
                  }}
                >
                  <Text selectable={true}>{randomBgTwo}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={handleBgchange} style={styles.btn}>
              <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
                Click Me|
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    // alignItems: "center",
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  //   randomBg: {}
  btn: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    fontSize: 20,
  },
  firstSetShapes: {
    height: 200,
    width: 400,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
