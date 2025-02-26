document.addEventListener("DOMContentLoaded", () => {
    const modeBtn = document.getElementById("modeBtn");
    const modeText = document.getElementById("modeText");
    const modeIcon = document.getElementById("modeIcon");
    const root = document.documentElement;
    let darkMode = localStorage.getItem("dark-mode") === "true";
    
    function applyTheme() {
        if (darkMode) {
            root.style.setProperty("--lm-bg", "#141D2F");
            root.style.setProperty("--lm-bg-content", "#1E2A47");
            root.style.setProperty("--lm-text", "white");
            modeText.innerText = "LIGHT";
            modeIcon.src = "./Images/sun-icon.svg";
        } else {
            root.style.setProperty("--lm-bg", "#F6F8FF");
            root.style.setProperty("--lm-bg-content", "#FEFEFE");
            root.style.setProperty("--lm-text", "#4B6A9B");
            modeText.innerText = "DARK";
            modeIcon.src = "./Images/moon-icon.svg";
        }
        localStorage.setItem("dark-mode", darkMode);
        document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lm-bg");
    }
    
    modeBtn.addEventListener("click", () => {
        darkMode = !darkMode;
        applyTheme();
    });
    
    applyTheme();
});