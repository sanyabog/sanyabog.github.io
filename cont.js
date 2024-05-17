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