import React from 'react';
import { TouchableOpacity, Share, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/playerStyles';

interface ShareButtonProps {
  title?: string;
  message?: string;
  url?: string;
  customStyle?: any;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  title = "AdhkarApp - ഇസ്ലാമിക പ്രാർത്ഥനകൾ",
  message = "ഇസ്ലാമിക പ്രാർത്ഥനകളും സ്കർഹങ്ങളും അടങ്ങിയ മികച്ച ആപ്പ്",
  url = "https://play.google.com/store/apps/details?id=salahudheen.adhkar",
  customStyle
}) => {
  const handleShare = async () => {
    try {
      const shareOptions = {
        title,
        message: `${message}\n\n${url}`,
        url,
      };

      await Share.share(shareOptions);
    } catch (error) {
      console.error("Share error:", error);
      Alert.alert("പങ്കിടൽ പരാജയപ്പെട്ടു", "ദയവായി വീണ്ടും ശ്രമിക്കുക");
    }
  };

  return (
    <TouchableOpacity
      onPress={handleShare}
      style={[styles.shareButton, customStyle]}
    >
      <Icon name="share-alt" size={20} color="#6b7280" />
    </TouchableOpacity>
  );
};
