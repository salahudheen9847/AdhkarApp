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
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SettingsScreen({ navigation }: any) {
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
          <View style={styles.headerContent}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={22} color="#171717" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>⚙️ Settings</Text>
          </View>
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

          {/* YouTube Setting */}
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>� YouTube</Text>
              <Text style={styles.settingDescription}>Open YouTube links</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
          </View>

          {/* WhatsApp Setting */}
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>📱 WhatsApp</Text>
              <Text style={styles.settingDescription}>Share via WhatsApp</Text>
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
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#171717",
    marginLeft: 8,
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
