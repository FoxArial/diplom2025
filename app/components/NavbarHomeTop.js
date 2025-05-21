import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Для іконок
import { useAuth, logout } from "../config/authContex";
function NavbarHomeTop({ navigation }) {
  const { user, logout } = useAuth();
  const handleLogOut = async () => {
    await logout();
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.rightIcons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.iconButton}
        >
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.iconButton}
        >
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogOut} style={styles.iconButton}>
          <Icon name="log-out" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: "#4D2D8F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
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
