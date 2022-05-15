import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <View>
      <Text>{category.title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
