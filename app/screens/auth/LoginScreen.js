import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../src/firebaseConfig";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { doc, getDoc } from "@firebase/firestore";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const uid = response.user.uid;
        const userDoc = await getDoc(doc(database, "users", uid));
        const userData = userDoc.data();
        Alert.alert(
          "Вхід виконано",
          `Ласкаво просимо, ${userData?.userName || response?.user?.userEmail}!`
        );
        navigation.navigate("Home");
      } catch (error) {
        const errorMessage = error.message;
        Alert.alert("Помилка входу", errorMessage);
      }
    } else {
      Alert.alert("Упс!", "Введіть пошту та пароль");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={styles.backButton}
      >
        <Icon name="arrow-left" size={35} color="#4D2D8F" />
      </TouchableOpacity>

      <Text style={styles.title}>ВХІД</Text>
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
            style={styles.eyeIcon}
          >
            <Icon
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Увійти</Text>
      </TouchableOpacity>
      {/* Нижній текст */}
      <Text
        onPress={() => navigation.navigate("ResetPassword")}
        style={styles.resetPass}
      >
        Забули пароль?
      </Text>
      <Text style={styles.footerText}>
        Немає акаунту?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={styles.footerLink}
        >
          Зареєструватись.
        </Text>
      </Text>

      {/* Іконки для соціальних мереж */}
      <View style={styles.socialContainer}>
        <View style={styles.iconsContainer}>
          <Icon name="google" size={40} color="#4D2D8F" />
        </View>
        <View style={styles.iconsContainer}>
          <Icon2 name="steam" size={40} color="#4D2D8F" />
        </View>
        <View style={styles.iconsContainer}>
          <Icon name="facebook" size={40} color="#4D2D8F" />
        </View>
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
    justifyContent: "center",
    alignContent: "center",
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
    width: "100%",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    transform: [{ translateY: -10 }],
  },
  loginButton: {
    backgroundColor: "#5E3BA1",
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 20,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetPass: {
    color: "#4D2D8F",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
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
    justifyContent: "space-around",
  },
  iconsContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
