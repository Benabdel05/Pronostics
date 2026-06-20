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

// Vérification explicite : si la configuration n'a pas été remplacée,
// on affiche un message clair plutôt que de laisser une erreur
// silencieuse bloquer toute l'application.
if (firebaseConfig.apiKey === "VOTRE_API_KEY") {
  document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".auth-card");
    if (card) {
      card.innerHTML = `
        <div style="padding:20px; text-align:center;">
          <h3 style="color:#8B2635; margin-bottom:12px;">Configuration Firebase manquante</h3>
          <p style="font-size:0.9rem; line-height:1.5;">
            Le fichier <code>firebase-config.js</code> contient encore les valeurs
            d'exemple. Remplacez-les par les identifiants de votre propre projet
            Firebase (voir le fichier README.md, section 2) pour activer
            l'inscription et la connexion.
          </p>
        </div>
      `;
    }
  });
  throw new Error("Configuration Firebase non personnalisée — voir README.md");
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Comme les identifiants choisis par les participants ne sont pas des
// emails, on les convertit en une fausse adresse interne pour Firebase
// Authentication, qui exige un format email.
function usernameToEmail(username) {
  return username.trim().toLowerCase().replace(/\s+/g, "") + "@pronowc2026.local";
}
