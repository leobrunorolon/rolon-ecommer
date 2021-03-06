import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const Header = ({ title = "E-commers" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.black,
    justifyContent: "center",
    paddingVertical: 20,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
  },
});
