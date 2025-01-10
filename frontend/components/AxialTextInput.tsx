import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { useForm, Controller} from "react-hook-form";

export default function AxialTextInput() {
  const [value, onChangeText] = useState('title')

  return (
    <TextInput
        editable
        value={value}
        onChangeText={(text) => onChangeText(text)}
        style={styles.textInput}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 5,
    color: "red"
  }
})