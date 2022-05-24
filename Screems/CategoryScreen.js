import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Searcher from "../Components/Searcher";
import List from "../Components/List";
import useFilter from "../Hooks/useFilter";
import { CATEGORIES } from "../Data/categories";
import useDimensions from "../Hooks/useDimensions";

const CategoryScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const { filter } = useFilter(input, CATEGORIES);
  const { dimensions } = useDimensions();

  const handleSelectedCategory = (category) => {
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
