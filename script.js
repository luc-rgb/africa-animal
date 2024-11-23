let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

function showSlide(index) {
    // Set the active slide
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // Update the slider transform to create a sliding effect
    const translateX = -index * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Auto-slide every 8 seconds
setInterval(() => {
    nextSlide();
}, 8000);

// Initialize the first slide
showSlide(currentIndex);
