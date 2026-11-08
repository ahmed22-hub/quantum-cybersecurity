/**
 * Interactive Timelines & Prospective Scenarios
 */

import { PROSPECTIVE_TIMELINE, DAILY_ROUTINE } from '../data/timeline.js';

export function initTimelines() {
  // Render Daily Routine accordion
  const routineContainer = document.getElementById('daily-routine-container');
  if (routineContainer && DAILY_ROUTINE) {
    routineContainer.innerHTML = '';
    DAILY_ROUTINE.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card reveal-on-scroll';
      card.style.cursor = 'pointer';
      card.style.marginBottom = '1rem';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:1rem;">
            <span style="font-family:var(--font-mono); font-size:1.1rem; font-weight:700; color:${item.color};">${item.time}</span>
            <span class="badge" style="background:rgba(255,255,255,0.06); color:${item.color}; border:1px solid ${item.color}44;">${item.category}</span>
          </div>
          <span class="expand-icon" style="color:var(--text-muted); font-size:1.2rem;">+</span>
        </div>
        <h3 style="margin:0.75rem 0 0.5rem 0; font-size:1.15rem;">${item.title}</h3>
        <p style="font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">${item.description}</p>
        <div class="routine-expanded" style="display:none; margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--accent-cyan); margin-bottom:0.25rem;">RÉSULTAT CONCRET / LIVRABLE :</div>
          <div style="font-size:0.9rem; color:var(--text-primary);">${item.outcome}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        const expanded = card.querySelector('.routine-expanded');
        const icon = card.querySelector('.expand-icon');
        const isOpen = expanded.style.display === 'block';
        expanded.style.display = isOpen ? 'none' : 'block';
        icon.textContent = isOpen ? '+' : '−';
        card.style.borderColor = isOpen ? 'var(--border-subtle)' : item.color;
      });

      routineContainer.appendChild(card);
    });
  }

  // Prospective Timeline rendering
  const timelineContainer = document.getElementById('prospective-timeline-container');
  if (timelineContainer && PROSPECTIVE_TIMELINE) {
    timelineContainer.innerHTML = '';
    PROSPECTIVE_TIMELINE.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'timeline-item reveal-on-scroll';
      el.innerHTML = `
        <div class="timeline-marker">${item.year}</div>
        <div class="timeline-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
            <span class="badge ${item.statusType === 'current' ? 'badge-cyan' : (item.statusType === 'near_future' ? 'badge-warning' : 'badge-violet')}">${item.status}</span>
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${item.phase}</span>
          </div>
          <h3 style="font-size:1.25rem; font-weight:700; margin-bottom:0.75rem;">${item.title}</h3>
          <p style="font-size:0.95rem; margin-bottom:1rem; color:var(--text-secondary);">${item.summary}</p>
          <ul style="padding-left:1.25rem; font-size:0.88rem; color:var(--text-secondary); line-height:1.7;">
            ${item.details.map(d => `<li style="margin-bottom:0.35rem;">${d}</li>`).join('')}
          </ul>
        </div>
      `;
      timelineContainer.appendChild(el);
    });
  }
}

if (typeof window !== 'undefined') {
  window.initTimelines = initTimelines;
}
