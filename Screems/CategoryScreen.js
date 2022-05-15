import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import List from "../Components/List";
import useFilter from "../Hooks/useFilter";
import { CATEGORIES } from "../Data/categories";

const CategoryScreen = () => {
  const [input, setInput] = useState("");
  const { filter } = useFilter(input, CATEGORIES);
  return (
    <View>
      <Header />
      <Searcher input={input} setInput={setInput} />
      <Text>Category Screen list</Text>
      <View>
        <List itemType={"category"} data={filter} />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
