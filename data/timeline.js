/**
 * Data: Frises chronologiques et scénarios prospectifs
 */

// Timeline prospective (Scénario d'évolution globale)
export const PROSPECTIVE_TIMELINE = [
  {
    year: "2026",
    phase: "ÉVEIL & PREMIERS AUDITS",
    status: "RÉALITÉ ACTUELLE",
    statusType: "current",
    title: "Normalisation NIST & Menace 'Harvest Now'",
    summary: "Publication des premiers standards définitifs NIST FIPS 203, 204 et 205. Les organisations visionnaires lancent leurs inventaires de cryptographie (CBOM).",
    details: [
      "Les attaquants étatiques et groupes avancés interceptent déjà des flux de données confidentielles pérennes (dossiers médicaux, propriété intellectuelle, communications diplomatiques).",
      "Déploiement des premiers modes hybrides TLS (X25519 + ML-KEM) dans les navigateurs grand public (Chrome, Firefox) et chez les fournisseurs de CDN.",
      "Le métier de spécialiste s'incarne principalement chez les consultants en cybersécurité et dans les laboratoires de recherche."
    ],
    riskLevel: "Émergent (Harvest Now actif)"
  },
  {
    year: "2030",
    phase: "GÉNÉRALISATION DES MODES HYBRIDES",
    status: "PROJECTION COURT TERME",
    statusType: "near_future",
    title: "Obligations Réglementaires & Agilité Cryptographique",
    summary: "Les régulateurs financiers et agences nationales (ANSSI, BSI, CISA) imposent un calendrier strict de migration vers des solutions hybrides et post-quantiques.",
    details: [
      "Les architectures d'entreprise isolent la couche cryptographique pour permettre le remplacement d'algorithmes sans refonte applicative.",
      "Les calculateurs quantiques de laboratoire progressent sur les codes correcteurs d'erreurs (qubits logiques sans bruit), sans encore menacer RSA-2048.",
      "Pénurie de profils spécialisés capables de combiner cryptographie avancée et sécurité des infrastructures cloud."
    ],
    riskLevel: "Modéré (Pression réglementaire forte)"
  },
  {
    year: "2035",
    phase: "INFRASTRUCTURES POST-QUANTIQUES DÉDIÉES",
    status: "SCÉNARIO PROSPECTIF",
    statusType: "future",
    title: "Retrait Progressif de RSA et des Courbes Elliptiques",
    summary: "Les certificats et protocoles hérités basés sur RSA-2048 ou ECC sont progressivement dépréciés et révoqués sur tous les réseaux critiques.",
    details: [
      "Généralisation des cartes à puce, HSM et terminaux mobiles équipés d'accélérateurs matériels pour les opérations sur réseaux euclidiens.",
      "Premières démonstrations publiques de factorisation de nombres de taille intermédiaire par des prototypes quantiques à quelques milliers de qubits logiques.",
      "Le spécialiste de la cybersécurité quantique devient un poste permanent indispensable dans toute entreprise de plus de 500 employés."
    ],
    riskLevel: "Élevé pour les retardataires non migrés"
  },
  {
    year: "HORIZON FUTUR",
    phase: "RÉSILIENCE QUANTIQUE TOTALE",
    status: "HYPOTHÈSE LONG TERME",
    statusType: "long_term",
    title: "Ère des Calculateurs Quantiques Tolérants aux Pannes (FTQC)",
    summary: "Si et quand un calculateur quantique doté de millions de qubits physiques émerge, seules les organisations ayant migré conservent leur intégrité.",
    details: [
      "Les données interceptées des décennies plus tôt sans protection PQC deviennent déchiffrables par les détenteurs de calculateurs quantiques avancés.",
      "La cryptographie post-quantique (algorithmes mathématiques classiques résistants) combinée à la distribution quantique de clés (QKD) protège le cœur du Web mondial.",
      "Nouvelle génération de cryptanalystes focalisée sur la solidité mathématique à long terme des réseaux euclidiens."
    ],
    riskLevel: "Rupture totale pour la crypto classique"
  }
];

