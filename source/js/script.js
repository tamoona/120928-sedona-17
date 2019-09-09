function toggleMenu() {
  document.querySelector(".main-nav").classList.toggle("main-nav--opened");
}

function openPopup(popup) {
  document.querySelector(popup).classList.add("popup--opened");
}

function closePopup() {
  document.querySelector(".popup--opened").classList.remove("popup--opened");
}

function isEmpty(input) {
  if (input.value == "") {
    return true;
  } else {
    return false;
  }
}

function submitForm(event) {
  event.preventDefault();

  var form = document.forms["review-form"];
  
  var name = form["user_name"];
  var surname = form["user_surname"];
  var patronymic = form["user_patronymic"];
  var phone = form["phone"];
  var email = form["email"];

  var reqFieldsEmpty = isEmpty(name) && isEmpty(surname) && isEmpty(patronymic) && isEmpty(phone) && isEmpty(email);

  if (reqFieldsEmpty) {
    openPopup(".popup--error");
  } else {
    openPopup(".popup--success");
  }
}

window.onload = function() {
  objectFitImages();

  document.querySelector("body").classList.remove("no-js");

  document.querySelector(".main-nav__toggle").addEventListener("click", toggleMenu);
  document.querySelector(".form").addEventListener("submit", submitForm);

  var closeButtons = document.querySelectorAll(".button--popup-close");

  closeButtons.forEach(function(el) {
    el.addEventListener("click", closePopup);
  });
};
