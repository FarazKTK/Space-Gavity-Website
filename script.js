window.addEventListener('load', function () {
      setTimeout(function () {
        document.body.classList.add('loaded');
      }, 1000);
});



var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }
});


 // Image Slider
  new Swiper(".imageSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 }
    },
  });




  // Popup Form Styling 
 function openForm() {
    document.getElementById("myForm").style.display = "flex";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

