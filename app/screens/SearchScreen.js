import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Modal,} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


import Navbar from "../components/NavbarSearchTop";
import CardOnline from "../components/CardOnline";
import {colors} from "../components/Constant";

const SearchScreen = ({navigation}) => {

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
      setOverlayVisible(!isOverlayVisible);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Navbar */}
        <Navbar onProfilePress={() => navigation.navigate("Profile")} />
  
        <View style={styles.content}>
          <CardOnline />
        </View>
  
        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab} onPress={toggleOverlay}>
          <MaterialIcons name="add" size={28} color="white" />
        </TouchableOpacity>
  
        {/* Оверлей для створення оголошення */}
        <Modal visible={isOverlayVisible} transparent animationType="fade">
          <View style={styles.overlay}>
            <View style={styles.overlayContent}>
              <Text style={styles.overlayText}>Обрати тип гри:</Text>
  
              <TouchableOpacity
                style={styles.overlayButton}
                onPress={() => {
                  setOverlayVisible(false);
                  navigation.navigate("CreateOfflineGame");
                }}
              >
                <Text style={styles.buttonText}>Офлайн гра</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.overlayButton}
                onPress={() => {
                  setOverlayVisible(false);
                  navigation.navigate("CreateOnlineGame");
                }}
              >
                <Text style={styles.buttonText}>Онлайн гра</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleOverlay}
              >
                <Text style={styles.closeButtonText}>Закрити</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    content: {
      flex: 1,
      padding: 10,
    },
    fab: {
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: colors.COLOR_PRYMARY,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    overlayContent: {
      width: "80%",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
    },
    overlayText: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
    },
    overlayButton: {
      backgroundColor: "#4D2D8F",
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
      width: "100%",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
    closeButton: {
      marginTop: 10,
    },
    closeButtonText: {
      color: "#4D2D8F",
      fontSize: 14,
    },
  });

export default SearchScreen