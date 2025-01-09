import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View, Platform} from 'react-native';



export function TopicCard({title}: {title: string}) {
  return (
    <TouchableHighlight
      onPress={() => {}}
      style={styles.container}
    >
      <LinearGradient
      colors={["#040404", "#2F2F2F"]}
      start={{x: 0.5, y: 0.5}}
      style={styles.gradientBox}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
      
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    lineHeight: 24,

    backgroundColor: "#272727",

    borderColor: "#8585FF",
    borderWidth: 3,
    borderRadius: 10,

    width: 200,
    height: 160,

    padding: 5,
    margin: 5,

    ...Platform.select({
      native:{

      },
      default: {

      }
    })
  },
  gradientBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white"
  }
});
