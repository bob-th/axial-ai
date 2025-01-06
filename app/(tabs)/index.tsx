import { ChatMessage } from "@/components/chat/ChatMessage";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, useColorScheme, Platform, View } from "react-native";
import { TopicList } from "@/components/TopicList";


const testTopics = [{title: "CARDIOVASCULAR"}, {title: "RESPIRATORY"}, {title:"DIGESTIVE"}, {title:"NERVOUS "}, {title: "MUSCULAR"}, {title: "SKELETAL"}]

export default function Index() {
  return (
    <View
      style={[styles.layout]}
    > 
      <TopicList topics={testTopics}/>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
  },
  layout: {
    flex: 1,
    ...Platform.select({
      native:{
        flexDirection: "column"
      },
      default: {
        flexDirection: "row"
      }
    })
  }
});