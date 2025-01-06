import { StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View, Platform} from 'react-native';



export function TopicCard({title}: {title: string}) {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={"#000000"}
        onPress={() => {}}
        style={styles.default}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

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
  text: {
    color: "white"
  }
});
