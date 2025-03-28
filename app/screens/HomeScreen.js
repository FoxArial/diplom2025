import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import NavbarHomeTop from "../components/NavbarHomeTop";
import { SafeAreaView } from "react-native-safe-area-context";

const recommendations = [
  { id: 1, userName: "UserName", gameName: "GameName", gameImage: require("../assets/overwatch2.png") },
  { id: 2, userName: "Alex", gameName: "Need for Speed", gameImage: require("../assets/needforspeed.png") },
];

const ProfileScreen = () => {

  const [isVisible, setIsVisible] = useState(true); // Стан для відображення елемента

  const handleClose = () => {
    setIsVisible(false); // Закриваємо елемент
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
       <NavbarHomeTop/>     

      {/* Профіль */}
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Mei</Text>
        <View style={styles.ratingContainer}>
          {[...Array(4)].map((_, i) => (
            <Icon key={i} name="star" size={20} color="#FFD700" />
          ))}
          <Icon name="star" size={20} color="#ccc" />
        </View>
        <Image
          source={require("../assets/avatar.jpg")}
          style={styles.avatar}
        />
      </View>

      {/* Календар */}
      {isVisible && (
      <View style={styles.eventsContainer}>
        <View style={styles.eventsHeader}>
          <Text style={styles.eventsTitle}>Події незабаром:</Text>
          <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={{paddingRight: 15}}>
            <Icon name="calendar" size={24} color="#4D2D8F" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.noEventsText}>Подій не знайдено</Text>
      </View>
      )}

      {/* Recommendations Section */}
      <Text style={styles.recommendationsTitle}>Вам можуть сподобатись</Text>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recommendationCard}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>
                {item.userName[0].toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.recommendationUser}>{item.userName}</Text>
              <Text style={styles.recommendationGame}>{item.gameName}</Text>
            </View>
            <Image source={item.gameImage} style={styles.gameImage} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recommendationList}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    height: 60,
    backgroundColor: "#4D2D8F",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  profileCard: {
    backgroundColor: "#E6DBF5",
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4D2D8F",
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
  },
  eventsContainer: {
    backgroundColor: "#EAE4F2",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    height:150,
  },
  eventsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",    
  },
  eventsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4D2D8F",
  },
  noEventsText: {
    marginTop: 10,
    color: "#666",
  },
  closeButton: {
    backgroundColor: "#4D2D8F",
    padding: 5,
    borderRadius: 20,
  },
  closeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4D2D8F",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  recommendationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    height:100,
  },
  avatarCircle: {
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
    fontWeight: "bold",
  },
  recommendationUser: {
    fontSize: 14,
    fontWeight: "bold",
  },
  recommendationGame: {
    fontSize: 12,
    color: "#666",
  },
  gameImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  recommendationList: {
    paddingHorizontal: 15,
  },
});

export default ProfileScreen;
