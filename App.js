/*
expo doctor --fix-dependencies
*/
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import MainNavigator from "./Navigation";
import store from "./Store";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { init } from "./db";

// Inicializacion de sqlite
init()
  .then(() => {
    console.log("Db initialized");
  })
  .catch((err) => {
    console.log("Error loading db");
    console.log(err.message);
  });

const App = () => {
  const [loaded] = useFonts({
    Montserrat: require("./assets/Fonts/Montserrat/Montserrat-Regular.ttf"),
    RobotoMono: require("./assets/Fonts/RobotoMono/RobotoMono-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
