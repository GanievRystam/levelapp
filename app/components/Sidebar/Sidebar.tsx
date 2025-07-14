import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Charasteristic from "./Characteristic";

type SidebarProps = {
    openClose: () => void; 
    menuWidth: Animated.Value;
}

interface Stat {
  label: string;
  value: number;
}

interface Habit {
  name: string;
  progress: string;
}

const Sidebar = ({openClose, menuWidth}: SidebarProps) => { 
    const stats: Stat[] = [
        { label: 'Интеллект', value: 25 },
        { label: 'Физическая подготовка', value: 30 },
        { label: 'Здоровье', value: 20 },
    ];

    const habits: Habit[] = [
        { name: 'Медитация', progress: '50%' },
        { name: 'Отжимания по утрам', progress: '90%' },
        { name: 'Читать по 20 страниц', progress: '25%' },
    ];

    return (
        <Animated.View style={[styles.menu, { transform: [{ translateX: menuWidth }] }]}>
            <TouchableOpacity onPress={openClose} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            {/* <Character /> */}
            <View style={styles.container}>
                <Charasteristic type="stat" data={stats}/>
                <Charasteristic type="habit" data={habits}/>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: '#1a1a2e',
        elevation: 25,
        width: 300,
        zIndex: 1000,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 3,
        padding: 5,
    },
    closeText: {
        fontSize: 18,
        color: '#ff6b6b',
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: '#1a1a2e',
        padding: 16,
        borderRightWidth: 2,
        height: '100%',
        borderRightColor: '#ff6b6b',
    },
});

export default Sidebar;