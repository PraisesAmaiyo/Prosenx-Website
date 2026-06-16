tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface-container-low': '#f2f3ff',
        'on-primary-fixed': '#001452',
        'inverse-on-surface': '#eef0ff',
        'tertiary-fixed-dim': '#ffb4a1',
        primary: '#0052ff',
        'on-tertiary-fixed-variant': '#891e00',
        'on-secondary-fixed-variant': '#38485d',
        'on-primary': '#ffffff',
        'outline-variant': '#c3c5d9',
        'on-surface': '#131b2e',
        'inverse-primary': '#b7c4ff',
        'tertiary-fixed': '#ffdbd2',
        surface: '#faf8ff',
        'secondary-fixed-dim': '#b7c8e1',
        'on-surface-variant': '#434656',
        background: '#faf8ff',
        'on-primary-fixed-variant': '#0038b6',
        'surface-tint': '#004ced',
        'surface-bright': '#faf8ff',
        'surface-dim': '#d2d9f4',
        'on-primary-container': '#dfe3ff',
        'on-secondary-container': '#54647a',
        'surface-container': '#eaedff',
        'secondary-fixed': '#d3e4fe',
        'surface-container-high': '#e2e7ff',
        'surface-container-highest': '#dae2fd',
        'surface-variant': '#dae2fd',
        tertiary: '#952200',
        'on-tertiary-fixed': '#3c0800',
        'on-background': '#131b2e',
        'tertiary-container': '#bf3003',
        'primary-fixed-dim': '#b7c4ff',
        'on-secondary': '#ffffff',
        'error-container': '#ffdad6',
        outline: '#737688',
        'primary-fixed': '#dde1ff',
        'on-error-container': '#93000a',
        'surface-container-lowest': '#ffffff',
        'primary-container': '#0052ff',
        'secondary-container': '#d0e1fb',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#ffddd5',
        'on-secondary-fixed': '#0b1c30',
        'on-error': '#ffffff',
        secondary: '#505f76',
        error: '#ba1a1a',
        'inverse-surface': '#283044',
        'brand-primary': '#046a75',
        'brand-dark': '#101622',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      spacing: {
        'container-max': '1280px',
        sm: '8px',
        md: '16px',
        'margin-mobile': '16px',
        lg: '24px',
        gutter: '24px',
        xs: '4px',
        xl: '40px',
        base: '4px',
      },
      fontFamily: {
        'mono-sm': ['Geist'],
        'label-md': ['Geist'],
        'headline-xl': ['Geist'],
        'headline-md': ['Geist'],
        'headline-lg': ['Geist'],
        'headline-lg-mobile': ['Geist'],
        'body-md': ['Inter'],
        'body-lg': ['Inter'],
      },
      fontSize: {
        'mono-sm': [
          '13px',
          { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' },
        ],
        'label-md': [
          '12px',
          { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '500' },
        ],
        'headline-xl': [
          '40px',
          { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'headline-md': [
          '20px',
          { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'headline-lg': [
          '32px',
          { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'headline-lg-mobile': [
          '24px',
          { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'body-md': [
          '14px',
          { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' },
        ],
        'body-lg': [
          '16px',
          { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' },
        ],
      },
    },
  },
};

// ── Mobile menu ──
function toggleMobile() {
  const m = document.getElementById('mobile-menu');
  m.classList.toggle('open');
}

// ── Nav scroll ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── FAQ accordion ──
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-question.open').forEach((q) => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

// ── Scroll reveal ──
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll('.reveal:not(.visible)')
    .forEach((el) => obs.observe(el));
}
initReveal();

// ── Contact form ──
// function handleContactSubmit(e) {
//    e.preventDefault();
//    document.getElementById('contact-form').style.display = 'none';
//    document.getElementById('contact-success').style.display = 'block';
// }

// Simple tab switcher for Dashboard Showcase
function switchTab(tabId) {
  document
    .querySelectorAll('.tab-panel')
    .forEach((p) => p.classList.add('hidden'));
  document.getElementById('tab-content-' + tabId).classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.remove('bg-white', 'shadow-sm', 'active-tab', 'text-primary');
    btn.classList.add('hover:bg-white/50', 'text-on-surface-variant');
  });

  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  activeBtn.classList.add(
    'bg-white',
    'shadow-sm',
    'active-tab',
    'text-primary',
  );
  activeBtn.classList.remove('hover:bg-white/50', 'text-on-surface-variant');
}

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('section, .grid > div').forEach((el) => {
  el.classList.add('scroll-reveal');
  observer.observe(el);
});

// Simple counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 200;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText =
        target + (target === 99 ? '%' : target === 2 ? 'M+' : '+');
    }
  };

  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      updateCount();
      counterObserver.unobserve(counter);
    }
  });
  counterObserver.observe(counter);
});

