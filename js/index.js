
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB4NKWihbrLnnvlglL-yHg2f-ZLmbr5GzY",
    authDomain: "login-example-fd192.firebaseapp.com",
    projectId: "login-example-fd192",
    storageBucket: "login-example-fd192.appspot.com",
    messagingSenderId: "411398391224",
    appId: "1:411398391224:web:a466af0a1beeb3cf20bb4d",
    measurementId: "G-QFTKGHE9LC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
