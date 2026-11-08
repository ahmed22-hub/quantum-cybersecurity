/**
 * QUANTUM SHIELD — Main Entry Point (Simple & Propre)
 */

import { initNavigation } from './navigation.js';
import { initSimulation } from './simulation.js';
import { initQuiz } from './quiz.js';
import { initFAQ } from './faq.js';
import { MISSIONS_DATA } from '../data/missions.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation
  initNavigation();

  // 2. Rendu des 6 missions
  const missionsContainer = document.getElementById('missions-container');
  if (missionsContainer && MISSIONS_DATA) {
    missionsContainer.innerHTML = '';
    MISSIONS_DATA.forEach(m => {
      const card = document.createElement('div');
      card.className = 'mission-simple-card';
      card.innerHTML = `
        <div class="mission-simple-num">MISSION ${m.id}</div>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
        <div class="mission-simple-footer">
          <strong style="color:var(--accent-cyan);">Impact :</strong> ${m.impact}
        </div>
      `;
      missionsContainer.appendChild(card);
    });
  }

  // 3. Vulgarisation interactive simple : Bit vs Qubit
  const btnToggleBit = document.getElementById('btn-toggle-bit');
  const bitVal = document.getElementById('bit-simple-val');
  let currentBit = 0;

  if (btnToggleBit && bitVal) {
    btnToggleBit.addEventListener('click', () => {
      currentBit = currentBit === 0 ? 1 : 0;
      bitVal.textContent = String(currentBit);
      bitVal.style.color = currentBit === 1 ? 'var(--accent-green)' : 'var(--accent-cyan)';
    });
  }

  const btnMeasureQubit = document.getElementById('btn-measure-qubit');
  const qubitVal = document.getElementById('qubit-simple-val');
  const qubitResult = document.getElementById('qubit-simple-result');

  if (btnMeasureQubit && qubitVal) {
    btnMeasureQubit.addEventListener('click', () => {
      // Mesure quantique : effondrement probabiliste sur 0 ou 1
      const measured = Math.random() < 0.5 ? 0 : 1;
      qubitVal.textContent = String(measured);
      qubitVal.style.color = measured === 1 ? 'var(--accent-green)' : 'var(--accent-cyan)';
      if (qubitResult) {
        qubitResult.textContent = `Effondrement de la fonction d'onde : le qubit a été mesuré dans l'état ${measured}.`;
      }
      setTimeout(() => {
        qubitVal.textContent = '|ψ⟩';
        qubitVal.style.color = 'var(--accent-violet)';
      }, 3500);
    });
  }

  // 4. Initialisation des modules
  initSimulation();
  initQuiz();
  initFAQ();

  console.log('[QUANTUM SHIELD] Site initialisé avec succès. Mode épuré.');
});
