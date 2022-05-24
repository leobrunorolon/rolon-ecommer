import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import Searcher from "../Components/Searcher";
import GoBack from "../Components/GoBack";
import List from "../Components/List";
import { PRODUCTS } from "../Data/products";
import useFilter from "../Hooks/useFilter";
import ItemFound from "../Components/ItemFound";

const ProductsScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [initialProducts, setInitialProducts] = useState([]);
  const { categoryTitle } = route.params;
  const { filter } = useFilter(input, initialProducts);

  useEffect(() => {
    const productosIniciales = PRODUCTS.filter(
      (product) => product.category === categoryTitle
    );
    setInitialProducts(productosIniciales);
  }, [categoryTitle]);

  const handleDetailProduct = (product) => {
    navigation.navigate("Detail", {
      productId: product.id,
      productTitle: product.title,
    });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoid}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Searcher input={input} setInput={setInput} />
          <ItemFound item={filter} />
          <View>
            <List
              data={filter}
              itemType={"product"}
              onPress={handleDetailProduct}
            />
          </View>
          <GoBack onPress={handleBack} />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
