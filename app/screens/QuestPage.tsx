// app/screens/QuestScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router'; // Для получения параметров из URL
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QuestPage = () => {
  // Получаем параметры из URL (например, name, description, reward)
  const { key, name, description, completed, status, reward } = useLocalSearchParams<{
    key?:string;
    name?: string;
    description?: string;
    completed?: string;
    status: string
    reward:string
  }>();
  console.log('status', status);
  // Значения по умолчанию, если параметры не переданы
  const questName = name || 'Неизвестный квест';
  const questDescription = description || 'Описание квеста отсутствует.';
  const questReward = reward || '100 опыта';
  const questStatus = status || "Неизвестен";

  return (
    <View style={styles.container}>
      <View style={styles.questHeader}>
        <Image
          source={{ uri: 'https://i.ibb.co/sjF3y9z/avatar.png' }} // Иконка квеста
          style={styles.questIcon}
        />
        <Text style={styles.questTitle}>{questName}</Text>
      </View>
      <Text style={styles.questDescription}>{questDescription}</Text>
      <View style={styles.questDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="trophy" size={20} color="#ff9f43" />
          <Text style={styles.detailText}>Награда: {questReward}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name={questStatus === 'Завершен' ? 'checkmark-circle' : 'hourglass'} size={20} color="#ff6b6b" />
          <Text style={styles.detailText}>Статус: {questStatus}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.completeButton} onPress={() => {/* Логика завершения */}}>
        <Text style={styles.completeText}>{completed === "true"? 'Завершенно': 'Завершить'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  questHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  questIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff9f43',
    marginRight: 10,
  },
  questTitle: {
    color: '#ff6b6b',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  questDescription: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 20,
  },
  questDetails: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    color: '#e0e0e0',
    fontSize: 14,
    marginLeft: 10,
  },
  completeButton: {
    backgroundColor: '#ff9f43',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuestPage;