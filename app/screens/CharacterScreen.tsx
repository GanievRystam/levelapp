// screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CharacterWindow from '../components/CharacterWindow';
import StatsPanel from '../components/StatsPanel';

function CharacterScreen() {


  return (
    <View>
      <CharacterWindow />
      <StatsPanel />
      </View>
    )
}

const styles = StyleSheet.create({

});

export default CharacterScreen;
