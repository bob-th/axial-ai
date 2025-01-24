import { useState } from "react";
import { TextInput, StyleSheet, Alert } from "react-native";
import { useForm, Controller} from "react-hook-form";

export default function AxialTextInput() {
  const [value, onChangeText] = useState('')

  return (
    <TextInput
        editable
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Enter title here..."
        placeholderTextColor={"grey"}
        returnKeyType={"done"}
        onSubmitEditing={() => {
          
        }}
        style={styles.textInput}
    />

  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 5,
    padding: 5,
    color: "white"
  }
})