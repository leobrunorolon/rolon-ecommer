import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../../Styles/colors";
import CategoryScreen from "../../Screems/CategoryScreen";
import ProductsScreen from "../../Screems/ProductsScreen";
import DetailScreen from "../../Screems/DetailScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="category"
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
          }}
        />
        <Stack.Screen
          name="products"
          component={ProductsScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle.toUpperCase(),
          })}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={({ route }) => ({
            id: route.params.productId,
            title: route.params.productTitle,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
