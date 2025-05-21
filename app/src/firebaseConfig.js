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
