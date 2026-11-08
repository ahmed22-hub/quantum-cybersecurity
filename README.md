# QUANTUM SHIELD — Spécialiste de la cybersécurité quantique

> **« Protéger les données d’aujourd’hui contre les ordinateurs de demain. »**  
> *Projet scolaire / universitaire — « Les métiers de demain »*

---

## 🛡️ Présentation du Projet

**QUANTUM SHIELD** est un site web éducatif, prospectif et hautement immersif dédié au métier d'avenir : **Spécialiste de la cybersécurité quantique**.

Conçu comme un véritable **Centre d'Opérations de Cybersécurité Quantique**, le site explore les défis que pose l'informatique quantique à la cryptographie moderne, met en lumière la menace stratégique *« Harvest Now, Decrypt Later »*, et propose des simulations interactives pour comprendre la transition vers la **cryptographie post-quantique (PQC)**.

### 🌟 Principes Clés
1. **Rigueur scientifique absolue** : distinction claire entre la technologie quantique actuelle (prototypes bruités NISQ) et les scénarios prospectifs futurs (FTQC).
2. **Vulgarisation de haut niveau** : explications visuelles et interactives des concepts de bits vs qubits, superposition, intrication, oracles quantiques (Shor, Grover) et réseaux euclidiens (NIST FIPS 203 / 204).
3. **Expérience interactive (Quantum Security Lab)** : simulation de l'infrastructure de la banque fictive *NOVA BANK* avec audit, détection de vulnérabilités et migration PQC en temps réel.
4. **Quiz d'auto-évaluation** : 5 questions pédagogiques avec notation et obtention d'un insigne professionnel.

---

## 📁 Architecture des Fichiers

```text
quantum-cybersecurity/
│
├── index.html                  # Hub principal : Centre d'Opérations Quantum Shield
│
├── pages/                      # 10 pages dédiées approfondies
│   ├── metier.html             # Présentation détaillée du métier et de sa raison d'être
│   ├── menace.html             # Analyse de la menace : Shor, Grover & "Harvest Now, Decrypt Later"
│   ├── quantum.html            # Vulgarisation : C'est quoi un ordinateur quantique ?
│   ├── pqc.html                # La solution PQC : Normes NIST FIPS 203, 204 & 205
│   ├── missions.html           # Galerie interactive des 6 grandes missions
│   ├── competences.html        # Constellation de compétences & jauges
│   ├── formation.html          # Parcours d'études du lycée au doctorat
│   ├── simulation.html         # Bac à sable complet : Quantum Security Lab (Nova Bank)
│   ├── quiz.html               # Quiz interactif certifiant à 5 questions
│   └── faq.html                # FAQ interactive & Glossaire technique
│
├── css/                        # Système de design modulaire
│   ├── style.css               # Variables CSS, typographies, boutons, navbar, footer
│   ├── components.css          # Cartes, dashboard, lab topology, badges, accordéon
│   ├── animations.css          # Keyframes, rotations orbitales, scroll-reveal
│   └── responsive.css          # Breakpoints (1920px, 1440px, 1200px, 1024px, 768px, 576px, 390px)
│
├── js/                         # Logique JavaScript modulaire (ES Modules)
│   ├── main.js                 # Coordinateur global et rendu dynamique
│   ├── navigation.js           # Navigation sticky, menu mobile et défilement fluide
│   ├── animations.js           # Rendu Canvas 2D du cœur quantique et observateurs de défilement
│   ├── quantum.js              # Simulateur interactif Bit vs Qubit et effondrement de mesure
│   ├── simulation.js           # Moteur du simulateur Nova Bank (audit, migration, cyberattaque)
│   ├── quiz.js                 # Logique du quiz, retour d'explication et calcul du score
│   ├── timeline.js             # Frises interactives et déroulé d'une journée type
│   └── faq.js                  # Accordéon accessible et filtrage des questions
│
├── data/                       # Données structurées et contenus éditables
│   ├── missions.js             # Les 6 missions, tâches quotidiennes, outils et impacts
│   ├── skills.js               # Constellation des compétences et pourcentages
│   ├── timeline.js             # Données de la frise prospective et secteurs d'activité
│   ├── quiz.js                 # Questions du quiz, indices et descriptions de badges
│   └── faq.js                  # Réponses détaillées de la FAQ
│
├── assets/                     # Ressources graphiques et vectorielles
│   └── svg/
│       └── quantum-shield.svg  # Logo SVG officiel haute résolution
│
└── tests/                      # Tests unitaires automatisés
    └── engine.test.ts          # Tests de pure logique (simulation + calculs de score)
```

---

## 🚀 Comment lancer le projet localement

Ce projet fonctionne avec **Vite** ou avec n'importe quel serveur web statique standard (Python `http.server`, Live Server VSCode, Nginx, Caddy).

### Option 1 : Avec le serveur de développement Node / Vite (recommandé)
```bash
# 1. Installation des dépendances (si pas encore fait)
npm install

# 2. Lancement du serveur de développement local (sur le port 3000)
npm run dev

# 3. Ouvrez votre navigateur sur :
http://localhost:3000
```

