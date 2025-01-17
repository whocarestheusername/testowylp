// Skrypt do dynamicznych funkcji w przyszłości
console.log("Script loaded");
const testimonials = [
    "<strong>Adam:</strong> Jestem zachwycony jakością wykonania! Każdy detal był perfekcyjny.",
    "<strong>Adaś:</strong> Świetny kontakt i profesjonalizm. Biżuteria przeszła moje oczekiwania.",
    "<strong>Ada:</strong> Przepiękny projekt i doskonała realizacja. Cieszę się, że wybrałam Waszą firmę."
];
let currentTestimonialIndex = 0;

function updateTestimonial() {
    const testimonialText = document.getElementById("testimonial-text");
    testimonialText.innerHTML = `<p>${testimonials[currentTestimonialIndex]}</p>`;
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}
