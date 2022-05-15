import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";

const DetailScreen = ({ product, handleProduct }) => {
  return (
    <>
      <Header title={product.title} />
      <View>
        <Image source={{ uri: product.image }} resizeMode="cover" />
        <Text>{product.description}</Text>
        <Text>$ {product.price}</Text>
        <GoBack onPress={() => handleProduct(null)} />
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
