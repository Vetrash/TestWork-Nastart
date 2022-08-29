
const swiper = new Swiper('.catalog', {
    slidesPerView: 4,
     spaceBetween: 24,
   
    loop: true,
  
    /*// If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },*/
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1500: {
          slidesPerView: 4,
        },
        1140: {
            slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 24,
      },
        40: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    }
  
    
  });

  
const swiper2 = new Swiper('.map-swiper', {
  
  slidesPerView: 1,
 freeMode: true,
 //loop: true,
 breakpoints: {
 
  900: {
    allowTouchMove: false,
},
  40: {
    allowTouchMove: true,
  },
}
  

  
  
  
});