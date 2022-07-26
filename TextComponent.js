import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function TextComponent() {
  return (
    <View>
      <Text style={styles.number}>Hola componente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    top: 10,
    color: "black",
    fontSize: 12,
  },
});
