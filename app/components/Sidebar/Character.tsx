import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Character = () => {
    const backgroundImage = require('../../assets/characterBg.jpg'); // Путь к фону
    const characterGif = require('../../assets/character.gif');
  return (
    <View style={styles.container}>
      {/* Фон */}
      <Image
        source={backgroundImage} // Замените на URL фона
        style={styles.background}
      />
      {/* GIF персонажа */}
      <Image
        source={characterGif} // Замените на URL GIF
        style={styles.character}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: 300,
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  character: {
    width: 180, // Настройте размер персонажа
    height: 150,
    position: 'absolute',
    bottom: '-5%', // Центрирование
    left: '40%',
    transform: [{ translateX: -75 }, { translateY: -75 }], // Смещение для центрирования
  },
});

export default Character;