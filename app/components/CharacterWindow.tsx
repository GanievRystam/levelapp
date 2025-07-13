import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 768;
const WHEEL_SIZE = isSmallScreen ? width * 0.6 : width * 0.8;
const SEGMENT_COUNT = 8; // Количество долек (6-9)

type WheelSegment = {
  id?:number;
  name: string;
  value: number;  // от 1 до 10
  color: string;  // HEX-код цвета
  ident: string;
};
type LifeWheels = {
  [key: string]: WheelSegment[];
};
type HabitType = {
  name: string;
  effect: string;
  description: string;
} | null;
const CharacterScreen = () => {
  type WheelType = 'health' | 'finance' | 'career' | 'development' | null;
const [selectedWheel, setSelectedWheel] = useState<WheelType>(null);
  const [hoveredHabit, setHoveredHabit] = useState<HabitType>(null);

  // Данные персонажа
  const characterStats = {
    health: 85,
    strength: 70,
    stamina: 65,
    energy: 90,
    intellect: 60
  };

  // Привычки с баффами
  const habits = [
    {
      name: "Утренние отжимания",
      effect: "+5 к силе, +3 к выносливости",
      description: "Ежедневные отжимания укрепляют тело и дух"
    },
    {
      name: "Чтение перед сном",
      effect: "+7 к интеллекту",
      description: "Развивает умственные способности"
    }
  ];

  // Навыки
  const skills = [
    "Боевые искусства",
    "Программирование",
    "Кулинария",
    "Медитация"
  ];

  // Колесо жизни
  const lifeWheels:LifeWheels = {
    main: [
      { name: "Здоровье", value: 8, color: "#e74c3c", ident:'health' },
      { name: "Финансы", value: 6, color: "#2ecc71", ident:'finance' },
      { name: "Отношения", value: 7, color: "#3498db", ident:'relations' },
      { name: "Карьера", value: 5, color: "#f39c12", ident:'career' },
    ],
    health: [
      { name: "Сила жизни", value: 7, color: "#e74c3c", ident:'null' },
      { name: "Выносливость", value: 8, color: "#e67e22", ident:'null' },
      { name: "Гибкость", value: 6, color: "#d35400", ident:'null' }
    ],
    finance: [
      { name: "Доходы", value: 6, color: "#2ecc71", ident:'null' },
      { name: "Сбережения", value: 4, color: "#27ae60", ident:'null' },
      { name: "Инвестиции", value: 3, color: "#16a085", ident:'null' }
    ],
    relations: [
      { name: "Семья", value: 8, color: "#3498db", ident:'null' },
      { name: "Друзья", value: 7, color: "#2980b9", ident:'null' },
      { name: "Романтика", value: 6, color: "#1abc9c", ident:'null' }
    ],
    career: [
      { name: "Навыки", value: 7, color: "#f39c12", ident:'null' },
      { name: "Опыт", value: 5, color: "#e67e22", ident:'null' },
      { name: "Развитие", value: 6, color: "#d35400", ident:'null' }
    ]
  };

const renderWheel = (wheelData: WheelSegment[], size = 300) => {
  const segmentAngle = 360 / wheelData.length;
  const wheelSize = isSmallScreen ? Math.min(size, width * 0.6) : size;

  return (
    <View style={[styles.wheelContainer, { width: wheelSize, height: wheelSize }]}>
      {/* Фоновое кольцо */}
      <View style={[styles.wheelBackground, { width: wheelSize, height: wheelSize }]} />
      
      {/* Контейнер для сегментов с overflow hidden */}
      <View style={[
        { 
          width: wheelSize, 
          height: wheelSize,
          overflow: 'hidden',
          borderRadius: wheelSize / 2
        }
      ]}>
        {/* Сегменты колеса */}
        {wheelData.map((segment, index) => {
          const rotate = `${index * segmentAngle}deg`;
          const skew = `${90 - segmentAngle}deg`;
          
          return (
            <TouchableOpacity
              key={segment.id || index}
              style={[
                styles.wheelSegment,
                {
                  transform: Platform.OS === 'android' 
                    ? [{ rotate }, { skewY: skew }]
                    : [{ rotate }, { skewY: skew }],
                  backgroundColor: segment.color,
                  opacity: segment.value / 10,
                  width: '50%',
                  height: '50%',
                  left: '50%',
                  top: 0,
                  transformOrigin: Platform.OS === 'android' ? 'left bottom' : 'left bottom',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }
              ]}
              onPress={() => {console.log(segment.ident); setSelectedWheel(segment.ident as WheelType)}}
            />
          );
        })}
      </View>

      {/* Центральный круг */}
      <View style={[styles.wheelCenter, { 
        width: wheelSize * 0.3, 
        height: wheelSize * 0.3 
      }]} />

      {/* Подписи сегментов - теперь поверх колеса */}
      {wheelData.map((segment, index) => {
        const angle = (index * segmentAngle + segmentAngle / 2) * (Math.PI / 180);
        const radius = wheelSize * 0.35; // Радиус для размещения подписей
        const x = wheelSize / 2 + radius * Math.cos(angle);
        const y = wheelSize / 2 + radius * Math.sin(angle);
        const rotate = angle * (180 / Math.PI) == 180 ? 0 : angle * (180 / Math.PI);
        
        return (
          <View
            key={`label-${segment.id || index}`}
            style={[
              styles.segmentLabel,
              {
                position: 'absolute',
                left: x - 60, // Центрируем подпись
                top: y - 20,  // Центрируем подпись
                width: 120,
                alignItems: rotate == 0 ? 'flex-end' : 'flex-start',
                transform: Platform.OS === 'android' 
                  ? [{ rotate: `${rotate}deg` }]
                  : [{ rotate: `${rotate}deg` }]
              }
            ]}
          >
            <Text style={[styles.segmentText, { textAlign: 'center' }]}>
              {segment.name}
            </Text>
            <Text style={[styles.segmentValue, { textAlign: 'center' }]}>
              {segment.value}/10
            </Text>
          </View>
        );
      })}
    </View>
  );
}
  return (
    <View style={styles.container}>
      {/* Адаптивная вёрстка для мобильных устройств */}
      {isSmallScreen ? (
        // Мобильная вёрстка - вертикальная
        <View style={styles.mobileContainer}>
          {/* Окно персонажа */}
          <View style={styles.characterWindow}>
            <Image 
              source={require('../assets/character.gif')} 
              style={styles.characterImage}
            />
            <Text style={styles.characterName}>Акира Ямада</Text>
            <View style={styles.levelBadge}>
              <Ionicons name="star" size={16} color="#ff9f43" />
              <Text style={styles.levelText}>Уровень 23</Text>
            </View>
          </View>

          {/* Характеристики */}
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Характеристики</Text>
            {Object.entries(characterStats).map(([stat, value]) => (
              <View key={stat} style={styles.statRow}>
                <Text style={styles.statName}>{stat}:</Text>
                <View style={styles.statBar}>
                  <View style={[styles.statBarFill, { width: `${value}%` }]} />
                </View>
                <Text style={styles.statValue}>{value}</Text>
              </View>
            ))}
          </View>

          {/* Колесо Жизни */}
          <View style={styles.wheelSection}>
            <Text style={styles.wheelTitle}>Колесо Жизни</Text>
            {renderWheel(lifeWheels.main, 250)}
            
            {selectedWheel && (
              <>
                <Text style={styles.subWheelTitle}>Колесо {selectedWheel === 'health' ? 'Здоровья' : ''}</Text>
                {renderWheel(lifeWheels[selectedWheel], 200)}
              </>
            )}
          </View>

          {/* Навыки */}
          <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Навыки</Text>
            <View style={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Привычки */}
          <View style={styles.habitsSection}>
            <Text style={styles.sectionTitle}>Привычки</Text>
            {habits.map((habit, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.habitItem}
                onPressIn={() => setHoveredHabit(habit)}
                onPressOut={() => setHoveredHabit(null)}
              >
                <Text style={styles.habitName}>{habit.name}</Text>
                <Text style={styles.habitEffect}>{habit.effect}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Всплывающая подсказка */}
          {hoveredHabit && (
            <View style={styles.tooltip}>
              <Text style={styles.tooltipTitle}>{hoveredHabit.name}</Text>
              <Text style={styles.tooltipText}>{hoveredHabit.description}</Text>
              <Text style={styles.tooltipEffect}>Эффект: {hoveredHabit.effect}</Text>
            </View>
          )}
        </View>
      ) : (
        // Десктопная вёрстка - горизонтальная
        <>
          {/* Левая колонка */}
          <View style={styles.leftColumn}>
            {/* Окно персонажа */}
            <View style={styles.characterWindow}>
              <Image 
                source={require('../assets/character.gif')} 
                style={styles.characterImage}
              />
              <Text style={styles.characterName}>Акира Ямада</Text>
              <View style={styles.levelBadge}>
                <Ionicons name="star" size={16} color="#ff9f43" />
                <Text style={styles.levelText}>Уровень 23</Text>
              </View>
            </View>

            {/* Характеристики */}
            <View style={styles.statsSection}>
              <Text style={styles.sectionTitle}>Характеристики</Text>
              {Object.entries(characterStats).map(([stat, value]) => (
                <View key={stat} style={styles.statRow}>
                  <Text style={styles.statName}>{stat}:</Text>
                  <View style={styles.statBar}>
                    <View style={[styles.statBarFill, { width: `${value}%` }]} />
                  </View>
                  <Text style={styles.statValue}>{value}</Text>
                </View>
              ))}
            </View>

            {/* Навыки */}
            <View style={styles.skillsSection}>
              <Text style={styles.sectionTitle}>Навыки</Text>
              <View style={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <View key={index} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Привычки */}
            <View style={styles.habitsSection}>
              <Text style={styles.sectionTitle}>Привычки</Text>
              {habits.map((habit, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.habitItem}
                  onPressIn={() => setHoveredHabit(habit)}
                  onPressOut={() => setHoveredHabit(null)}
                >
                  <Text style={styles.habitName}>{habit.name}</Text>
                  <Text style={styles.habitEffect}>{habit.effect}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Всплывающая подсказка */}
            {hoveredHabit && (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipTitle}>{hoveredHabit.name}</Text>
                <Text style={styles.tooltipText}>{hoveredHabit.description}</Text>
                <Text style={styles.tooltipEffect}>Эффект: {hoveredHabit.effect}</Text>
              </View>
            )}
          </View>

          {/* Правая колонка */}
          <View style={styles.rightColumn}>
            <Text style={styles.wheelTitle}>Колесо Жизни</Text>
            {renderWheel(lifeWheels.main, 300)}
            
            {selectedWheel && (
              <>
                <Text style={styles.subWheelTitle}>Колесо {selectedWheel === 'health' ? 'Здоровья' : ''}</Text>
                {renderWheel(lifeWheels[selectedWheel], 200)}
              </>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    padding: isSmallScreen ? 10 : 20
  },

  // Мобильная вёрстка
  mobileContainer: {
    flex: 1,
    paddingBottom: 20,
  },

  // Десктопная вёрстка
  leftColumn: {
    flex: 1,
    paddingRight: 15
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center'
  },

  // Общие стили
  characterWindow: {
    backgroundColor: '#2a2a3a',
    borderRadius: 15,
    padding: isSmallScreen ? 15 : 20,
    alignItems: 'center',
    marginBottom: isSmallScreen ? 15 : 20
  },
  characterImage: {
    width: isSmallScreen ? 80 : 120,
    height: isSmallScreen ? 80 : 120,
    borderRadius: isSmallScreen ? 40 : 60,
    borderWidth: 3,
    borderColor: '#ff9f43'
  },
  characterName: {
    color: '#fff',
    fontSize: isSmallScreen ? 18 : 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a3a4a',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 8
  },
  levelText: {
    color: '#ff9f43',
    marginLeft: 5,
    fontWeight: '600'
  },
  statsSection: {
    backgroundColor: '#2a2a3a',
    borderRadius: 15,
    padding: isSmallScreen ? 15 : 20,
    marginBottom: isSmallScreen ? 15 : 20
  },
  sectionTitle: {
    color: '#ff9f43',
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a4a',
    paddingBottom: 5
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  statName: {
    color: '#fff',
    width: isSmallScreen ? 80 : 100,
    fontSize: isSmallScreen ? 12 : 14,
    textTransform: 'capitalize'
  },
  statBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#3a3a4a',
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: 'hidden'
  },
  statBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5
  },
  statValue: {
    color: '#fff',
    width: 30,
    textAlign: 'right',
    fontSize: isSmallScreen ? 12 : 14,
  },
  skillsSection: {
    backgroundColor: '#2a2a3a',
    borderRadius: 15,
    padding: isSmallScreen ? 15 : 20,
    marginBottom: isSmallScreen ? 15 : 20
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  skillBadge: {
    backgroundColor: '#3a3a4a',
    padding: isSmallScreen ? 8 : 10,
    borderRadius: 10,
    marginBottom: 10,
    minWidth: isSmallScreen ? '45%' : '48%',
    alignItems: 'center'
  },
  skillText: {
    color: '#fff',
    fontSize: isSmallScreen ? 12 : 14,
  },
  habitsSection: {
    backgroundColor: '#2a2a3a',
    borderRadius: 15,
    padding: isSmallScreen ? 15 : 20
  },
  habitItem: {
    backgroundColor: '#3a3a4a',
    padding: isSmallScreen ? 12 : 15,
    borderRadius: 10,
    marginBottom: 10
  },
  habitName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: isSmallScreen ? 14 : 16
  },
  habitEffect: {
    color: '#4CAF50',
    fontSize: isSmallScreen ? 12 : 14,
    marginTop: 5
  },
  tooltip: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: '#333344',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ff9f43',
    zIndex: 100
  },
  tooltipTitle: {
    color: '#ff9f43',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  tooltipText: {
    color: '#fff',
    marginBottom: 10
  },
  tooltipEffect: {
    color: '#4CAF50',
    fontStyle: 'italic'
  },

  // Колесо жизни
  wheelSection: {
    backgroundColor: '#2a2a3a',
    borderRadius: 15,
    padding: isSmallScreen ? 15 : 20,
    marginBottom: isSmallScreen ? 15 : 20,
    alignItems: 'center'
  },
  wheelTitle: {
    color: '#ff9f43',
    fontSize: isSmallScreen ? 20 : 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  subWheelTitle: {
    color: '#fff',
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  wheelContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheelBackground: {
    position: 'absolute',
    borderRadius: 1000,
    backgroundColor: '#2d3436',
    borderWidth: 3,
    borderColor: '#fff',
  },
  wheelSegment: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '50%',
    top: 0,
    transformOrigin: 'left bottom',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
  },
  segmentLabel: {
    position: 'absolute',
    width: 120,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
  },
  segmentText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: isSmallScreen ? 10 : 12,
  },
  segmentValue: {
    color: '#fff',
    fontSize: isSmallScreen ? 8 : 10,
    marginTop: 2,
  },
  wheelCenter: {
    borderRadius: 1000,
    backgroundColor: '#1e272e',
    borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CharacterScreen;