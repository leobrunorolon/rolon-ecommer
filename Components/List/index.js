import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import useNavigation from "../../Hooks/useNavigation";

const List = ({ itemType, data }) => {
  const { handleNavigation, categorySelected, productSelected } =
    useNavigation();
  console.log(categorySelected);
  console.log(productSelected);
  const fnRender = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          handleNavigation(
            itemType,
            itemType === "category" ? item.title : item.id
          )
        }
      >
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
