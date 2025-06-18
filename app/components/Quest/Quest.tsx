import { Image, StyleSheet, Text, View } from "react-native";

type QuestProps = {
    key: number;
    name: string;
    description: string;
    completed: boolean;
}
const Quest = ({key, name, description, completed}:QuestProps) => {
    return(
        <View key={key} style={styles.questCard}>
            <Image
            source={{ uri: 'https://i.ibb.co/sjF3y9z/avatar.png' }}
            style={styles.avatar}
            />
            <View style={styles.questContent}>
                <Text style={styles.questTitle}>{name}</Text>
                <Text style={styles.questDescription}>{description}</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.questDescription}>Статус: В процессе</Text>
                    <Text style={styles.questDescription}>Награда: 1000 опыта</Text>    
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

questCard: {
    backgroundColor: '#2c2c3e', // Темный фон с аниме-оттенком
    padding: 12,
    maxHeight: 250, // Ограничение высоты для карточки
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    width: 220, // Фиксированная ширина для карточки
    borderWidth: 2,
    flexDirection: 'column',
    borderColor: '#ff6b6b', // Яркая красная рамка
    shadowColor: '#ff9f43',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff9f43', // Оранжевая рамка для аватара
    marginRight: 10,
  },
  questContent: {
    flex: 1,
  },
  questTitle: {
    color: '#ff6b6b', // Яркий красный для названия
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  questDescription: {
    color: '#e0e0e0', // Светлый текст для описания
    fontSize: 12,
    marginBottom: 2,
  },
  questDetails: {
    marginTop: 10,
  },
});
export default Quest;