document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel");
    const carousel2 = document.getElementById("carousel2");
    const slides = carousel.querySelectorAll("li");
    const slides2 = carousel2.querySelectorAll("li");
    const totalSlides = slides.length;
    const totalSlides2 = slides2.length;
    const slideWidth = slides[0].clientWidth;
    const slideWidth2 = slides2[0].clientWidth;
    let currentSlide = 0;
    let currentSlide2 = 0;

    setInterval(nextSlide, 5000);
    setInterval(nextSlide2, 5000);

    document.getElementById("nextBtn").addEventListener("click", function() {
        nextSlide();
    });

    document.getElementById("prevBtn").addEventListener("click", function() {
        prevSlide();
    });

    document.getElementById("nextBtn2").addEventListener("click", function() {
        nextSlide2();
    });

    document.getElementById("prevBtn2").addEventListener("click", function() {
        prevSlide2();
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

    function nextSlide2() {
        currentSlide2 = (currentSlide2 + 1) % totalSlides2;
        moveSlides2();
    }

    function prevSlide2() {
        currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
        moveSlides2();
    }

    function moveSlides2() {
        carousel2.style.transform = `translateX(-${currentSlide2 * slideWidth2}px)`;
    }
});


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


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyjJw-rsDNS274GjZtKx482RO-e9SGAxKmzYpJY0KTGcIb-1m3Fl1lZ1xVjYjrz7lzK/exec'
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