import { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

type Props = PropsWithChildren<{
    message: string;
    mside?: 'left' | 'right';
}>;

export function ChatMessage({message, mside} : Props) {
    const [msg, setMsg] = useState(message);
    const [side, setSide] = useState(mside || 'left');

    function updateMsg() {
        setMsg("hi");
        setSide(side==='left'?'right':'left')
    }
  return (
    <TouchableOpacity 
        style={[styles.default, side==='right'? styles.right : styles.left]}
        onPress={()=>updateMsg()}
    >
        <Text>{msg}</Text>
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
