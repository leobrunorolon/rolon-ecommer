import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import useNavigation from "../Hooks/useNavigation";

const GoBack = (type, data) => {
  const { handleNavigation } = useNavigation();
  return (
    <TouchableOpacity onPress={() => handleNavigation(type, data)}>
      <Text>GoBack</Text>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
