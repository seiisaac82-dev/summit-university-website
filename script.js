const menuButton = document.querySelector(".menu");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#feedback");
if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    feedback.textContent = "Thanks! This is a demo form, so your message has not been sent.";
    form.reset();
  });
}

// Dark mode toggle with a saved local preference.
const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
let theme = "light";
try { theme = localStorage.getItem("summit-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch (_) {}
function applyTheme(value) {
  root.dataset.theme = value;
  if (themeToggle) {
    themeToggle.textContent = value === "dark" ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", value === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}
applyTheme(theme);
if (themeToggle) themeToggle.addEventListener("click", () => {
  theme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  try { localStorage.setItem("summit-theme", theme); } catch (_) {}
});

// Search and filter the programme cards.
const cards = [...document.querySelectorAll(".program[data-category]")];
const programSearch = document.querySelector("#program-search");
const filters = [...document.querySelectorAll(".filter[data-filter]")];
const emptyState = document.querySelector("#program-empty");
let activeFilter = "all";
function updatePrograms() {
  const query = (programSearch?.value || "").trim().toLowerCase();
  let count = 0;
  cards.forEach(card => {
    const matchCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchText = !query || (card.dataset.search + " " + card.textContent).toLowerCase().includes(query);
    card.hidden = !(matchCategory && matchText);
    if (!card.hidden) count++;
  });
  if (emptyState) emptyState.hidden = count > 0;
}
filters.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach(item => {
    item.classList.toggle("active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  updatePrograms();
}));
if (programSearch) programSearch.addEventListener("input", updatePrograms);

// Accessible campus image preview dialog.
document.querySelectorAll(".gallery-item").forEach(button => button.addEventListener("click", () => {
  const dialog = document.querySelector("#image-dialog");
  const image = document.querySelector("#lightbox-image");
  const caption = document.querySelector("#lightbox-caption");
  if (!dialog || !image || !caption) return;
  image.src = button.dataset.full;
  image.alt = button.querySelector("img")?.alt || "Campus photo";
  caption.textContent = button.dataset.caption || "";
  if (dialog.showModal) dialog.showModal(); else dialog.setAttribute("open", "");
}));

// Site-wide search for important sections.
const searchDialog = document.querySelector("#search-dialog");
const searchToggle = document.querySelector("#search-toggle");
const siteSearch = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
const sections = [
  ["Home", "Welcome to Summit University", "#home", "home welcome"],
  ["About Summit", "Our purpose and community", "#about", "about mission purpose community"],
  ["Academic programmes", "Browse study areas", "#academics", "academics courses programmes programs computing engineering science business"],
  ["Campus life", "Photo gallery", "#campus", "campus life gallery students photos"],
  ["Admissions", "Application steps and enquiries", "#admissions", "admissions apply entry requirements"],
  ["News and events", "Stories and calendar", "#news", "news events stories calendar"],
  ["Frequently asked questions", "Answers to common questions", "#faq", "faq questions answers"],
  ["Contact", "Email and contact form", "#contact", "contact email message"]
];
function renderSiteSearch() {
  if (!siteSearch || !searchResults) return;
  const q = siteSearch.value.trim().toLowerCase();
  searchResults.replaceChildren();
  if (!q) { const p = document.createElement("p"); p.className = "muted"; p.textContent = "Start typing to find pages and sections."; searchResults.append(p); return; }
  const matches = sections.filter(s => s.join(" ").toLowerCase().includes(q));
  if (!matches.length) { const p = document.createElement("p"); p.className = "muted"; p.textContent = "No matching sections. Try admissions, campus, or programmes."; searchResults.append(p); return; }
  matches.forEach(s => {
    const a = document.createElement("a"); a.href = s[2];
    const strong = document.createElement("strong"); strong.textContent = s[0];
    const small = document.createElement("small"); small.textContent = s[1];
    a.append(strong, small); a.addEventListener("click", () => searchDialog?.close()); searchResults.append(a);
  });
}
if (searchToggle && searchDialog) searchToggle.addEventListener("click", () => {
  if (searchDialog.showModal) searchDialog.showModal(); else searchDialog.setAttribute("open", "");
  siteSearch?.focus();
});
if (siteSearch) siteSearch.addEventListener("input", renderSiteSearch);

// Email helper: validates the form and opens a draft in the visitor's email app.
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#feedback");
if (contactForm && feedback) contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const subject = encodeURIComponent("Summit University enquiry: " + data.get("topic"));
  const body = encodeURIComponent("Name: " + data.get("name") + "\\nReply email: " + data.get("email") + "\\nTopic: " + data.get("topic") + "\\n\\nMessage:\\n" + data.get("message"));
  feedback.textContent = "Opening your email app with a draft. Review it and press Send in your email app.";
  window.location.href = "mailto:seiisaac82@gmail.com?subject=" + subject + "&body=" + body;
});

// Back-to-top button.
const backTop = document.querySelector("#back-top");
if (backTop) {
  const update = () => backTop.classList.toggle("visible", window.scrollY > 450);
  window.addEventListener("scroll", update, {passive:true});
  update();
  backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}
document.querySelectorAll("[data-topic]").forEach(link => link.addEventListener("click", () => {
  const topic = document.querySelector("#topic");
  if (topic) topic.value = link.dataset.topic;
}));
