document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show-menu');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards-container .first', { delay: 200 });
ScrollReveal().reveal('.cards-container .second', { delay: 400 });
ScrollReveal().reveal('.cards-container .third', { delay: 600 });
ScrollReveal().reveal('.cards-container .fourth', { delay: 800 });
ScrollReveal().reveal('.banner', { delay: 250 });