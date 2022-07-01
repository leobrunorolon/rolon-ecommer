import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../Styles/colors";
import CartScreen from "../../../Screems/CartScreen";

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontSize: 28,
        },
        headerTitleAlign: "center",
        // headerTransparent: true,
        // header: () => {
        //   return <Header/>
        // }
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default CartStack;
