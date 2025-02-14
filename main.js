/* header open menu */

const headerItems = document.querySelectorAll(".nav__item");

headerItems.forEach((item) => {
    const dropdown = item.querySelector(".services-header-wrapper"); // Находим вложенное меню
    const arrow = item.querySelector("img"); // Находим стрелку

    if (dropdown) { // Проверяем, есть ли вложенное меню
        item.addEventListener("click", () => {
            const isOpen = dropdown.classList.contains("active");

            // Закрываем все открытые меню
            document.querySelectorAll(".services-header-wrapper").forEach((el) => {
                el.classList.remove("active");
            });

            // Переключаем класс "active" для текущего элемента
            if (!isOpen) {
                dropdown.classList.add("active");
            } 

            // Переключаем поворот стрелки
            arrow.classList.toggle("rotate", !isOpen);
        });
    }
});

//=============================CHECKOX

document.querySelectorAll(".checkbox").forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checked");
    });
});

//============================= GALLERY CATEGORY

document.querySelectorAll(".gallery-category").forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        document.querySelectorAll(".gallery-category").forEach((el) => {
            el.classList.remove("active");
        });

        checkbox.classList.toggle("active");
    });
});

document.querySelectorAll(".gallery-master-cards-likes-photo").forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("active");
    });
});


// ===================== SLIDER SALES
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".discont-slide-item");
    console.log(slides.length)

    const prevButton = document.querySelector(".discont-slider-button.prev-button");
    const nextButton = document.querySelector(".discont-slider-button.next-button");
    let currentIndex = 0;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Циклический переход
        }
        updateSlidePosition();
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Циклический переход
        }
        updateSlidePosition();
    });
});


// ===================== SLIDER REVIEWS

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track-reviews");
    const slides = document.querySelectorAll(".review-card");
    const nextButton = document.querySelector(".reviews-button.prev-button");
    const prevButton = document.querySelector(".reviews-button.next-button");
    
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
        isExpanded = !isExpanded;

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



//===========================SLIDER SERVICE PAGE=======================================

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".service-page-slider-track");
    const slides = document.querySelectorAll(".service-page-slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
    const visibleSlides = 2; // Количество видимых слайдов

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * (slideWidth + 24)}px)`;
        console.log(slideWidth)
        console.log(currentIndex)
        updateVisibleClasses();
    }

    function updateVisibleClasses() {
        slides.forEach((slide, index) => {
            slide.classList.remove("slide-visible-one", "slide-visible-two", "slide-visible-three");

            if (index === currentIndex) {
                slide.classList.add("slide-visible-one");
            }
            if (index === currentIndex + 1) {
                slide.classList.add("slide-visible-two");
            }
            if (index === currentIndex + 2) {
                slide.classList.add("slide-visible-three");
            }
        });
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0; // Зацикливание
        }
        updateSlidePosition();
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - visibleSlides; // Зацикливание в обратном направлении
        }
        updateSlidePosition();
    });

    // Устанавливаем классы для первых двух слайдов при загрузке
    updateVisibleClasses();
});




//====================== BLOG ARCHIVE CATEGORY

document.querySelectorAll(".blog-page-category-item").forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        document.querySelectorAll(".blog-page-category-item").forEach((el) => {
            el.classList.remove("selected");
        });

        checkbox.classList.toggle("selected");
    });
});

//===================================== PAGE BLOG FORM

document.addEventListener("DOMContentLoaded", function () {
    const formWrapper = document.querySelector(".form-sidebar");
    const textWrapper = document.querySelector(".faq-page-text-wrapper.main-text");
    const authorWrapper = document.querySelector(".author-footer");

    if (!formWrapper || !textWrapper) return; // Проверяем, есть ли элементы

    console.log(textWrapper.getBoundingClientRect())

    let isFixed = false; // Флаг, чтобы предотвратить "моргание"
    let isScrolledFull = false
    let isUnScrolledYet = true

    window.addEventListener("scroll", () => {
        const rect = textWrapper.getBoundingClientRect(); // Получаем положение `.faq-page-text-wrapper`
        const distanceToTop = rect.y - window.innerHeight; // Расстояние до нижнего края окна
        const distanceToBottom = authorWrapper.getBoundingClientRect().y - window.innerHeight;

        if (distanceToTop < -1220) {
            isUnScrolledYet = false
        } else {
            isUnScrolledYet = true
        }

        if (distanceToBottom < -840) {
            isScrolledFull = true
        } else {
            isScrolledFull = false
        }

        if (!isUnScrolledYet && !isScrolledFull) {
            formWrapper.classList.add("fixed");
        } else {
            formWrapper.classList.remove("fixed")
        }
    });
});


