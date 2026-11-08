/**
 * Data: Compétences du Spécialiste de la cybersécurité quantique
 */
export const SKILLS_DATA = {
  cybersecurity: {
    title: "Cybersécurité Avancée",
    icon: "shield",
    color: "#00D9FF",
    description: "Fondations solides en sécurité des systèmes, des réseaux et gestion des incidents opérationnels.",
    skills: [
      { name: "Sécurité des réseaux & Protocoles TLS / IPsec", level: 90, note: "Compréhension profonde des tunnels et échanges de session" },
      { name: "Gestion des risques & Analyse de vulnérabilités", level: 85, note: "Cartographie d'impact selon ISO 27005 et EBIOS RM" },
      { name: "Architecture Zero Trust & PKI (Public Key Infrastructure)", level: 88, note: "Gestion du cycle de vie des certificats numériques" },
      { name: "Sécurité du Cloud & Systèmes Distribués", level: 80, note: "Implémentation d'HSM (Hardware Security Modules) sécurisés" }
    ]
  },
  quantum: {
    title: "Informatique Quantique",
    icon: "atom",
    color: "#8B5CF6",
    description: "Compréhension des fondements physiques et algorithmiques des architectures de calcul quantique.",
    skills: [
      { name: "Principes physiques : Qubits, Superposition & Intrication", level: 85, note: "Maîtrise de la notation de Dirac et des états quantiques purs/mixtes" },
      { name: "Algorithme de Shor & Algorithme de Grover", level: 90, note: "Compréhension exacte des accélérations polynomiale et quadratique" },
      { name: "Correction d'erreurs quantiques & Qubits logiques", level: 75, note: "Évaluation du temps nécessaire avant un processeur tolérant aux pannes (FTQC)" },
      { name: "Plateformes quantiques matérielles (Supraconducteurs, Ions, Photons)", level: 70, note: "Veille critique sur les promesses industrielles vs réalité" }
    ]
  },
  cryptography: {
    title: "Cryptographie & PQC",
    icon: "key",
    color: "#00FF9C",
    description: "Maîtrise de la cryptographie moderne et des familles mathématiques post-quantiques.",
    skills: [
      { name: "Cryptographie asymétrique classique (RSA, Diffie-Hellman, ECC)", level: 95, note: "Compréhension fine des points de vulnérabilité face aux oracles quantiques" },
      { name: "Cryptographie sur réseaux euclidiens (Lattice-based)", level: 90, note: "Mécanismes ML-KEM (Kyber) et ML-DSA (Dilithium)" },
      { name: "Cryptographie à base de hachage & Codes correcteurs", level: 82, note: "Signatures à états et sans état (SLH-DSA / SPHINCS+)" },
      { name: "Architectures hybrides & Agilité cryptographique", level: 92, note: "Conception de doubles encapsulations (Classique + Post-Quantique)" }
    ]
  },
  softskills: {
    title: "Soft Skills & Stratégie",
    icon: "users",
    color: "#FFB020",
    description: "Capacités d'analyse critique, de vulgarisation et de pilotage du changement stratégique.",
    skills: [
      { name: "Analyse critique & Rigueur scientifique", level: 95, note: "Capacité à distinguer les faits prouvés du battage médiatique ('quantum hype')" },
      { name: "Vulgarisation & Communication auprès des Comex", level: 90, note: "Traduire les menaces cryptographiques en enjeux financiers et opérationnels" },
      { name: "Veille technologique & Curiosité intellectuelle", level: 92, note: "Lecture active d'articles de recherche et benchmarks" },
      { name: "Gestion de projet & Conduite du changement", level: 85, note: "Planification pluriannuelle de migration sans rupture de service" }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.SKILLS_DATA = SKILLS_DATA;
}
