import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";
import { colors } from "../Styles/colors";

const DetailScreen = ({ product, handleProduct }) => {
  return (
    <>
      <Header title={product.title} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
          resizeMode="contain"
        />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{product.description}</Text>
          <Text style={styles.priceText}>$ {product.price}</Text>
        </View>
      </View>
      <GoBack onPress={() => handleProduct(null)} />
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  image: {
    height: 250,
    width: 250,
  },
  description: {
    margin: 40,
    height: 200,
    width: 350,
    backgroundColor: colors.black,
    borderRadius: 20,
    padding: 30,
    justifyContent: "space-between",
  },
  descriptionText: {
    color: colors.white,
  },
  priceText: {
    color: colors.white,
    textAlign: "center",
  },
});
