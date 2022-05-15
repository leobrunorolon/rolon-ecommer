import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title = "E-commers" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
