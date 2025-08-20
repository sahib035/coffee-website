
let menuList = document.getElementById("menulist");
menuList.style.maxHeight = "0px"; 

function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "400px"; 
  }else{
    menuList.style.maxHeight = "0px"; 
  }
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    menuList.style.maxHeight = "0px"; // menu close
  });
});

// Code for swiper

const swiper = new Swiper('.slider-wrapper', {

  spaceBetween:25,
  grabCursor:true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    DynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

/* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

});