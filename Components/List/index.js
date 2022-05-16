import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import useDimensions from "../../Hooks/useDimensions";
import { colors } from "../../Styles/colors";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";

const List = ({ itemType = "category", data, onPress }) => {
  const { dimensions } = useDimensions();
  const fnRender = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={
            itemType === "category"
              ? dimensions.orientation === "portrait"
                ? styles.categoryVertical
                : styles.categoryHorizontal
              : dimensions.orientation === "portrait"
              ? styles.productVertical
              : styles.productHorizontal
          }
          onPress={() => onPress(item)}
        >
          {itemType === "category" ? (
            <CategoryItem category={item} />
          ) : itemType === "product" ? (
            <ProductItem product={item} />
          ) : (
            <Text>No found...</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        numColumns={itemType === "category" ? 2 : 1}
        data={data}
        renderItem={fnRender}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  categoryVertical: {
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: 10,
    height: 150,
    width: 150,
    margin: 20,
  },
  categoryHorizontal: {
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: 15,
    height: 250,
    width: 150,
    margin: 40,
  },
  productVertical: {
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: 10,
    height: 250,
    width: 250,
    marginVertical: 20,
  },
  productHorizontal: {
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: 10,
    height: 150,
    width: 350,
    marginVertical: 20,
  },
});
