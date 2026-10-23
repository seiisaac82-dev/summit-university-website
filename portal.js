const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");
let theme = "light";
try { theme = localStorage.getItem("summit-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch (_) {}
function applyTheme(value) {
  root.dataset.theme = value;
  if (toggle) {
    toggle.textContent = value === "dark" ? "☀" : "☾";
    toggle.setAttribute("aria-label", value === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}
applyTheme(theme);
if (toggle) toggle.addEventListener("click", () => {
  theme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  try { localStorage.setItem("summit-theme", theme); } catch (_) {}
});
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
