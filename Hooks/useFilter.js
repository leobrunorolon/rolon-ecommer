import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const useFilter = (input, data) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (input === "") setFilter(data);
    else {
      const itemFiltered = data.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilter(itemFiltered);
    }
  }, [input]);
  return { filter };
};

export default useFilter;

const styles = StyleSheet.create({});
