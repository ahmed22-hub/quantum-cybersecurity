/**
 * Simulation simple du Quantum Security Lab (Nova Bank)
 */

export function initSimulation() {
  const scoreVal = document.getElementById('sim-score-val');
  const progressBar = document.getElementById('sim-progress-bar');
  const messageBox = document.getElementById('sim-message-box');

  const btnAudit = document.getElementById('btn-sim-audit');
  const btnMigrate = document.getElementById('btn-sim-migrate');
  const btnTest = document.getElementById('btn-sim-test');
  const btnReset = document.getElementById('btn-sim-reset');

  const nodes = [
    { el: document.getElementById('sim-node-1'), status: document.getElementById('sim-status-1'), name: 'Base Clients' },
    { el: document.getElementById('sim-node-2'), status: document.getElementById('sim-status-2'), name: 'Paiements SEPA' },
    { el: document.getElementById('sim-node-3'), status: document.getElementById('sim-status-3'), name: 'Portail Web TLS' },
    { el: document.getElementById('sim-node-4'), status: document.getElementById('sim-status-4'), name: 'VPN Inter-Agences' },
  ];

  let isAudited = false;
  let isMigrated = false;

  function updateStatus(audited, migrated) {
    isAudited = audited;
    isMigrated = migrated;

    nodes.forEach(n => {
      if (!n.el || !n.status) return;
      if (migrated) {
        n.el.classList.add('safe');
        n.status.className = 'node-status badge badge-green';
        n.status.textContent = 'Sécurisé PQC';
      } else {
        n.el.classList.remove('safe');
        n.status.className = 'node-status badge badge-danger';
        n.status.textContent = audited ? 'Vulnérable Shor' : 'À auditer';
      }
    });

    if (scoreVal) scoreVal.textContent = migrated ? '100%' : '0%';
    if (progressBar) {
      progressBar.style.width = migrated ? '100%' : '0%';
      progressBar.style.backgroundColor = migrated ? 'var(--accent-green)' : 'var(--accent-cyan)';
    }
  }

  if (btnAudit) {
    btnAudit.addEventListener('click', () => {
      updateStatus(true, false);
      if (messageBox) {
        messageBox.innerHTML = `
          <strong style="color:var(--accent-warning);">Audit terminé :</strong> 4 composants utilisent des algorithmes asymétriques classiques (RSA / ECDSA). Ils sont exposés à la stratégie <em>Harvest Now, Decrypt Later</em>. Cliquez sur <strong>« 2. Lancer la migration PQC »</strong>.
        `;
      }
    });
  }

  if (btnMigrate) {
    btnMigrate.addEventListener('click', () => {
      updateStatus(true, true);
      if (messageBox) {
        messageBox.innerHTML = `
          <strong style="color:var(--accent-green);">Migration PQC réussie :</strong> Déploiement des algorithmes sur réseaux euclidiens (NIST FIPS 203/204). Résilience quantique : <strong>100%</strong>. Cliquez sur <strong>« 3. Tester la résistance »</strong>.
        `;
      }
    });
  }

  if (btnTest) {
    btnTest.addEventListener('click', () => {
      if (!messageBox) return;
      if (isMigrated) {
        messageBox.innerHTML = `
          <strong style="color:var(--accent-green);">Attaque quantique simulée bloquée :</strong> Les algorithmes post-quantiques (ML-KEM / ML-DSA) résistent à l'algorithme de Shor. Aucune donnée compromise.
        `;
      } else {
        messageBox.innerHTML = `
          <strong style="color:var(--accent-danger);">Alerte rupture cryptographique :</strong> Les clés RSA et ECDSA ont été cassées par la simulation d'attaque. Lancez la migration PQC pour sécuriser Nova Bank !
        `;
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      updateStatus(false, false);
      if (messageBox) {
        messageBox.innerHTML = `
          Infrastructure réinitialisée. Cliquez sur <strong>« 1. Auditer les vulnérabilités »</strong> pour relancer le test.
        `;
      }
    });
  }
}

export const initSimulationLab = initSimulation;

if (typeof window !== 'undefined') {
  window.initSimulation = initSimulation;
  window.initSimulationLab = initSimulation;
}
