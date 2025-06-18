import { StyleSheet, Text, View } from "react-native";
interface CharacteristicProps {
  type: 'stat' | 'habit';
  data:any[];
}
const Charasteristic = ({type, data}:CharacteristicProps) => {
  return (
    <>
    {type === 'stat' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Характеристики</Text>
          {data.map((stat, index) => (
            <View key={index} style={styles.statRow}>
              <Text style={styles.statLabel}>{stat.label}:</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </View>
      )}
      {type === 'habit' && (
        <View style={styles.sectionHabit}>
          <Text style={styles.sectionTitle}>Привычки</Text>
          {data.map((habit, index) => (
            <View key={index} style={styles.habitRow}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: habit.progress }]} />
              </View>
              <Text style={styles.habitText}>{habit.name}</Text>
            </View>
          ))}
        </View>
      )}
      </>
  );
}

const styles = StyleSheet.create({
   section: {
    marginBottom: 20,
  },
  sectionHabit: {
    marginBottom: 20,
  },
  
  sectionTitle: {
    color: '#ff6b6b', // Яркий красный для заголовков
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    letterSpacing: 1,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    color: '#e0e0e0', // Светлый текст для характеристик
    fontSize: 14,
  },
  statValue: {
    color: '#ff9f43', // Оранжевый акцент для значений
    fontSize: 14,
    fontWeight: 'bold',
  },
  habitRow: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff6b6b', // Красная полоса прогресса
    borderRadius: 5,
  },
  habitText: {
    color: '#e0e0e0',
    fontSize: 14,
    marginBottom: 7,
  },
})
export default Charasteristic;