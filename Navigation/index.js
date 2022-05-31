import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";
import { SafeAreaView } from "react-native-safe-area-context";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigatorLogged />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default MainNavigator;
