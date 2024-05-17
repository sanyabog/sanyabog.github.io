// Отримуємо посилання на кнопки та вмістові блоки
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

// По замовчуванню показуємо вміст першого блоку
content1.classList.add('active');

// Додаємо обробник подій для кожної кнопки
btn1.addEventListener('click', () => {
  // Приховуємо всі вмістові блоки
  hideAllContent();
  // Показуємо потрібний вміст з плавною анімацією
  content1.classList.add('active');
});

btn2.addEventListener('click', () => {
  hideAllContent();
  content2.classList.add('active');
});

btn3.addEventListener('click', () => {
  hideAllContent();
  content3.classList.add('active');
});

// Функція для приховання всіх вмістових блоків
function hideAllContent() {
  content1.classList.remove('active');
  content2.classList.remove('active');
  content3.classList.remove('active');
};



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


  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');


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