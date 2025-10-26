import React from "react";
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import Slider from "@react-native-community/slider";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { WhatsappButton } from "./Whatsapp";
import { styles } from "../screens/style";

interface PlayerControlsProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  playbackRate: number;
  onChangeRate: (rate: number) => void;
  fontSize: number;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
  style?: StyleProp<ViewStyle>;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  currentTime,
  duration,
  onSeek,
  isPlaying,
  onPlayPause,
  playbackRate,
  onChangeRate,
  fontSize,
  onIncreaseFont,
  onDecreaseFont,
  style,
}) => {
  return (
    <LinearGradient
      colors={["#3f15c8ff", "#060212ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.playerCard, style]}
    >
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        minimumTrackTintColor="#facc15"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#e11d48"
        onSlidingComplete={onSeek}
      />

      <View style={styles.controls}>
        <Text style={styles.timeText}>
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </Text>

        <TouchableOpacity onPress={onPlayPause} style={styles.playButton}>
          <Icon
            name={isPlaying ? "stop-circle" : "play-circle-filled"}
            size={32}
            color={isPlaying ? "#fff" : "#07d559ff"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rateControls}>
        {[0.5, 1, 1.5, 2].map((rate) => (
          <TouchableOpacity
            key={rate}
            style={[styles.rateButton, playbackRate === rate && styles.activeRateButton]}
            onPress={() => onChangeRate(rate)}
          >
            <Text style={[styles.rateText, playbackRate === rate && styles.activeRateText]}>
              {rate}x
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.fontControls}>
          <TouchableOpacity style={styles.fontButton} onPress={onDecreaseFont}>
            <Text style={styles.fontButtonText}>A-</Text>
          </TouchableOpacity>
          <Text style={styles.fontSizeDisplay}>{fontSize}px</Text>
          <TouchableOpacity style={styles.fontButton} onPress={onIncreaseFont}>
            <Text style={styles.fontButtonText}>A+</Text>
          </TouchableOpacity>
        </View>

        <WhatsappButton style={styles.whatsappButton} />
      </View>
    </LinearGradient>
  );
};
