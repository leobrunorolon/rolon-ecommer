import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import CartItem from "../Components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { confirmPurchase } from "../features/cart";

const handleDelete = (id) =>
  console.log(`Se elimina del carrito el producto con id: ${id}`);

const renderItem = (data) => (
  <CartItem item={data.item} onDelete={handleDelete} />
);

const CartScreen = () => {
  const { cart } = useSelector((state) => state.cart.value);
  const { total } = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(confirmPurchase(cart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: colors.black,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: colors.black,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
    color: colors.white,
  },
});
