import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import List from "../Components/List";
import useFilter from "../Hooks/useFilter";
import { CATEGORIES } from "../Data/categories";
import Title from "../Components/Title";
import useDimensions from "../Hooks/useDimensions";

const CategoryScreen = ({ handleCategory }) => {
  const [input, setInput] = useState("");
  const { filter } = useFilter(input, CATEGORIES);
  const { dimensions } = useDimensions();
  const handleSelectedCategory = (category) => {
    handleCategory(category);
  };
  return (
    <View>
      <Header />
      <Searcher input={input} setInput={setInput} />
      <Title title={"Category"} />
      <View>
        <List data={filter} onPress={handleSelectedCategory} />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
