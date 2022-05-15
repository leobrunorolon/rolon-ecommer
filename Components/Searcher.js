import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Searcher = ({ input, setInput }) => {
  const handleErase = () => {
    setInput("");
  };
  return (
    <View>
      <TextInput
        value={input}
        onChangeText={setInput}
        keyboardType="default"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleErase}>
        <Entypo name="erase" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  input: {
    color: "black",
  },
});
