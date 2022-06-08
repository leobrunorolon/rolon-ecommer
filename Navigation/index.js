import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthStack from "./Stacks/Auth";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const { user } = useSelector((state) => state.auth.value);
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {user.email ? <TabNavigatorLogged /> : <AuthStack />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default MainNavigator;
