  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuk9FHMzqlyRqozQwV9TFZfDfORp5chK4",
    authDomain: "fir-e124c.firebaseapp.com",
    projectId: "fir-e124c",
    storageBucket: "fir-e124c.appspot.com",
    messagingSenderId: "781889735391",
    appId: "1:781889735391:web:8c462ffbd8d29f4863776a",
    measurementId: "G-4WJJZK0CZ6"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);