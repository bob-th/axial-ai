import { ChatMessage } from "@/components/chat/ChatMessage";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, useColorScheme, View } from "react-native";

export default function Index() {
  const colorScheme = useThemeColor();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <Text>
        Welcome to Visual Flashcards app
      </Text>
    </View>
  );
}
