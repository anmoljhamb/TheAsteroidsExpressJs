let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//    navbar.classList.toggle('active');
// }

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () => {
      faqBox.parentElement.classList.toggle('active');
   }
});

var swiper = new Swiper(".gallery-slider", {
   loop: true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
         slidesPerView: 1,
      },
      991: {
         slidesPerView: 2,
      },
   },
});


const openLink = (id) => {
   window.open(`/blog/${id}`, target="_self")
}

