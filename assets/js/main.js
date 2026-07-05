// ---------- MENÚ HAMBURGUESA ----------
function initMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      // Si el carrito está abierto, lo cerramos al abrir el menú
      if (isOpen) {
        const cartPanel = document.getElementById('cartPanel');
        if (cartPanel && cartPanel.classList.contains('open')) {
          cartPanel.classList.remove('open');
          document.getElementById('cartOverlay')?.classList.remove('open');
        }
      }
    });
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

const tabs=document.querySelectorAll('.tab');const panels=document.querySelectorAll('.tab-panel');tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));panels.forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.tab)?.classList.add('active');}));
const lb=document.getElementById('lightbox');const lbImg=document.getElementById('lightboxImg');document.querySelectorAll('.gallery-grid button').forEach(btn=>btn.addEventListener('click',()=>{lbImg.src=btn.dataset.full;lbImg.alt=btn.querySelector('img')?.alt||'Foto HoolKuum';lb.classList.add('open');lb.setAttribute('aria-hidden','false');}));function closeLb(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbImg.src='';}document.getElementById('closeLightbox')?.addEventListener('click',closeLb);lb?.addEventListener('click',e=>{if(e.target===lb)closeLb();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('open'))closeLb();});

// Initialize menu on DOM ready
document.addEventListener('DOMContentLoaded', initMenu);