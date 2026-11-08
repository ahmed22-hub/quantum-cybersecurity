import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDefaultComponents,
  calculateGlobalReadiness,
  migrateComponentStep,
  simulateAttack,
} from '../src/simulation-logic.ts';
import {
  QUIZ_QUESTIONS,
  evaluateQuiz,
} from '../src/quiz-logic.ts';

test('simulation initializes with all vulnerable systems and calculates accurate baseline', () => {
  const components = createDefaultComponents();
  assert.equal(Object.keys(components).length, 4);
  assert.equal(components.client_data.status, 'vulnerable');

  const baseline = calculateGlobalReadiness(components);
  assert.equal(baseline.readinessPercentage, 0);
  assert.equal(baseline.isFullyProtected, false);
  assert.equal(baseline.threatLevel, 'CRITIQUE');
});

test('migration transitions component to hybrid and quantum-safe properly', () => {
  const components = createDefaultComponents();
  const c1 = migrateComponentStep(components.client_data, 'hybrid');
  assert.equal(c1.status, 'hybrid');
  assert.equal(c1.migrationProgress, 50);

  const c2 = migrateComponentStep(c1, 'quantum-safe');
  assert.equal(c2.status, 'quantum-safe');
  assert.equal(c2.migrationProgress, 100);

  components.client_data = c2;
  components.transactions = migrateComponentStep(components.transactions, 'quantum-safe');
  components.auth_portal = migrateComponentStep(components.auth_portal, 'quantum-safe');
  components.confidential_comms = migrateComponentStep(components.confidential_comms, 'quantum-safe');

  const finalReadiness = calculateGlobalReadiness(components);
  assert.equal(finalReadiness.readinessPercentage, 100);
  assert.equal(finalReadiness.isFullyProtected, true);
  assert.equal(finalReadiness.threatLevel, 'RÉSILIENCE QUANTIQUE');
});

test('attack simulation exploits vulnerable systems and is neutralized on PQC systems', () => {
  const components = createDefaultComponents();
  const vulnResult = simulateAttack(components.client_data);
  assert.equal(vulnResult.success, true);
  assert.match(vulnResult.message, /Attaque quantique réussie/);

  const hybrid = migrateComponentStep(components.client_data, 'hybrid');
  const hybridResult = simulateAttack(hybrid);
  assert.equal(hybridResult.success, false);
  assert.match(hybridResult.message, /bloquée/);

  const safe = migrateComponentStep(components.client_data, 'quantum-safe');
  const safeResult = simulateAttack(safe);
  assert.equal(safeResult.success, false);
  assert.match(safeResult.message, /déjouée intégralement/);
});

test('quiz evaluation returns accurate badges and scores', () => {
  assert.equal(QUIZ_QUESTIONS.length, 5);

  const badScore = evaluateQuiz([1, 0, 0, 0, 0]);
  assert.equal(badScore.score, 0);
  assert.equal(badScore.title, 'Explorateur Quantique');

  const midScore = evaluateQuiz([0, 1, 1, 0, 0]);
  assert.equal(midScore.score, 3);
  assert.equal(midScore.title, 'Cyber Analyste');

  const perfectScore = evaluateQuiz([0, 1, 1, 1, 1]);
  assert.equal(perfectScore.score, 5);
  assert.equal(perfectScore.title, 'Quantum Security Specialist');
});
