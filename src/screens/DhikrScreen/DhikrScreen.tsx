import React, { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, StatusBar, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { PlayerControls } from "../../component/PlayerControls";
import { YoutubeButton } from "../../component/YoutubeButton";
import { WhatsappButton } from "../../component/WhatsappButton";
import { useDhikrAudio } from "./useDhikrAudio";
import { styles, localStyles } from "../../styles/dhikrscreenstyle";

import { duaMarichavarkMalayalam } from "../../data/duaMarichavarkMalayalam";
import { duaQabarMalayalam } from "../../data/duaQabarMalayalam";
import { haddadMalayalam } from "../../data/haddadMalayalam";

// 🔹 Keep textStyle outside component to avoid re-creation
const textStyle = {
  arabic: {
    textAlign: "center" as const,
    fontFamily: "ScheherazadeNew-Regular",
  },
  malayalam: {
    textAlign: "center" as const,
    color: "#d1d5db",
    fontFamily: "NotoSansMalayalam-Regular",
    marginTop: 6,
  },
};

const HeaderTitle = ({ text }: { text: string }) => (
  <View style={localStyles.headerTitleContainer}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default function DhikrScreen() {
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const { type } = params;

  const {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    currentDuaList,
    title,
    scrollY,
    setShowPlayer,
    setFontSize,
    playAudio,
    onSeek,
    onChangeRate,
  } = useDhikrAudio(type);

  // ✅ Use useMemo to prevent ESLint/react-hooks warnings
  const malayalamList = useMemo(() => {
    switch (type) {
      case "duaMarichavark":
        return duaMarichavarkMalayalam;
      case "duaQabar":
        return duaQabarMalayalam;
      case "haddad":
        return haddadMalayalam;
      default:
        return [];
    }
  }, [type]);

  // 🔹 Render each dua item
  const renderDuaItem = useCallback(
    ({ item }: { item: typeof currentDuaList[0] }) => {
      const malItem = malayalamList.find((m) => m.id === item.id);

      return (
        <View
          style={[
            styles.textContainer,
            currentIndex === item.id && styles.activeTextContainer,
          ]}
        >
          {/* Arabic text */}
          <Text
            style={[
              styles.text,
              currentIndex === item.id && styles.activeText,
              textStyle.arabic,
              {
                fontSize,
                lineHeight: fontSize * 1.5,
              },
            ]}
          >
            {item.text}
          </Text>

          {/* Malayalam translation */}
          {malItem && (
            <Text
              style={[
                textStyle.malayalam,
                { fontSize: fontSize * 0.7, lineHeight: fontSize },
              ]}
            >
              {malItem.text}
            </Text>
          )}
        </View>
      );
    },
    [currentIndex, fontSize, malayalamList]
  );

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <StatusBar backgroundColor="#000" barStyle="light-content" translucent={false} />

      {/* Header */}
      <Animated.View
        style={[
          styles.headerRow,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -100],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={localStyles.headerButtonRow}>
          <YoutubeButton type={type} />
          <View style={localStyles.gapStyle} />
          <WhatsappButton />
          <View style={localStyles.gapStyle} />
          <TouchableOpacity
            style={localStyles.playButton}
            onPress={() => {
              setShowPlayer(true);
              playAudio();
            }}
          >
            <Icon
              name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
              size={72}
              color={isPlaying ? "#e11d48" : "#22c55e"}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Dua List */}
      <Animated.FlatList
        style={styles.fullFlex}
        contentContainerStyle={styles.flatListContent}
        data={currentDuaList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDuaItem}
        ListHeaderComponent={<HeaderTitle text={title} />}
        getItemLayout={(_, index) => ({
          length: fontSize * 1.5 + 24,
          offset: (fontSize * 1.5 + 24) * index,
          index,
        })}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

      {/* Player Controls */}
      {showPlayer && (
        <PlayerControls
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
          isPlaying={isPlaying}
          onPlayPause={playAudio}
          playbackRate={playbackRate}
          onChangeRate={onChangeRate}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          onClose={() => setShowPlayer(false)}
          style={styles.bottomControls}
        />
      )}
    </SafeAreaView>
  );
}
