/**
 * Quiz interactif simple (5 questions)
 */

import { QUIZ_QUESTIONS, evaluateQuiz } from '../src/quiz-logic.ts';

export function initQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  let currentIndex = 0;
  const userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  let isAnswered = false;

  const qNumEl = document.getElementById('quiz-q-num');
  const qTextEl = document.getElementById('quiz-question-text');
  const qOptionsContainer = document.getElementById('quiz-options-list');
  const qFeedbackBox = document.getElementById('quiz-feedback-box');
  const qNextBtn = document.getElementById('quiz-next-btn');

  const questionView = document.getElementById('quiz-question-view');
  const resultView = document.getElementById('quiz-result-view');
  const scoreDisplay = document.getElementById('quiz-score-display');
  const badgeTitle = document.getElementById('quiz-badge-title');
  const badgeDesc = document.getElementById('quiz-badge-desc');
  const restartBtn = document.getElementById('quiz-restart-btn');

  function renderQuestion() {
    isAnswered = false;
    const q = QUIZ_QUESTIONS[currentIndex];

    if (qNumEl) qNumEl.textContent = String(currentIndex + 1);
    if (qTextEl) qTextEl.textContent = q.question;
    if (qFeedbackBox) qFeedbackBox.style.display = 'none';

    if (qNextBtn) {
      qNextBtn.style.display = 'none';
      qNextBtn.textContent = currentIndex === QUIZ_QUESTIONS.length - 1 ? 'Voir mon score' : 'Question suivante →';
    }

    if (qOptionsContainer) {
      qOptionsContainer.innerHTML = '';
      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `
          <strong style="color:var(--accent-cyan); font-family:var(--font-mono); width:24px;">${String.fromCharCode(65 + optIdx)}.</strong>
          <span>${optText}</span>
        `;

        btn.addEventListener('click', () => handleSelect(optIdx));
        qOptionsContainer.appendChild(btn);
      });
    }
  }

  function handleSelect(selectedIdx) {
    if (isAnswered) return;
    isAnswered = true;
    userAnswers[currentIndex] = selectedIdx;

    const q = QUIZ_QUESTIONS[currentIndex];
    const isCorrect = selectedIdx === q.correctIndex;
    const buttons = qOptionsContainer.querySelectorAll('.quiz-opt-btn');

    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correctIndex) {
        b.classList.add('correct');
      } else if (idx === selectedIdx) {
        b.classList.add('incorrect');
      }
    });

    if (qFeedbackBox) {
      qFeedbackBox.style.display = 'block';
      qFeedbackBox.style.background = isCorrect ? 'rgba(0, 255, 156, 0.1)' : 'rgba(255, 51, 102, 0.1)';
      qFeedbackBox.style.border = `1px solid ${isCorrect ? 'var(--accent-green)' : 'var(--accent-danger)'}`;
      qFeedbackBox.innerHTML = `
        <strong style="color:${isCorrect ? 'var(--accent-green)' : 'var(--accent-danger)'}; display:block; margin-bottom:0.35rem;">
          ${isCorrect ? '✓ Bonne réponse !' : '✗ Réponse incorrecte.'}
        </strong>
        ${q.explanation}
      `;
    }

    if (qNextBtn) {
      qNextBtn.style.display = 'inline-flex';
    }
  }

  function showResults() {
    if (questionView) questionView.style.display = 'none';
    if (resultView) resultView.style.display = 'block';

    const evalResult = evaluateQuiz(userAnswers);

    if (scoreDisplay) scoreDisplay.textContent = `${evalResult.score} / ${evalResult.total}`;
    if (badgeTitle) {
      badgeTitle.textContent = evalResult.title;
      badgeTitle.style.color = evalResult.statusColor;
    }
    if (badgeDesc) badgeDesc.textContent = evalResult.description;
  }

  if (qNextBtn) {
    qNextBtn.addEventListener('click', () => {
      if (currentIndex < QUIZ_QUESTIONS.length - 1) {
        currentIndex++;
        renderQuestion();
      } else {
        showResults();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentIndex = 0;
      userAnswers.fill(null);
      if (resultView) resultView.style.display = 'none';
      if (questionView) questionView.style.display = 'block';
      renderQuestion();
    });
  }

  renderQuestion();
}

if (typeof window !== 'undefined') {
  window.initQuiz = initQuiz;
}
