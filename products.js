document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const carousel = document.getElementById('carousel');
    const leftButton = document.getElementById('carousel-left');
    const rightButton = document.getElementById('carousel-right');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function moveCarousel(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        updateCarousel();
    }

    leftButton.addEventListener('click', () => moveCarousel(-1));
    rightButton.addEventListener('click', () => moveCarousel(1));

    updateCarousel();
});
