import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreenSimple() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AdhkarApp</Text>
      <Text style={styles.subtitle}>ഇസ്ലാമിക പ്രാർത്ഥനകൾ</Text>
      <Text style={styles.test}>Test - App is working!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafaf9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#171717',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  test: {
    fontSize: 16,
    color: '#22c55e',
    fontWeight: '600',
  },
});
