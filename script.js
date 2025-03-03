// script.js

// Scroll to "Buy Now" section when button is clicked
function scrollToBuyNow() {
    const buyNowSection = document.getElementById('buy-now');
    if (buyNowSection) {
        buyNowSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Buy Now section not found.");
    }
}

// List of benefits
const benefits = [
    "No investment required – 100% free methods!",
    "Step-by-step guide for beginners!",
    "Works worldwide – anyone can do it!",
    "Passive income system that scales!",
    "Escape the rat race and take control of your income!",
    "Designed to tap into psychological triggers that make success inevitable!",
    "Turn financial stress into financial dominance with proven hacks!"
];

// Dynamically generate benefits list
document.addEventListener("DOMContentLoaded", () => {
    const benefitsList = document.getElementById("benefits-list");
    if (benefitsList) {
        benefits.forEach(benefit => {
            const item = document.createElement("div");
            item.className = "flex items-center space-x-3";
            item.innerHTML = `<span class="text-green-400">✔️</span><p class="text-gray-300 text-lg">${benefit}</p>`;
            benefitsList.appendChild(item);
        });
    } else {
        console.error("Benefits list element not found.");
    }
});
