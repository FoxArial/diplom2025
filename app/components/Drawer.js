import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

// Екрани
const HomeScreen = () => (
  <View style={styles.screen}>
    <Button title="Головна" onPress={() => {}} />
  </View>
);

const SearchScreen = () => (
  <View style={styles.screen}>
    <Button title="Пошук" onPress={() => {}} />
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Button title="Профіль" onPress={() => {}} />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Button title="Налаштування" onPress={() => {}} />
  </View>
);

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: "#f4f4f4",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#4D2D8F",
          },
          headerTintColor: "#fff",
          drawerActiveTintColor: "#4D2D8F",
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Icon
                name={isDrawerOpen ? "x" : "menu"} // Змінюється між хрестиком і меню
                size={28}
                color="#fff"
                onPress={() => {
                  if (isDrawerOpen) {
                    navigation.closeDrawer(); // Закриває Drawer
                  } else {
                    navigation.openDrawer(); // Відкриває Drawer
                  }
                  setIsDrawerOpen(!isDrawerOpen); // Тригер зміни іконки
                }}
              />
            </View>
          ),
        })}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Search"
          component={SearchScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>

      {/* Кнопка виходу */}
      <View style={styles.logoutButtonContainer}>
        <Button title="Вийти" color="#FF3B30" onPress={() => {}} />
      </View>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoutButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
});
