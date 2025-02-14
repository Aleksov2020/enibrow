document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".roll-block").forEach((rollBlock, index) => {
        const toggleButton = document.querySelectorAll(".button-roll-block")[index];

        const maxHeight = "194px"; // Высота в свернутом состоянии
        const fullHeight = rollBlock.scrollHeight + "px"; // Полная высота контента

        let isExpanded = true;

        if (isExpanded) {
            rollBlock.classList.add("expanded")
            rollBlock.style.height = maxHeight;
            toggleButton.textContent = "Развернуть текст";
        } else {
            rollBlock.style.height = fullHeight;
            toggleButton.textContent = "Свернуть текст";
        }

        // Устанавливаем начальное состояние (свернуто)
        rollBlock.style.height = maxHeight;
        rollBlock.style.overflow = "hidden";
        rollBlock.style.transition = "height 0.3s ease-in-out";

        toggleButton.addEventListener("click", () => {
            if (isExpanded) {
                rollBlock.classList.add("expanded")
                rollBlock.style.height = maxHeight;
                toggleButton.textContent = "Развернуть текст";
            } else {
                rollBlock.classList.remove("expanded")
                rollBlock.style.height = fullHeight;
                toggleButton.textContent = "Свернуть текст";
            }
            isExpanded = !isExpanded;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track-reviews");
    const slides = document.querySelectorAll(".review-card");
    const prevButton = document.querySelector(".reviews-button.prev-button");
    const nextButton = document.querySelector(".reviews-button.next-button");
    
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 30; // Ширина слайда + gap (30px)

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возвращаемся к первому слайду
        }
        updateSlidePosition();
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Переход к последнему слайду
        }
        updateSlidePosition();
    });
});