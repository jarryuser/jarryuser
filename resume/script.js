// ─────────────────────────────────────────────────────────────────
//  Render helpers
// ─────────────────────────────────────────────────────────────────

function $(sel) { return document.querySelector(sel); }

// ─── HERO ────────────────────────────────────────────────────────
function renderHero(d) {
  $('#hero-label').textContent = `// ${d.title}`;
  $('#hero-name-first').textContent = d.name.first;
  $('#hero-name-last').textContent = d.name.last;
  $('#hero-tagline').textContent = d.tagline;

  $('#hero-meta-location').textContent = d.location;
  const emailLink = $('#hero-meta-email');
  emailLink.textContent = d.email;
  emailLink.href = `mailto:${d.email}`;
  $('#hero-meta-phone').textContent = d.phone;

  $('#hero-cta-email').href = `mailto:${d.email}`;
}

// ─── ABOUT ───────────────────────────────────────────────────────
function renderAbout(d) {
  $('#about-text').innerHTML = d.about;
}

// ─── SKILLS ──────────────────────────────────────────────────────
function renderSkills(d) {
  const grid = $('#skills-grid');
  grid.innerHTML = d.skills.map((group, i) => {
    const delay = i > 0 ? ` reveal-delay-${i}` : '';
    const tags = group.tags.map(t =>
      `<span class="skill-tag${group.variant ? ' ' + group.variant : ''}">${t}</span>`
    ).join('');
    return `
      <div class="skill-card reveal${delay}">
        <div class="skill-card-title">// ${group.category}</div>
        <div class="skill-tags">${tags}</div>
      </div>`;
  }).join('');
}

// ─── EDUCATION ───────────────────────────────────────────────────
function renderEducation(d) {
  const timeline = $('#education-timeline');
  timeline.innerHTML = d.education.map((item, i) => {
    const delay = i > 0 ? ` reveal-delay-${i}` : '';
    const tags = item.tags.map(t =>
      `<span class="timeline-tag">${t}</span>`
    ).join('');
    return `
      <div class="timeline-item reveal${delay}">
        <div class="timeline-date">${item.period}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-title">${item.degree}</div>
          <div class="timeline-sub">${item.institution}</div>
          <div class="timeline-desc">${item.description}</div>
          <div class="timeline-tags">${tags}</div>
        </div>
      </div>`;
  }).join('');
}

// ─── PROJECTS ────────────────────────────────────────────────────
function renderProjects(d) {
  const grid = $('#projects-grid');
  grid.innerHTML = d.projects.map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const delay = (i % 4 > 0) ? ` reveal-delay-${i % 4}` : '';
    const tech = p.tech.map(t => `<span>${t}</span>`).join('');
    return `
      <div class="project-card reveal${delay}">
        <div class="project-num">${num} / ${p.label}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-tech">${tech}</div>
      </div>`;
  }).join('');
}

// ─── CONTACT ─────────────────────────────────────────────────────
function renderContact(d) {
  $('#contact-email-link').href = `mailto:${d.email}`;
  $('#contact-email-value').textContent = d.email;
  $('#contact-phone-link').href = `tel:${d.phone.replace(/\s/g, '')}`;
  $('#contact-phone-value').textContent = d.phone;
  $('#contact-location-value').textContent = d.location;
}

// ─── FOOTER ──────────────────────────────────────────────────────
function renderFooter(d) {
  $('#footer-copy').textContent = `© ${d.footerYear} ${d.name.first} ${d.name.last}`;
  $('#footer-avail').querySelector('span').textContent = d.availability;
}

// ─── PAGE TITLE ──────────────────────────────────────────────────
function renderMeta(d) {
  document.title = `${d.name.first} ${d.name.last} — ${d.title}`;
}

// ─────────────────────────────────────────────────────────────────
//  Scroll-reveal observer
// ─────────────────────────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────────
//  Bootstrap — runs after DOM + data.js are both loaded
// ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMeta(resumeData);
  renderHero(resumeData);
  renderAbout(resumeData);
  renderSkills(resumeData);
  renderEducation(resumeData);
  renderProjects(resumeData);
  renderContact(resumeData);
  renderFooter(resumeData);

  // Init reveal AFTER dynamic content is injected into the DOM
  initReveal();
});
