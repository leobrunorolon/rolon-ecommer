import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import GoBack from "../Components/GoBack";
import List from "../Components/List";
import { PRODUCTS } from "../Data/products";
import useFilter from "../Hooks/useFilter";
import ItemFound from "../Components/ItemFound";
import Title from "../Components/Title";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoid}
    >
      <Header title={category.title.toUpperCase()} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Searcher input={input} setInput={setInput} />
          <Title title={"Products"} />
          <ItemFound item={filter} />
          <View>
            <List data={filter} itemType={"product"} onPress={handleProduct} />
          </View>
          <GoBack onPress={() => handleCategory(null)} />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
