import 'expo-dev-client';

import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StyleSheet, Platform, View } from "react-native";
import Sidebar from "@/components/Sidebar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <Sidebar>
          
        </Sidebar>
        <Stack>
          <Stack.Screen 
            options={{
              headerShown: Platform.OS == "android" || Platform.OS == "ios"
            }}
            name="(tabs)" 
          />
        </Stack>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      native: {
        flex: 1,
        
      },
      default: {
        flex: 1, 
        flexDirection: "row"
        
      }
    })
  },
  content: {
    
  }
})
