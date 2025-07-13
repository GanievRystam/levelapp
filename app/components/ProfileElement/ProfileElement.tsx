import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sidebar from "../Sidebar/Sidebar";

type ProfileElementProps = {
  label?: string
}

function ProfileElement({ label }: ProfileElementProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Извлекаем значение из useState
  const menuWidth = useState(new Animated.Value(0))[0];
  console.log('menuWidth', menuWidth)
  console.log('isMenuOpen', isMenuOpen)
  useEffect(() => {
    Animated.timing(menuWidth, {
      toValue: isMenuOpen ? 0 : -300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isMenuOpen, menuWidth]);

  const handleImagePress = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние
  };
  return (
    <>
      <View style={styles.profile}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={{ uri: 'https://i.ibb.co/sjF3y9z/avatar.png' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>Akira Yamada</Text>
          <Text style={styles.level}>Level 23</Text>
        </View>
        <View style={styles.navButtons}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Главная</Text>
            </TouchableOpacity>
          </Link>
          {/* <Link href="/" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Путь Героя</Text>
            </TouchableOpacity>
          </Link> */}
          <Link href="/screens/CharacterScreen" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Персонаж</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <Sidebar openClose={handleImagePress} menuWidth={menuWidth} />

    </>
  );
}
const styles = StyleSheet.create({
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1a1a2e', // Темный фон, как в sidebar
    padding: 16,
    borderBottomWidth: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#ff9f43', // Оранжевый акцент для аватара
    marginRight: 12,
  },
  name: {
    color: '#ff6b6b', // Яркий красный для имени
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  level: {
    color: '#e0e0e0', // Светлый текст для уровня
    fontSize: 14,
  },
  cardTitle: {
    color: '#ff6b6b', // Соответствует заголовкам в sidebar
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    paddingLeft: 16,
    letterSpacing: 1,
  },
  navButtons: {
    flexDirection: 'row',
    marginTop: 10, // Сдвигает кнопки вправо
  },
  navButton: {
    padding: 8,
    marginLeft: 10,
    backgroundColor: '#ff9f43',
    borderRadius: 5,
  },
  navText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProfileElement;