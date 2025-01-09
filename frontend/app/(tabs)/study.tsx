import { ChatMessage } from "@/components/chat/ChatMessage";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, useColorScheme, Platform, View, ScrollView } from "react-native";
import { TopicList } from "@/components/TopicList";
import { SearchBar } from "react-native-screens";


const testTopics = [{title: "CARDIOVASCULAR"}, {title: "RESPIRATORY"}, {title:"DIGESTIVE"}, {title:"NERVOUS "}, {title: "MUSCULAR"}, {title: "SKELETAL"}]
const decks = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c => {return {title: c.repeat(10)}})


export default function Study() {
  return (
    <View
      style={[styles.layout]}
    > 
        <Text style={{textAlign: "center", color: "white", fontSize: 32, fontWeight: "bold"}}>Your Flashcards</Text>
        <TopicList topics={decks} />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
  },
  layout: {
    flex: 1,
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
  }
});