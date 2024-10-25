// Swiper Slider
var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.disable();
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

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

    document.querySelector(".nav-container").classList.remove("open")
    document.querySelector(".nav-toggle").classList.remove("active")
    document.body.classList.remove("nav-active")
    
    document.getElementById(target).setAttribute('tabindex', '-1')
    document.getElementById(target).focus()
    smoothScroll(target);
  });
});

// Nav Toggle
const navToggle = document.querySelector(".nav-toggle")

navToggle.addEventListener("click", function() {
  let menu = this.nextElementSibling

  this.classList.toggle("active")
  menu.classList.toggle("open")
  document.body.classList.toggle("nav-active")
})