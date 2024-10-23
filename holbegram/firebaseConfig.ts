// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA04QpY6t3PeYI0nkEfVTspbfW9GDu7nqk",
  authDomain: "holbegram-a9546.firebaseapp.com",
  projectId: "holbegram-a9546",
  storageBucket: "holbegram-a9546.appspot.com",
  messagingSenderId: "321109970535",
  appId: "1:321109970535:web:92ef38d23673eac7bbcec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
