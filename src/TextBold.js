import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TextBold(props) {
  const { text } = props;
  return (
    <View>
      <Text style={styles.bold}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    top: 10,
    fontSize: 10,
    color: "black",
    fontWeight: "bold",
  },
});
