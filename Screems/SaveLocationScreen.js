import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../Styles/colors";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { addLocation, addLocationDb } from "../features/locations";
import CustomButton from "../Components/CustomButton";

const SaveLocationScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");

  const params = route.params;

  const dispatch = useDispatch();

  const handlePickLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (status === "granted") {
      return true;
    }
    return false;
  };

  const handleTakePicture = async () => {
    const isVerified = getPermission();
    if (!isVerified) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    setPicture(image.uri);
  };

  const handleConfirm = async () => {
    // const path = await renamePathAndMove(picture);
    let id = Date.now();
    dispatch(addLocation({ title, picture, id, address: params?.address }));
    dispatch(addLocationDb({ title, picture, id, address: params?.address }));
    setTitle("");
    setPicture("");
  };

  const handleSetLocation = () => {
    navigation.navigate("Set-location");
  };

  const handleLocation = () => {
    navigation.navigate("Get-location");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Titulo de la dirección</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Titulo"
      />
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : null}
      <CustomButton title="Tomar una foto" onPress={handleTakePicture} />
      <CustomButton
        title="Seleccionar de la galería"
        onPress={handlePickLibrary}
      />
      <CustomButton title="Obtener ubicación" onPress={handleLocation} />
      <CustomButton title="Definir una ubicación" onPress={handleSetLocation} />
      <CustomButton title="Confirmar" onPress={handleConfirm}></CustomButton>
    </View>
  );
};

export default SaveLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.blue,
  },
  image: {
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.black,
  },
  text: {
    color: colors.white,
    fontFamily: "RobotoMono",
    fontSize: 26,
  },
  input: {
    backgroundColor: colors.white,
    width: 150,
    padding: 5,
    textAlign: "center",
    borderRadius: 10,
    margin: 10,
  },
});
