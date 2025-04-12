// Check localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }
});

const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  if (isDark) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

