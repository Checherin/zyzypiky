// script.js

// Функция для проверки, виден ли элемент на экране
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления класса с анимацией при видимости элемента
function handleScrollAnimation() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', handleScrollAnimation);

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
