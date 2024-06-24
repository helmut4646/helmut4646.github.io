// dark mode
const darkButton = document.querySelector('.dark-mode')
const header = document.querySelector('header');

let theme = localStorage.getItem('theme');
if(!theme){
         localStorage.setItem('theme', 'light')
}

const darkMode = () =>{
                  localStorage.setItem('theme', 'dark');
                  header.classList.add('dark-theme');
                  darkButton.classList.add('active');
                  header.classList.remove('light-theme');
         }  

 const lightMode = () =>{
                  localStorage.setItem('theme', 'light');
                  header.classList.remove('dark-theme');
                  header.classList.add('light-theme');
                  darkButton.classList.remove('active');
         }

if(theme === 'dark'){
         darkMode()
}

darkButton.addEventListener('click', (e) => {     
   darkButton.classList.toggle('active');
   theme = localStorage.getItem('theme');
   console.log(theme);
   if(theme === 'light'){
         darkMode();
   }else{
         lightMode();
   }
   e.preventDefault();
})

// burger menu
const burgerButton = document.querySelector('.ham');
const navbar = document.querySelector('nav');
burgerButton.addEventListener('click', () => {
       burgerButton.classList.toggle('active');
       navbar.classList.toggle('active');
});

// typed Effect
   const typedSpan = document.getElementById("typed")
  const totype = ["Front-End Web Developer", "Web Design", "Blogger"]

const delayTyping_char = 200;
const delayErasing_text = 150;
const delayTyping_text = 3000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
   if (charIndex < totype[totypeIndex].length) {
      typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, delayTyping_char);
   }
   else {
      setTimeout(eraseText, delayTyping_text);
   }
}

function eraseText() {
   if (charIndex > 0) {
      typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
      charIndex = charIndex-1;
      setTimeout(eraseText, delayErasing_text);
   }
   else {
      totypeIndex++;

      if (totypeIndex >= totype.length)
         totypeIndex = 0;
         setTimeout(typeText, delayTyping_text);
   }
}

window.onload = function() {
   if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
} 


// smooth scroll
(function () {
        const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            // t /= d / 2;
            // if (t < 1) return c / 2 * t * t + b;
            // t--;
            // return -c / 2 * (t * (t - 2) - 1) + b;

            // var ts = (t /= d) * t,
            // tc = ts * t;
            // return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);

             t /= d / 2;
             if (t < 1) {
              return c / 2 * t * t + b
            }
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
           };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    
    const scrollTo = function () {
        const links = document.querySelectorAll('nav ul li a');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
                   
                   const linkId = each.id;
                  const hrefLinkClick = each.href;

    links.forEach((link, i) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });

            });
        });
        
    };
    scrollTo();

// scroll Event
  document.addEventListener('scroll', function() {
          let links = document.querySelectorAll('nav ul li a');
          let section = document.querySelectorAll('section');
        

          section.forEach((i) => {         
          let top = window.scrollY;
          let offset = i.offsetTop - 150;
          // console.log(offset)
          let height = i.offsetHeight;
          // console.log(height)
          let id = i.getAttribute("id");

    if (top >= offset && top <= offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document.querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
        // console.log('ok');
      });
    }

  });
    });
 
}());

// light box
const galery = document.querySelectorAll('.galeri-info .thumb');
const preview = document.querySelector('.preview-image');
const previewImg = preview.querySelector('img');
const close = preview.querySelector('.details .close');
const currentImage = preview.querySelector('.title .current-img');
const totalImage = preview.querySelector('.title .total-img');
 
window.onload = () => {
     for(let i = 0; i < galery.length; i++){
           totalImage.textContent = galery.length;
           let newIndex = i;
           let clickedImgIndex;
     
        galery[i].onclick = ()=> {
           clickedImgIndex = i;
           // console.log(clickedImgIndex);
           function preView(){
               currentImage.textContent = newIndex + 1;
               // console.log(currentImage);
               let imageURL = galery[newIndex].querySelector('img').src;
               // console.log(imageURL);
               previewImg.src = imageURL;
               // console.log(previewImg);
             
           }
           preView();

           const prevBtn = document.querySelector('.prev');
           const nextBtn = document.querySelector('.next');
           if(newIndex == 0){
                     prevBtn.style.display = 'none';
           }
           if(newIndex >= galery.length - 1){
                     nextBtn.style.display = 'none';
           }


           prevBtn.addEventListener('click', ()=>{
                  newIndex--; //decrement index
                if(newIndex == 0){
                    preView(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preView();
                    nextBtn.style.display = "block";
                } 
           });

           nextBtn.addEventListener('click', ()=>{
                  newIndex++; //increment index
                if(newIndex >= galery.length - 1){
                    preView(); 
                    nextBtn.style.display = "none";
                }else{
                    preView(); 
                    prevBtn.style.display = "block";
                }
           });
            
           document.querySelector('body').style.overflow = 'hidden';
           preview.classList.add('show');
           close.addEventListener('click', ()=>{
                 newIndex = clickedImgIndex;
                 preview.classList.remove('show');
                  prevBtn.style.display = "block"; 
                  nextBtn.style.display = "block";
                 document.querySelector('body').style.overflow = 'scroll';
           });
 
        }

     }
};


