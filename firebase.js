
// Firebase CDN
document.write('<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"><\/script>');

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Pq87PW-fmP2AoYOqUgLvu-8zQ3_jFb8",
  authDomain: "bnbce-admin-system.firebaseapp.com",
  databaseURL: "https://bnbce-admin-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bnbce-admin-system",
  storageBucket: "bnbce-admin-system.appspot.com",
  messagingSenderId: "140926536338",
  appId: "1:140926536338:web:430fd0025600ac1e8744b"
};

firebase.initializeApp(firebaseConfig);
