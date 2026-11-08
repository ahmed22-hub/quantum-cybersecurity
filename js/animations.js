/**
 * Animations & Visual Effects
 */

export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

export function animateCounter(element, start, end, duration = 1200, suffix = '') {
  if (!element) return;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeProgress);
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = end + suffix;
    }
  }
  
  requestAnimationFrame(update);
}

export function initHeroQuantumCanvas(canvasId = 'hero-quantum-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = canvas.width = canvas.parentElement.clientWidth || 450;
  let height = canvas.height = canvas.parentElement.clientHeight || 450;

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth || 450;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    }
  });

  const particles = [];
  const particleCount = 42;
  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: 40 + Math.random() * (width * 0.38),
      speed: 0.005 + Math.random() * 0.012,
      size: 1.5 + Math.random() * 2.5,
      color: Math.random() > 0.5 ? '#00D9FF' : '#8B5CF6',
      opacity: 0.2 + Math.random() * 0.7
    });
  }

  let rotation = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    // Glowing Core
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 90);
    grad.addColorStop(0, 'rgba(0, 217, 255, 0.45)');
    grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.2)');
    grad.addColorStop(1, 'rgba(5, 7, 13, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, 95, 0, Math.PI * 2);
    ctx.fill();

    // Central core solid
    ctx.fillStyle = '#00D9FF';
    ctx.shadowColor = '#00D9FF';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Orbits
    rotation += 0.008;

    // Orbit 1
    ctx.strokeStyle = 'rgba(0, 217, 255, 0.25)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 130, 60, rotation, 0, Math.PI * 2);
    ctx.stroke();

    // Orbit 2
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.25)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 150, 75, -rotation * 0.7, 0, Math.PI * 2);
    ctx.stroke();

    // Orbit 3 (outer shield ring)
    ctx.strokeStyle = 'rgba(0, 255, 156, 0.18)';
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, 175, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Particles
    particles.forEach(p => {
      p.angle += p.speed;
      const x = cx + Math.cos(p.angle) * p.radius;
      const y = cy + Math.sin(p.angle) * (p.radius * 0.75);

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Connect to core if close
      const dist = Math.hypot(x - cx, y - cy);
      if (dist < 110) {
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = 0.15;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    ctx.globalAlpha = 1.0;
    requestAnimationFrame(render);
  }

  render();
}

if (typeof window !== 'undefined') {
  window.initScrollReveal = initScrollReveal;
  window.animateCounter = animateCounter;
  window.initHeroQuantumCanvas = initHeroQuantumCanvas;
}
