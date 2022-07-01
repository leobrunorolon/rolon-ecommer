import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../Styles/colors";
import CategoryScreen from "../../../Screems/CategoryScreen";
import ProductsScreen from "../../../Screems/ProductsScreen";
import DetailScreen from "../../../Screems/DetailScreen";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontSize: 28,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "Categorías",
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => dispatch(logout())}>
                <Entypo name="login" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle.toUpperCase(),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          id: route.params.productId,
          title: route.params.productTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