// Pricing cards
let isAnnual = false;

function toggleBilling() {
  isAnnual = !isAnnual;
  const knob = document.getElementById('billing-knob');
  const monthlyLabel = document.getElementById('toggle-label-monthly');
  const annualLabel = document.getElementById('toggle-label-annual');

  knob.style.transform = isAnnual ? 'translateX(20px)' : 'translateX(0)';
  monthlyLabel.style.color = isAnnual ? 'var(--text2)' : 'var(--text)';
  annualLabel.style.color = isAnnual ? 'var(--text)' : 'var(--text2)';

  if (isAnnual) {
    document.getElementById('starter-price').textContent = '₦20,000';
    document.getElementById('starter-period').textContent = ' / month';
    document.getElementById('starter-annual-note').style.display = 'block';
    document.getElementById('pro-price').textContent = '₦36,000';
    document.getElementById('pro-period').textContent = ' / month';
    document.getElementById('pro-annual-note').style.display = 'block';
  } else {
    document.getElementById('starter-price').textContent = '₦25,000';
    document.getElementById('starter-period').textContent = ' / month';
    document.getElementById('starter-annual-note').style.display = 'none';
    document.getElementById('pro-price').textContent = '₦45,000';
    document.getElementById('pro-period').textContent = ' / month';
    document.getElementById('pro-annual-note').style.display = 'none';
  }
}

// ── Math spam quiz ──
let mathAnswer = 0;

function generateMathQuestion() {
  const a = Math.floor(Math.random() * 9) + 1; // 1–9
  const b = Math.floor(Math.random() * 9) + 1; // 1–9
  mathAnswer = a + b;
  document.getElementById('math-question').textContent =
    `Quick check: ${a} + ${b} = ?`;
  document.getElementById('math-answer').value = '';
}

const contactPage = document.getElementById('page-contact');

if (contactPage) {
  generateMathQuestion();
}

function handleContactSubmit(e) {
  const userAnswer = parseInt(document.getElementById('math-answer').value, 10);
  const errorEl = document.getElementById('math-error');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (userAnswer !== mathAnswer) {
    e.preventDefault();
    errorEl.style.display = 'block';
    generateMathQuestion(); // new question on wrong answer
    document.getElementById('math-answer').value = '';
    return;
  }

  errorEl.style.display = 'none';
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<iconify-icon icon="tabler:loader-2" inline style="animation:spin .8s linear infinite"></iconify-icon> Sending…';
}

// Image modal

document.addEventListener('DOMContentLoaded', () => {
  initGlobalLightboxEngine();
});

