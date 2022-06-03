import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const GoBack = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 4,
  },
  button: {
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.pink,
  },
  text: {
    color: colors.white,
    borderRadius: 10,
    fontWeight: "bold",
  },
});
