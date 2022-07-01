import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { removeItem } from "../features/cart";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Styles/colors";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(removeItem(item.id));
  };
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>${item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
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
