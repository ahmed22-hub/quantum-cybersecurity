export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizEvaluation {
  score: number;
  total: number;
  title: string;
  badge: string;
  description: string;
  statusColor: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel élément cryptographique est principalement menacé par de futurs ordinateurs quantiques suffisamment puissants ?",
    options: [
      "La cryptographie asymétrique à clé publique (RSA, ECC, Diffie-Hellman)",
      "La cryptographie symétrique standard (AES-256)",
      "Les fonctions de hachage comme SHA-256 et SHA-3",
      "Les câbles fibre optique sous-marins"
    ],
    correctIndex: 0,
    explanation: "L'algorithme de Shor théorisé en 1994 permettrait à un ordinateur quantique à tolérance de pannes de factoriser de grands nombres entiers et de résoudre le logarithme discret en temps polynomial, brisant ainsi RSA et les courbes elliptiques."
  },
  {
    id: 2,
    question: "Que signifie l'acronyme PQC en cybersécurité ?",
    options: [
      "Private Quantum Cloud",
      "Post-Quantum Cryptography",
      "Protocol for Quantum Certification",
      "Parallel Quantum Computing"
    ],
    correctIndex: 1,
    explanation: "PQC désigne la cryptographie post-quantique : des algorithmes cryptographiques déployés sur des ordinateurs classiques actuels mais conçus mathématiquement pour résister à des attaques d'ordinateurs classiques et quantiques."
  },
  {
    id: 3,
    question: "Quelle est la définition de la cybermenace « Harvest Now, Decrypt Later » ?",
    options: [
      "Attaquer les fermes de serveurs pendant les heures de pointe",
      "Intercepter et stocker des données chiffrées aujourd'hui pour les déchiffrer dans le futur si la puissance quantique le permet",
      "Détruire immédiatement les clés cryptographiques par surtension",
      "Remplacer les algorithmes par des clés obsolètes"
    ],
    correctIndex: 1,
    explanation: "Cette menace prospective implique que des acteurs malveillants collectent déjà des flux de données confidentielles à longue durée de vie (défense, secrets d'état, brevets, dossiers médicaux) dans l'espoir de les casser ultérieurement."
  },
  {
    id: 4,
    question: "Quelle est la mission clé du Spécialiste de la cybersécurité quantique ?",
    options: [
      "Construire physiquement des cryostats à dilution pour les labos",
      "Conduire l'audit cryptographique, évaluer les risques quantiques et orchestrer la transition vers la PQC",
      "Remplacer tous les développeurs par une IA quantique",
      "Empêcher la recherche scientifique sur la physique quantique"
    ],
    correctIndex: 1,
    explanation: "Le spécialiste est un stratège et ingénieur de sécurité : il cartographie les actifs cryptographiques vulnérables, pilote la migration vers les standards NIST PQC, et garantit l'agilité cryptographique de l'organisation."
  },
  {
    id: 5,
    question: "Quelle approche mathématique domine les standards post-quantiques récemment normalisés (ex. ML-KEM et ML-DSA par le NIST) ?",
    options: [
      "La factorisation de nombres premiers gigantesques",
      "La cryptographie sur réseaux euclidiens (lattice-based cryptography)",
      "Le chiffrement par décalage de César",
      "La compression de flux binaire"
    ],
    correctIndex: 1,
    explanation: "La cryptographie sur réseaux euclidiens (comme dans Crystals-Kyber et Crystals-Dilithium) repose sur des problèmes géométriques dans des espaces à plusieurs centaines de dimensions (LWE, SIS), réputés insolubles même pour un ordinateur quantique."
  }
];

export function evaluateQuiz(answers: number[]): QuizEvaluation {
  let score = 0;
  for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
    if (answers[i] === QUIZ_QUESTIONS[i].correctIndex) {
      score++;
    }
  }

  const total = QUIZ_QUESTIONS.length;

  if (score <= 2) {
    return {
      score,
      total,
      title: "Explorateur Quantique",
      badge: "NIVEAU 1 — INITIATION",
      description: "Vous commencez à découvrir les enjeux de la transition quantique. Prenez le temps de relire les sections sur la menace 'Harvest Now' et les algorithmes PQC !",
      statusColor: "#FFB020",
    };
  } else if (score <= 4) {
    return {
      score,
      total,
      title: "Cyber Analyste",
      badge: "NIVEAU 2 — OPÉRATIONNEL",
      description: "Solide maîtrise des principes fondamentaux ! Vous comprenez la différence cruciale entre menace asymétrique et résistance post-quantique.",
      statusColor: "#00D9FF",
    };
  } else {
    return {
      score,
      total,
      title: "Quantum Security Specialist",
      badge: "NIVEAU 3 — EXPERT STRATÈGE",
      description: "Score parfait ! Vous avez toutes les clés pour comprendre et guider une organisation vers la résilience cryptographique post-quantique.",
      statusColor: "#00FF9C",
    };
  }
}
