import Swiper, { Navigation, Pagination } from 'swiper';

export default function rates() {
  const swiper = new Swiper('.rates__list-product', {
    // Optional parameters
    direction: 'horizontal',
    modules: [Navigation, Pagination],
    loop: false,
    spaceBetween: 28,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 1.75,
      },
      1920: {
        slidesPerView: 'auto',
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  let item = document.querySelectorAll('.rates__cart');
  let number = 1;
  item.forEach((value, key) => {
    number = number - 0.3;
    value.style.opacity = number;

  })
  swiper.on('slideChange', function (e) {
      item.forEach((value, key) => {
        if (key <= swiper.activeIndex) {
          number = 0.8;
          number = number + 0.3;
          value.style.opacity = number;
        } else {
          number = number - 0.3;
          value.style.opacity = number;
        }
        
      });
      


  });
}