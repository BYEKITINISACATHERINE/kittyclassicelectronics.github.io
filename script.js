let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function prevSlide() {
  slideIndex -= 2;
  showSlides();
}

function nextSlide() {
  showSlides();
}

showSlides();