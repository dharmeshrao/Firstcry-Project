var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides() {
    console.log("sagar");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds

}
let sliding = document.querySelector('.slideshow-container')
let nav = document.getElementById('containerfornav');
function doit(){
        nav.style.display = 'grid'
        sliding.style.display = 'none'
}
nav.addEventListener('mouseleave', itdo)
function itdo(){
    sliding.style.display = 'block'
      nav.style.display = 'none'
}

function log() {
 
    window.location.href = `/logins`;
}

function prod() {
    
    window.location.href = `/products`;
}

function cart() {
    
  
      window.location.href = `/cart`;
  }