import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

import { colors, OnlineCardInfo, gameInfo } from "../components/Constant";

const CardOnline = () => {
  // Стан для збереження стану кожної картки
  const [expandedCards, setExpandedCards] = useState({});

  // Функція для перемикання стану конкретної картки
  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  

  return (
    <ScrollView>
      {OnlineCardInfo.map((cardInfo, index) => (
        <View key={index} style={styles.card}>
          {/* Основна частина картки */}
          <TouchableOpacity
            onPress={() => toggleExpand(index)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor:colors.COLOR_CHOOSE,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderColor: colors.COLOR_CHOOSE,
            }}
          >
            {/* Аватар */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{cardInfo.userName[0]}</Text>
            </View>
            
            {/* Інформація */}
            <View style={styles.info}>
              <Text style={styles.userName}>{cardInfo.userName}</Text>
              <Text style={styles.gameName}>{cardInfo.gameName}</Text>
            </View>

            {/* Зображення */}
            <View>
              <Image
                source={gameInfo[cardInfo.gameName]?.gamePhoto}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          {/* Додаткова інформація */}
          {expandedCards[index] && (
            <View style={styles.cardDetails}>
              <View style={styles.row}>
                <Text>К-ть гравців: {cardInfo.players}</Text>
                <Text>Досвід: {cardInfo.experience}</Text>    
                <Text>Час: {cardInfo.prefTime}</Text>            
              </View>
              
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4D2D8F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  gameName: {
    fontSize: 14,
    color: "#666",
  },
  cardDetails: {
    backgroundColor: "#EAE4F2",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  detailsText: {
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default CardOnline;
