import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

import CustomButton from "../Components/CustomButton";
import { API_KEY_G } from "../Constants/config";

//https://developers.google.com/maps/documentation/maps-static/start DOC API
//https://developers.google.com/maps/documentation/maps-static/start#Markers Markers DOC

const GetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [photo, setPhoto] = useState(null);

  //Efecto para traer la ubicación apenas renderiza
  useEffect(() => {
    //IIFE
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  //Efecto para traer el mapa y luego hacer un reverse geoCode a partir de las coordenadas
  useEffect(() => {
    if (location?.lat) {
      (async () => {
        //Seteamos la url de la foto
        setPhoto(
          `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=300x300&maptype=roadmap&markers=color:black%7Clabel:R%7C${location.lat},${location.lng}&key=${API_KEY_G}`
        );
        //Reverse geocode
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY_G}`
        );
        const reverseGeocode = await response.json();
        const address = reverseGeocode.results[0].formatted_address;
        setAddress(address);
      })();
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const handleConfirmLocation = () => {
    navigation.navigate("Save-location", { address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <View>
        {photo ? (
          <Image source={{ uri: photo }} style={{ width: 450, height: 450 }} />
        ) : null}
        {address ? (
          <>
            <Text>{address}</Text>
            <CustomButton
              title="Confirmar dirección"
              onPress={handleConfirmLocation}
            ></CustomButton>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default GetLocationScreen;

const styles = StyleSheet.create({});
