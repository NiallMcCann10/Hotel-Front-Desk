const firebaseConfig = {
  apiKey: "AIzaSyA2rqFMBfeB0-Kf9b6uarun8NUbrX6R2bU",
  authDomain: "hotel-front-desk-b92d1.firebaseapp.com",
  databaseURL: "https://hotel-front-desk-b92d1.firebaseio.com",
  projectId: "hotel-front-desk-b92d1",
  storageBucket: "hotel-front-desk-b92d1.appspot.com",
  messagingSenderId: "541584238837",
  appId: "1:541584238837:web:f104bb8823823e13adfdbc",
  measurementId: "G-ZCZHXX3ZR8"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/api`;

// App Engine

export default {
  firebaseConfig,
  backendUrl,
};
