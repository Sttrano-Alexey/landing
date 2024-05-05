const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.review-slider-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.review-button-next',
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        1699: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

