# Pronostics Mondial 2026 — Guide de mise en route

## 1. Ce que contient le projet

| Fichier | Rôle |
|---|---|
| `index.html` | Structure des écrans (connexion, matchs, classement) |
| `style.css` | Identité visuelle (palette stade nocturne / panneau d'affichage) |
| `firebase-config.js` | **À personnaliser** — connexion à votre projet Firebase |
| `firestore.rules` | Règles de sécurité serveur (verrouillage réel des pronostics) |
| `matches-data.js` | Les 104 matchs du Mondial 2026 (source : openfootball/worldcup.json) |
| `app.js` | Logique : authentification, pronostics, calcul des points, classement |
| `manifest.json` + icônes | Permet l'installation en PWA sur écran d'accueil Android |

## 2. Créer votre projet Firebase (gratuit)

1. Allez sur https://console.firebase.google.com et créez un projet (plan **Spark**, gratuit).
2. Menu **Authentication** → onglet *Sign-in method* → activez **E-mail/Password**.
3. Menu **Firestore Database** → *Créer une base de données* → mode **production**.
4. Allez dans **Project settings** (icône engrenage) → section *Vos applications* → cliquez sur l'icône Web (`</>`) → donnez un nom → copiez l'objet `firebaseConfig` généré.
5. Collez cet objet dans le fichier `firebase-config.js`, à la place des valeurs `"VOTRE_..."`.
6. Toujours dans la console Firebase, allez dans **Firestore Database → Règles**, et collez le contenu du fichier `firestore.rules` fourni, puis cliquez sur *Publier*.

## 3. Déployer sur GitHub Pages (comme vos autres projets)

```bash
git init
git add .
git commit -m "Application pronostics Mondial 2026"
git branch -M main
git remote add origin https://github.com/VOTRE_COMPTE/wc2026-pronos.git
git push -u origin main
```

Puis dans les paramètres du dépôt GitHub : **Settings → Pages → Source: main / racine**.
Votre lien sera du type `https://votrecompte.github.io/wc2026-pronos/`.

## 4. Installer l'app sur Android (PWA)

Une fois le lien GitHub Pages actif, ouvrez-le dans Chrome sur Android, puis menu **⋮ → Ajouter à l'écran d'accueil**. L'icône apparaîtra comme une application normale.

## 5. Mettre à jour les résultats réels des matchs

Le fichier `matches-data.js` contient un champ `finalScore` par match. Pour la mise à jour :

- **Option simple (manuelle)** : modifiez directement le champ `finalScore` du match concerné dans `matches-data.js`, par exemple `"finalScore": [2, 1]`, puis re-déployez (`git push`).
- **Option semi-automatique** : relancez le script Python de conversion fourni lors de cette session, qui retélécharge le fichier `openfootball/worldcup.json` à jour et régénère `matches-data.js` automatiquement.

⚠️ Important : tant que `finalScore` est `null` pour un match, celui-ci reste ouvert aux pronostics dans l'application et n'est pas compté dans le classement.

## 6. Sécurité — points à comprendre

- Le **verrouillage des pronostics** est appliqué à deux niveaux : dans l'interface (le champ devient grisé après validation) et surtout dans les **règles Firestore**, qui interdisent techniquement toute modification ou suppression d'un pronostic une fois créé — même par un utilisateur techniquement averti.
- L'**unicité des identifiants** est vérifiée avant la création du compte, et également garantie par la structure de la base (l'identifiant est utilisé comme identifiant de document, ce qui empêche les doublons).
- Les mots de passe ne sont jamais stockés par votre application : Firebase Authentication les gère de façon chiffrée, conformément aux standards d'usage.

## 7. Limite connue du barème actuel

Avec le barème simple validé (1 point bon vainqueur / 3 points score exact), un pronostic de match nul mal évalué (ex. : prédire 1-1 alors que le résultat est 2-2) rapporte 1 point comme n'importe quelle prédiction de nul correcte dans le sens, ce qui est cohérent avec votre choix. Si vous souhaitez ultérieurement affiner (ex. : différencier les nuls), il faudra ajuster la fonction `computePoints()` dans `app.js`.