### Option 2 : Exécuter la suite de tests unitaires
Pour vérifier la logique pure du simulateur et du quiz :
```bash
npx --yes tsx --test tests/engine.test.ts
```

### Option 3 : Avec un simple serveur Python
```bash
python3 -m http.server 3000
```

---

## 🔬 Fonctionnement des Modules Clés

### 1. Le Quantum Security Lab (Nova Bank)
- **Objectif** : L'utilisateur incarne le spécialiste en charge de la résilience de la banque fictive *NOVA BANK*.
- **Composants auditables** : Données clients (stockage), Transactions financières (SWIFT/SEPA), Portail d'authentification (Web TLS 1.3), Télécoms inter-agences (VPN IPsec).
- **Actions disponibles** :
  1. *Analyser le système* : Cartographie CBOM révélant les cryptosystèmes en place (RSA-2048, ECDSA P-256) et leur vulnérabilité face à l'algorithme de Shor.
  2. *Déployer Mode Hybride (50%)* : Combine un algorithme classique et un algorithme post-quantique (ML-KEM-768).
  3. *Migration Complète PQC (100%)* : Intègre les standards NIST FIPS 203/204 sur réseaux euclidiens.
  4. *Tester Attaque Quantique* : Simule l'exécution de Shor. Si le système est vulnérable, la brèche est confirmée. S'il est migré, l'attaque est neutralisée par le bouclier mathématique.
  5. *Terminal en direct* : Affiche les journaux d'audit horodatés.

### 2. Le Simulateur Bit vs Qubit
- **Mode BIT** : Affiche un état déterministe exclusif (0 ou 1) commutable d'un clic.
- **Mode QUBIT** : Affiche un vecteur sur la sphère de Bloch en rotation continue avec l'équation mathématique `|ψ⟩ = α|0⟩ + β|1⟩` et le calcul dynamique des probabilités.
- **Bouton Mesure** : Simule l'effondrement probabiliste de la fonction d'onde en gelant instantanément le qubit sur `|0⟩` ou `|1⟩`.

### 3. Le Quiz « Êtes-vous prêt pour l’ère quantique ? »
- 5 questions progressives couvrant : la cryptographie asymétrique, l'acronyme PQC, la menace *Harvest Now Decrypt Later*, les missions du spécialiste et les réseaux euclidiens.
- Rétroaction immédiate à chaque choix avec explications scientifiques.
- Attribution de 3 badges en fin de parcours :
  - `0 - 2 pts` : **Explorateur Quantique**
  - `3 - 4 pts` : **Cyber Analyste**
  - `5 pts` : **Quantum Security Specialist**

---

## 🎨 Guide de Personnalisation

### 1. Modifier les Couleurs et la Charte Graphique
Toutes les couleurs sont centralisées dans `css/style.css` via les variables CSS :
```css
:root {
  --bg-primary: #05070D;      /* Fond principal ultra sombre */
  --bg-secondary: #0B1020;    /* Fond secondaire */
  --accent-cyan: #00D9FF;     /* Cyber blue principal */
  --accent-violet: #8B5CF6;   /* Violet quantique */
  --accent-green: #00FF9C;    /* Vert sécurité et validation */
  --accent-warning: #FFB020;  /* Orange alerte et menace */
  --accent-danger: #FF3366;   /* Rouge critique */
}
```

### 2. Modifier ou Ajouter du Contenu Textuel
Les données textuelles sont découplées du code HTML dans le dossier `data/` :
- Pour modifier les 6 missions : éditez `data/missions.js`.
- Pour ajuster les compétences et pourcentages : éditez `data/skills.js`.
- Pour modifier la frise prospective ou les secteurs : éditez `data/timeline.js`.
- Pour ajouter ou changer des questions du quiz : éditez `data/quiz.js`.
- Pour enrichir la FAQ : éditez `data/faq.js`.

### 3. Ajouter une Nouvelle Section ou Page
1. Créez votre nouvelle page HTML dans le dossier `pages/` (ex: `pages/ma-section.html`).
2. Liez les feuilles de style partagées (`/css/style.css`, `/css/components.css`, `/css/animations.css`, `/css/responsive.css`).
3. Ajoutez le lien dans la barre de navigation de `index.html` et des autres pages.
4. Si vous utilisez Vite en build de production, ajoutez simplement l'entrée dans `vite.config.ts` sous `build.rollupOptions.input`.

---

## 📚 Références Officielles & Sources Scientifiques
- **NIST Post-Quantum Cryptography** : Publication officielle des normes FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) et FIPS 205 (SLH-DSA) — Août 2024.
- **ANSSI (France)** : Avis scientifique et recommandations relatives à la transition vers la cryptographie post-quantique.
- **Michele Mosca (University of Waterloo)** : *Cybersecurity in an Era with Quantum Computers: Will We Be Ready?* (Théorème de Mosca).
- **Peter W. Shor (1994)** : *Algorithms for quantum computation: discrete logarithms and factoring*.
- **Lov K. Grover (1996)** : *A fast mechanical quantum database search*.

---

*Projet réalisé dans le cadre de la découverte et de l'anticipation des métiers de demain.*
