import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateOfflineGame from '../screens/CreateOfflineGame';
import CreateOnlineGame from '../screens/CreateOnlineGame';
import SettingsScreen from '../screens/SettingScreen';
import ResetPasswordScreen from '../screens/ResetPassScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStackNavigator() {
  return (<Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}/>
      <Stack.Screen name="Register"options={{ headerShown: false }} component={RegisterScreen} />
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
      <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
      <Stack.Screen name="CreateOnlineGame" options={{ headerShown: false }} component={CreateOnlineGame} />
      <Stack.Screen name="CreateOfflineGame" options={{ headerShown: false }} component={CreateOfflineGame} />
      <Stack.Screen name="ResetPassword" options={{ headerShown: false }} component={ResetPasswordScreen} />
      
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainStack">
        {/* Основний стек-нaвігатор */}
        <Drawer.Screen
          name="MainStack"
          options={{ headerShown: false,drawerItemStyle: { display: "none" }}}
          component={MainStackNavigator}
        />
        {/* Головнаий екран */}
        <Drawer.Screen
          name="Main"
          options={{ headerShown: false, title: "Головна" }}
          component={HomeScreen}
        />
        {/* Екран профілю */}
        <Drawer.Screen
          name="Profile"
          options={{headerShown: false, title: "Профіль" }}
          component={ProfileScreen}
        />
        <Drawer.Screen
          name="Search"
          options={{headerShown: false, title: "Пошук" }}
          component={SearchScreen}
        />
        {/* Налаштування */}
        <Drawer.Screen
          name="Settings"
          options={{headerShown: false, title: "Налаштування" }}
          component={SettingsScreen}
        />
        <Drawer.Screen
          name="Exit"
          options={{headerShown: false, title: "Вихід" }}
          component={WelcomeScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
