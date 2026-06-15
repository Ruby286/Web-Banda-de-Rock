/* ============================================================
   FITOSFERA – script.js
   ============================================================

   ÍNDICE DE CONTENIDO EDITABLE:
   1. [LINE ~20]  concerts  → Añadir / eliminar conciertos
   2. [LINE ~60]  members   → Añadir / editar músicos
   3. [LINE ~120] galleryImages → Cambiar imágenes de galería
   4. [LINE ~150] videos    → Añadir vídeos de YouTube
   5. [LINE ~185] translations → Editar textos ES / EN

   ============================================================ */

/* ══════════════════════════════════════════════════════════════
   1. CONCIERTOS
   ──────────────────────────────────────────────────────────────
   Para añadir un concierto, añade un objeto al array con:
     date:      "DD Mes AAAA"   — fecha en texto libre
     venue:     "Nombre sala"   — nombre del local
     city:      "Ciudad"        — ciudad
     time:      "22:00h"        — hora de inicio (o "" si TBD)
     ticketUrl: "https://..."   — URL de venta de entradas ("" si no hay)

   Para eliminar un concierto, borra su objeto del array.
══════════════════════════════════════════════════════════════ */
const concerts = [
  {
    date: "5 Sep 2026",
    venue: "Sala Independance, Madrid",
    city: "Madrid",
    time: "20:30h",
    ticketUrl: "",
    venueUrl: "https://independanceclub.com/"
  },
  {
    date: "12 Sep 2026",
    venue: "Conciertos club, Madrid",
    city: "Mejorada del Campo, Madrid",
    time: "14:00h",
    ticketUrl: "",
    venueUrl: "https://conciertos.club/madrid/locales/el-establo-acwv-asociacion-cultural-western-vagon"
  },
  {
    date: "25 Sep 2026",
    venue: "Monkey Rock",
    city: "San Sebastián de los Reyes, Madrid",
    time: "22:00h",
    ticketUrl: "",
    venueUrl: "https://www.instagram.com/monkeyrock_sanse/?hl=es"
  },
  {
    date: "17 Oct 2026",
    venue: "The One Beer",
    city: "Getafe, Madrid",
    time: "13:30h",
    ticketUrl: "",
    venueUrl: "https://www.onebeer.es/conciertos/"
  }
];

/* ══════════════════════════════════════════════════════════════
   2. INTEGRANTES
   ──────────────────────────────────────────────────────────────
   Para editar un músico, modifica su objeto. Campos:
     name:        "Nombre Apellido"
     instrument:  "Guitarra / Voz / Bajo / Batería / Teclados…"
     description: "Texto descriptivo del músico."
     photo:       URL de la fotografía real
                  — sustituye la URL de picsum por la foto real

   Para añadir un músico, añade un nuevo objeto al array.
   Para eliminar, borra el objeto.
══════════════════════════════════════════════════════════════ */
const members = [
  {
    name: "Rafa Peñalva",
    instrument: { es: "Voz", en: "Vocals" },
    description: { es: "Voz", en: "Vocals" },
    // Sustituye esta URL por la foto real del músico
    photo: "images/rafa.jpeg"
  },
  {
    name: "Pablo San Martín",
    instrument: { es: "Guitarra", en: "Guitar" },
    description: { es: "Guitarra", en: "Guitar" },
    photo: "images/pablo.jpeg"
  },
  {
    name: "José M. Matos",
    instrument: { es: "Guitarra / coros", en: "Guitar / Backing vocals" },
    description: { es: "Guitarra / coros", en: "Guitar / Backing vocals" },
    photo: "images/jose.jpeg"
  },
  {
    name: "Ricardo Acosta",
    instrument: { es: "Bajista", en: "Bassist" },
    description: { es: "Bajista", en: "Bassist" },
    photo: "images/ricardo.jpeg"
  },
  {
    name: "Jesús Fco. Matos",
    instrument: { es: "Batería", en: "Drummer" },
    description: { es: "Batería", en: "Drummer" },
    photo: "images/jesus.jpeg"
  },
  {
    name: "Antonio J. Cruz",
    instrument: { es: "Saxofonista / Teclista / Coros / Percusionista", en: "Saxophonist / Keyboardist / Backing vocals / Percusionist" },
    description: { es: "Saxofonista / Teclista / Coros / Percusionista", en: "Saxophonist / Keyboardist / Backing vocals / Percusionist" },
    photo: "images/antonio.jpeg"
  }
];

