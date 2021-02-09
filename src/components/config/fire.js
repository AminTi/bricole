import firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyCQZ7yX00ZKTgEygYaVVyDRFPrGuHuR9cU",
  authDomain: "fir-rest-exjobb.firebaseapp.com",
  projectId: "fir-rest-exjobb",
  storageBucket: "fir-rest-exjobb.appspot.com",
  messagingSenderId: "797661165389",
  appId: "1:797661165389:web:0efcfde9a53c6b00842904",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
