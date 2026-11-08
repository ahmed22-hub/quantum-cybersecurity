/**
 * Data: 6 Missions fondamentales du Spécialiste de la cybersécurité quantique
 */
export const MISSIONS_DATA = [
  {
    id: "01",
    code: "AUDIT-CRYPTO",
    title: "Analyser les systèmes cryptographiques",
    subtitle: "Cartographie et inventaire des algorithmes en production",
    description: "Identifier avec précision où et comment la cryptographie est déployée au sein de l'organisation : protocoles TLS, certificats PKI, signatures de code, chiffrements de bases de données et échanges inter-systèmes.",
    tasks: [
      "Inventaire exhaustif des bibliothèques cryptographiques (OpenSSL, BouncyCastle, etc.)",
      "Détection des dépendances asymétriques à clés fixes ou obsolètes",
      "Évaluation de l'agilité cryptographique de l'infrastructure logicielle"
    ],
    tools: ["Crypto-Discovery Scanners", "Audit CBOM (Cryptographic Bill of Materials)", "TLS Protocol Analyzers"],
    impact: "Offre une visibilité intégrale sur les actifs numériques sensibles et leurs couches de protection."
  },
  {
    id: "02",
    code: "VULN-ASSESS",
    title: "Identifier les vulnérabilités quantiques",
    subtitle: "Détection des points de rupture face à Shor et Grover",
    description: "Déterminer quels mécanismes d'authentification, d'échange de clés et de chiffrement seraient vulnérables face à la montée en puissance de processeurs quantiques hypothétiques capables d'exécuter des algorithmes de factorisation.",
    tasks: [
      "Repérage systématique des clés RSA (1024, 2048, 4096) et courbes elliptiques (ECDSA, ECDH)",
      "Analyse de la durée de vie requise des données (Secret Shelf Life)",
      "Modélisation de l'exposition à la collecte passive par des tiers malveillants"
    ],
    tools: ["Quantum Threat Matrix", "Algorithmic Risk Profilers", "CVSS Quantum-Extension Simulators"],
    impact: "Hiérarchise les risques selon la criticité temporelle et la confidentialité des données."
  },
  {
    id: "03",
    code: "MIGRATE-PQC",
    title: "Préparer la migration post-quantique",
    subtitle: "Déploiement des algorithmes normalisés NIST (ML-KEM, ML-DSA)",
    description: "Concevoir et orchestrer la transition progressive de l'architecture vers des algorithmes post-quantiques (PQC) basés sur les réseaux euclidiens et les fonctions de hachage, en privilégiant d'abord des modes hybrides.",
    tasks: [
      "Intégration des standards NIST FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) et FIPS 205 (SLH-DSA)",
      "Mise en œuvre d'architectures hybrides (Classique + PQC) pour garantir la rétrocompatibilité",
      "Tests de charge et d'impact sur la latence et la taille des paquets réseau"
    ],
    tools: ["Open Quantum Safe (liboqs)", "PQC TLS Proxies", "Hardware Security Modules (HSM) Post-Quantiques"],
    impact: "Garantit la pérennité et la conformité des systèmes sans perturber la production opérationnelle."
  },
  {
    id: "04",
    code: "RISK-MODEL",
    title: "Évaluer les risques stratégiques",
    subtitle: "Analyse prospective et impact organisationnel",
    description: "Évaluer l'impact financier, juridique et réputationnel des ruptures technologiques quantiques. Anticiper le théorème de Mosca (temps de migration vs temps de menace).",
    tasks: [
      "Application du théorème de Mosca : X (durée de vie des secrets) + Y (temps de migration) > Z (délai quantique)",
      "Calcul des coûts de transition et allocation des budgets de modernisation",
      "Évaluation des contraintes réglementaires (NIS 2, DORA, recommandations ANSSI / BSI)"
    ],
    tools: ["Matrices de décision stratégique", "Simulateurs d'impact économique", "Frameworks de gouvernance cyber"],
    impact: "Fournit au comité de direction les éléments d'arbitrage pour sécuriser les investissements futurs."
  },
  {
    id: "05",
    code: "TECH-WATCH",
    title: "Surveiller les avancées technologiques",
    subtitle: "Veille scientifique permanente sur le hardware et la théorie",
    description: "Assurer un suivi rigoureux des progrès réels en physique quantique expérimentale (qubits physiques, codes correcteurs d'erreurs, qubits logiques) ainsi que des avancées de la cryptanalyse quantique et classique.",
    tasks: [
      "Suivi des publications de recherche (arXiv, IEEE, NIST, universités)",
      "Surveillance de l'évolution des calculateurs supraconducteurs, ions piégés et photoniques",
      "Analyse des potentielles faiblesses mathématiques découvertes sur les algorithmes PQC candidats"
    ],
    tools: ["Flux de veille académique", "Bases de données de brevets quantiques", "Réseaux d'experts internationaux"],
    impact: "Évite les réactions de panique et fonde les décisions sur des données scientifiques vérifiées."
  },
  {
    id: "06",
    code: "TEAM-ENABLE",
    title: "Accompagner et former les équipes",
    subtitle: "Sensibilisation et montée en compétences techniques",
    description: "Démystifier les concepts quantiques auprès des équipes de développement, des architectes logiciels, des analystes SOC et des comités exécutifs pour diffuser une véritable culture de cyber-résilience.",
    tasks: [
      "Organisation d'ateliers sur l'agilité cryptographique et la manipulation des bibliothèques PQC",
      "Rédaction de guides d'architecture sécurisée et de bonnes pratiques de développement",
      "Vulgarisation scientifique des enjeux auprès des décideurs non-techniques"
    ],
    tools: ["Plateformes de formation interne", "Hackathons cryptographiques", "Simulateurs pédagogiques interactifs"],
    impact: "Transforme l'ensemble des collaborateurs techniques en acteurs conscients et préparés à la transition."
  }
];

if (typeof window !== 'undefined') {
  window.MISSIONS_DATA = MISSIONS_DATA;
}
