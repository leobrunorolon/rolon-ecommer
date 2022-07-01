import { StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../Components/CustomButton";
import { colors } from "../Styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart";

const DetailScreen = ({ route, navigation }) => {
  const { productSelected: product } = useSelector(
    (state) => state.products.value
  );

  const dispatch = useDispatch();

  const handleAdd = (id) => {
    dispatch(addItem({ id }));
  };

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    product && (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: product.image }}
            resizeMode="contain"
          />
          <View style={styles.description}>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.priceText}>$ {product.price.toFixed(2)}</Text>
          </View>
        </View>
        <CustomButton title={"Go back"} onPress={handleBack} />
        <CustomButton title={"Add"} onPress={() => handleAdd(product.id)} />
      </View>
    )
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  description: {
    margin: 10,
    height: 200,
    width: 360,
    backgroundColor: colors.black,
    borderRadius: 20,
    padding: 30,
    justifyContent: "space-between",
  },
  descriptionText: {
    color: colors.white,
  },
  priceText: {
    color: colors.white,
    textAlign: "center",
  },
});
