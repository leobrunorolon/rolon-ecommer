import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import { FontAwesome } from "@expo/vector-icons";

const ItemFound = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <FontAwesome name="cart-plus" size={18} color={colors.black} /> :{" "}
        {item.length}
      </Text>
    </View>
  );
};

export default ItemFound;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 5,
  },
  text: {
    padding: 8,
    marginRight: 10,
    backgroundColor: colors.blue,
    borderRadius: 5,
    color: colors.black,
    fontWeight: "bold",
    fontFamily: "RobotoMono",
    fontWeight: "600",
    fontSize: 16,
  },
});