function initGlobalLightboxEngine() {
  if (document.getElementById('global-system-lightbox')) return;

  const lightboxElement = document.createElement('div');
  lightboxElement.id = 'global-system-lightbox';
  lightboxElement.className = 'global-lightbox';
  lightboxElement.innerHTML = `
      <div class="lightbox-content-wrapper">
        <button class="lightbox-close-btn" aria-label="Close zoom preview">
          <iconify-icon icon="tabler:x" style="font-size: 1.5rem; display: block;"></iconify-icon>
        </button>
        <img class="lightbox-image" src="" alt="Enlarged view content" style="display:none;" />
        <video class="lightbox-video" loop autoplay muted playsinline controls style="display:none; max-width:100%; max-height:85vh; border-radius:0.75rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); border: 1px rgba(255, 255, 255, 0.1) solid;"></video>
      </div>
   `;

  document.body.appendChild(lightboxElement);

  const targetImage = lightboxElement.querySelector('.lightbox-image');
  const targetVideo = lightboxElement.querySelector('.lightbox-video');
  const closeButton = lightboxElement.querySelector('.lightbox-close-btn');

  // Central generalized opening engine pipeline
  window.openGlobalLightbox = function (
    mediaSrc,
    mediaType = 'image',
    mediaAlt = 'Enlarged interactive layout view',
  ) {
    if (!mediaSrc) return;

    // Reset presentation display states cleanly
    targetImage.style.display = 'none';
    targetVideo.style.display = 'none';
    targetVideo.pause();
    targetVideo.src = '';

    if (mediaType === 'video') {
      targetVideo.src = mediaSrc;
      targetVideo.style.display = 'block';
      targetVideo.load();
      // Play is wrapped cleanly to satisfy webkit execution rules
      targetVideo
        .play()
        .catch((err) =>
          console.log('Autoplay caught on user interaction frame:', err),
        );
    } else {
      targetImage.src = mediaSrc;
      targetImage.alt = mediaAlt;
      targetImage.style.display = 'block';
    }

    lightboxElement.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  // Modal termination cleaning routine
  window.closeGlobalLightbox = function () {
    lightboxElement.classList.remove('is-active');
    document.body.style.overflow = '';
    targetVideo.pause();
    setTimeout(() => {
      targetImage.src = '';
      targetVideo.src = '';
      targetImage.style.display = 'none';
      targetVideo.style.display = 'none';
    }, 300);
  };

  // Central Document Level Event Interceptor Context Rule
  document.addEventListener('click', (event) => {
    // Rule Chain A: Standard Static Image Elements
    const imgTarget = event.target.closest('[data-lightbox]');
    if (imgTarget && imgTarget.tagName === 'IMG') {
      openGlobalLightbox(imgTarget.src, 'image', imgTarget.alt);
      return;
    }

    // Rule Chain B: Contextual Media Video Container Blocks
    const videoTarget = event.target.closest('[data-lightbox-video]');
    if (videoTarget) {
      const videoUrl = videoTarget.getAttribute('data-lightbox-video');
      openGlobalLightbox(videoUrl, 'video');
    }
  });

  // Structural Execution Lifecycle Hooks
  closeButton.addEventListener('click', closeGlobalLightbox);
  lightboxElement.addEventListener('click', (event) => {
    if (event.target === lightboxElement) closeGlobalLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      lightboxElement.classList.contains('is-active')
    ) {
      closeGlobalLightbox();
    }
  });
}

// Video Control

let videoLoaded = false;

function switchTab(tabId) {
  // Hide all panels
  document
    .querySelectorAll('.tab-panel')
    .forEach((p) => p.classList.add('hidden'));
  document.getElementById('tab-content-' + tabId).classList.remove('hidden');

  // Update tab button styles
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.remove('bg-white', 'shadow-sm', 'active-tab', 'text-primary');
    btn.classList.add('hover:bg-white/50', 'text-on-surface-variant');
  });
  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  activeBtn.classList.add(
    'bg-white',
    'shadow-sm',
    'active-tab',
    'text-primary',
  );
  activeBtn.classList.remove('hover:bg-white/50', 'text-on-surface-variant');

  // Handle video tab
  if (tabId === 'docs') {
    const video = document.getElementById('docs-video');
    const poster = document.getElementById('docs-poster');
    const loader = document.getElementById('docs-video-loader');

    if (!videoLoaded) {
      // First time clicking docs tab — start loading the video
      const source = video.querySelector('source[data-src]');
      source.src = source.dataset.src; // swap data-src to src to trigger download
      video.load();

      loader.style.display = 'flex'; // show spinner over poster

      video.addEventListener(
        'canplay',
        () => {
          videoLoaded = true;
          poster.style.display = 'none';
          loader.style.display = 'none';
          video.style.position = 'relative';
          video.style.display = 'block';
          video.play();
        },
        { once: true },
      );
    } else {
      // Already loaded — just play
      video.play();
    }
  } else {
    // Pause video when leaving docs tab
    const video = document.getElementById('docs-video');
    if (video) video.pause();
  }
}
