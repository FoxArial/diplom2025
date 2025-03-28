import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ResetPasswordScreen({navigation}) {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    const auth = getAuth(); // Ініціалізація Firebase Auth

    if (!email) {
      Alert.alert("Помилка", "Будь ласка, введіть електронну пошту.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          "Успішно",
          "Лист для скидання пароля надіслано! Перевірте папку 'Спам', якщо не бачите його в папці 'Вхідні'."
        );
        setEmail(""); // Очищення поля після успішного надсилання
      })
      .catch((error) => {
        let errorMessage = "Щось пішло не так. Спробуйте ще раз.";
        if (error.code === "auth/invalid-email") {
          errorMessage = "Невірна електронна пошта. Будь ласка, введіть коректну адресу.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "Користувача з такою електронною поштою не знайдено.";
        }
        Alert.alert("Помилка", errorMessage);
      });
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.backButton}>
        <Icon name="arrow-left" size={35} color="#4D2D8F" />
      </TouchableOpacity>
      <Text style={styles.title}>Відновлення пароля</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть вашу електронну пошту"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Відновити пароль</Text>
      </TouchableOpacity>
      <Text style={styles.note}>Перевірте папку "Спам", якщо лист не з'явився у папці "Вхідні".</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#CFBCFF",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4D2D8F",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4D2D8F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  note: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});
