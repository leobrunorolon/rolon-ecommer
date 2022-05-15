import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useNavigation from "./Hooks/useNavigation";
import CategoryScreen from "./Screems/CategoryScreen";
import DetailScreen from "./Screems/DetailScreen";
import ProductsScreen from "./Screems/ProductsScreen";

const App = () => {
  const { categorySelected, productSelected } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!categorySelected ? (
        <CategoryScreen />
      ) : !productSelected ? (
        <ProductsScreen category={categorySelected} />
      ) : (
        <DetailScreen />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