/* ══════════════════════════════════════════════════════════════
   3. GALERÍA
   ──────────────────────────────────────────────────────────────
   Edita el array galleryImages para cambiar las fotos.
   Cada objeto tiene:
     src:     URL de la imagen
     alt:     Texto alternativo (accesibilidad)
     caption: Pie de foto (se muestra en el lightbox)

   Sustituye las URLs de unsplash por tus fotos reales.
══════════════════════════════════════════════════════════════ */
const galleryImages = [
  {
    src: "images/escenario8.jpeg",
    alt: "Concierto Fitosfera",
    caption: { es: "En directo", en: "Live show" }
  },
  {
    src: "images/pro.jpeg",
    alt: "Escenario iluminado",
    caption: { es: "En directo", en: "Live show" }
  },
  {
    src: "images/familia.jpeg",
    alt: "Guitarrista en acción",
    caption: { es: "En directo", en: "Live show" }
  },
  {
    src: "images/escenario9.jpeg",
    alt: "Batería en concierto",
    caption: { es: "En directo", en: "Live show" }
  },
  {
    src: "images/voz.jpeg",
    alt: "Público en concierto",
    caption: { es: "En directo", en: "Live show" }
  },
  {
    src: "images/grupo.jpeg",
    alt: "Vocalista Fitosfera",
    caption: { es: "Post-concierto", en: "Post-concert" }
  },
  {
    src: "images/grupo2.jpeg",
    alt: "Ensayo de la banda",
    caption: { es: "Pre-concierto", en: "Pre-concert" }
  },
  {
    src: "images/escenario1.jpeg",
    alt: "Backstage",
    caption: { es: "Sala Sojo 3.14, Tres Cantos", en: "Concert hall Sojo 3.14, Tres Cantos"}
  }
];

/* ══════════════════════════════════════════════════════════════
   4. VÍDEOS DE YOUTUBE
   ──────────────────────────────────────────────────────────────
   Para añadir un vídeo real, sustituye el campo embedId por
   el ID del vídeo de YouTube. El ID es la parte final de la URL:
     https://www.youtube.com/watch?v=AQUI_ESTA_EL_ID
                                    ↑ este es el embedId

   title: título del vídeo (aparece debajo del player)

   Si embedId está vacío (""), se muestra un placeholder visual.
══════════════════════════════════════════════════════════════ */
const videos = [
  {
    embedId: "NXr6kaXfKLw",    // Sustituye por: "dQw4w9WgXcQ" (ejemplo de ID de YouTube)
    title: "Fitosfera - Tributo a Fito y Fitipaldis | Medalla de cartón"
  },
  {
    embedId: "zS22HbO8Z6c",
    title: "Fitosfera - Tributo a Fito & Fitipaldis | Cielo hermético"
  },
  {
    embedId: "rMZfShweCB4",
    title: "Fitosfera - Tributo a Fito y Fitipaldis | Un buen castigo"
  }
];

