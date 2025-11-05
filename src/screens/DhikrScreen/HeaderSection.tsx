import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  navigation: any;
  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;
  isPlaying: boolean;
  setShowPlayer: (val: boolean) => void;
  playAudio: () => void;
  type: "duaMarichavark" | "duaQabar" | "haddad";
  languageMode: "arabic" | "malayalam" | "expanded";
  setLanguageMode: React.Dispatch<
    React.SetStateAction<"arabic" | "malayalam" | "expanded">
  >;
  headerAnimatedStyle: any;
  animatedBg: any;
};

export const HeaderSection: React.FC<Props> = ({
  navigation,
  textColor,
  isDark,
  toggleTheme,
  isPlaying,
  setShowPlayer,
  playAudio,
  type,
  languageMode,
  setLanguageMode,
  headerAnimatedStyle,
  animatedBg,
}) => {
  return (
    <Animated.View
      style={[
        localAnimated.headerBase,
        localAnimated.headerFixedPadding,
        localAnimated.headerPosition,
        { backgroundColor: animatedBg },
        headerAnimatedStyle,
      ]}
    >
      {/* 🔸 Row 1 */}
      <View style={localAnimated.row1}>
        <TouchableOpacity
          style={localAnimated.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={22} color={textColor} />
          <Text style={[localAnimated.backText, { color: textColor }]}>
            Back
          </Text>
        </TouchableOpacity>

        <View style={localAnimated.centerButtons}>
          <TouchableOpacity
            style={localAnimated.playButtonContainer}
            activeOpacity={0.8}
            onPress={() => {
              setShowPlayer(true);
              playAudio();
            }}
          >
            <View
              style={[
                localAnimated.playButtonInner,
                isPlaying ? localAnimated.playingBg : localAnimated.pausedBg,
              ]}
            >
              <Icon
                name={isPlaying ? "pause" : "play-arrow"}
                size={24}
                color={isPlaying ? "#16a34a" : "#22c55e"}
              />
            </View>
          </TouchableOpacity>

          <View style={localAnimated.gap14} />
          <YoutubeButton type={type} />
          <View style={localAnimated.gap14} />
          <WhatsappButton />
        </View>
      </View>

      {/* 🔸 Row 2 */}
      <View style={localAnimated.row2}>
        <LanguageToggle
          languageMode={languageMode}
          setLanguageMode={setLanguageMode}
        />

        <TouchableOpacity onPress={toggleTheme}>
          <Icon
            name={isDark ? "wb-sunny" : "dark-mode"}
            size={40}
            color={isDark ? "#ffcc00" : "#222"}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

// 🔹 Local styles
const localAnimated = StyleSheet.create({
  headerBase: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingHorizontal: 10,
    // ✅ Safe top padding for Android
    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight ?? 25) + 10
        : 45,
  },
  headerFixedPadding: {
    paddingVertical: 8,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  centerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#374151",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  backText: {
    marginLeft: 6,
    fontSize: 16,
  },
  playButtonContainer: {},
  playButtonInner: {},
  playingBg: { backgroundColor: "#16a34a20" },
  pausedBg: { backgroundColor: "#0dee5f20" },
  gap14: { width: 14 },
  headerPosition: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 160, // 🔺header height increased
    zIndex: 20,
    elevation: 20,
    overflow: "visible",
  },
});
