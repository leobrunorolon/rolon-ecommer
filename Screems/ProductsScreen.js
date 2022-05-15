import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import GoBack from "../Components/GoBack";
import List from "../Components/List";
import { PRODUCTS } from "../Data/products";
import useFilter from "../Hooks/useFilter";

const ProductsScreen = ({ category, handleProduct, handleCategory }) => {
  const [input, setInput] = useState("");
  const [initialProducts, setInitialProducts] = useState([]);
  const { filter } = useFilter(input, initialProducts);

  useEffect(() => {
    const productosIniciales = PRODUCTS.filter(
      (product) => product.category === category.title
    );
    setInitialProducts(productosIniciales);
  }, []);

  return (
    <View>
      <Header title={category.title} />
      <Searcher input={input} setInput={setInput} />
      <Text>ProductsScreen</Text>
      <View>
        <List data={filter} itemType={"product"} onPress={handleProduct} />
      </View>
      <GoBack onPress={() => handleCategory(null)} />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
