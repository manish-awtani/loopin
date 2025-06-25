import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";  
export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={DarkTheme}>  {/* {colorScheme === 'dark' ? DarkTheme : DefaultTheme} */}
      <Slot />
    </ThemeProvider>
  );
}