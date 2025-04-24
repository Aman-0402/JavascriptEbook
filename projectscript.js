// script.js

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
  
    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
    }
  
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
  });
  