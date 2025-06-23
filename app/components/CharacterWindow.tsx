import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

const CharacterWindow = () => {
  const scaleValue = new Animated.Value(1);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, { toValue: 1.05, duration: 1000, useNativeDriver: true }),
        Animated.timing(scaleValue, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, [scaleValue]);

  return (
    <View style={styles.characterContainer}>
      <Animated.View style={[styles.avatarContainer, { transform: [{ scale: scaleValue }] }]}>
        <Image
          source={require('../assets/character.gif')}
          style={styles.avatar}
        />
      </Animated.View>
      <Text style={styles.name}>Akira Yamada</Text>
      <View style={styles.levelContainer}>
        <Ionicons name="star" size={16} color="#ff9f43" />
        <Text style={styles.level}>Level 23</Text>
      </View>
      <View style={styles.statusBars}>
        <View style={styles.healthBar}>
          <View style={[styles.healthFill, { width: '80%' }]} />
        </View>
        <View style={styles.manaBar}>
          <View style={[styles.manaFill, { width: '60%' }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2c2c3e',

  },
  avatarContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ff9f43',
  },
  avatar: {
    width: 200,
    height: 200,
  },
  name: {
    color: '#ff6b6b',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  level: {
    color: '#e0e0e0',
    fontSize: 16,
    marginLeft: 5,
  },
  statusBars: {
    flexDirection: 'row',
    marginTop: 10,
  },
  healthBar: {
    width: 100,
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  healthFill: {
    height: '100%',
    backgroundColor: '#00cc00',
    borderRadius: 5,
  },
  manaBar: {
    width: 100,
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  manaFill: {
    height: '100%',
    backgroundColor: '#3366ff',
    borderRadius: 5,
  },
});

export default CharacterWindow;