import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import useDimensions from "../../Hooks/useDimensions";
import { colors } from "../../Styles/colors";

const ProductItem = ({ product }) => {
  const { dimensions } = useDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
        resizeMode="contain"
      />
      <Text style={styles.text}>${product.price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
    margin: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});
