import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native"; 

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,  
    background: 'white',
  }
}

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>  {/* {colorScheme === 'dark' ? DarkTheme : DefaultTheme} */}
      <Slot />
    </ThemeProvider>
  );
}