import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";

const List = ({ itemType = "category", data, onPress }) => {
  const fnRender = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        {itemType === "category" ? (
          <CategoryItem category={item} />
        ) : itemType === "product" ? (
          <ProductItem product={item} />
        ) : (
          <Text>No found...</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={itemType === "category" ? 2 : 1}
      data={data}
      renderItem={fnRender}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
