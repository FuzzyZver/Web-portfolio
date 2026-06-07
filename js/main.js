// ============================================================
// MAIN.JS
// ============================================================

let currentLang = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  buildTimeline();
  buildProjects();
  buildAchievements();
  buildGallery();
  buildInspirations();
  buildContacts();
  applyLang(currentLang);
  initLangSwitcher();
  initTimeline();
  initScrollReveal();
  initProgressBar();
  initBurger();
  initCurrentProjectImage();
});

// ============================================================
// ЯЗЫК
// ============================================================
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      localStorage.setItem('lang', btn.dataset.lang);
    });
  });
}

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  buildTimeline();
  buildProjects();
  buildAchievements();
  buildInspirations();
  buildGallery();
  updateCurrentProjectTexts();
  updateContactLabels();
}

// ============================================================
// ВРЕМЕННАЯ ШКАЛА
// ============================================================
let activeSlide = 0;

function buildTimeline() {
  const t = translations[currentLang];
  const items = t.timeline || translations.en.timeline;
  const container = document.getElementById('timeline-cards');
  const dotsEl    = document.getElementById('timeline-dots');
  if (!container || !dotsEl) return;

  container.innerHTML = '';
  dotsEl.innerHTML    = '';

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'timeline-card' + (i === activeSlide ? ' active' : '');
    card.innerHTML = `
      <div class="card-year">${item.year}</div>
      <div class="card-icon">${item.icon}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-text">${item.text}</div>
    `;
    container.appendChild(card);

    const dot = document.createElement('button');
    dot.className = 'timeline-dot' + (i === activeSlide ? ' active' : '');
    dot.setAttribute('aria-label', item.year);
    dot.textContent = String(i + 1);
    dot.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(dot);
  });

  updateProgress(items.length);
}

function initTimeline() {
  const el = document.getElementById('timeline-cards');
  if (!el) return;
  let startX = 0;
  el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  el.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    const total = (translations[currentLang].timeline || translations.en.timeline).length;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeSlide < total - 1) goToSlide(activeSlide + 1);
      if (diff < 0 && activeSlide > 0)         goToSlide(activeSlide - 1);
    }
  });
}

