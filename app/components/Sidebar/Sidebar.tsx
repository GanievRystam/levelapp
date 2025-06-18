import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Character from "./Character";
import Charasteristic from "./Characteristic";
type SidebarProps = {
    openClose: () => void; 
    menuWidth: Animated.Value; // Опциональный параметр для ширины меню
}
interface Stat {
  label: string;
  value: number;
}

interface Habit {
  name: string;
  progress: string; // Процент или значение ширины прогресс-бара
}
const Sidebar = ({openClose, menuWidth}:SidebarProps) => { 
    const stats: Stat[] = [
    { label: 'Интеллект', value: 25 },
    { label: 'Физическая подготовка', value: 30 },
    { label: 'Здоровье', value: 20 },
  ];

  // Данные для привычек
  const habits: Habit[] = [
    { name: 'Медитация', progress: '50%' },
    { name: 'Отжимания по утрам', progress: '90%' },
    { name: 'Читать по 20 страниц', progress: '25%' },
  ];
    return (
    <Animated.View style={[styles.menu, { left: menuWidth }]}>
        <TouchableOpacity onPress={openClose} style={{ position: 'absolute', top: 10, right: 10, zIndex: 3 }}>
            <View >
                <Text style={{ fontSize: 18, color: '#000' }}>✕</Text> {/* Кнопка закрытия меню */}
            </View>
        </TouchableOpacity>
        <Character />
        <View style={styles.container}>
            <Charasteristic type="stat" data={stats}/>
            <Charasteristic type="habit" data={habits}/>
            
        </View>
    </Animated.View>
    )
}
const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: '#fff',
        elevation: 25,
        overflow: 'hidden',
        zIndex: 2,
        width: 300, // Фиксированная ширина для меню
    },
    container: {
    backgroundColor: '#1a1a2e', // Темный аниме-стильный фон
    padding: 16,
    borderRightWidth: 2,
    height:"100%",
    borderRightColor: '#ff6b6b', // Яркая рамка для RPG-впечатления
  },
 
});
export default Sidebar;