/**
 * Data: Questions Fréquemment Posées (FAQ) & Rigueur Scientifique
 */
export const FAQ_DATA = [
  {
    id: "faq-01",
    question: "Un ordinateur quantique peut-il casser toutes les protections informatiques aujourd’hui ?",
    category: "Réalité vs Fiction",
    answer: "Non, absolument pas. Aujourd'hui, les prototypes d'ordinateurs quantiques (souvent appelés NISQ : Noisy Intermediate-Scale Quantum) ne disposent que de quelques dizaines à centaines de qubits physiques bruités. Pour casser un chiffrement RSA-2048, il faudrait un calculateur quantique tolérant aux pannes doté de plusieurs milliers de qubits logiques parfaits (ce qui exigerait potentiellement des millions de qubits physiques avec correction d'erreur). Aucun ordinateur actuel n'en est capable."
  },
  {
    id: "faq-02",
    question: "Qu’est-ce que la cryptographie post-quantique (PQC) ?",
    category: "Technologie",
    answer: "La cryptographie post-quantique regroupe des algorithmes mathématiques (basés notamment sur les réseaux euclidiens, les fonctions de hachage ou les codes correcteurs d'erreurs) exécutables sur des ordinateurs et serveurs conventionnels actuels, mais dont les équations sont conçues pour ne pas pouvoir être résolues efficacement par un ordinateur classique ni par un futur ordinateur quantique."
  },
  {
    id: "faq-03",
    question: "Quelle différence entre « quantum computing » et « quantum cryptography » (ex: QKD) ?",
    category: "Nuance Technique",
    answer: "Le 'Quantum Computing' est l'utilisation des lois de la mécanique quantique pour effectuer des calculs complexes. La 'Quantum Cryptography' (comme la QKD - Quantum Key Distribution) utilise des photons physiques individuels pour échanger des clés via de la fibre optique spécialisée. À l'inverse, la 'Cryptographie Post-Quantique' (PQC) est 100% logicielle et mathématique : elle ne requiert aucun matériel quantique pour fonctionner."
  },
  {
    id: "faq-04",
    question: "Est-ce un vrai métier reconnu aujourd'hui ?",
    category: "Carrière",
    answer: "C'est un métier prospectif et en pleine émergence. Aujourd'hui, cette fonction est assurée par des experts en cryptographie, des consultants spécialisés, des ingénieurs en cyber-résilience et des chercheurs au sein d'agences étatiques (ANSSI, CISA), de banques d'investissement ou d'éditeurs de sécurité. D'ici quelques années, avec la généralisation des réglementations PQC, ce rôle deviendra un profil d'ingénierie à part entière au sein des grandes directions de la sécurité (DSI / RSSI)."
  },
  {
    id: "faq-05",
    question: "Faut-il être un génie en mathématiques pour exercer ce métier ?",
    category: "Formation",
    answer: "Une bonne affinité avec les mathématiques (algèbre linéaire, arithmétique modulaire, probabilités) est indispensable pour comprendre les mécanismes de sécurité et auditer les implémentations. Cependant, le rôle requiert également de solides compétences en ingénierie informatique, architecture réseau, gestion des risques et communication stratégique. C'est avant tout un profil hybride entre science et sécurité appliquée."
  },
  {
    id: "faq-06",
    question: "Pourquoi commencer la transition dès maintenant si la menace n'est pas immédiate ?",
    category: "Stratégie",
    answer: "Pour deux raisons fondamentales : 1) La menace 'Harvest Now, Decrypt Later' : les flux de données chiffrés aujourd'hui peuvent être enregistrés par des adversaires pour être décryptés dans 10 ou 15 ans. 2) Le temps de migration : remplacer tous les certificats, bibliothèques, équipements HSM et protocoles d'une multinationale ou d'un État prend entre 5 et 10 ans. Attendre l'avènement d'un ordinateur quantique opérationnel équivaudrait à arriver avec 10 ans de retard."
  },
  {
    id: "faq-07",
    question: "Où peut travailler un spécialiste de la cybersécurité quantique ?",
    category: "Débouchés",
    answer: "Dans tous les secteurs gérant des données à haute sensibilité temporelle : le secteur bancaire et financier, les ministères de la Défense et de l'Intérieur, les opérateurs de télécommunications, les fournisseurs d'infrastructures Cloud (Google, AWS, Microsoft), l'industrie aérospatiale, la santé (données génomiques) et les cabinets de conseil en cybersécurité."
  }
];

if (typeof window !== 'undefined') {
  window.FAQ_DATA = FAQ_DATA;
}
