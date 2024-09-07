// scripts.js

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isClosed = sidebar.style.transform === "translateX(-250px)";
    
    if (isClosed) {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(-250px)";
    }
}