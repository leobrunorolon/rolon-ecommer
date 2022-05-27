import { StyleSheet, Text, View, Image } from "react-native";
import GoBack from "../Components/GoBack";
import { colors } from "../Styles/colors";
import { useSelector } from "react-redux";

const DetailScreen = ({ route, navigation }) => {
  const { productSelected: product } = useSelector(
    (state) => state.products.value
  );

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    product && (
      <>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: product.image }}
            resizeMode="contain"
          />
          <View style={styles.description}>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.priceText}>$ {product.price}</Text>
          </View>
        </View>
        <GoBack onPress={handleBack} />
      </>
    )
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  image: {
    height: 250,
    width: 250,
  },
  description: {
    margin: 40,
    height: 200,
    width: 350,
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
