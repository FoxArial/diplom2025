import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider, useAuth } from "../config/authContex";
import { View, ActivityIndicator } from "react-native";

import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreateOfflineGame from "../screens/CreateOfflineGame";
import CreateOnlineGame from "../screens/CreateOnlineGame";
import SettingsScreen from "../screens/SettingScreen";
import ResetPasswordScreen from "../screens/ResetPassScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Search"
        options={{ headerShown: false }}
        component={SearchScreen}
      />
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="CreateOnlineGame"
        options={{ headerShown: false }}
        component={CreateOnlineGame}
      />
      <Stack.Screen
        name="CreateOfflineGame"
        options={{ headerShown: false }}
        component={CreateOfflineGame}
      />
      <Stack.Screen
        name="ResetPassword"
        options={{ headerShown: false }}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { isAuth } = useAuth();

  if (isAuth === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {isAuth ? <MainStackNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function AppNavigation() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