/* ══════════════════════════════════════════════════════════════
   5. TRADUCCIONES (ES / EN)
   ──────────────────────────────────────────────────────────────
   Edita los textos en el objeto translations.
   La clave "es" es español, "en" es inglés.
   Cada clave interna (ej: "nav.concerts") corresponde al
   atributo data-i18n del HTML.
══════════════════════════════════════════════════════════════ */
const translations = {
  es: {
    "nav.tribute":          "Tributo a Fito & Fitipaldis",
    "nav.concerts":         "Conciertos",
    "nav.about":            "La Banda",
    "nav.members":          "Integrantes",
    "nav.gallery":          "Galería",
    "nav.videos":           "Vídeos",
    "nav.contact":          "Contacto",
    "hero.eyebrow":         "Tributo a",
    "hero.subtitle":        "Fito & Fitipaldis",
    "hero.tagline":         "La carretera. El bar. La guitarra. El directo.",
    "hero.btn.concerts":    "Próximos Conciertos",
    "hero.btn.contact":     "Contratación",
    "concerts.eyebrow":     "En directo",
    "concerts.title":       "Próximos Conciertos",
    "concerts.tickets":     "Entradas",
    "concerts.tbd":         "Hora por confirmar",
    "about.eyebrow":        "Quiénes somos",
    "about.title":          "La Banda",
    "about.text":           "Fitosfera es una banda tributo a Fito & Fitipaldis formada por seis músicos con amplia experiencia en directo. Su espectáculo recrea con fidelidad la esencia, energía y sonido de la banda original, recorriendo todas las etapas de su carrera y sus canciones más conocidas. Con una formación completa y un directo potente, cercano y participativo, Fitosfera ofrece actuaciones adaptadas a salas, festivales y eventos de cualquier formato. Rock en castellano, grandes himnos y un show profesional que conecta con el público desde el primer minuto.",
    "about.text2":          "Digamos que nos gusta empezar la casa por el tejado.",
    "about.btn":            "Ver conciertos",
    "about.badge":          "Tributo",
    "members.eyebrow":      "Los de siempre",
    "members.title":        "La Familia",
    "gallery.eyebrow":      "Momentos",
    "gallery.title":        "Galería",
    "videos.eyebrow":       "Escúchanos",
    "videos.title":         "Vídeos",
    "videos.placeholder":   "Próximamente",
    "contact.eyebrow":      "Reserva tu fecha",
    "contact.title":        "Contratación",
    "contact.desc":         "¿Quieres que Fitosfera toque en tu sala, festival o evento privado? <br> Contáctanos y hagamos que suene",
    "footer.links":         "Enlaces",
    "footer.copyright":     "© 2025 Fitosfera. Todos los derechos reservados.",
    "footer.disclaimer":    "Banda tributo independiente. No afiliada oficialmente a Fito & Fitipaldis."
  },
  en: {
    "nav.tribute":          "Fito & Fitipaldis Tribute",
    "nav.concerts":         "Concerts",
    "nav.about":            "The Band",
    "nav.members":          "Members",
    "nav.gallery":          "Gallery",
    "nav.videos":           "Videos",
    "nav.contact":          "Contact",
    "hero.eyebrow":         "Tribute to",
    "hero.subtitle":        "Fito & Fitipaldis",
    "hero.tagline":         "The road. The bar. The guitar. Live.",
    "hero.btn.concerts":    "Upcoming Shows",
    "hero.btn.contact":     "Book Us",
    "concerts.eyebrow":     "Live",
    "concerts.title":       "Upcoming Shows",
    "concerts.tickets":     "Tickets",
    "concerts.tbd":         "Time to be confirmed",
    "about.eyebrow":        "Who we are",
    "about.title":          "The Band",
    "about.text":           "Fitosfera is a Fito & Fitipaldis tribute band made up of six highly experienced live musicians. Their show faithfully captures the essence, energy, and sound of the original band, covering every stage of their career and performing their most iconic songs. With a full lineup and a powerful, engaging, and audience-focused performance, Fitosfera delivers shows tailored to venues, festivals, and events of any size. Spanish rock, timeless anthems, and a professional live experience that connects with audiences from the very first song.",
    "about.text2":          "Let's just say we like to start with `la casa por el tejado´",
    "about.btn":            "See concerts",
    "about.badge":          "Tribute",
    "members.eyebrow":      "The crew",
    "members.title":        "The Family",
    "gallery.eyebrow":      "Moments",
    "gallery.title":        "Gallery",
    "videos.eyebrow":       "Listen to us",
    "videos.title":         "Videos",
    "videos.placeholder":   "Coming soon",
    "contact.eyebrow":      "Book your date",
    "contact.title":        "Booking",
    "contact.desc":         "Want Fitosfera to play at your venue, festival or private event? <br> Contact us and make some noise",
    "footer.links":         "Links",
    "footer.copyright":     "© 2025 Fitosfera. All rights reserved.",
    "footer.disclaimer":    "Independent tribute band. Not officially affiliated with Fito & Fitipaldis."
  }
};

/* ══════════════════════════════════════════════════════════════
   INTERNAL APP STATE & INIT
══════════════════════════════════════════════════════════════ */
let currentLang = 'es';
let lightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  buildConcerts();
  buildMembers();
  buildGallery();
  buildVideos();
  initLang();
  initNav();
  initLightbox();
  initScrollReveal();
});

