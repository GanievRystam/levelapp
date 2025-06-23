import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Определение интерфейса для сферы
interface Sphere {
  progress: number;
  icon: string;
  aspects: string[];
}

// Тип для объекта spheres с индексной сигнатурой
interface Spheres {
  [key: string]: Sphere;
}

const WheelOfLife = () => {
  const [selectedSphere, setSelectedSphere] = useState<string | null>(null);
  const scaleValue = new Animated.Value(1);

  const spheres: Spheres = {
    Здоровье: { progress: 70, icon: 'heart', aspects: ['Сила', 'Выносливость', 'Гибкость'] },
    Отношения: { progress: 50, icon: 'people', aspects: ['Друзья', 'Семья', 'Любовь'] },
    Финансы: { progress: 40, icon: 'cash', aspects: ['Доход', 'Сбережения', 'Инвестиции'] },
    Карьера: { progress: 60, icon: 'briefcase', aspects: ['Навыки', 'Рост'] },
    'Личный рост': { progress: 80, icon: 'bulb', aspects: ['Обучение', 'Медитация'] },
  };

  const handleSpherePress = (sphere: string) => {
    setSelectedSphere(sphere);
    Animated.spring(scaleValue, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const closeSubWheel = () => {
    setSelectedSphere(null);
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.wheelContainer}>
      {Object.entries(spheres).map(([sphere, { progress, icon }], index) => (
        <TouchableOpacity
          key={index}
          style={[styles.wheelSegment]}
          onPress={() => handleSpherePress(sphere)}
        >
          <Animated.View style={{ transform: [{ scale: scaleValue }], alignItems: 'center'}}>
            <Ionicons name={icon as any} size={20} color="#ff9f43" />
            {/* <Text style={styles.wheelText}>{sphere}</Text> */}
            <Text style={styles.progressText}>{progress}%</Text>
          </Animated.View>
        </TouchableOpacity>
      ))}
      <Modal visible={!!selectedSphere} transparent animationType="fade">
        <View style={styles.modalOverlay}>
            
          <View style={styles.subWheel}>
            <TouchableOpacity onPress={closeSubWheel} style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.subWheelTitle}>{selectedSphere}</Text>
            {selectedSphere && spheres[selectedSphere].aspects.map((aspect, i) => (
              <View key={i} style={styles.aspectItem}>
                <Text style={styles.aspectText}>{aspect}</Text>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '50%' }]} />
                </View>
                <TouchableOpacity style={styles.upgradeButton}>
                  <Text style={styles.upgradeText}>Прокачать</Text>
                </TouchableOpacity>
              </View>
            ))}
          
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wheelContainer: {
    position: 'absolute',
    right: 16,
    top: '0%',
    gap: 10,
  },
  wheelSegment: {
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: '#2c2c3e',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff6b6b',
  },
  wheelText: {
    color: '#e0e0e0',
    fontSize: 12,
    textAlign: 'center',
  },
  progressText: {
    color: '#ff9f43',
    fontSize: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subWheel: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff6b6b',
    maxWidth: 500,
  },
  subWheelTitle: {
    color: '#ff6b6b',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aspectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  aspectText: {
    color: '#e0e0e0',
    fontSize: 14,
    width: 80,
  },
  progressBar: {
    width: 80,
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff6b6b',
    borderRadius: 5,
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
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeText: {
    color: '#ff6b6b',
    fontSize: 16,
  },
});

export default WheelOfLife;