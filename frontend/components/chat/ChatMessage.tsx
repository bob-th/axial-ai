import { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

type Props = PropsWithChildren<{
    message: string;
    mside?: 'left' | 'right';
    time?: Date
}>;

export function ChatMessage({message, mside, time} : Props) {
    const [msg, setMsg] = useState(message);
    const [side, setSide] = useState(mside || 'left');
    const [statusShown, setStatusShown] = useState(false);
    const [messageTime, setMessageTime] = useState(time && "??:??")

    function updateMsg() {
      setMsg("hi");
    }
    function onPressed() {
      setStatusShown(!statusShown);
    }
  return (
    <TouchableOpacity 
        onPress={onPressed}
    >
        <Text style={[
          styles.default, 
          side==='right'? styles.right : styles.left
        ]}>
          {msg}
        </Text>
        {statusShown && <Text style={{color: "white"}}>123</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,

    padding: 5,
    backgroundColor: "#00FF00",
    margin: 5,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  left: {
    borderBottomRightRadius: 10,
    alignSelf: "flex-start"
  },
  right: {
    borderBottomLeftRadius: 10,
    alignSelf: "flex-end"
  }
});
