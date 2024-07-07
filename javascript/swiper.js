document.addEventListener('DOMContentLoaded', function () {
    // Swiper initialization code
    const swiper = new Swiper('.js-testimonial-slider', {
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: '.js-testimonial-pagination',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 2
            }
        }
    });
});
