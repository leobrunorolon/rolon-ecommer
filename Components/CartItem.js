import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Styles/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.description}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  header: {
    fontSize: 18,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
});
