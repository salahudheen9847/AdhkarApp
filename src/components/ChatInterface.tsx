import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
};

type Props = {
  onClose: () => void;
};

export const ChatInterface: React.FC<Props> = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Assalamu Alaikum! How can I help you today with your Islamic prayers and dhikr needs?",
      sender: "ai",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      text: "I'm here to assist you with any questions about Islamic content, prayer times, or app features.",
      sender: "ai",
      timestamp: new Date(Date.now() - 1000 * 60 * 1000).toISOString(),
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.header}>
          <Text style={styles.title}>🤖 AI Assistant</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={messages}
          style={styles.messagesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === "user" ? styles.userMessage : styles.aiMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timestamp}>
                {new Date(item.timestamp).toLocaleTimeString()}
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Ask about Islamic content..."
                value={message}
                onChangeText={setMessage}
                multiline
                maxLength={500}
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={sendMessage}
                disabled={!message.trim()}
              >
                <Icon name="send" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#171717",
  },
  closeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#ef4444",
  },
  messagesList: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    margin: 8,
    padding: 12,
    borderRadius: 12,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#e3f2fd",
    alignSelf: "flex-end",
  },
  aiMessage: {
    backgroundColor: "#f3f4f6",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#171717",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
});
