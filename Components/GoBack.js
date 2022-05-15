import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const GoBack = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>GoBack</Text>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
