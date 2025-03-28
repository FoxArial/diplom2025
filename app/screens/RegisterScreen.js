import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import apps from "../src/firebaseConfig";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const auth = getAuth(apps); // Ініціалізація Firebase Authentication

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Помилка", "Паролі не співпадають.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Реєстрація завершена", `Привіт, ${user.email}!`);
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert("Помилка при реєстрації", error.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* Назад */}
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={styles.backButton}>
        <Icon name="arrow-left" size={35} color="#4D2D8F" />
      </TouchableOpacity>

      {/* Заголовок */}
      <Text style={styles.title}>РЕЄСТРАЦІЯ</Text>

      {/* Поля введення */}
      <View style={styles.inputContainer}>
        {/* Поле для пошти */}
        <TextInput
          style={styles.input}
          placeholder="Пошта"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
        />
        {/* Поле для пароля */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#777"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}>
            <Icon
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </View>
        {/* Поле для повторення пароля */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Повторити пароль"
            placeholderTextColor="#777"
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.eyeIcon}>
            <Icon
              name={confirmPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Кнопка Зареєструватися */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Зареєструватися</Text>
      </TouchableOpacity>

      {/* Нижній текст */}
      <Text style={styles.footerText}>
        Вже є аккаунт?{" "}
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.footerLink}>
          Увійти.
        </Text>
      </Text>

      {/* Іконки для соціальних мереж */}
      <View style={styles.socialContainer}>
        <View style={styles.iconsContainer}><Icon name="google" size={40} color="#4D2D8F"/></View>        
        <View style={styles.iconsContainer}><Icon2 name="steam" size={40} color="#4D2D8F"/></View>
        <View style={styles.iconsContainer}><Icon name="facebook" size={40} color="#4D2D8F"/></View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFBCFF",
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignContent: 'center'
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4D2D8F",
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
    width: "100%"
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "100%"
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    transform: [{ translateY: -10 }],
  },
  registerButton: {
    backgroundColor: "#5E3BA1",
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 20,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    fontSize: 18,
    color: "#777",
  },
  footerLink: {
    color: "#4D2D8F",
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    justifyContent: "space-around"
  },
  iconsContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
