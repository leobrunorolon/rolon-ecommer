import { StyleSheet, Text } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import CustomButton from "../Components/CustomButton";
import { API_KEY_G } from "../Constants/config";

const SetLocationScreen = ({ navigation }) => {
  const [initialLocation, setInitialLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //Efecto para traer la ubicación apenas renderiza
  useLayoutEffect(() => {
    //IIFE
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setInitialLocation({
        ...initialLocation,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const handleLocation = (evento) => {
    setLocation({
      lat: evento.nativeEvent.coordinate.latitude,
      lng: evento.nativeEvent.coordinate.longitude,
    });
  };

  const handleConfirm = () => {
    //Reverse geocode
    (async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY_G}`
      );
      const reverseGeocode = await response.json();
      const address = reverseGeocode.results[0].formatted_address;
      navigation.navigate("Save-location", { address });
    })();
  };

  return (
    <>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          {initialLocation.latitude !== 0 && (
            <MapView
              showsScale={true}
              onPress={handleLocation}
              initialRegion={initialLocation}
              style={styles.map}
            >
              {location?.lat ? (
                <Marker
                  title="Ubicación seleccionada"
                  coordinate={{
                    latitude: location.lat,
                    longitude: location.lng,
                  }}
                />
              ) : null}
            </MapView>
          )}
          <CustomButton
            title="Confirmar ubicación"
            onPress={handleConfirm}
          ></CustomButton>
        </>
      )}
    </>
  );
};

export default SetLocationScreen;

const styles = StyleSheet.create({
  map: {
    height: 450,
    width: 450,
    marginBottom: 20,
  },
});
