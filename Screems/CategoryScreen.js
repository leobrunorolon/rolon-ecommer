import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Searcher from "../Components/Searcher";
import List from "../Components/List";
import useFilter from "../Hooks/useFilter";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../features/categories";
import { setProductsByCategory } from "../features/products";
// import useDimensions from "../Hooks/useDimensions";

const CategoryScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const { categories } = useSelector((state) => state.categories.value);
  const { filter } = useFilter(input, categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (category) => {
    dispatch(setProductsByCategory(category.title));
    dispatch(selectCategory(category.id));
    navigation.push("Products", {
      categoryId: category.id,
      categoryTitle: category.title,
    });
  };

  return (
    <View>
      <Searcher input={input} setInput={setInput} />
      <View>
        <List data={filter} onPress={handleSelectedCategory} />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