// Une journée type dans le métier
export const DAILY_ROUTINE = [
  {
    time: "08:30",
    title: "Veille scientifique & technologique quantique",
    category: "Veille Stratégique",
    color: "#00D9FF",
    description: "Revue critique des preprints sur arXiv (quant-ph, cs.CR), analyse des annonces industrielles sur les qubits logiques et vérification des avis de l'ANSSI / NIST.",
    outcome: "Note de synthèse matinale transmise à l'équipe SSI pour filtrer le vrai du faux."
  },
  {
    time: "10:00",
    title: "Audit cryptographique automatisé d'un sous-système",
    category: "Audit Technique",
    color: "#8B5CF6",
    description: "Scan des référentiels de code et des flux TLS d'une filiale bancaire. Détection d'un composant utilisant encore un échange Diffie-Hellman statique obsolète.",
    outcome: "Fiche d'anomalie créée avec recommandation d'intégration immédiate d'un wrapper hybride ML-KEM."
  },
  {
    time: "11:30",
    title: "Point de coordination avec les architectes de sécurité",
    category: "Architecture & Intégration",
    color: "#00FF9C",
    description: "Discussion sur l'impact de la taille accrue des clés publiques post-quantiques (ML-KEM-768 = 1184 octets vs RSA-2048 = 256 octets) sur la bande passante des microservices.",
    outcome: "Validation d'une politique d'optimisation de cache des certificats PQC."
  },
  {
    time: "14:00",
    title: "Modélisation des risques temporels (Théorème de Mosca)",
    category: "Gestion des Risques",
    color: "#FFB020",
    description: "Évaluation de la durée de vie des données de brevets et secrets de fabrication (X = 25 ans) comparée au délai prévisionnel de migration PQC (Y = 4 ans).",
    outcome: "Alerte formelle au Comex : la menace 'Harvest Now' exige d'entamer la transition sans attendre."
  },
  {
    time: "15:30",
    title: "Supervision d'un banc d'essai de migration PQC en sandbox",
    category: "Expérimentation & Lab",
    color: "#00D9FF",
    description: "Validation de tests d'interopérabilité entre serveurs de passerelle hybrides et terminaux clients hétérogènes. Mesure des temps de handshake TLS.",
    outcome: "Benchmarking concluant : impact inférieur à 3ms sur la latence de connexion."
  },
  {
    time: "17:00",
    title: "Rapport de conformité et support aux équipes de dév",
    category: "Gouvernance & Pédagogie",
    color: "#8B5CF6",
    description: "Rédaction du tableau de bord d'agilité cryptographique et réponse aux questions de développeurs intégrant la bibliothèque post-quantique dans leurs API.",
    outcome: "Diffusion du guide pratique d'implémentation PQC interne v2.4."
  }
];

// Secteurs de recrutement
export const SECTORS_DATA = [
  {
    id: "finance",
    icon: "bank",
    title: "Banques & Assurances",
    whyMatters: "Les transactions financières, les données bancaires et les contrats d'assurance doivent rester confidentiels pendant plusieurs décennies. La menace d'interception rétroactive est critique.",
    targetRoles: "Responsable Cryptographie Bancaire, Architecte Sécurité Post-Quantique",
    timelinePressure: "Immédiate (Réglementations DORA et banques centrales)"
  },
  {
    id: "defense",
    icon: "shield-alert",
    title: "Défense & Gouvernements",
    whyMatters: "Les secrets militaires, les plans d'armement et les communications diplomatiques possèdent une valeur stratégique de plus de 30 à 50 ans. Cibles prioritaires du 'Harvest Now'.",
    targetRoles: "Ingénieur Cryptographe Défense, Expert Résilience Souveraine",
    timelinePressure: "Maximale (Programmes étatiques secrets de transition déjà lancés)"
  },
  {
    id: "tech_cloud",
    icon: "cloud",
    title: "Fournisseurs Cloud & Télécoms",
    whyMatters: "Ils hébergent et transportent le trafic mondial. S'ils ne sécurisent pas leurs câbles, leurs routeurs et leurs centres de données avec du chiffrement résistant, tout l'écosystème vacille.",
    targetRoles: "PQC Cloud Architect, Network Security Specialist",
    timelinePressure: "Forte (Course concurrentielle entre géants du numérique)"
  },
  {
    id: "health",
    icon: "heart-pulse",
    title: "Santé & Recherche Médicale",
    whyMatters: "Le secret médical et les données génomiques sont immuables : un ADN déchiffré dans 20 ans concerne toujours l'individu et sa descendance.",
    targetRoles: "Délégué à la Protection Cryptographique des Données de Santé",
    timelinePressure: "Élevée (Obligations éthiques et RGPD pérenne)"
  },
  {
    id: "energy",
    icon: "zap",
    title: "Énergie & Infrastructures Critiques",
    whyMatters: "Les réseaux électriques intelligents (Smart Grids), les centrales nucléaires et les transports reposent sur des contrôleurs industriels déployés pour 20 à 30 ans.",
    targetRoles: "Expert Cybersécurité OT / SCADA Post-Quantique",
    timelinePressure: "Critique (Matériel difficilement patchable sur le terrain)"
  },
  {
    id: "research",
    icon: "microscope",
    title: "Centres de Recherche & Universités",
    whyMatters: "Conception de nouveaux algorithmes mathématiques, cryptanalyse des schémas candidats et vérification formelle des preuves de sécurité.",
    targetRoles: "Chercheur en Cryptographie Post-Quantique, Doctorant R&D",
    timelinePressure: "Continue (Fondation scientifique de toutes les futures normes)"
  }
];

if (typeof window !== 'undefined') {
  window.PROSPECTIVE_TIMELINE = PROSPECTIVE_TIMELINE;
  window.DAILY_ROUTINE = DAILY_ROUTINE;
  window.SECTORS_DATA = SECTORS_DATA;
}
