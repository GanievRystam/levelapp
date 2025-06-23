// screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CharacterWindow from '../components/CharacterWindow';
import StatsPanel from '../components/StatsPanel';
import WheelOfLife from '../components/WheelOfLife/WheelOfLife';

function CharacterScreen() {


  return (
    <View>
      <CharacterWindow />
      <StatsPanel />
        <WheelOfLife />
      </View>
    )
}

const styles = StyleSheet.create({

});

export default CharacterScreen;
