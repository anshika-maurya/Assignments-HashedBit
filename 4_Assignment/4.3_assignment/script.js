function toggleParagraph() {
    var para = document.getElementById("myPara");
    var btn = document.getElementById("toggleBtn");

    if (para.style.display === "none") {
        para.style.display = "block"; // Show the paragraph
        btn.textContent = "Hide";
    } else {
        para.style.display = "none"; // Hide the paragraph
        btn.textContent = "Show"; 
    }
}