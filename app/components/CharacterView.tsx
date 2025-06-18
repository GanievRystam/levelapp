import React from 'react';
import { StyleSheet } from 'react-native';

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
  // Подключаем базовый образ персонажа (поставь свою картинку в assets)
  // const base = require('../assets/character.png');

  // Пример аксессуаров, которые «открываются» при уровне >= 2
  // const hat = levels.personalGrowth >= 2 ? require('../assets/character.png') : null;
  // const gloves = levels.health >= 2 ? require('../assets/character.png') : null;
  // const watch = levels.finance >= 2 ? require('../assets/character.png') : null;

  return (
    // <View style={styles.container}>
    //   {/* <Image source={base} style={styles.image} /> */}
    //   {hat && <Image source={hat} style={[styles.image, styles.accessory]} />}
    //   {gloves && <Image source={gloves} style={[styles.image, styles.accessory]} />}
    //   {watch && <Image source={watch} style={[styles.image, styles.accessory]} />}
    // </View>
    <div></div>
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
