import { StyleSheet, Text, View } from 'react-native';

type statProp = {
   stat: {name: string; value: number}
   index: number
}

const ProgressSkill: React.FC<statProp> = ({stat, index}) => {
    return(
        <View key={index} style={styles.statItem}>
            <Text style={styles.statLabel}>{stat.name}</Text>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${stat.value}%` }]} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  statItem: {
    marginBottom: 12,
  },
  statLabel: {
    color: '#e0e0e0', // Светлый текст для названия
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'capitalize', // Аниме-стиль для названий
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: '#333', // Темный фон контейнера
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#ff6b6b', // Яркий красный для прогресса
    borderRadius: 4,
  },
});
export default ProgressSkill;