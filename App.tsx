import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// 🧩 Theme Context
import { ThemeProvider, useThemeContext } from "./src/context/theme";

// 📱 Screens
import HomeScreen from "./src/screens/HomeScreen";
import DhikrScreen from "./src/screens/DhikrScreen/DhikrScreen";
import TranslationScreen from "./src/screens/TranslationScreen";

const Stack = createNativeStackNavigator();

// 🌗 Root Navigator (uses theme)
function RootNavigator() {
  const { isDark } = useThemeContext();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
  name="Dhikr"
  component={DhikrScreen}
  options={{ headerShown: false }} // 👈 ഇതാണ് പ്രധാന ഭാഗം
/>

        <Stack.Screen
          name="Translation"
          component={TranslationScreen}
          options={{
            headerShown: true,
            title: "മലയാളം വിവർത്തനം",
            headerStyle: { backgroundColor: isDark ? "#1a1a1a" : "#0f172a" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🚀 Main App Component
export default function App() {
  const [loading, setLoading] = useState(true);

  // Simple splash / loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show loader before app loads
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ActivityIndicator size="large" color="#22c55e" />
      </View>
    );
  }

  // 🌙 Wrap everything with SafeArea + ThemeProvider
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
