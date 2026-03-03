// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navbar efecto scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");

// Cargar tema guardado
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        themeToggle.checked = true;
    }
});

// Cambiar tema
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
    }
});

// Validación formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (name.value.trim().length < 3) {
        name.classList.add("is-invalid");
        valid = false;
    } else name.classList.remove("is-invalid");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
    } else email.classList.remove("is-invalid");

    if (message.value.trim().length < 10) {
        message.classList.add("is-invalid");
        valid = false;
    } else message.classList.remove("is-invalid");

    if (valid) {
        alert("Formulario enviado correctamente");
        this.reset();
    }
});
