import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
  
  // Initialize Firebase
  const apps = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Ініціалізуйте Auth лише один раз
const auth = getAuth(apps) || initializeAuth(apps, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { apps, auth };
