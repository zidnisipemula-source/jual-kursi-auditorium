const root = document.documentElement;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

const MOBILE_QUERY = "(max-width: 1100px)";

/* =====================================================
   NAVIGASI: menu mobile
===================================================== */
function closeMenu() {
  if (nav && toggle) {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
    toggle.textContent = "☰";
  }
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  // Setiap tautan di menu menutup menu (termasuk tautan submenu pada halaman yang sama).
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const menuWasOpen = nav && nav.classList.contains("open");
  closeMenu();
  if (menuWasOpen && toggle) toggle.focus();
});

// Tutup saat mengetuk di luar menu / dropdown.
document.addEventListener("click", (event) => {
  if (nav && nav.classList.contains("open") && !event.target.closest(".site-header")) closeMenu();
});

// Reset status menu saat kembali ke tampilan desktop.
window.addEventListener("resize", () => {
  if (!window.matchMedia(MOBILE_QUERY).matches) closeMenu();
});
