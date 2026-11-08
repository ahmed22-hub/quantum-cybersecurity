/**
 * Quantum Concepts & Interactive Simulator (Bit vs Qubit)
 */

export function initQuantumSection() {
  const btnBit = document.getElementById('btn-select-bit');
  const btnQubit = document.getElementById('btn-select-qubit');
  const panelBit = document.getElementById('stage-bit');
  const panelQubit = document.getElementById('stage-qubit');
  const descBit = document.getElementById('desc-bit');
  const descQubit = document.getElementById('desc-qubit');

  const bitToggleBtn = document.getElementById('bit-toggle-btn');
  const bitValueDisplay = document.getElementById('bit-val');
  const qubitMeasureBtn = document.getElementById('qubit-measure-btn');
  const qubitResetBtn = document.getElementById('qubit-reset-btn');
  const qubitVector = document.getElementById('qubit-vector-needle');
  const qubitMathDisplay = document.getElementById('qubit-math-text');
  const qubitProb0 = document.getElementById('qubit-prob-0');
  const qubitProb1 = document.getElementById('qubit-prob-1');
  const qubitStatusAlert = document.getElementById('qubit-status-alert');

  // Bit State
  let currentBit = 0;
  if (bitToggleBtn && bitValueDisplay) {
    bitToggleBtn.addEventListener('click', () => {
      currentBit = currentBit === 0 ? 1 : 0;
      bitValueDisplay.textContent = String(currentBit);
      bitValueDisplay.style.color = currentBit === 1 ? '#00FF9C' : '#00D9FF';
    });
  }

  // Qubit State Animation & Measurement
  let isSuperposition = true;
  let animAngle = 0;
  let animId = null;

  function runQubitSimulation() {
    if (!isSuperposition) return;
    animAngle = (animAngle + 2) % 360;
    const rad = (animAngle * Math.PI) / 180;
    
    // Probability distribution calculation
    const alphaSq = Math.round((Math.cos(rad / 2) ** 2) * 100);
    const betaSq = 100 - alphaSq;

    if (qubitProb0 && qubitProb1) {
      qubitProb0.textContent = `${alphaSq}%`;
      qubitProb1.textContent = `${betaSq}%`;
    }

    if (qubitVector) {
      qubitVector.style.transform = `rotate(${animAngle}deg)`;
    }

    if (qubitMathDisplay) {
      qubitMathDisplay.innerHTML = `|ψ⟩ = ${(Math.cos(rad / 2)).toFixed(2)}|0⟩ + ${(Math.sin(rad / 2)).toFixed(2)}|1⟩`;
    }

    animId = requestAnimationFrame(runQubitSimulation);
  }

  if (qubitMeasureBtn) {
    qubitMeasureBtn.addEventListener('click', () => {
      if (!isSuperposition) return;
      isSuperposition = false;
      if (animId) cancelAnimationFrame(animId);

      // Probabilistic quantum measurement collapse
      const rad = (animAngle * Math.PI) / 180;
      const prob0 = Math.cos(rad / 2) ** 2;
      const collapsedState = Math.random() < prob0 ? 0 : 1;

      if (qubitVector) {
        qubitVector.style.transform = collapsedState === 0 ? 'rotate(0deg)' : 'rotate(180deg)';
        qubitVector.style.transition = 'transform 0.2s cubic-bezier(0.1, 1, 0.1, 1)';
      }

      if (qubitProb0 && qubitProb1) {
        qubitProb0.textContent = collapsedState === 0 ? '100%' : '0%';
        qubitProb1.textContent = collapsedState === 1 ? '100%' : '0%';
      }

      if (qubitMathDisplay) {
        qubitMathDisplay.textContent = `|ψ⟩ = |${collapsedState}⟩ (État effondré)`;
      }

      if (qubitStatusAlert) {
        qubitStatusAlert.textContent = `Mesure quantique effectuée : le système s'est effondré sur l'état |${collapsedState}⟩.`;
        qubitStatusAlert.style.color = '#00FF9C';
      }

      if (qubitMeasureBtn) qubitMeasureBtn.style.display = 'none';
      if (qubitResetBtn) qubitResetBtn.style.display = 'inline-flex';
    });
  }

  if (qubitResetBtn) {
    qubitResetBtn.addEventListener('click', () => {
      isSuperposition = true;
      if (qubitVector) qubitVector.style.transition = 'none';
      if (qubitStatusAlert) {
        qubitStatusAlert.textContent = "Superposition active : le qubit explore simultanément un continuum d'états linéaires.";
        qubitStatusAlert.style.color = 'var(--accent-violet)';
      }
      if (qubitMeasureBtn) qubitMeasureBtn.style.display = 'inline-flex';
      if (qubitResetBtn) qubitResetBtn.style.display = 'none';
      runQubitSimulation();
    });
  }

  // Switching between BIT and QUBIT panels
  if (btnBit && btnQubit && panelBit && panelQubit) {
    btnBit.addEventListener('click', () => {
      btnBit.classList.add('active');
      btnQubit.classList.remove('active');
      panelBit.style.display = 'flex';
      panelQubit.style.display = 'none';
      if (descBit) descBit.style.display = 'block';
      if (descQubit) descQubit.style.display = 'none';
      if (animId) cancelAnimationFrame(animId);
    });

    btnQubit.addEventListener('click', () => {
      btnQubit.classList.add('active');
      btnBit.classList.remove('active');
      panelBit.style.display = 'none';
      panelQubit.style.display = 'flex';
      if (descBit) descBit.style.display = 'none';
      if (descQubit) descQubit.style.display = 'block';
      if (isSuperposition) runQubitSimulation();
    });
  }

  // Start initial qubit loop if active
  if (panelQubit && panelQubit.style.display !== 'none') {
    runQubitSimulation();
  }
}

if (typeof window !== 'undefined') {
  window.initQuantumSection = initQuantumSection;
}
