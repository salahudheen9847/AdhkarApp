import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function AboutScreen({ navigation }: any) {
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
            <Text style={styles.title}>ℹ️ About</Text>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* APP INFO */}
          <View style={styles.section}>
            <Text style={styles.appName}>🕌 AdhkarApp</Text>
            <Text style={styles.version}>Version 1.0.0</Text>
            <Text style={styles.description}>
              Your comprehensive Islamic prayer and dhikr application
            </Text>
          </View>

          {/* FEATURES */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✨ Features</Text>
            <View style={styles.featureList}>
              <Text style={styles.featureItem}>• Multilingual Support (Malayalam, English, Arabic)</Text>
              <Text style={styles.featureItem}>• Daily Prayers & Dhikr</Text>
              <Text style={styles.featureItem}>• Moulid Collections</Text>
              <Text style={styles.featureItem}>• Swalath & Prayers</Text>
              <Text style={styles.featureItem}>• Quranic Verses</Text>
              <Text style={styles.featureItem}>• Ramadan Special</Text>
              <Text style={styles.featureItem}>• Beautiful Design</Text>
              <Text style={styles.featureItem}>• Easy Navigation</Text>
            </View>
          </View>

          {/* DEVELOPER INFO */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👨‍💻 Developer</Text>
            <Text style={styles.developerName}>AdhkarApp Team</Text>
            <Text style={styles.developerContact}>support@adhkarapp.com</Text>
          </View>

          {/* CONTACT */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📧 Contact & Support</Text>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => Linking.openURL('mailto:support@adhkarapp.com')}
            >
              <Text style={styles.contactButtonText}>📧 Email Support</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => Linking.openURL('https://adhkarapp.com')}
            >
              <Text style={styles.contactButtonText}>🌐 Visit Website</Text>
            </TouchableOpacity>
          </View>

          {/* ACKNOWLEDGMENTS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🙏 Acknowledgments</Text>
            <Text style={styles.acknowledgmentText}>
              Special thanks to Islamic scholars and contributors who helped compile the authentic prayers and dhikr content in this application.
            </Text>
            <Text style={styles.acknowledgmentText}>
              May Allah accept all our prayers and good deeds. Ameen.
            </Text>
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
  section: {
    marginBottom: 24,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  appName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#22c55e",
    textAlign: "center",
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#171717",
    marginBottom: 12,
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },
  developerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#171717",
    textAlign: "center",
    marginBottom: 4,
  },
  developerContact: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  contactButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  acknowledgmentText: {
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
    lineHeight: 20,
    fontStyle: "italic",
  },
});
