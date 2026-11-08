/**
 * FAQ Accordion simple et accessible
 */

import { FAQ_DATA } from '../data/faq.js';

export function initFAQ() {
  const container = document.getElementById('faq-list-container');
  if (!container || !FAQ_DATA) return;

  container.innerHTML = '';
  FAQ_DATA.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <button type="button" class="faq-btn" aria-expanded="false" id="faq-btn-${index}">
        <span>${item.question}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-ans-${index}">
        <p>${item.answer}</p>
      </div>
    `;

    const btn = el.querySelector('.faq-btn');
    btn.addEventListener('click', () => {
      const isOpen = el.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    container.appendChild(el);
  });
}

if (typeof window !== 'undefined') {
  window.initFAQ = initFAQ;
}