/* ── BUILD: CONCERTS ─────────────────────────────────────────── */
function buildConcerts() {
  const grid = document.getElementById('concertsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  concerts.forEach((c, i) => {
    const ticketHTML = c.ticketUrl
      ? `<a href="${c.ticketUrl}" class="concert-ticket" data-i18n="concerts.tickets" target="_blank" rel="noopener noreferrer">${t('concerts.tickets')}</a>`
      : '';
    const timeHTML = c.time
      ? `<span class="concert-time"><i class="fa-solid fa-clock"></i> ${c.time}</span>`
      : `<span class="concert-tbd">${t('concerts.tbd')}</span>`;

    const card = document.createElement('article');
    card.className = 'concert-card reveal';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="concert-date">${c.date}</div>
      <div>
        <div class="concert-venue">${c.venueUrl? `<a href="${c.venueUrl}" target="_blank" rel="noopener noreferrer">${c.venue}</a>`: c.venue} </div>
        <div class="concert-city"><i class="fa-solid fa-location-dot"></i> ${c.city}</div>
      </div>
      <div class="concert-meta">
        ${timeHTML}
        ${ticketHTML}
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── BUILD: MEMBERS ──────────────────────────────────────────── */
function buildMembers() {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;
  grid.innerHTML = '';

  members.forEach(m => {
    const card = document.createElement('article');
    card.className = 'member-card reveal';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="member-photo-wrap">
        <img src="${m.photo}" alt="Foto de ${m.name}" loading="lazy" />
      </div>
      <div class="member-info">
        <div class="member-instrument">${m.instrument[currentLang]}</div>
        <h3 class="member-name">${m.name}</h3>
        <p class="member-desc">${m.description[currentLang]}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── BUILD: GALLERY ──────────────────────────────────────────── */
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  galleryImages.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', img.caption[currentLang]);
    item.dataset.index = i;
    item.innerHTML = `
      <img src="${img.src}" alt="${img.alt}" loading="lazy" />
      <div class="gallery-item-overlay" aria-hidden="true">
        <div class="gallery-zoom-icon">⊕</div>
      </div>
    `;
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i); });
    grid.appendChild(item);
  });
}

/* ── BUILD: VIDEOS ───────────────────────────────────────────── */
function buildVideos() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;
  grid.innerHTML = '';

  videos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card reveal';

    const mediaHTML = v.embedId
      ? `<iframe
           src="https://www.youtube.com/embed/${v.embedId}"
           title="${v.title}"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
           loading="lazy"
         ></iframe>`
      : `<div class="video-placeholder-inner">
           <div class="play-icon" aria-hidden="true">▶</div>
           <span data-i18n="videos.placeholder">${t('videos.placeholder')}</span>
         </div>`;

    card.innerHTML = `
      <div class="video-placeholder">${mediaHTML}</div>
      <p class="video-label">${v.title}</p>
    `;
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════════════════
   MULTILANG
══════════════════════════════════════════════════════════════ */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) el.innerHTML = text;
  });
}

function initLang() {
  applyTranslations();
  document.documentElement.lang = currentLang;

  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('langActive').textContent = currentLang === 'es' ? 'EN' : 'ES';
    document.getElementById('langOther').textContent  = currentLang === 'es' ? 'ES' : 'EN';
    document.documentElement.lang = currentLang;
    applyTranslations();
    // Rebuild dynamic sections to pick up translated strings
    buildConcerts();
    buildVideos();
    buildMembers();
    buildGallery();
    initScrollReveal(); // Re-observe new elements
  });
}

/* ══════════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════════ */
function initNav() {
  const navbar    = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const overlay   = document.getElementById('navOverlay');

  // Scroll shadow
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggleMenu = (open) => {
    navLinks.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    overlay.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => toggleMenu(!navLinks.classList.contains('open')));
  overlay.addEventListener('click', () => toggleMenu(false));

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  // Smooth scroll offset for fixed nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════════════════════ */
function initLightbox() {
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lightboxImg');
  const lbCap   = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev  = document.getElementById('lightboxPrev');
  const lbNext  = document.getElementById('lightboxNext');

  window.openLightbox = function(index) {
    lightboxIndex = index;
    updateLightbox();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const img = galleryImages[lightboxIndex];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.caption[currentLang];
  }

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  lbPrev.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  });
  lbNext.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
    updateLightbox();
  });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')    closeLightbox();
    if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % galleryImages.length; updateLightbox(); }
  });

  // Touch swipe
  let startX = 0;
  lb.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) { lightboxIndex = (lightboxIndex + 1) % galleryImages.length; }
    else        { lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length; }
    updateLightbox();
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children of the same parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}
