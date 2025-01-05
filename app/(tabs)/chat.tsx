import { ChatMessage } from "@/components/chat/ChatMessage";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChatMessage message="Hello!"/>
      <ChatMessage message="Sup" mside="right"/>
    </View>
  );
}
