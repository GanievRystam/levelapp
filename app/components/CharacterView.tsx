import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Levels {
  personalGrowth: number;
  health: number;
  finance: number;
  relationships: number;
  career: number;
  emotions: number;
  creativity: number;
  environment: number;
}

interface Props {
  levels: Levels;
}

export default function CharacterView({ levels }: Props) {


  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 400,
    position: 'relative',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },
  accessory: {
    // Можно подправить позицию аксессуаров, если нужно
  },
});
