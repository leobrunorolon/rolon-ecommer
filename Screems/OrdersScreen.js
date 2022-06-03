import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ORDERS } from "../Data/order";
import OrderItem from "../Components/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/orders";

const renderItem = ({ item }) => <OrderItem item={item} />;

const OrdersScreen = () => {
  const { orders } = useSelector((state) => state.orders.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
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
