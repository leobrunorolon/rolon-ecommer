import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../Styles/colors";

const EmptyItem = () => {
  return (
    <View style={styles.emptyContainer}>
      <FontAwesome name="cart-arrow-down" size={50} color={colors.pink} />
      <Text style={styles.empty}>Empty</Text>
    </View>
  );
};

export default EmptyItem;

const styles = StyleSheet.create({
  emptyContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RobotoMono",
    color: colors.black,
  },
});
