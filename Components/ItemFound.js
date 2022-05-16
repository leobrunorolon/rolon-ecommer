import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const ItemFound = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Found: {item.length}</Text>
    </View>
  );
};

export default ItemFound;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 5,
  },
  text: {
    padding: 8,
    marginRight: 10,
    backgroundColor: colors.blue,
    borderRadius: 5,
    color: colors.black,
    fontWeight: "bold",
  },
});
