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

/* 🧩 CONTEXTS */
import { ThemeProvider, useThemeContext } from "./src/context/theme";
import { LanguageProvider } from "./src/context/language";

/* 📱 SCREENS */
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DhikrScreen from "./src/screens/DhikrScreen/DhikrScreen";
import TranslationScreen from "./src/screens/TranslationScreen";
import ManqusMoulidScreen from "./src/screens/ManqusMoulidScreen/ManqusMoulidScreen";
import BaderMoulidScreen from "./src/screens/BaderMoulidScreen/BaderMoulidScreen";

/* 🗄️ DATABASE */
import {
  createTables,
  seedDhikr,
  seedManqusMoulid,
} from "./src/db";
import { seedBaderMoulid } from "./src/db/seedBaderMoulid";

const Stack = createNativeStackNavigator();

/* ------------------------------
   🔢 Version Compare Helper
--------------------------------*/
const isNewerVersion = (latest: string, current: string) => {
  const l = latest.split(".").map(Number);
  const c = current.split(".").map(Number);

  for (let i = 0; i < Math.max(l.length, c.length); i++) {
    const lv = l[i] || 0;
    const cv = c[i] || 0;
    if (lv > cv) return true;
    if (lv < cv) return false;
  }
  return false;
};

/* ------------------------------
   🌗 ROOT NAVIGATOR
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
          name="BaderMoulid"
          component={BaderMoulidScreen}
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
   🚀 MAIN APP
--------------------------------*/
export default function App() {
  const [loading, setLoading] = useState(true);

  /* 🔔 UPDATE CHECK (MAX 3 TIMES PER VERSION) */
  useEffect(() => {
    const checkUpdate = async () => {
      try {
        const currentVersion = DeviceInfo.getVersion();

        const res = await fetch(
          "https://raw.githubusercontent.com/salahudheen9847/adhkar-version/main/version.json?ts=" +
            Date.now()
        );
        const data = await res.json();

        const latestVersion = data.latestVersion;
        const key = `update_count_${latestVersion}`;
        const countStr = await AsyncStorage.getItem(key);
        const count = countStr ? parseInt(countStr, 10) : 0;

        if (
          isNewerVersion(latestVersion, currentVersion) &&
          count < 3
        ) {
          Alert.alert(
            "Update Available",
            "New version available. Please update from Play Store.",
            [
              { text: "Later", style: "cancel" },
              {
                text: "Update",
                onPress: () =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=salahudheen.adhkar"
                  ),
              },
            ]
          );

          await AsyncStorage.setItem(
            key,
            String(count + 1)
          );
        }
      } catch {
        // silent fail
      }
    };

    checkUpdate();
  }, []);

  /* 🗄️ SQLITE INIT */
  useEffect(() => {
    const initDB = async () => {
      try {
        await createTables();
        await seedDhikr();
        await seedManqusMoulid();
        await seedBaderMoulid();
        console.log("✅ SQLite DB ready");
      } catch (e) {
        console.log("❌ DB init error:", e);
      } finally {
        setLoading(false);
      }
    };

    initDB();
  }, []);

  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <ThemeProvider>
          <RootNavigator />

          {/* ⏳ LOADING OVERLAY */}
          {loading && (
            <View style={styles.loaderOverlay}>
              <StatusBar barStyle="dark-content" />
              <ActivityIndicator
                size="large"
                color="#22c55e"
              />
            </View>
          )}
        </ThemeProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}

/* ------------------------------
   🎨 STYLES
--------------------------------*/
const styles = StyleSheet.create({
  loaderOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});
