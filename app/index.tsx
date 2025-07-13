import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProgressSkill from './components/ProgressSkill/ProgressSkill';
import Quest from './components/Quest/Quest';
import Spheres from './components/Spheres/Spheres';
type Sphere = {
  id: string;
  label: string;
  stats: { name: string; value: number }[];
  icon: string;
  quests?: { title: string; description:string, completed: boolean, status:string, reward:number }[];
  habits?: { title: string; description:string, frequency: string }[];
};
const spheres: Sphere[] = [
  {
    id: 'personal-growth',
    icon: 'school-outline',
    label: 'Личностный рост',
    stats: [
      { name: 'Эрудиция', value: 30 },
      { name: 'Креативность', value: 50 },
      { name: 'Решительность', value: 40 },
    ],
    quests: [
      { title: 'Изучить новую тему', description: "Найти что-то новое в своей жизни", completed: false, status:"В процессе", reward: 1000 },
      { title: 'Пройти онлайн-курс', description: "Пройти новый кус", completed: true, status:"Завершён", reward: 250 },
      { title: 'Посетить мастер-класс', description: "Найти и пройти мастер класс", completed: false, status:"Ждёт героя", reward: 350 },
    ],
    habits: [
      { title: 'Чтение книг', description:" 212", frequency: 'ежедневно' },
      { title: 'Медитация', description:"233223", frequency: 'еженедельно' },
      { title: 'Ведение дневника', description:"233223", frequency: 'ежедневно' },
    ],
  },
  {
    id: 'intellect',
    icon: 'bulb-outline',
    label: 'Интеллект',
    stats: [
      { name: 'Память', value: 60 },
      { name: 'Логика', value: 35 },
      { name: 'Математика', value: 45 },
    ],
  },
  {
    id: 'fitness',
    icon: 'fitness-outline',
    label: 'Здоровье',
    stats: [
      { name: 'Сила', value: 80 },
      { name: 'Выносливость', value: 50 },
      { name: 'Гибкость', value: 30 },
    ],
  },
  {
    id: 'social',
    icon: 'chatbubble-ellipses-outline',
    label: 'Социальные навыки',
    stats: [
      { name: 'Коммуникация', value: 40 },
      { name: 'Харизма', value: 55 },
      { name: 'Уверенность', value: 50 },
    ],
  },
];

function HomeScreen() {
 const [activeTab, setActiveTab] = useState('personal-growth');
 const [currentSphere, setCurrentSphere] = useState(spheres[0]);
 function activeTabHandler(id: string) {
      setActiveTab(id);
      const selectedSphere = spheres.find((sphere) => sphere.id === id);
      if (selectedSphere) {
          setCurrentSphere(selectedSphere);
      }
  }
  return (
    <View style={styles.container}>

      
        
      <Spheres spheres={spheres} activeTab={activeTab} onTabChange={activeTabHandler}/>
        
      <View style={styles.statsContainer}>
        {currentSphere.stats.map((stat, index) => (
          <ProgressSkill key={`stat-${stat.name}-${index}`} stat={stat} index={index}/>
        ))}
      </View>
     
       <Text style={styles.sectionTitle}>Квесты</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.questScroll}>
        {currentSphere.quests?.map((quest, index) => (
         <Quest
            key={`quest-${quest.title}-${index}`}
            index={index}
            name={quest.title}
            description={quest.description}
            completed={quest.completed.toString()}
            reward={quest.reward.toString()}
            status={quest.status}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Темный фон, как в sidebar
    padding: 16,
  },
  statsContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: '#ff6b6b', // Яркий красный для заголовков
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    letterSpacing: 1,
    paddingLeft: 8,
  },
  questScroll: {
    marginBottom: 16,
  },
});

export default HomeScreen;