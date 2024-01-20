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

// Jump Links
const anchors = document.querySelectorAll('a[href^="#"]');

function smoothScroll(target) {
  const element = document.getElementById(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}

anchors.forEach(function(anchor) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const target = anchor.getAttribute('href').substring(1);
    
    document.getElementById(target).setAttribute('tabindex', '-1')
    document.getElementById(target).focus()
    smoothScroll(target);
  });
});