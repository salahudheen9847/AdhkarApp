import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function SettingsScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [fontSize, setFontSize] = useState("medium");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>⚙️ Settings</Text>
        </View>

        {/* SETTINGS OPTIONS */}
        <View style={styles.content}>
          {/* Theme Setting */}
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>🌙 Dark Theme</Text>
              <Text style={styles.settingDescription}>Enable dark mode</Text>
            </View>
            <Switch
              value={isDarkTheme}
              onValueChange={setIsDarkTheme}
            />
          </View>

          {/* Notifications Setting */}
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>🔔 Notifications</Text>
              <Text style={styles.settingDescription}>Enable notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
          </View>

          {/* Auto Play Setting */}
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>▶️ Auto Play</Text>
              <Text style={styles.settingDescription}>Auto play audio</Text>
            </View>
            <Switch
              value={autoPlay}
              onValueChange={setAutoPlay}
            />
          </View>

          {/* Font Size Setting */}
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>📝 Font Size</Text>
              <Text style={styles.settingDescription}>Adjust text size</Text>
            </View>
            <View style={styles.fontButtons}>
              {["small", "medium", "large"].map(size => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.fontButton,
                    fontSize === size && styles.fontButtonActive,
                  ]}
                  onPress={() => setFontSize(size)}
                >
                  <Text style={[
                    styles.fontButtonText,
                    fontSize === size && styles.fontButtonTextActive,
                  ]}>
                    {size === "small" ? "S" : size === "medium" ? "M" : "L"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafaf9",
  },
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#171717",
  },
  content: {
    padding: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#171717",
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: "#6b7280",
  },
  fontButtons: {
    flexDirection: "row",
    gap: 8,
  },
  fontButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  fontButtonActive: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  fontButtonText: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  fontButtonTextActive: {
    color: "#ffffff",
  },
});
