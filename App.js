/*
expo doctor --fix-dependencies
*/
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import MainNavigator from "./Navigation";
import store from "./Store";

// import {useFonts} from 'expo-font';

const App = () => {
  // const [loaded] = useFonts({
  //   Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
  //   LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  // });

  // if (!loaded) {
  //   return <ActivityIndicator />;
  // }
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <MainNavigator />
    </Provider>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