function goToSlide(index) {
  const total = (translations[currentLang].timeline || translations.en.timeline).length;
  activeSlide = Math.max(0, Math.min(index, total - 1));
  document.querySelectorAll('.timeline-card').forEach((c, i) => c.classList.toggle('active', i === activeSlide));
  document.querySelectorAll('.timeline-dot').forEach((d, i)  => d.classList.toggle('active', i === activeSlide));
  updateProgress(total);
  const cards = document.getElementById('timeline-cards');
  cards?.children[activeSlide]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function updateProgress(total) {
  const bar = document.getElementById('timeline-progress');
  if (bar) bar.style.width = `${(activeSlide / Math.max(total - 1, 1)) * 100}%`;
}

// ============================================================
// ТЕКУЩИЙ ПРОЕКТ — картинка + тексты
// ============================================================
function initCurrentProjectImage() {
  // Название проекта
  const nameEl = document.getElementById('current-project-name');
  if (nameEl) nameEl.textContent = currentProject.name;

  // Теги
  const tagsEl = document.getElementById('current-tags');
  if (tagsEl) {
    tagsEl.innerHTML = currentProject.tags
      .map(t => `<span class="current-tag">${t}</span>`).join('');
  }

  // Картинка справа
  const imgWrap = document.getElementById('current-image-wrap');
  if (imgWrap) {
    if (currentProject.image) {
      imgWrap.innerHTML = `<img src="${currentProject.image}" alt="${currentProject.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
    } else {
      imgWrap.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;height:100%;opacity:0.6;">
          <span style="font-size:3rem">🖼️</span>
          <span style="font-family:var(--font-ui);font-size:0.8rem;color:rgba(255,255,255,0.8);text-align:center;">
            Добавь путь к картинке<br>в <code>currentProject.image</code>
          </span>
        </div>`;
    }
  }

  updateCurrentProjectTexts();
}

function updateCurrentProjectTexts() {
  const t = translations[currentLang];
  const descEl = document.getElementById('current-project-desc');
  if (descEl && t.current_description) descEl.textContent = t.current_description;
}

// ============================================================
// ПРОГРЕСС-БАР
// ============================================================
function initProgressBar() {
  const fill  = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label-pct');
  if (!fill) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        fill.style.width = currentProject.progress + '%';
        if (label) label.textContent = currentProject.progress + '%';
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  obs.observe(fill);
}

function buildProjects() {
  const t = translations[currentLang];
  const projects = t.projects || translations.en.projects;
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';
  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    // Обложка: первый скриншот или эмодзи
    const thumbContent = p.screenshots && p.screenshots[0]
      ? `<img src="${p.screenshots[0]}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">`
      : `<span style="font-size:3rem">🎮</span>`;

    card.innerHTML = `
      <div class="project-thumb" style="position:relative;">${thumbContent}</div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">
          ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        ${p.link ? `
        <a href="${p.link}" target="_blank" rel="noopener noreferrer"
           class="project-link-btn" onclick="event.stopPropagation()">
          Играть →
        </a>` : ''}
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(i));
    grid.appendChild(card);
  });
}

// Состояние карусели
let carouselIndex = 0;
let carouselScreenshots = [];

function openProjectModal(index) {
  const t = translations[currentLang];
  const p = (t.projects || translations.en.projects)[index];
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-text').textContent  = p.details;
  document.getElementById('modal-tags').innerHTML    =
    p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

  // Инициализируем карусель
  carouselScreenshots = p.screenshots && p.screenshots.length > 0
    ? p.screenshots
    : [];      // пустой массив = нет скриншотов
  carouselIndex = 0;
  renderCarousel();

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderCarousel() {
  const wrap = document.getElementById('modal-carousel');
  if (!wrap) return;

  if (carouselScreenshots.length === 0) {
    wrap.innerHTML = `
      <div class="carousel-placeholder">
        <span>🎮</span>
        <p>Добавь скриншоты в поле<br><code>screenshots: [...]</code></p>
      </div>`;
    return;
  }

  const showPrev = carouselScreenshots.length > 1;
  wrap.innerHTML = `
    <div class="carousel-inner">
      <img src="${carouselScreenshots[carouselIndex]}"
           alt="Screenshot ${carouselIndex + 1}"
           class="carousel-img">
    </div>
    ${showPrev ? `
    <button class="carousel-btn carousel-prev" onclick="carouselMove(-1)" aria-label="Previous">&#8592;</button>
    <button class="carousel-btn carousel-next" onclick="carouselMove(1)"  aria-label="Next">&#8594;</button>
    <div class="carousel-counter">${carouselIndex + 1} / ${carouselScreenshots.length}</div>
    ` : ''}
  `;
}

function carouselMove(dir) {
  carouselIndex = (carouselIndex + dir + carouselScreenshots.length) % carouselScreenshots.length;
  renderCarousel();
}

function closeModal() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft'  && carouselScreenshots.length > 1) carouselMove(-1);
  if (e.key === 'ArrowRight' && carouselScreenshots.length > 1) carouselMove(1);
});

// ============================================================
// ДОСТИЖЕНИЯ
// ============================================================
function buildAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;

  grid.innerHTML = '';
  achievements.forEach(a => {
    const desc = a[`desc_${currentLang}`] || a.desc_en;
    const card = document.createElement('div');
    card.className = 'achievement-card reveal';
    card.innerHTML = `
      <div class="ach-icon">${a.icon}</div>
      <div>
        <div class="ach-year">${a.year}</div>
        <div class="ach-place">${a.place}</div>
        <div class="ach-org">${a.org}</div>
        <div class="ach-desc">${desc}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ============================================================
// ГАЛЕРЕЯ
// ============================================================
function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = '';
  galleryItems.forEach((item, i) => {
    const title = item[`title_${currentLang}`] || item.title_en;
    const el = document.createElement('div');
    el.className = 'gallery-item reveal';

    if (item.src) {
      el.innerHTML = `
        <img src="${item.src}" alt="${title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-overlay-title">${title}</span>
        </div>`;
    } else {
      el.innerHTML = `
        <span>${item.emoji}</span>
        <div class="gallery-overlay">
          <span class="gallery-overlay-title">${title}</span>
        </div>`;
    }

    el.addEventListener('click', () => openGalleryModal(i));
    grid.appendChild(el);
  });
}

function openGalleryModal(index) {
  const item  = galleryItems[index];
  const title = item[`title_${currentLang}`] || item.title_en;
  const desc  = item[`desc_${currentLang}`]  || item.desc_en;
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-text').textContent  = desc;
  document.getElementById('modal-tags').innerHTML    = '';

  // Галерея использует обычную картинку, не карусель
  carouselScreenshots = [];
  const wrap = document.getElementById('modal-carousel');
  if (wrap) {
    if (item.src) {
      wrap.innerHTML = `<div class="carousel-inner"><img src="${item.src}" alt="${title}" class="carousel-img"></div>`;
    } else {
      wrap.innerHTML = `<div class="carousel-placeholder"><span>${item.emoji}</span></div>`;
    }
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ============================================================
// ВДОХНОВИТЕЛИ — с поддержкой картинки
// ============================================================
function buildInspirations() {
  const grid = document.getElementById('inspo-grid');
  if (!grid) return;

  grid.innerHTML = '';
  inspirations.forEach(item => {
    const quote = item[`quote_${currentLang}`] || item.quote_en;
    const card = document.createElement('div');
    card.className = 'inspo-card reveal';

    // Обложка: картинка или эмодзи
    const thumbContent = item.image
      ? `<img src="${item.image}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;">`
      : `<span style="font-size:3rem">${item.emoji}</span>`;

    card.innerHTML = `
      <div class="inspo-thumb">${thumbContent}</div>
      <div class="inspo-body">
        <div class="inspo-year">❤️ ${item.year}</div>
        <div class="inspo-title">${item.title}</div>
        <div class="inspo-studio">${item.studio}</div>
        <div class="inspo-quote">${quote}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ============================================================
// КОНТАКТЫ
// ============================================================
function buildContacts() {
  const wrap = document.getElementById('contact-links');
  if (!wrap) return;

  const items = [
    { key: 'contact_email',   href: contacts.email,      icon: '✉️',  primary: true  },
    { key: 'contact_github',  href: contacts.github,     icon: '🐙',  primary: false },
    { key: 'contact_itch',    href: contacts.itch,       icon: '🎮',  primary: false },
    { key: 'contact_youtube', href: contacts.youtube,    icon: '▶️',  primary: false },
    { key: 'contact_tg',      href: contacts.telegram,   icon: '✈️',  primary: false },
    { key: 'contact_tg_ch',   href: contacts.tg_channel, icon: '📢',  primary: false },
    { key: 'contact_discord', href: contacts.discord,    icon: '💬',  primary: false },
  ];

  wrap.innerHTML = '';
  items.forEach(item => {
    const t   = translations[currentLang];
    const btn = document.createElement('a');
    btn.className = 'contact-btn' + (item.primary ? ' primary' : '');
    btn.href   = item.href;
    btn.target = '_blank';
    btn.rel    = 'noopener noreferrer';
    btn.dataset.i18nContact = item.key;
    btn.innerHTML = `<span>${item.icon}</span><span class="btn-label">${t[item.key] || item.key}</span>`;
    wrap.appendChild(btn);
  });
}

function updateContactLabels() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n-contact]').forEach(btn => {
    const key   = btn.dataset.i18nContact;
    const label = btn.querySelector('.btn-label');
    if (label && t[key]) label.textContent = t[key];
  });
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
  }).observe(document.body, { childList: true, subtree: true });
}

// ============================================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================================
function initBurger() {
  const burger = document.getElementById('burger');
  const links  = document.getElementById('nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// Якорные ссылки
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
});
