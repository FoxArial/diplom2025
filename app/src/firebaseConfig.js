import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyD2c0bQJi1M_Yobf5g8WYUDpFEcCo5hY1U",
  authDomain: "teafi-75cdd.firebaseapp.com",
  projectId: "teafi-75cdd",
  storageBucket: "teafi-75cdd.firebasestorage.app",
  messagingSenderId: "1026940677184",
  appId: "1:1026940677184:web:87548a706f022c813ac3a5",
  measurementId: "G-K17D60917E",
};

let app, auth;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth(app);
}

const database = getFirestore(app);

const userRef = collection(database, "users");
const roomRef = collection(database, "rooms");
const AdvertRef = collection(database, "adverts");

export { auth, database, userRef, roomRef, AdvertRef, provider };
