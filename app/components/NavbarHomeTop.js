import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather"; // Для іконок

function NavbarHomeTop() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {/* Ліва частина: Меню */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconButton}>
        <Icon name="menu" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Права частина: Пошук і Профіль */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")} style={styles.iconButton}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.iconButton}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: "#4D2D8F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: '100%'
  },
  iconButton: {
    padding: 8,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NavbarHomeTop;
