import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

type SphereProps = {
  id: string;
  label: string;
  stats: { name: string; value: number }[];
  icon: string;
};

interface SpheresProps {
  spheres: SphereProps[];
  activeTab: string;
  onTabChange: (id: string) => void;
}
const Spheres: React.FC<SpheresProps> = ({ spheres, activeTab, onTabChange }) =>{
 
   
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScroll}>
        {spheres.map((sphere) => (
            <TouchableOpacity
            key={sphere.id}
            onPress={() => onTabChange(sphere.id)}
            style={[styles.tab, activeTab === sphere.id ? styles.activeTab : styles.inactiveTab]}
            >
            <Ionicons name={sphere.icon as any} size={16} style={styles.tabIcon} color="#000" />
            <Text style={styles.tabText}>{sphere.label}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  tabScroll: {
    backgroundColor: '#1a1a2e', // Темный фон
    paddingVertical: 8,
    borderBottomWidth: 2,
    maxHeight: 60, // Ограничение высоты для горизонтального скролла
    borderBottomColor: '#ff6b6b', // Яркая граница
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
    height: 40,
    borderRadius: 20, // Закругленные углы для аниме-стиля
  },
  activeTab: {
    backgroundColor: '#ff6b6b', // Яркий акцент для активной вкладки
    shadowColor: '#ff9f43', // Тень для эффекта
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  inactiveTab: {
    backgroundColor: '#333', // Темный фон для неактивных
  },
  tabIcon: {
    marginRight: 6,
  },
  tabText: {
    color: '#fff', // Белый текст для контраста
    fontSize: 14,
    fontWeight: '600',
  },
});
export default Spheres;