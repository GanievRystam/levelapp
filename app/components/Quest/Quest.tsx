import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type QuestProps = {
    index: number;
    name: string;
    description: string;
    reward: string;
    completed: string;
    status: string
}
const Quest = ({index, name, description, completed, status, reward}:QuestProps) => {
  const router = useRouter();
  console.log("key", index);
    return(
        <View key={index} style={styles.questCard}>
            <Image
            source={{ uri: 'https://i.ibb.co/sjF3y9z/avatar.png' }}
            style={styles.avatar}
            />
            <View style={styles.questContent}>
                <Text style={styles.questTitle}>{name}</Text>
                <Text style={styles.questDescription}>{description}</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.questDescription}>Статус: В процессе</Text>
                    <Text style={styles.questDescription}>Награда: {reward} опыта</Text>    
                </View>
                <TouchableOpacity onPress={() => router.push({pathname: '/screens/QuestPage', params: {key: index.toString(), name, description, completed: completed.toString(), status, reward}, })}>
                  <Text style={styles.questButtonText}>Открыть квест</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

questCard: {
    backgroundColor: '#2c2c3e', // Темный фон с аниме-оттенком
    
    maxHeight: 250, // Ограничение высоты для карточки
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    width: 220, // Фиксированная ширина для карточки
    borderWidth: 2,
    flexDirection: 'column',
    borderColor: '#ff6b6b', // Яркая красная рамка
    boxShadow: '0 2px 4px rgba(255, 159, 67, 0.3)',
    elevation: 5,
  },
  questButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  avatar: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  questContent: {
    flex: 1,
    width: '100%',
    padding: 10,
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