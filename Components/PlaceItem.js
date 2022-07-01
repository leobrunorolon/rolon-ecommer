import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeLocation, removeLocationDb } from "../features/locations";

const PlaceItem = ({ onSelect, title, image, address, id }) => {
  const dispatch = useDispatch();

  const onRemove = (id) => {
    dispatch(removeLocationDb({ id }));
    dispatch(removeLocation({ id }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.remove} onPress={() => onRemove(id)}>
        <Entypo name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  remove: {
    width: "10%",
    justifyContent: "center",
  },
  placeItem: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.white,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: colors.black,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: "#777",
    fontSize: 16,
  },
});
