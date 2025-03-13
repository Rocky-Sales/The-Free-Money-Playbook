// script.js

// Scroll to "Buy Now" section when button is clicked
function scrollToBuyNow() {
    const buyNowSection = document.getElementById('buy-now');
    if (buyNowSection) {
        buyNowSection.scrollIntoView({ behavior: 'smooth' });
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
    "Turn financial stress into financial dominance with proven hacks!",
    "Leverage hidden opportunities the wealthy don’t want you to know!",
    "No skills? No problem! Start earning today with zero experience!",
    "Automate your income and make money while you sleep!",
    "Works even if you're broke – no credit card or upfront cost needed!",
    "A bulletproof system that eliminates guesswork and maximizes results!",
    "Unlock secret income streams with untapped earning potential!",
    "No risky investments, no scams – just real, actionable strategies!",
    "A beginner-friendly blueprint that guarantees financial success!",
    "Ditch the 9-to-5 and achieve true financial freedom on your terms!",
    "Master the art of making money online without ever spending a dime!",
    "Break free from paycheck-to-paycheck living – start today!",
    "Transform your spare time into a money-making machine!",
    "Proven tactics to multiply your earnings effortlessly!",
    "Monetize your skills, hobbies, and passions without upfront costs!",
    "Revolutionary earning methods that adapt to any economy!",
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
