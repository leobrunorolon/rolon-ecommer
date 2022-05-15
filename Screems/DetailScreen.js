import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import GoBack from "../Components/GoBack";

const DetailScreen = () => {
  return (
    <View>
      <Header title={"detailScreen"} />
      <Text>DetailScreen</Text>
      <GoBack type={"product"} data={null} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
