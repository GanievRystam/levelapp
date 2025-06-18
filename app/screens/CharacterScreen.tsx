// screens/HomeScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Профиль */}
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://i.ibb.co/sjF3y9z/avatar.png' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Akira Yamada</Text>
          <Text style={styles.level}>Level 23</Text>
        </View>
      </View>

      {/* Характеристики */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Personal Growth</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: '60%' }]} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Intelligence</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: '45%' }]} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Physical Fitness</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: '80%' }]} />
        </View>
      </View>

      {/* Квесты */}
      <Text style={styles.sectionTitle}>Quests</Text>

      <View style={styles.questCard}>
        <Ionicons name="compass-outline" size={20} color="#000" style={styles.questIcon} />
        <Text style={styles.questText}>Explore New Area</Text>
        <Text style={styles.questStatus}>In Progress</Text>
      </View>

      <View style={styles.questCard}>
        <Ionicons name="book-outline" size={20} color="#000" style={styles.questIcon} />
        <Text style={styles.questText}>Read a Book</Text>
        <Text style={styles.questStatus}>Completed</Text>
      </View>

      <View style={styles.questCard}>
        <Ionicons name="walk-outline" size={20} color="#000" style={styles.questIcon} />
        <Text style={styles.questText}>Morning Run</Text>
        <Text style={styles.questStatus}>In Progress</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#eaf6ff',
    flexGrow: 1,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  level: {
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#48eaff',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  questCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  questIcon: {
    marginRight: 12,
  },
  questText: {
    flex: 1,
  },
  questStatus: {
    color: '#888',
    fontSize: 12,
  },
});
