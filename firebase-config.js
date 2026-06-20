// =====================================================================
// CONFIGURATION FIREBASE — À PERSONNALISER OBLIGATOIREMENT
// =====================================================================
// 1. Allez sur https://console.firebase.google.com
// 2. Créez un projet (gratuit, plan "Spark")
// 3. Dans "Authentication" > Sign-in method > activez "E-mail/Password"
// 4. Dans "Firestore Database" > créez une base (mode production)
// 5. Project settings > vos applications > Web (</>) > copiez l'objet
//    de configuration ci-dessous avec VOS propres valeurs.
// =====================================================================

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Comme les identifiants choisis par les participants ne sont pas des
// emails, on les convertit en une fausse adresse interne pour Firebase
// Authentication, qui exige un format email.
function usernameToEmail(username) {
  return username.trim().toLowerCase().replace(/\s+/g, "") + "@pronowc2026.local";
}
