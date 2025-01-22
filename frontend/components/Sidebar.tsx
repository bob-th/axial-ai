import { Button, StyleSheet, View, Text } from "react-native"
import { Link } from "expo-router";

export default function Sidebar() {
    return (
        <View style={styles.container}>
            <Link href="/chat" asChild>
                <Button title="Chat">
                    
                </Button>
            </Link>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
});