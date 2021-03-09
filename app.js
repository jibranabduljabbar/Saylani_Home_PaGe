// var getDd = document.getElementById("dd");
// var getFa = document.getElementById("fa");
// var getM = document.getElementById("m");
// var getE = document.getElementById("e");

// var count = 0;
// var intervel;

// function add(){ 
// count++
// getDd.innerHTML = count
// if (count === 150000){
//     count = 150000
    
// }
// }

// function active (){
//     intervel = setInterval(add,10)
    
// }

// // getDd.innerHTML += Count
// setInterval(add(), 1000);


// alert(count)










var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
