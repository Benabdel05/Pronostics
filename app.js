// =====================================================================
// APPLICATION PRONOSTICS — COUPE DU MONDE 2026
// =====================================================================
// Barème : 1 point si le vainqueur prédit est correct
//          3 points si le score exact prédit est correct
//          (le score exact inclut donc la bonne issue : les points
//           ne se cumulent pas, le maximum par match est 3 points)
// =====================================================================

let currentUser = null; // { uid, username, displayName }

// ---------------------------------------------------------------------
// NAVIGATION ENTRE ÉCRANS
// ---------------------------------------------------------------------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".subnav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  document.querySelector(`.subnav-btn[data-view="${name}"]`).classList.add("active");

  if (name === "matches") renderMatches();
  if (name === "mybets") renderMyBets();
  if (name === "ranking") renderRanking();
}

document.querySelectorAll(".subnav-btn").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

// ---------------------------------------------------------------------
// ONGLETS CONNEXION / INSCRIPTION
// ---------------------------------------------------------------------
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("form-" + tab.dataset.tab).classList.add("active");
  });
});

// ---------------------------------------------------------------------
// INSCRIPTION
// ---------------------------------------------------------------------
document.getElementById("form-signup").addEventListener("submit", async (e) => {
  e.preventDefault();
  const errorEl = document.getElementById("signup-error");
  errorEl.textContent = "";

  const displayName = document.getElementById("signup-displayname").value.trim();
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value;
  const password2 = document.getElementById("signup-password2").value;

  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
    errorEl.textContent = "Identifiant : 3 à 20 caractères, lettres/chiffres/_ uniquement.";
    return;
  }
  if (password !== password2) {
    errorEl.textContent = "Les deux mots de passe ne correspondent pas.";
    return;
  }
  if (password.length < 6) {
    errorEl.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
    return;
  }

  const fakeEmail = usernameToEmail(username);

  try {
    // Vérification explicite de l'unicité de l'identifiant dans Firestore
    const existing = await db.collection("users").doc(username.toLowerCase()).get();
    if (existing.exists) {
      errorEl.textContent = "Cet identifiant est déjà pris. Choisissez-en un autre.";
      return;
    }

    const cred = await auth.createUserWithEmailAndPassword(fakeEmail, password);

    await db.collection("users").doc(username.toLowerCase()).set({
      uid: cred.user.uid,
      username: username,
      displayName: displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    currentUser = { uid: cred.user.uid, username: username, displayName: displayName };
    enterApp();
  } catch (err) {
    errorEl.textContent = translateFirebaseError(err);
  }
});

// ---------------------------------------------------------------------
// CONNEXION
// ---------------------------------------------------------------------
document.getElementById("form-login").addEventListener("submit", async (e) => {
  e.preventDefault();
  const errorEl = document.getElementById("login-error");
  errorEl.textContent = "";

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const fakeEmail = usernameToEmail(username);

  try {
    await auth.signInWithEmailAndPassword(fakeEmail, password);
    const userDoc = await db.collection("users").doc(username.toLowerCase()).get();
    if (!userDoc.exists) throw new Error("profile-missing");
    const data = userDoc.data();
    currentUser = { uid: data.uid, username: data.username, displayName: data.displayName };
    enterApp();
  } catch (err) {
    errorEl.textContent = translateFirebaseError(err);
  }
});

document.getElementById("btn-logout").addEventListener("click", async () => {
  await auth.signOut();
  currentUser = null;
  showScreen("screen-auth");
});

function translateFirebaseError(err) {
  const code = err.code || "";
  if (code.includes("email-already-in-use")) return "Cet identifiant est déjà utilisé.";
  if (code.includes("wrong-password") || code.includes("invalid-credential")) return "Identifiant ou mot de passe incorrect.";
  if (code.includes("user-not-found")) return "Aucun compte ne correspond à cet identifiant.";
  if (code.includes("weak-password")) return "Mot de passe trop faible (6 caractères minimum).";
  if (code.includes("network")) return "Problème de connexion réseau.";
  return "Une erreur est survenue. Réessayez.";
}

// ---------------------------------------------------------------------
// ENTRÉE DANS L'APPLICATION
// ---------------------------------------------------------------------
function enterApp() {
  document.getElementById("welcome-name").textContent = currentUser.displayName;
  showScreen("screen-main");
  showView("matches");
}

// ---------------------------------------------------------------------
// PRONOSTICS : LECTURE / ÉCRITURE FIRESTORE
// ---------------------------------------------------------------------
// Structure Firestore : collection "bets", doc id = `${uid}_${matchId}`
// { uid, matchId, score1, score2, locked: true, submittedAt }

async function getMyBet(matchId) {
  const doc = await db.collection("bets").doc(`${currentUser.uid}_${matchId}`).get();
  return doc.exists ? doc.data() : null;
}

async function submitBet(matchId, score1, score2) {
  const docId = `${currentUser.uid}_${matchId}`;
  const ref = db.collection("bets").doc(docId);
  const existing = await ref.get();

  // Verrou définitif : un pronostic déjà soumis ne peut plus être modifié.
  if (existing.exists) {
    throw new Error("already-locked");
  }

  await ref.set({
    uid: currentUser.uid,
    username: currentUser.username,
    displayName: currentUser.displayName,
    matchId: matchId,
    score1: score1,
    score2: score2,
    locked: true,
    submittedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// ---------------------------------------------------------------------
// AFFICHAGE : LISTE DES MATCHS À PRONOSTIQUER
// ---------------------------------------------------------------------
async function renderMatches() {
  const container = document.getElementById("matches-list");
  container.innerHTML = "<p class='empty-state'>Chargement des matchs…</p>";

  const upcoming = WC2026_MATCHES.filter(m => !m.finalScore);
  if (upcoming.length === 0) {
    container.innerHTML = "<p class='empty-state'>Tous les matchs ont été joués. Consultez le classement final.</p>";
    return;
  }

  container.innerHTML = "";
  for (const match of upcoming) {
    const myBet = await getMyBet(match.id);
    container.appendChild(buildTicket(match, myBet, false));
  }
}

async function renderMyBets() {
  const container = document.getElementById("mybets-list");
  container.innerHTML = "<p class='empty-state'>Chargement de vos tickets…</p>";

  const snapshot = await db.collection("bets").where("uid", "==", currentUser.uid).get();
  if (snapshot.empty) {
    container.innerHTML = "<p class='empty-state'>Vous n'avez encore soumis aucun pronostic.</p>";
    return;
  }

  container.innerHTML = "";
  snapshot.forEach(doc => {
    const bet = doc.data();
    const match = WC2026_MATCHES.find(m => m.id === bet.matchId);
    if (match) container.appendChild(buildTicket(match, bet, true));
  });
}

function buildTicket(match, myBet, isHistoryView) {
  const ticket = document.createElement("div");
  ticket.className = "match-ticket" + (myBet ? " locked" : "");

  const dateLabel = new Date(match.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  const groupOrRound = match.group || match.round;

  ticket.innerHTML = `
    <div class="ticket-meta">
      <span>${groupOrRound}</span>
      <span>${dateLabel}</span>
    </div>
    <div class="ticket-teams">
      <span class="team-name team-left">${match.team1}</span>
      <div class="score-inputs">
        <input type="number" min="0" max="20" class="score1" value="${myBet ? myBet.score1 : ''}" ${myBet ? "disabled" : ""}>
        <span class="score-sep">:</span>
        <input type="number" min="0" max="20" class="score2" value="${myBet ? myBet.score2 : ''}" ${myBet ? "disabled" : ""}>
      </div>
      <span class="team-name team-right">${match.team2}</span>
    </div>
    <div class="ticket-actions"></div>
  `;

  const actions = ticket.querySelector(".ticket-actions");

  if (!myBet) {
    const btn = document.createElement("button");
    btn.className = "btn-validate";
    btn.textContent = "Valider le pronostic";
    btn.addEventListener("click", async () => {
      const s1 = ticket.querySelector(".score1").value;
      const s2 = ticket.querySelector(".score2").value;
      if (s1 === "" || s2 === "") {
        alert("Merci de renseigner les deux scores avant de valider.");
        return;
      }
      const confirmMsg = `Confirmer le pronostic ${match.team1} ${s1} - ${s2} ${match.team2} ?\n\nCe choix sera définitif et ne pourra plus être modifié.`;
      if (!confirm(confirmMsg)) return;

      btn.disabled = true;
      try {
        await submitBet(match.id, parseInt(s1, 10), parseInt(s2, 10));
        renderMatches();
      } catch (err) {
        if (err.message === "already-locked") {
          alert("Ce pronostic a déjà été validé et ne peut plus être modifié.");
          renderMatches();
        } else {
          alert("Erreur lors de l'enregistrement. Réessayez.");
          btn.disabled = false;
        }
      }
    });
    actions.appendChild(btn);
  } else if (isHistoryView && match.finalScore) {
    // Affichage des points obtenus si le match est terminé
    const pts = computePoints(myBet.score1, myBet.score2, match.finalScore[0], match.finalScore[1]);
    const result = document.createElement("div");
    result.innerHTML = `
      <p class="ticket-result">Résultat réel : ${match.finalScore[0]} - ${match.finalScore[1]}</p>
      <div style="text-align:center;">
        <span class="ticket-points ${pts === 3 ? 'exact' : pts === 1 ? 'win' : 'zero'}">
          ${pts} point${pts > 1 ? "s" : ""}
        </span>
      </div>
    `;
    ticket.appendChild(result);
  }

  return ticket;
}

// ---------------------------------------------------------------------
// CALCUL DES POINTS
// ---------------------------------------------------------------------
// 3 points : score exact correct
// 1 point  : bon vainqueur (ou bon match nul) mais score inexact
// 0 point  : résultat incorrect
function computePoints(predScore1, predScore2, realScore1, realScore2) {
  if (predScore1 === realScore1 && predScore2 === realScore2) return 3;

  const predOutcome = Math.sign(predScore1 - predScore2);
  const realOutcome = Math.sign(realScore1 - realScore2);
  if (predOutcome === realOutcome) return 1;

  return 0;
}

// ---------------------------------------------------------------------
// CLASSEMENT GÉNÉRAL
// ---------------------------------------------------------------------
async function renderRanking() {
  const listEl = document.getElementById("ranking-list");
  listEl.innerHTML = "<p class='empty-state'>Calcul du classement…</p>";

  const snapshot = await db.collection("bets").get();
  const totals = {}; // username -> { displayName, points }

  snapshot.forEach(doc => {
    const bet = doc.data();
    const match = WC2026_MATCHES.find(m => m.id === bet.matchId);
    if (!match || !match.finalScore) return; // match pas encore joué : pas de points

    const pts = computePoints(bet.score1, bet.score2, match.finalScore[0], match.finalScore[1]);
    if (!totals[bet.username]) {
      totals[bet.username] = { displayName: bet.displayName, points: 0 };
    }
    totals[bet.username].points += pts;
  });

  const ranked = Object.entries(totals)
    .map(([username, v]) => ({ username, ...v }))
    .sort((a, b) => b.points - a.points);

  if (ranked.length === 0) {
    listEl.innerHTML = "<p class='empty-state'>Aucun point distribué pour le moment.</p>";
    return;
  }

  listEl.innerHTML = "";
  ranked.forEach((entry, index) => {
    const li = document.createElement("li");
    li.className = "rank-row" + (entry.username === currentUser.username ? " me" : "") + (index === 0 ? " gold" : "");
    li.innerHTML = `
      <span class="rank-pos">${index + 1}</span>
      <span class="rank-name">${entry.displayName}</span>
      <span class="rank-pts">${entry.points} pts</span>
    `;
    listEl.appendChild(li);
  });
}

// ---------------------------------------------------------------------
// PERSISTANCE DE SESSION (rester connecté)
// ---------------------------------------------------------------------
auth.onAuthStateChanged(async (user) => {
  if (user) {
    const snapshot = await db.collection("users").where("uid", "==", user.uid).limit(1).get();
    if (!snapshot.empty) {
      const data = snapshot.docs[0].data();
      currentUser = { uid: data.uid, username: data.username, displayName: data.displayName };
      enterApp();
      return;
    }
  }
  showScreen("screen-auth");
});
