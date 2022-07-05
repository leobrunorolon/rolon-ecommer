import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Styles/colors";
import CartItem from "../Components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cleanItem, confirmPurchase, totalItem } from "../features/cart";
import EmptyItem from "../Components/EmptyItem";
import { Modal } from "react-native";
import CustomButton from "../Components/CustomButton";

const renderItem = (data) => <CartItem item={data.item} />;

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart.value);
  const { total } = useSelector((state) => state.cart.value);
  const { user } = useSelector((state) => state.auth.value);
  // const userPrueba = {
  //   email: "prueba@gmail.com",
  //   token: "12345",
  //   userId: "prueba",
  // };
  const [modalOpen, setModalOpen] = useState(false);
  const [dataOrder, setDataOrder] = useState({
    id: null,
    date: null,
    total: 0,
  });

  useEffect(() => {
    dispatch(totalItem());
  }, [cart]);

  const handleConfirm = async () => {
    const items = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      total: await total,
      cart: await cart,
      user: await user,
    };
    setModalOpen(true);
    if (items.total >= 1) {
      setDataOrder({
        id: items.id,
        date: items.date,
        total: items.total,
      });
      dispatch(confirmPurchase(items));
    }
  };

  const handleClose = () => {
    setDataOrder({
      id: null,
      date: null,
      total: 0,
    });
    dispatch(cleanItem());
    setModalOpen(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {cart.length == 0 && <EmptyItem />}
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
      <Modal style={styles.modal} visible={modalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          {dataOrder.total !== 0 && (
            <View style={styles.order}>
              <Text style={styles.text}>Order: {dataOrder.id}</Text>
              <Text style={styles.text}>Fecha: {dataOrder.date}</Text>
              <Text style={styles.text}>Total: ${dataOrder.total}</Text>
            </View>
          )}
          {cart.length == 0 && (
            <View style={styles.order}>
              <Text style={styles.text}>No tiene productos en el carrito</Text>
            </View>
          )}
          <CustomButton title={"Close"} onPress={handleClose} />
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    backgroundColor: colors.yellow,
  },
  order: {
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    backgroundColor: colors.blue,
    margin: 30,
    borderRadius: 20,
    colors: colors.white,
    marginTop: 200,
  },
});
