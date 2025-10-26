import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />

      <Text style={styles.title}>📿 Dhikr Collection</Text>

      {/* Dua Card with inner grid */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.innerGrid}>
          {/* Dua Marichavark */}
          <TouchableOpacity
            style={styles.innerCard}
            onPress={() => navigation.navigate("Dhikr", { type: "adhkar" })}
          >
            <Image
              source={require("../assets/adhkar_icon.png")}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Dua Marichavark</Text>
          </TouchableOpacity>

          {/* Dua Qabar */}
          <TouchableOpacity
            style={styles.innerCard}
            onPress={() => navigation.navigate("Dhikr", { type: "duaQabar" })}
          >
            <Image
              source={require("../assets/duaQabar.png")}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Dua Qabar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Ratib al-Haddad Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Dhikr", { type: "haddad" })}
      >
        <Image
          source={require("../assets/haddad_icon.png")}
          style={styles.icon}
        />
        <Text style={styles.cardText}>Ratib al-Haddad</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#b45309",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fef3c7",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: 320,
    marginVertical: 10,
    elevation: 3,
  },
  innerGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  innerCard: {
    alignItems: "center",
    width: 140,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#78350f",
    textAlign: "center",
  },
});
