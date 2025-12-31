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
import ManqusMoulidScreen from "./src/screens/ManqusMoulidScreen/ManqusMoulidScreen";

// 🗄️ SQLite DB
import {
  createTables,
  seedDhikr,
  seedManqusMoulid,
} from "./src/db";


const Stack = createNativeStackNavigator();

/* ------------------------------
   🌗 Root Navigator
--------------------------------*/
function RootNavigator() {
  const { isDark } = useThemeContext();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dhikr"
          component={DhikrScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ManqusMoulid"
          component={ManqusMoulidScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Translation"
          component={TranslationScreen}
          options={{
            title: "മലയാളം വിവർത്തനം",
            headerStyle: {
              backgroundColor: isDark ? "#1a1a1a" : "#0f172a",
            },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ------------------------------
   🚀 Main App Component
--------------------------------*/
export default function App() {
  const [loading, setLoading] = useState(true);

  /* 🗄️ SQLite INIT — RUNS ONLY ONCE */
  useEffect(() => {
    const initDB = async () => {
      try {
    
        await createTables();
await seedDhikr();          // 🔥 ALL normal dhikr
await seedManqusMoulid();   // 🔥 Manqus only

        console.log("✅ SQLite DB ready");
      } catch (error) {
        console.log("❌ DB init error:", error);
      } finally {
        setLoading(false);
      }
    };

    initDB();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {loading ? (
          <View style={styles.loaderContainer}>
            <StatusBar barStyle="dark-content" />
            <ActivityIndicator size="large" color="#22c55e" />
          </View>
        ) : (
          <RootNavigator />
        )}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

/* ------------------------------
   🎨 Styles
--------------------------------*/
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
