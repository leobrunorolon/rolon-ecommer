import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Searcher from "../Components/Searcher";
import GoBack from "../Components/GoBack";
import List from "../Components/List";
import { useDispatch, useSelector } from "react-redux";
import useFilter from "../Hooks/useFilter";
import ItemFound from "../Components/ItemFound";

const ProductsScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const { filter } = useFilter(input, productsByCategory);
  const { products } = useSelector((state) => state.products.value);
  const { productsByCategory } = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  const handleDetailProduct = (product) => {
    dispatch(setProductSelected(product.id));
    navigation.navigate("Detail", {
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
