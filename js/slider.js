var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var slideAwal = document.getElementsByClassName("slide-awal");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  if (slideIndex == 1) {
    document.getElementsByClassName("prev")[0].style.display = "none";
  } else {
    document.getElementsByClassName("prev")[0].style.display = "block";
  }

  if (slideIndex == slides.length) {
    document.getElementsByClassName("next")[0].style.display = "none";
  } else {
    document.getElementsByClassName("next")[0].style.display = "block";
  }
}

function openSlider() {
  document.getElementById("slider-popup").style.display = "block";
}

function closeSlider() {
  document.getElementById("slider-popup").style.display = "none";
}
