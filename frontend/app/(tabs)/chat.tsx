import AxialTextInput from "@/components/AxialTextInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        
        gap: 10,
        padding: 10
      }}
    >
      <ScrollView style={styles.chatContainer}>
        <ChatMessage message="Hello!"/>
        <ChatMessage message="Sup" mside="right"/>
      </ScrollView>
      <View>
        <AxialTextInput/>
      </View>
    </View>      
  );
}


const styles = StyleSheet.create({
  parent: {

  },
  chatContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ffffff",

    flex: 1,
    // flexGrow: 1,

    padding: 5,
  }
})