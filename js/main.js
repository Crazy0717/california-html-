const swiper = new Swiper(".swiper", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new TypeIt(".title", {
  speed: 100,
  strings: "The new phones are here take a look.",
}).go();
