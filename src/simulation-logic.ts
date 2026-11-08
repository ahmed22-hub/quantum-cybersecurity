export interface CryptoComponent {
  id: string;
  name: string;
  category: string;
  currentCrypto: string;
  pqcTarget: string;
  riskLevel: 'CRITIQUE' | 'ELEVE' | 'MODERE' | 'FAIBLE';
  riskScore: number; // 0 to 100
  threatDescription: string;
  status: 'vulnerable' | 'hybrid' | 'quantum-safe';
  migrationProgress: number; // 0 to 100
}

export function createDefaultComponents(): Record<string, CryptoComponent> {
  return {
    client_data: {
      id: 'client_data',
      name: 'Données Clients & Comptes',
      category: 'Stockage & Base de données',
      currentCrypto: 'RSA-2048 + AES-256',
      pqcTarget: 'ML-KEM-768 (Kyber) + AES-256-GCM',
      riskLevel: 'CRITIQUE',
      riskScore: 92,
      threatDescription: 'Échange de clés RSA vulnérable à l\'algorithme de Shor. Données exposées à la stratégie "Harvest Now, Decrypt Later".',
      status: 'vulnerable',
      migrationProgress: 0,
    },
    transactions: {
      id: 'transactions',
      name: 'Flux Transactions Financières',
      category: 'Transactions SEPA & SWIFT',
      currentCrypto: 'ECDSA P-256',
      pqcTarget: 'ML-DSA-65 (Dilithium-3)',
      riskLevel: 'CRITIQUE',
      riskScore: 88,
      threatDescription: 'Signatures numériques vulnérables à la résolution du logarithme discret sur courbes elliptiques par un futur processeur quantique.',
      status: 'vulnerable',
      migrationProgress: 0,
    },
    auth_portal: {
      id: 'auth_portal',
      name: 'Portail Authentification & TLS',
      category: 'Accès Web & API Gateway',
      currentCrypto: 'ECDH X25519 + RSA-3072',
      pqcTarget: 'Hybride X25519 / ML-KEM-768',
      riskLevel: 'ELEVE',
      riskScore: 80,
      threatDescription: 'Négociation de session TLS interceptable aujourd\'hui pour écoute rétroactive si déchiffrée dans le futur.',
      status: 'vulnerable',
      migrationProgress: 0,
    },
    confidential_comms: {
      id: 'confidential_comms',
      name: 'Télécommunications Inter-Agences',
      category: 'VPN IPsec & Réseau Privé',
      currentCrypto: 'Diffie-Hellman 2048 bits',
      pqcTarget: 'SLH-DSA (SPHINCS+) + Kyber VPN',
      riskLevel: 'ELEVE',
      riskScore: 75,
      threatDescription: 'Tunnels VPN reposant sur le logarithme discret classique exposés à l\'écoute passive long terme.',
      status: 'vulnerable',
      migrationProgress: 0,
    },
  };
}

export function calculateGlobalReadiness(components: Record<string, CryptoComponent>): {
  readinessPercentage: number;
  averageRiskScore: number;
  threatLevel: string;
  isFullyProtected: boolean;
} {
  const list = Object.values(components);
  if (list.length === 0) {
    return {
      readinessPercentage: 0,
      averageRiskScore: 0,
      threatLevel: 'INCONNU',
      isFullyProtected: false,
    };
  }

  const totalProgress = list.reduce((acc, c) => acc + c.migrationProgress, 0);
  const readinessPercentage = Math.round(totalProgress / list.length);

  const totalRisk = list.reduce((acc, c) => {
    if (c.status === 'quantum-safe') return acc + 10;
    if (c.status === 'hybrid') return acc + 35;
    return acc + c.riskScore;
  }, 0);
  const averageRiskScore = Math.round(totalRisk / list.length);

  let threatLevel = 'CRITIQUE';
  if (readinessPercentage >= 100) threatLevel = 'RÉSILIENCE QUANTIQUE';
  else if (readinessPercentage >= 75) threatLevel = 'FAIBLE';
  else if (readinessPercentage >= 50) threatLevel = 'MODÉRÉ';
  else if (readinessPercentage >= 25) threatLevel = 'ÉMERGENT';

  return {
    readinessPercentage,
    averageRiskScore,
    threatLevel,
    isFullyProtected: readinessPercentage === 100,
  };
}

export function migrateComponentStep(
  component: CryptoComponent,
  targetPhase: 'hybrid' | 'quantum-safe'
): CryptoComponent {
  if (targetPhase === 'hybrid') {
    return {
      ...component,
      status: 'hybrid',
      migrationProgress: 50,
      riskLevel: 'MODERE',
    };
  }
  return {
    ...component,
    status: 'quantum-safe',
    migrationProgress: 100,
    riskLevel: 'FAIBLE',
  };
}

export function simulateAttack(
  component: CryptoComponent
): {
  success: boolean;
  message: string;
  algorithmExploited?: string;
  defenseMechanism?: string;
} {
  if (component.status === 'vulnerable') {
    return {
      success: true,
      message: `Attaque quantique réussie contre ${component.name}. L'algorithme de Shor a cassé la clé ${component.currentCrypto}.`,
      algorithmExploited: "Algorithme de Shor (Factorisation / Logarithme discret)",
    };
  }

  if (component.status === 'hybrid') {
    return {
      success: false,
      message: `Attaque bloquée sur ${component.name} grâce à la couche post-quantique du chiffrement hybride.`,
      defenseMechanism: 'Couche hybride PQC opérationnelle',
    };
  }

  return {
    success: false,
    message: `Attaque déjouée intégralement. Les réseaux euclidiens (Lattice-based) de ${component.pqcTarget} résistent aux attaques quantiques.`,
    defenseMechanism: 'Protection Post-Quantique Active (NIST FIPS Standard)',
  };
}
