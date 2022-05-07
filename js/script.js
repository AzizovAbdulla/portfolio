const swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// const swiper2 = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     centeredSlides: true,
//     spaceBetween: 30,
//     grabCursor: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });


