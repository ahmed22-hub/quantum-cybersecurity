/**
 * Data: Quiz interactif pour l'évaluation des connaissances
 */
export const QUIZ_DATA = [
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
    hint: "Pensez aux algorithmes basés sur la factorisation et le logarithme discret face à l'algorithme de Shor.",
    explanation: "L'algorithme de Shor (théorisé en 1994 par Peter Shor) prouve qu'un ordinateur quantique idéal résoudrait la factorisation entière et le logarithme discret en temps polynomial, rendant obsolètes RSA et les courbes elliptiques."
  },
  {
    id: 2,
    question: "Que signifie précisément l'acronyme PQC en cybersécurité ?",
    options: [
      "Private Quantum Cloud",
      "Post-Quantum Cryptography (Cryptographie Post-Quantique)",
      "Protocol for Quantum Certification",
      "Parallel Quantum Computing"
    ],
    correctIndex: 1,
    hint: "Il s'agit d'algorithmes mathématiques classiques conçus pour résister aux attaques quantiques.",
    explanation: "La PQC (Post-Quantum Cryptography) désigne des algorithmes de chiffrement et de signature s'exécutant sur des ordinateurs classiques actuels, mais dont les fondements mathématiques résistent aux attaques d'ordinateurs classiques et quantiques."
  },
  {
    id: 3,
    question: "Quelle est la définition exacte de la menace « Harvest Now, Decrypt Later » (HNDL) ?",
    options: [
      "Attaquer les centres de calcul pendant les heures de forte consommation énergétique",
      "Intercepter et stocker des données chiffrées aujourd'hui pour les déchiffrer plus tard quand la technologie le permettra",
      "Détruire physiquement les clés de chiffrement avant le transfert",
      "Infecter les ordinateurs quantiques avec des chevaux de Troie"
    ],
    correctIndex: 1,
    hint: "Cette stratégie repose sur l'archivage passif de communications interceptées.",
    explanation: "Des attaquants (notamment étatiques) stockent massivement des communications chiffrées sensibles aujourd'hui, avec l'objectif de les déchiffrer rétroactivement dans 10 ou 15 ans lorsqu'un calculateur quantique adéquat sera disponible."
  },
  {
    id: 4,
    question: "Quelle est la mission clé du Spécialiste de la cybersécurité quantique au sein d'une organisation ?",
    options: [
      "Concevoir et fabriquer physiquement des puces supraconductrices",
      "Conduire l'audit cryptographique, modéliser les risques et orchestrer la transition vers des algorithmes post-quantiques",
      "Éteindre tous les serveurs informatiques dès qu'un calculateur quantique est annoncé",
      "Créer des clés USB quantiques vendues en magasin"
    ],
    correctIndex: 1,
    hint: "C'est un métier d'analyse, d'architecture de sécurité et d'anticipation stratégique.",
    explanation: "Le spécialiste cartographie l'exposition cryptographique, déploie des modes hybrides, assure l'agilité des systèmes et forme les équipes techniques pour assurer une continuité de protection sans interruption de service."
  },
  {
    id: 5,
    question: "Quelle famille mathématique constitue le socle des principaux standards post-quantiques retenus par le NIST (comme ML-KEM / Kyber) ?",
    options: [
      "La factorisation de nombres premiers géants",
      "La cryptographie sur réseaux euclidiens (lattice-based cryptography)",
      "Le simple chiffrement polyalphabétique",
      "La géométrie fractale en deux dimensions"
    ],
    correctIndex: 1,
    hint: "Ces problèmes consistent à trouver le point d'un réseau régulier le plus proche d'un point arbitraire dans un espace à 500+ dimensions.",
    explanation: "La cryptographie sur réseaux euclidiens (problèmes LWE et SIS) offre d'excellentes performances et une sécurité démontrée contre les algorithmes quantiques connus, ce qui lui a valu d'être sélectionnée pour ML-KEM et ML-DSA."
  }
];

export const QUIZ_RANKS = {
  beginner: {
    min: 0,
    max: 2,
    title: "Explorateur Quantique",
    badge: "INITIATION / DÉCOUVERTE",
    color: "#FFB020",
    description: "Vous débutez votre parcours dans la sécurité du futur. Vous avez saisi l'importance du sujet, mais plusieurs subtilités méritent approfondissement. Explorez la section 'La Menace' et 'C'est quoi un ordinateur quantique' !"
  },
  intermediate: {
    min: 3,
    max: 4,
    title: "Cyber Analyste",
    badge: "OPÉRATIONNEL / TRANSITION",
    color: "#00D9FF",
    description: "Félicitations ! Vous possédez une vision claire des enjeux de la cryptographie post-quantique et de la menace 'Harvest Now'. Vous comprenez le besoin urgent d'agilité cryptographique."
  },
  expert: {
    min: 5,
    max: 5,
    title: "Quantum Security Specialist",
    badge: "EXPERT STRATÈGE DE DEMAIN",
    color: "#00FF9C",
    description: "Score sans faute ! Vous maîtrisez les principes fondamentaux, les mécanismes de défense mathématique (PQC) et la posture prospective du métier. Prêt à piloter la transition d'une grande organisation !"
  }
};

if (typeof window !== 'undefined') {
  window.QUIZ_DATA = QUIZ_DATA;
  window.QUIZ_RANKS = QUIZ_RANKS;
}
