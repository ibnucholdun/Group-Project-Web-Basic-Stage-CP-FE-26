const swipper = () => {
    const swiper = new Swiper(".swiper", {
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // Default parameters
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        769: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  };

export default swipper;