import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { AdProvider, SelectedContext } from "./Context/SelectedContext";
import CategoryScreen from "./Screems/CategoryScreen";
import DetailScreen from "./Screems/DetailScreen";
import ProductsScreen from "./Screems/ProductsScreen";
import { useState } from "react";
// import {useFonts} from 'expo-font';

const App = () => {
  const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);
  console.log(categorySelected);

  const handleCategory = (category) => {
    setCategorySelected(category);
  };

  const handleProduct = (product) => {
    setProductSelected(product);
  };

  // const [loaded] = useFonts({
  //   Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
  //   LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  // });

  // if (!loaded) {
  //   return <ActivityIndicator />;
  // }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!categorySelected ? (
        <CategoryScreen handleCategory={handleCategory} />
      ) : !productSelected ? (
        <ProductsScreen
          category={categorySelected}
          handleProduct={handleProduct}
          handleCategory={handleCategory}
        />
      ) : (
        <DetailScreen product={productSelected} handleProduct={handleProduct} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
