import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Stat {
  name: string;
  value: number;
}

const StatsPanel = () => {
  const stats: Stat[] = [
    { name: 'Интеллект', value: 25 },
    { name: 'Сила', value: 30 },
    { name: 'Выносливость', value: 30 },
    { name: 'Гибкость', value: 20 },
  ];

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.title}>Все характеристики</Text>
      <ScrollView style={styles.statsScroll}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <View style={styles.statHeader}>
              <Ionicons  size={20} color="#ff9f43" />
              <Text style={styles.statLabel}>{stat.name}:</Text>
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeText}>Улучшить</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    backgroundColor: '#2c2c3e',
    borderTopWidth: 2,
    borderColor: '#ff9f43',
    padding: 10,
    maxHeight: 300,
  },
  title: {
    color: '#ff6b6b',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    textAlign: 'center',
  },
  statsScroll: {
    marginBottom: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent:"space-between"
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  statLabel: {
    color: '#e0e0e0',
    fontSize: 14,
    marginLeft: 5,
  },
  progressBarContainer: {
    flex: 1,
    height: 12,
    backgroundColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  statValue: {
    color: '#ff9f43',
    fontSize: 14,
    fontWeight: 'bold',
    width: 40,
  },
  upgradeButton: {
    backgroundColor: '#ff9f43',
    padding: 4,
    borderRadius: 5,
  },
  upgradeText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default StatsPanel;