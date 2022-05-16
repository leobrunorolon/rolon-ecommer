import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";

const CategoryItem = ({ category }) => {
  return (
    <View>
      <Text style={styles.text}>{category.title.toUpperCase()}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
    padding: 10,
  },
});
