import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  Alert,
  Linking,
} from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from "react-native-device-info";

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

  /* 🔔 ONE-TIME UPDATE CHECK */
  useEffect(() => {
    const checkUpdateOnce = async () => {
      try {
        const currentVersion = DeviceInfo.getVersion(); // e.g. 1.0.5

        const res = await fetch(
          "https://raw.githubusercontent.com/salahudheen9847/adhkar-version/main/version.json"
        );
        const data = await res.json();
        const latestVersion = data.latestVersion;

        const shown = await AsyncStorage.getItem("update_shown");

        if (latestVersion !== currentVersion && !shown) {
          Alert.alert(
            "Update Available",
            "New version available. Please update from Play Store.",
            [
              { text: "Later", style: "cancel" },
              {
                text: "Update",
                onPress: () => {
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=salahudheen.adhkar"
                  );
                },
              },
            ]
          );

          await AsyncStorage.setItem("update_shown", "yes");
        }
      } catch (e) {
        // silent fail
      }
    };

    checkUpdateOnce();
  }, []);

  /* 🗄️ SQLite INIT — RUNS ONLY ONCE */
  useEffect(() => {
    const initDB = async () => {
      try {
        await createTables();
        await seedDhikr();
        await seedManqusMoulid();
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
