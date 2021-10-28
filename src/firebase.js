import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyxmioMfCAwNhWmchjlg5z-EUtJn00pZg",
  authDomain: "idobata-59572.firebaseapp.com",
  databaseURL:"https://idobata-59572-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "idobata-59572",
  storageBucket: "idobata-59572.appspot.com",
  messagingSenderId: "930557842007",
  appId: "1:930557842007:web:8fde3918797b39f9ff4912",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
