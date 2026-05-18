console.log("Chalakudy Forest Website Loaded");



function changeLanguage(lang) {

    const select = document.querySelector(".goog-te-combo");

    if (select) {

        select.value = lang;

        select.dispatchEvent(new Event("change"));

    }

}



// MALAYALAM BUTTON

document.getElementById("malayalamBtn")
.addEventListener("click", function(e){

    e.preventDefault();

    changeLanguage("ml");

});



// ENGLISH BUTTON

document.getElementById("englishBtn")
.addEventListener("click", function(e){

    e.preventDefault();

    changeLanguage("en");

});

const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

/* SHOW SLIDE */

function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

/* NEXT */

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

/* PREVIOUS */

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

/* BUTTON EVENTS */

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

/* AUTO SLIDE */

setInterval(nextSlide, 4000);