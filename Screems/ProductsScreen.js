import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import GoBack from "../Components/GoBack";
import List from "../Components/List";
import { PRODUCTS } from "../Data/products";
import useFilter from "../Hooks/useFilter";

const ProductsScreen = ({ category }) => {
  const [input, setInput] = useState();
  const [inicialProducts, setInicialProducts] = useState([]);
  const { filter } = useFilter(input, inicialProducts);

  useEffect(() => {
    const productFilteres = PRODUCTS.filter(
      (item) => item.category === category
    );
    setInicialProducts(productFilteres);
  }, [category]);
  return (
    <View>
      <Header title={"ProductScreen"} />
      <Searcher input={input} setInput={setInput} />
      <Text>ProductsScreen</Text>
      <View>
        <List itemType={"product"} data={filter} />
      </View>
      <GoBack type={"category"} data={null} />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
