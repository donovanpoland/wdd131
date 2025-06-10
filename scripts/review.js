
const count = localStorage.getItem("reviewCount") || 0;
document.getElementById("review-count").textContent = 
    `You've submitted ${count} review${count == 1 ? '' : 's'}.`;

