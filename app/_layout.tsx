// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import GlobalStyles from './components/GlobalStyles';
import ProfileElement from './components/ProfileElement/ProfileElement';

export default function Layout() {
  return (
    <>
      <GlobalStyles />
      <Stack
        screenOptions={{
          header: () => <ProfileElement />,
          headerStyle: styles.headerStyle
        }}
      >
        <Stack.Screen name="index" options={{ title: "Главная" }} />
        <Stack.Screen name="screens/CharacterScreen" options={{ title: "Персонаж" }} />
        <Stack.Screen name="screens/HeroPathScreen" options={{ title: "Путь Героя" }} />
        <Stack.Screen name="screens/LifeWheelScreen" options={{ title: "Колесо Жизни" }} />
        <Stack.Screen name="screens/QuestPage" options={{ title: "Квесты" }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ff6b6b',
  },
  headerStyle: {
    backgroundColor: '#1a1a2e', // Темный фон для заголовка
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ff9f43',
    marginRight: 10,
  },
  name: {
    color: '#ff6b6b',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  level: {
    color: '#e0e0e0',
    fontSize: 14,
    marginLeft: 5,
  },
  menuButton: {
    padding: 5,
  },
});