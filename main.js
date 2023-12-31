// Swiper Slider
const swiper = new Swiper('.swiper', {
    
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    lazy: true,
    a11y: {
        enabled: true
    },
  
  });
  