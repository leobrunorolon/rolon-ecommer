import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Styles/colors";
import useDimensions from "../Hooks/useDimensions";

const Searcher = ({ input, setInput }) => {
  const { dimensions } = useDimensions();
  const handleErase = () => {
    setInput("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.searcher} width={0.9 * dimensions.width}>
        <TextInput
          value={input}
          onChangeText={setInput}
          keyboardType="default"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleErase}>
          <Entypo name="erase" style={styles.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.blue,
  },
  searcher: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: colors.black,
    width: 260,
    backgroundColor: colors.white,
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 30,
    color: colors.pink,
  },
});
