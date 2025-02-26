const button = document.getElementById("toggleTheme");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});