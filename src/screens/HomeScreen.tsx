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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import { homeStyles as styles } from "../styles/homeStyles"; // Home-specific styles
import { commonStyles } from "../styles/common"; // ✅ Import common styles

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");

  // 📿 Dua Collection
  const duaItems = [
    {
      id: "duaMarichavark", // ✅ changed from "adhkar"
      title: "Dua Marichavark",
      image: require("../assets/adhkar_icon.png"),
      gradient: ["#fff8e1", "#ffedd5"],
    },
    {
      id: "duaQabar",
      title: "Dua Qabar",
      image: require("../assets/duaQabar.png"),
      gradient: ["#fef3c7", "#fde68a"],
    },
  ];

  // 📖 Ratib Collection
  const ratibItems = [
    {
      id: "haddad",
      title: "Ratib al-Haddad",
      image: require("../assets/haddad_icon.png"),
      gradient: ["#fef9c3", "#fef08a"],
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
      style={commonStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[commonStyles.container, commonStyles.lightBg, styles.container]}
        >
          <StatusBar
            backgroundColor="transparent"
            barStyle="dark-content"
            translucent={true}
          />

          {/* 🔍 Search Bar */}
          <View style={[commonStyles.centerContent, styles.searchContainer]}>
            <Icon
              name="search"
              size={18}
              color="#92400e"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search duas or ratib..."
              placeholderTextColor="#a16207"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          {/* 🔽 Scroll Section */}
          <ScrollView
            contentContainerStyle={[styles.scrollContent, commonStyles.centerContent]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            {/* 📿 Dua Collection */}
            {filteredDuas.length > 0 && (
              <>
                <Text style={[commonStyles.sectionTitle, styles.sectionTitle]}>
                  📿 Dua Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filteredDuas.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate("Dhikr", { type: item.id })
                      }
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text style={[commonStyles.highlightText, styles.cardText]}>
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
                <Text style={[commonStyles.sectionTitle, styles.sectionTitle]}>
                  📖 Ratib Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filteredRatibs.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate("Dhikr", { type: item.id })
                      }
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text style={[commonStyles.highlightText, styles.cardText]}>
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
              <Text style={styles.noResultText}>No matching items found</Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
