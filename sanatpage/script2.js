function togglePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.querySelector(".overlay");
    if (popup.style.display === "block") {
      popup.style.display = "none";
      overlay.style.display = "none";
    } else {
      popup.style.display = "block";
      overlay.style.display = "block";
    }
  }


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxNVuYTuo2N0oCBfqOcdjTTmU4fpLhBI5308yxRxT0Q48pswPAQZAqcnhh72Y1SNPWfWQ/exec'
const form = document.forms['submit-to-google-sheet']
const sendText = document.getElementById('sendText')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      sendText.innerHTML = "Дякую, ваші дані надіслані, очікуйте дзвінок"
      setTimeout(function(){
        sendText.innerHTML = ""
      }, 3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const slides = carousel.querySelectorAll("li");
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth;
  let currentSlide = 0;

  setInterval(nextSlide, 10000);

  document.getElementById("nextBtn").addEventListener("click", function() {
      nextSlide();
  });

  document.getElementById("prevBtn").addEventListener("click", function() {
      prevSlide();
  });


  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      moveSlides();
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      moveSlides();
  }

  function moveSlides() {
      carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

});
