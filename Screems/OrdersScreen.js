import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "../Components/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/orders";
import EmptyItem from "../Components/EmptyItem";

const renderItem = ({ item }) => <OrderItem item={item} />;

const OrdersScreen = () => {
  const { orders } = useSelector((state) => state.orders.value);
  const { user } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  // const userprueba = {
  //   email: "prueba@gmail.com",
  // };

  useEffect(() => {
    dispatch(getOrders(user));
  }, [renderItem]);

  return (
    <View style={styles.container}>
      {orders.length === 0 && <EmptyItem />}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
