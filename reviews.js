document.addEventListener("DOMContentLoaded", function() {
    const reviewCards = document.querySelectorAll(".review-card");

    reviewCards.forEach(card => {
        card.addEventListener("mouseover", function() {
            const detail = card.querySelector(".review-detail");
            if (!detail.innerHTML) {
                detail.innerHTML = `
                    <img src="${card.dataset.image}" alt="${card.dataset.package}">
                    <h4>${card.dataset.package}</h4>
                    <div class="stars">${card.dataset.stars}</div>
                    <p>${card.dataset.review}</p>
                `;
            }
            card.classList.add("expanded");
        });

        card.addEventListener("mouseout", function() {
            card.classList.remove("expanded");
        });
    });
});