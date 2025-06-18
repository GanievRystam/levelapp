import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const spheres = [
  { name: 'Личностный рост', level: 3 },
  { name: 'Здоровье', level: 2 },
  { name: 'Финансы', level: 1 },
  { name: 'Отношения', level: 4 },
  { name: 'Карьера', level: 2 },
  { name: 'Эмоции', level: 3 },
  { name: 'Творчество', level: 1 },
  { name: 'Окружение', level: 2 },
];

export default function LifeWheelScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Колесо жизни</Text>
      {spheres.map((s, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.name}>{s.name}</Text>
          <Text style={styles.level}>Уровень: {s.level}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
  },
  level: {
    fontSize: 16,
    color: '#555',
  },
});
