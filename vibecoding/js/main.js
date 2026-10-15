/**
 * ==========================================================================
 * NEXUS // ZERO — CINEMATIC GAMING VAULT
 * Arquitetura de Scripts, Animações GSAP, Lenis & Web Audio API
 * Autor: Gustavo | Disciplina: Front-End (CP5 - Vibecoding)
 * ==========================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     01. DETECÇÃO DE PREFERÊNCIAS & AMBIENTE
     -------------------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  /* --------------------------------------------------------------------------
     02. INTEGRAÇÃO LENIS SMOOTH SCROLL + GSAP SCROLLTRIGGER
     -------------------------------------------------------------------------- */
  let lenisInstance = null;

  function initSmoothScroll() {
    if (prefersReducedMotion || typeof Lenis === 'undefined' || typeof gsap === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Instanciação do Lenis com inércia cinematográfica
    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    // Desliga lagSmoothing para evitar dessincronização visual
    gsap.ticker.lagSmoothing(0);

    // Conexão direta de eventos
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Vincula o loop de renderização do Lenis ao relógio central do GSAP
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    // Atualiza cabeçalho no scroll
    const header = document.querySelector('.hud-header');
    lenisInstance.on('scroll', (e) => {
      if (header) {
        if (e.scroll > 50) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     03. PRELOADER CINEMATOGRÁFICO DE BOOT DE SISTEMA
     -------------------------------------------------------------------------- */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    const percentEl = document.getElementById('preloader-percent');
    const barFill = document.getElementById('preloader-bar-fill');
    const terminalEl = document.getElementById('preloader-terminal');

    if (!preloader) return;

    if (prefersReducedMotion) {
      preloader.style.display = 'none';
      initHeroAnimations();
      return;
    }

    const bootLogs = [
      'INITIALIZING QUANTUM ENCRYPTION...',
      'ALLOCATING VRAM FOR NEURAL TEXTURES...',
      'CONNECTING TO SATELLITE NODE // LATENCY: 12ms',
      'SYNCHRONIZING SAVE VAULT ARCHIVE...',
      'SYSTEM READY. DEPLOYING CITADEL PROTOCOL.'
    ];

    let progress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
      // Avanço dinâmico não-linear
      const increment = Math.floor(Math.random() * 8) + 3;
      progress = Math.min(progress + increment, 100);

      if (percentEl) percentEl.textContent = `${progress}%`;
      if (barFill) barFill.style.width = `${progress}%`;

      // Atualização dos logs do terminal
      const targetLogIndex = Math.floor((progress / 100) * bootLogs.length);
      if (targetLogIndex > logIndex && logIndex < bootLogs.length) {
        logIndex = targetLogIndex;
        if (terminalEl && bootLogs[logIndex - 1]) {
          const newLine = document.createElement('span');
          newLine.className = 'preloader-line';
          newLine.textContent = bootLogs[logIndex - 1];
          terminalEl.appendChild(newLine);
          terminalEl.scrollTop = terminalEl.scrollHeight;
        }
      }

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('is-loaded');
          setTimeout(() => {
            preloader.remove();
            initHeroAnimations();
          }, 900);
        }, 300);
      }
    }, 45);
  }

  /* --------------------------------------------------------------------------
     04. ANIMAÇÕES DE ENTRADA DO HERO
     -------------------------------------------------------------------------- */
  function initHeroAnimations() {
    if (typeof gsap === 'undefined' || prefersReducedMotion) return;

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
      .from('.hero-telemetry-badge', { y: -25, opacity: 0, duration: 0.8 })
      .from('.hero-main-title', { scale: 0.94, opacity: 0, duration: 1 }, '-=0.4')
      .from('.hero-subtitle', { y: 25, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('.hero-cta-group .btn-magnetic', { y: 20, opacity: 0, stagger: 0.15, duration: 0.7 }, '-=0.5')
      .from('.hero-scroll-indicator', { opacity: 0, duration: 1 }, '-=0.3');

    // Aciona decodificação no título principal
    const heroTitle = document.querySelector('.hero-main-title .scramble-target');
    if (heroTitle) {
      scrambleText(heroTitle, heroTitle.dataset.text || heroTitle.textContent, 1400);
    }
  }

  /* --------------------------------------------------------------------------
     05. EFEITO ÚNICO: TEXT SCRAMBLE DECRYPTION (TERMINAL GLYPHS)
     -------------------------------------------------------------------------- */
  const CYBER_GLYPHS = '01#$<>[]/*_@%&=+?!~';

  function scrambleText(element, targetText, duration = 1000) {
    if (!element || prefersReducedMotion) {
      if (element) element.textContent = targetText;
      return;
    }

    const length = targetText.length;
    const startTime = performance.now();

    function updateFrame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const lockedChars = Math.floor(progress * length);

      let scrambled = '';
      for (let i = 0; i < length; i++) {
        if (i < lockedChars) {
          scrambled += targetText[i];
        } else if (targetText[i] === ' ') {
          scrambled += ' ';
        } else {
          scrambled += CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
        }
      }

      element.textContent = scrambled;

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        element.textContent = targetText;
      }
    }

    requestAnimationFrame(updateFrame);
  }

  // Aciona scramble nos títulos das seções ao entrar em tela
  function initScrollTriggers() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || prefersReducedMotion) return;

    const titles = document.querySelectorAll('.section-title[data-scramble]');
    titles.forEach((title) => {
      ScrollTrigger.create({
        trigger: title,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          scrambleText(title, title.dataset.scramble, 1200);
        }
      });
    });

    // Revelação em cascata dos cards de jogos
    gsap.from('.game-card-wrapper', {
      scrollTrigger: {
        trigger: '.games-showcase-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: 'power3.out'
    });

    // Revelação das categorias
    gsap.from('.category-card', {
      scrollTrigger: {
        trigger: '.categories-container',
        start: 'top 80%',
      },
      scale: 0.95,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.2)'
    });

    // Revelação dos diferenciais
    gsap.from('.feature-item-card', {
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 82%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power2.out'
    });
  }

  /* --------------------------------------------------------------------------
     06. EFEITO ÚNICO: SPOTLIGHT / LANTERNA REVELADORA DE CIRCUITOS
     -------------------------------------------------------------------------- */
  function initSpotlightReveal() {
    if (isTouchDevice || prefersReducedMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function updateSpotlight() {
      // Suavização do movimento da lanterna
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      document.documentElement.style.setProperty('--mouse-x', `${currentX.toFixed(1)}px`);
      document.documentElement.style.setProperty('--mouse-y', `${currentY.toFixed(1)}px`);

      requestAnimationFrame(updateSpotlight);
    }

    requestAnimationFrame(updateSpotlight);
  }

  /* --------------------------------------------------------------------------
     07. EFEITO ÚNICO: CURSOR CIBERNÉTICO & BOTÕES MAGNÉTICOS
     -------------------------------------------------------------------------- */
  function initCustomCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const ringText = ring ? ring.querySelector('.cursor-text') : null;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isVisible = true;
    });

    // Animação contínua de inércia do anel
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Configuração dos estados de hover contextuais
    const interactiveElements = document.querySelectorAll('[data-cursor], button, a, .game-card, .category-card');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const cursorType = el.getAttribute('data-cursor');
        const customText = el.getAttribute('data-cursor-text');

        if (cursorType === 'action') {
          ring.classList.add('is-action');
        } else if (cursorType === 'crimson') {
          ring.classList.add('is-crimson');
        } else {
          ring.classList.add('is-hover');
        }

        if (customText && ringText) {
          ringText.textContent = customText;
        }
      });

      el.addEventListener('mouseleave', () => {
        ring.classList.remove('is-hover', 'is-action', 'is-crimson');
        if (ringText) ringText.textContent = '';
      });
    });

    // Atração Magnética nos Botões (.btn-magnetic)
    const magneticButtons = document.querySelectorAll('.btn-magnetic');

    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * 0.35;
        const deltaY = (e.clientY - centerY) * 0.35;

        btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  /* --------------------------------------------------------------------------
     08. EFEITO ÚNICO: 3D TILT E HOLOGRAPHIC SHEEN NOS CARDS DE JOGOS
     -------------------------------------------------------------------------- */
  function init3DTiltCards() {
    if (isTouchDevice || prefersReducedMotion) return;

    const cards = document.querySelectorAll('.game-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Normalização de -0.5 a 0.5
        const normX = (x / rect.width) - 0.5;
        const normY = (y / rect.height) - 0.5;

        const rotateX = (-normY * 16).toFixed(2);
        const rotateY = (normX * 16).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Posição do brilho furta-cor
        const sheenX = ((x / rect.width) * 100).toFixed(1);
        const sheenY = ((y / rect.height) * 100).toFixed(1);

        card.style.setProperty('--sheen-x', `${sheenX}%`);
        card.style.setProperty('--sheen-y', `${sheenY}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.setProperty('--sheen-x', `50%`);
        card.style.setProperty('--sheen-y', `50%`);
      });
    });
  }

  /* --------------------------------------------------------------------------
     09. EFEITO ÚNICO: CANVAS DE PARTÍCULAS INTERATIVAS (NEBULOSA QUÂNTICA)
     -------------------------------------------------------------------------- */
  function initCanvasParticles() {
    const canvas = document.getElementById('canvas-particles');
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const maxParticles = isTouchDevice ? 35 : 70;
    const connectionDistance = 140;

    let mouse = {
      x: -1000,
      y: -1000,
      radius: 160
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Pulso de onda de choque ao clicar
    window.addEventListener('click', (e) => {
      particles.forEach((p) => {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 260) {
          const force = (260 - dist) / 10;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.75;
        this.vy = (Math.random() - 0.5) * 0.75;
        this.radius = Math.random() * 1.8 + 1;
        this.baseColor = Math.random() > 0.3 ? 'rgba(0, 245, 255,' : 'rgba(255, 0, 85,';
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Amortecimento
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Limites da tela
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Interação com o mouse
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          this.vx += Math.cos(angle) * force * 0.6;
          this.vy += Math.sin(angle) * force * 0.6;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor} ${this.alpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    }
    initParticles();

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Desenhar linhas de conexão
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Atualizar e desenhar partículas
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(renderCanvas);
    }
    requestAnimationFrame(renderCanvas);

    // Redimensionamento com debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
      }, 150);
    });
  }

  /* --------------------------------------------------------------------------
     10. EFEITO ÚNICO: SINTETIZADOR WEB AUDIO API (HUD SFX)
     -------------------------------------------------------------------------- */
  class HUDAudioSynthesizer {
    constructor() {
      this.ctx = null;
      this.isEnabled = false;
      this.toggleBtn = document.getElementById('hud-audio-toggle');
      this.initEvents();
    }

    initAudioContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playHoverBeep() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime); // Tom agudo futurista
        osc.frequency.exponentialRampToValueAtTime(1100, this.ctx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (err) {
        // Silencioso em caso de restrição do navegador
      }
    }

    playClickHum() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.12);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.13);
      } catch (err) {
        // Silencioso
      }
    }

    toggle() {
      this.initAudioContext();
      this.isEnabled = !this.isEnabled;

      if (this.toggleBtn) {
        if (this.isEnabled) {
          this.toggleBtn.classList.add('is-active');
          this.playClickHum();
        } else {
          this.toggleBtn.classList.remove('is-active');
        }
      }
    }

    initEvents() {
      if (this.toggleBtn) {
        this.toggleBtn.addEventListener('click', () => this.toggle());
      }

      // Adiciona bipes em elementos interativos
      const targets = document.querySelectorAll('button, a, .game-card, .category-card');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', () => this.playHoverBeep());
        el.addEventListener('click', () => this.playClickHum());
      });
    }
  }

  /* --------------------------------------------------------------------------
     11. CONTADOR REGRESSIVO EM TEMPO REAL (OFERTA EM DESTAQUE)
     -------------------------------------------------------------------------- */
  function initCountdownTimer() {
    const hoursEl = document.getElementById('deal-hours');
    const minutesEl = document.getElementById('deal-minutes');
    const secondsEl = document.getElementById('deal-seconds');
    const msEl = document.getElementById('deal-ms');

    if (!hoursEl || !minutesEl || !secondsEl || !msEl) return;

    // Define término da oferta para 14 horas, 42 minutos e 18 segundos a partir de agora
    const duration = (14 * 3600 + 42 * 60 + 18) * 1000;
    const targetTime = Date.now() + duration;

    function update() {
      const remaining = Math.max(0, targetTime - Date.now());

      const h = Math.floor(remaining / (1000 * 60 * 60));
      const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((remaining % (1000 * 60)) / 1000);
      const ms = Math.floor((remaining % 1000) / 10);

      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
      msEl.textContent = String(ms).padStart(2, '0');

      if (remaining > 0) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* --------------------------------------------------------------------------
     12. TERMINAL DE NEWSLETTER / VALIDAÇÃO DE ACESSO
     -------------------------------------------------------------------------- */
  function initTerminalNewsletter() {
    const form = document.getElementById('terminal-newsletter-form');
    const input = document.getElementById('terminal-email-input');
    const feedback = document.getElementById('terminal-feedback');

    if (!form || !input || !feedback) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();

      if (!email || !email.includes('@')) {
        feedback.style.display = 'block';
        feedback.style.color = 'var(--accent-crimson)';
        feedback.textContent = '[ERROR 403]: ENDEREÇO DE FREQUÊNCIA INVÁLIDO.';
        return;
      }

      feedback.style.display = 'block';
      feedback.style.color = 'var(--accent-emerald)';
      feedback.textContent = `[AUTORIZADO]: CHAVE DE ACESSO ANTECIPADO VINCULADA AO TERMINAL <${email}>.`;
      input.value = '';
    });
  }

  /* --------------------------------------------------------------------------
     13. INICIALIZAÇÃO GERAL AO CARREGAR O DOM
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initSmoothScroll();
    initCanvasParticles();
    initSpotlightReveal();
    initCustomCursor();
    init3DTiltCards();
    initScrollTriggers();
    initCountdownTimer();
    initTerminalNewsletter();

    // Inicializa sintetizador de áudio
    const hudAudio = new HUDAudioSynthesizer();
    window.hudAudio = hudAudio;
  });
})();

