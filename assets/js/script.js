// burger menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('nav ul'); 
const link = document.querySelectorAll('.links')
const body = document.querySelector('body'); 
burgerMenu.addEventListener('click', function(){
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('active');

      for(let i = 0; i < link.length; i++){
             link[i].addEventListener('click', function() {
                  body.removeAttribute('class');
                  // navMenu.classList.toggle('active');
                  navMenu.classList.remove('active');
                  burgerMenu.classList.remove('active');
             });
      }
     
});


// Slide Portfolio 
let slidePortfolio = document.querySelectorAll('.portfolio-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0;

 
prevButton.addEventListener('click', function(e){
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        plusSlides(-1);
});

nextButton.addEventListener('click', function(){
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        plusSlides(1);
});

const showSlides = (n) => {
            let i;

            if (n > slidePortfolio.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slidePortfolio.length;
            }

            for (i = 0; i < slidePortfolio.length; i++) {
                slidePortfolio[i].style.display = "none";
            }
            slidePortfolio[slideIndex - 1].style.display = 'flex';
        };

    const autoSlides = function() {
            let i;

            for (i = 0; i < slidePortfolio.length; i++) {
                slidePortfolio[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slidePortfolio.length) {
                slideIndex = 1;
            }

            slidePortfolio[slideIndex - 1].style.display = "flex";
          
        }
        autoSlides();     


// // scroll to top
//  const scrollToTopBtn = document.querySelector(".toTop");
//  const rootElement = document.documentElement;

// function handleScroll() {
//   // Do something on scroll
//   const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//   if (rootElement.scrollTop / scrollTotal > 0) {
//     // Show button
//     scrollToTopBtn.classList.add("showBtn");
//   } else {
//     // Hide button
//     scrollToTopBtn.classList.remove("showBtn");
//   }
// }

// function scrollToTop() {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);
// document.addEventListener("scroll", handleScroll); 


