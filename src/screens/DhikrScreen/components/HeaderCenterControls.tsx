import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { headerStyles as styles } from "../../../styles/headerStyle";
import HeaderActions from "./HeaderActions";

type Props = {
  isPlaying: boolean;
  setShowPlayer: (v: boolean) => void;
  playAudio: () => void;

  textColor: string;
  isDark: boolean;
  toggleTheme: () => void;
  onFontPress: () => void;
};

const HeaderCenterControls: React.FC<Props> = ({
  isPlaying,
  setShowPlayer,
  playAudio,
  textColor,
  isDark,
  toggleTheme,
  onFontPress,
}) => {
  return (
    <View style={styles.centerRow}>
      {/* ▶️ PLAY */}
      <TouchableOpacity
        style={styles.playButtonContainer}
        onPress={() => {
          setShowPlayer(true);
          playAudio();
        }}
      >
        <View
          style={[
            styles.playButtonInner,
            isPlaying ? styles.playingBg : styles.pausedBg,
          ]}
        >
          <Icon
            name={isPlaying ? "pause" : "play-arrow"}
            size={46}
            color={isPlaying ? "#16a34a" : "#22c55e"}
          />
        </View>
      </TouchableOpacity>

      {/* ⚙️ OTHER ACTIONS */}
      <HeaderActions
        textColor={textColor}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onFontPress={onFontPress}
      />
    </View>
  );
};

export default HeaderCenterControls;