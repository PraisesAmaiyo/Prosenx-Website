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
    document.getElementById('starter-price').textContent = '₦4,999';
    document.getElementById('starter-period').textContent = ' / month';
    document.getElementById('starter-annual-note').style.display = 'block';
    document.getElementById('pro-price').textContent = '₦11,999';
    document.getElementById('pro-period').textContent = ' / month';
    document.getElementById('pro-annual-note').style.display = 'block';
  } else {
    document.getElementById('starter-price').textContent = '₦6,999';
    document.getElementById('starter-period').textContent = ' / month';
    document.getElementById('starter-annual-note').style.display = 'none';
    document.getElementById('pro-price').textContent = '₦14,999';
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
      // First time clicking docs tab - start loading the video
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
      // Already loaded - just play
      video.play();
    }
  } else {
    // Pause video when leaving docs tab
    const video = document.getElementById('docs-video');
    if (video) video.pause();
  }
}

// Tesimonial section

// const testimonials = [
//   {
//     name: 'Verified Compliance Audit',
//     role: 'HSE Manager • Mari**** Logistics Limited',
//     content:
//       'We used to track over 40 dynamic NIMASA and DPR certificates using an Excel sheet. One missed cell almost cost us our mobilization pass last year. Managing this manually is a massive risk.',
//     image:
//       'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Industry Survey Feedback',
//     role: 'Procurement Director • Pre**** Constructions',
//     content:
//       'When vetting sub-contractors for major JV tenders, an expired compliance document is the fastest way to drop an agency. We don’t check intentions; we check active validity dates.',
//     image:
//       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Verified Compliance Audit',
//     role: 'Managing Director • Oilfield Services',
//     content:
//       'The cost of keeping heavy machinery standby because a local statutory permit renewal delayed at the state level is insane. If you lack early warnings, you bleed operational cash flow.',
//     image:
//       'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Tender Board Review',
//     role: 'Contract Engineer • EPC Contractor',
//     content:
//       'People focus on technical proposals, but compliance vetting is the real gatekeeper. If your NSITF or ITF paperwork is caught invalid by even 48 hours, your tender file gets packed away.',
//     image:
//       'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Industry Survey Feedback',
//     role: 'Operations Lead • Scaffolding & Haulage',
//     content:
//       'A spreadsheet reminder only works if someone opens the document daily. Having an automatic tracker that pushes clear email warnings directly to the person responsible changes everything.',
//     image:
//       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Verified Compliance Audit',
//     role: 'HSE Consultant • Regulatory Advisory',
//     content:
//       'Most operational lapses aren’t intentional; they happen because managers forget. When tracking moves out of memory and into automation, compliance rates hit absolute safety.',
//     image:
//       'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Verified Compliance Audit',
//     role: 'QHSE Director • Energy Infrastructure',
//     content:
//       'During our last corporate review, pulling up old certificate variations manually took days. Transitioning to a system with an automatic history trail saved our audit timeline.',
//     image:
//       'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=100&h=100&q=80',
//   },
//   {
//     name: 'Tender Board Review',
//     role: 'Procurement Specialist • Supply Chain Partner',
//     content:
//       'We frequently see sub-contractors lose out on massive mobilization windows because a tiny statutory paper expired during the bidding break. Prosenx solves a very expensive problem.',
//     image:
//       'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=100&h=100&q=80',
//   },
// ];

const testimonials = [
  {
    label: 'The Excel Gap',
    content:
      'Many contractors track dozens of NIMASA, DPR, and statutory certificates on a single spreadsheet. One missed cell, one wrong date, and a mobilization pass is gone.',
  },
  {
    label: 'The Tender Disqualification',
    content:
      "During sub-contractor vetting for JV tenders, an expired compliance document is the fastest way to get dropped. Intentions don't matter — only active validity dates do.",
  },
  {
    label: 'The 48-Hour Cutoff',
    content:
      'Technical proposals get the attention, but compliance paperwork is the real gatekeeper. An NSITF or ITF document caught invalid by even 48 hours can get a tender file pulled entirely.',
  },
  {
    label: 'The Silent Reminder',
    content:
      'A spreadsheet reminder only works if someone remembers to open it. Without an automatic alert reaching the person responsible, renewal dates quietly pass unnoticed.',
  },
  {
    label: 'The Memory Lapse',
    content:
      "Most compliance failures aren't willful — they happen because a renewal date lived in someone's head instead of a system. The moment tracking depends on memory, it eventually fails.",
  },
  {
    label: 'The Audit Scramble',
    content:
      'When a corporate review or client audit requests certificate history, pulling old versions and renewal trails manually can take days. Without a record, the scramble starts from zero.',
  },
  {
    label: 'The Mobilization Window',
    content:
      'Sub-contractors regularly lose mobilization windows because one statutory document expired mid-bid. A small administrative gap becomes a very expensive missed contract.',
  },
];

const createTestimonialCard = (testimonial) => {
  return `
        <div class="card">
            <div class="content">
              ${testimonial.content}
            </div>
          </div>
    `;
  //   <div class="card">
  //       <div class="profile">
  //         <img src="${testimonial.image}" alt="${testimonial.name}" />
  //         <div>
  //           <div class="name">${testimonial.name}</div>
  //           <div class="role">${testimonial.role}</div>
  //         </div>
  //       </div>

  //       <div class="content">
  //         ${testimonial.content}
  //       </div>
  //     </div>
};

const populateColumn = (columnId) => {
  const column = document.getElementById(columnId);
  if (!column) return;

  [...testimonials, ...testimonials].forEach((testimonial) => {
    column.innerHTML += createTestimonialCard(testimonial);
  });
};

// Randomized infinite scroll loops
testimonials.sort(() => Math.random() - 0.5);
populateColumn('column1');
testimonials.sort(() => Math.random() - 0.5);
populateColumn('column2');
testimonials.sort(() => Math.random() - 0.5);
populateColumn('column3');
