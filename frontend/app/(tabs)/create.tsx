import { ChatMessage } from "@/components/chat/ChatMessage";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, useColorScheme, Platform, View, TextInput } from "react-native";
import { TopicList } from "@/components/TopicList";
import { useState } from "react";
import AxialTextInput from "@/components/AxialTextInput";

export default function Create() {

  return (
    <View
      style={[styles.container]}
    > 
      <Text style={{
          textAlign: "center", color: "white", fontSize: 32, fontWeight: "bold"}}
        >
          Create a new deck
      </Text>
      <AxialTextInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
});