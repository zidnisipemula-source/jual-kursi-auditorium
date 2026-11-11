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

/* =====================================================
   PORTOFOLIO: filter galeri + lightbox
===================================================== */
(function () {
  const tiles = Array.from(document.querySelectorAll("[data-lightbox]"));
  if (!tiles.length) return;

  document.querySelectorAll(".pf-filter [data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      document.querySelectorAll(".pf-filter button").forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      tiles.forEach((t) => { t.hidden = !(f === "all" || t.dataset.cat === f); });
    });
  });

  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Foto proyek");
  box.innerHTML = '<button type="button" class="lb-close" aria-label="Tutup">×</button><button type="button" class="lb-prev" aria-label="Foto sebelumnya">‹</button><figure><img alt=""><figcaption></figcaption></figure><button type="button" class="lb-next" aria-label="Foto berikutnya">›</button>';
  document.body.appendChild(box);
  const img = box.querySelector("img");
  const cap = box.querySelector("figcaption");
  let list = [], idx = 0, lastFocus = null;

  function show(i) {
    idx = (i + list.length) % list.length;
    const t = list[idx];
    img.src = t.getAttribute("href");
    img.alt = t.querySelector("img") ? t.querySelector("img").alt : "";
    cap.textContent = (t.dataset.title || "") + "  (" + (idx + 1) + " / " + list.length + ")";
  }
  function open(t) {
    list = tiles.filter((x) => !x.hidden);
    lastFocus = t;
    show(list.indexOf(t));
    box.classList.add("open");
    document.body.style.overflow = "hidden";
    box.querySelector(".lb-close").focus();
  }
  function close() {
    box.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  tiles.forEach((t) => t.addEventListener("click", (e) => { e.preventDefault(); open(t); }));
  box.querySelector(".lb-close").addEventListener("click", close);
  box.querySelector(".lb-prev").addEventListener("click", () => show(idx - 1));
  box.querySelector(".lb-next").addEventListener("click", () => show(idx + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();
