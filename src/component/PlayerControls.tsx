import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import Slider from "@react-native-community/slider";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "../styles/playerStyles";

export interface PlayerControlsProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  playbackRate: number;
  onChangeRate: (rate: number) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  onClose?: () => void;
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
  onFontSizeChange,
  onClose,
  style,
}) => {
  return (
    <LinearGradient
      colors={["#1e3a8a", "#0f172a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.playerCard, style]}
    >
      {/* 🔹 Header Row */}
      {onClose && (
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={22} color="#f87171" />
          </TouchableOpacity>
        </View>
      )}

      {/* 🔹 Progress Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration > 0 ? duration : 1}
        value={currentTime}
        minimumTrackTintColor="#facc15"
        maximumTrackTintColor="#475569"
        thumbTintColor="#e11d48"
        onValueChange={onSeek}
      />

      {/* 🔹 Time + Play / Pause */}
      <View style={styles.controls}>
        <Text style={styles.timeText}>
          {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </Text>

        <TouchableOpacity onPress={onPlayPause} style={styles.playButton}>
          <Icon
            name={isPlaying ? "stop-circle" : "play-circle-filled"}
            size={44}
            color={isPlaying ? "#e11d48" : "#22c55e"}
          />
        </TouchableOpacity>
      </View>

      {/* 🔹 Playback Speed Controls */}
      <View style={styles.rateControls}>
        {[0.5, 1, 1.5, 2].map((rate) => (
          <TouchableOpacity
            key={rate}
            style={[
              styles.rateButton,
              playbackRate === rate && styles.activeRateButton,
            ]}
            onPress={() => onChangeRate(rate)}
          >
            <Text
              style={[
                styles.rateText,
                playbackRate === rate && styles.activeRateText,
              ]}
            >
              {rate}x
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔹 Font Size Slider */}
      <View style={styles.fontBarContainer}>
        <Text style={styles.fontLabel}>Font</Text>
        <Slider
          style={styles.fontSlider}
          minimumValue={14}
          maximumValue={50}
          step={1}
          value={fontSize}
          onValueChange={onFontSizeChange}
          minimumTrackTintColor="#facc15"
          maximumTrackTintColor="#475569"
          thumbTintColor="#22c55e"
        />
        <Text style={styles.fontValue}>{fontSize}px</Text>
      </View>
    </LinearGradient>
  );
};
