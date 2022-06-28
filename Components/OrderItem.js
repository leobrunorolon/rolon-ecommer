import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const OrderItem = ({ item }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.tracker}>Gestion: {item.id}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.total}>${item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 6,
  },
  date: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
  },
  tracker: {
    textAlign: "center",
    fontSize: 18,
  },
});
