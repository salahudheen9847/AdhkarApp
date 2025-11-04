import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import { homeStyles as styles } from "../styles/homeStyles";
import { commonStyles } from "../styles/common";
import { useThemeContext } from "../context/theme";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const { isDark, colors, toggleTheme } = useThemeContext();

  const duaItems = [
    {
      id: "duaMarichavark",
      title: "Dua Marichavark",
      image: require("../assets/adhkar_icon.png"),
      gradient: isDark ? ["#0a0a0a", "#1f2937"] : ["#fff8e1", "#ffedd5"],
    },
    {
      id: "duaQabar",
      title: "Dua Qabar",
      image: require("../assets/duaQabar.png"),
      gradient: isDark ? ["#111827", "#1f2937"] : ["#fef3c7", "#fde68a"],
    },
  ];

  const ratibItems = [
    {
      id: "haddad",
      title: "Ratib al-Haddad",
      image: require("../assets/haddad_icon.png"),
      gradient: isDark ? ["#0f172a", "#1e293b"] : ["#fef9c3", "#fef08a"],
    },
  ];

  const filteredDuas = duaItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRatibs = ratibItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
      style={[commonStyles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[commonStyles.container, { backgroundColor: colors.background }, styles.container]}
        >
          <StatusBar
            backgroundColor={isDark ? "#000" : "#fff"}
            barStyle={isDark ? "light-content" : "dark-content"}
            translucent={true}
          />

          {/* 🔍 Search Bar */}
          <View
            style={[
              commonStyles.centerContent,
              styles.searchContainer,
              isDark ? themeStyles.searchDark : themeStyles.searchLight,
            ]}
          >
            <Icon
              name="search"
              size={18}
              color={isDark ? "#facc15" : "#92400e"}
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Search duas or ratib..."
              placeholderTextColor={isDark ? "#fbbf24" : "#a16207"}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          {/* 🌗 Theme Toggle Button */}
          <TouchableOpacity onPress={toggleTheme} style={themeStyles.themeToggle}>
            <Icon
              name={isDark ? "sun" : "moon"}
              size={22}
              color={isDark ? "#fde68a" : "#78350f"}
            />
          </TouchableOpacity>

          {/* 🔽 Scroll Section */}
          <ScrollView
            contentContainerStyle={[styles.scrollContent, commonStyles.centerContent]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            {/* 📿 Dua Collection */}
            {filteredDuas.length > 0 && (
              <>
                <Text
                  style={[
                    commonStyles.sectionTitle,
                    styles.sectionTitle,
                    { color: colors.text },
                  ]}
                >
                  📿 Dua Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filteredDuas.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Dhikr", { type: item.id })}
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text
                          style={[
                            commonStyles.highlightText,
                            styles.cardText,
                            { color: colors.text },
                          ]}
                        >
                          {item.title}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            {/* 📖 Ratib Collection */}
            {filteredRatibs.length > 0 && (
              <>
                <Text
                  style={[
                    commonStyles.sectionTitle,
                    styles.sectionTitle,
                    { color: colors.text },
                  ]}
                >
                  📖 Ratib Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filteredRatibs.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Dhikr", { type: item.id })}
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text
                          style={[
                            commonStyles.highlightText,
                            styles.cardText,
                            { color: colors.text },
                          ]}
                        >
                          {item.title}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            {/* ❌ No results */}
            {filteredDuas.length === 0 && filteredRatibs.length === 0 && (
              <Text style={[styles.noResultText, { color: colors.text }]}>
                No matching items found
              </Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// 💅 Local Style Fix
const themeStyles = StyleSheet.create({
  searchDark: {
    backgroundColor: "#1f2937",
  },
  searchLight: {
    backgroundColor: "#fff8e1",
  },
  themeToggle: {
    alignSelf: "flex-end",
    margin: 10,
    padding: 6,
  },
});
