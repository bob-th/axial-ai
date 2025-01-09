import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import { FlatList, View } from 'react-native';
import { useState } from 'react';
import { TopicCard } from './TopicCard';
import { DarkTheme } from '@react-navigation/native';

type Topic = {title: string};

export function TopicList({topics}: {topics: Topic[]}) {
  const [topicArray, setTopicArray] = useState(topics);
  return (
      <FlatList
        style={styles.default}
        contentContainerStyle={styles.layout}
        numColumns={3}
        data={topicArray}
        keyExtractor={(item, index) => `${item.title}-${index}`} // Ensure unique keys
          renderItem={({ item }) => {
            return <TopicCard title={item.title} />
          }
        }
      />
  )
}

const styles = StyleSheet.create({
    default: {
      marginLeft: "auto",
      marginRight: "auto",

      padding: 10,

      backgroundColor: DarkTheme.colors.background,
    },
    layout: {
    }
  });
  