/**
 * Prosenx — Floating WhatsApp Widget
 * Vanilla JS, no dependencies. Injects itself into the page on load.
 *
 * Usage: include this script on every page —
 * <script src="./js/whatsapp-widget.js" defer></script>
 *
 * Update WHATSAPP_NUMBER and WHATSAPP_MESSAGE below before deploying.
 */

(function () {
  // ── Config — update these ──────────────────────────────────────────────
  const WHATSAPP_NUMBER = '2348130909020';
  const WHATSAPP_MESSAGE = "Hi, I'd like to know more about Prosenx.";

  // ── Build the widget markup ────────────────────────────────────────────
  function injectWidget() {
    if (document.getElementById('prosenx-whatsapp-widget')) return; // avoid duplicates

    const style = document.createElement('style');
    style.textContent = `
      #prosenx-whatsapp-widget {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: .75rem;
      }
      #prosenx-whatsapp-tooltip {
        background: var(--surface, #19202f);
        color: var(--text, #f0f2f8);
        border: 1px solid var(--border, rgba(255,255,255,0.1));
        font-family: 'Inter', sans-serif;
        font-size: .8125rem;
        font-weight: 500;
        padding: .625rem 1rem;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        opacity: 0;
        transform: translateY(8px);
        transition: opacity .25s, transform .25s;
        pointer-events: none;
        white-space: nowrap;
      }
      #prosenx-whatsapp-tooltip.visible {
        opacity: 1;
        transform: translateY(0);
      }
      #prosenx-whatsapp-btn {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #25D366;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 24px rgba(37,211,102,0.4);
        cursor: pointer;
        border: none;
        transition: transform .2s, box-shadow .2s;
        position: relative;
      }
      #prosenx-whatsapp-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 10px 28px rgba(37,211,102,0.5);
      }
      #prosenx-whatsapp-btn svg {
        width: 30px;
        height: 30px;
        fill: #fff;
      }
      #prosenx-whatsapp-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #25D366;
        opacity: .5;
        animation: prosenx-whatsapp-pulse 2.2s ease-out infinite;
      }
      @keyframes prosenx-whatsapp-pulse {
        0%   { transform: scale(1); opacity: .5; }
        70%  { transform: scale(1.6); opacity: 0; }
        100% { transform: scale(1.6); opacity: 0; }
      }
      @media (max-width: 480px) {
        #prosenx-whatsapp-widget { bottom: 1rem; right: 1rem; }
        #prosenx-whatsapp-btn { width: 50px; height: 50px; }
        #prosenx-whatsapp-btn svg { width: 26px; height: 26px; }
        #prosenx-whatsapp-tooltip { font-size: .75rem; }
      }
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.id = 'prosenx-whatsapp-widget';
    wrapper.innerHTML = `
      <div id="prosenx-whatsapp-tooltip">Chat with us on WhatsApp</div>
      <button id="prosenx-whatsapp-btn" aria-label="Chat with Prosenx on WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.76-.881-2.91-1.572-4.066-3.565-.307-.527.307-.489.879-1.627.099-.198.05-.371-.05-.52-.099-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.057 3.146 4.985 4.286 2.928 1.14 2.928.76 3.892.662.965-.099 1.964-.802 2.243-1.575.279-.773.279-1.434.198-1.575-.08-.149-.297-.198-.594-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.105 1.51 5.832L0 24l6.32-1.474A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.013-1.378l-.36-.214-3.741.874.85-3.612-.236-.372A9.793 9.793 0 0 1 2.182 12C2.182 6.582 6.582 2.182 12 2.182S21.818 6.582 21.818 12 17.418 21.818 12 21.818z"/>
        </svg>
      </button>
    `;
    document.body.appendChild(wrapper);

    // ── Behavior ──────────────────────────────────────────────────────────
    const btn = document.getElementById('prosenx-whatsapp-btn');
    const tooltip = document.getElementById('prosenx-whatsapp-tooltip');

    // Show tooltip briefly on load to draw attention
    setTimeout(() => tooltip.classList.add('visible'), 1200);
    setTimeout(() => tooltip.classList.remove('visible'), 5500);

    // Show tooltip on hover (desktop)
    btn.addEventListener('mouseenter', () => tooltip.classList.add('visible'));
    btn.addEventListener('mouseleave', () =>
      tooltip.classList.remove('visible'),
    );

    // Click — open WhatsApp chat
    btn.addEventListener('click', () => {
      const encodedMsg = encodeURIComponent(WHATSAPP_MESSAGE);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // ── Run once DOM is ready ──────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWidget);
  } else {
    injectWidget();
  }
})();
