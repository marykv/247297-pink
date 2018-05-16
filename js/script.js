var toggleBtn = document.querySelector(".main-navigation__toggle-btn");
var navigation = document.querySelector(".main-navigation__menu");
var pagePresent = document.querySelector(".page-present");
var header = document.querySelector(".main-header");
var map = document.querySelector(".map__iframe");

toggleBtn.classList.remove("main-navigation__toggle-btn--no-js");
navigation.classList.remove("main-navigation__menu--no-js");
pagePresent.classList.remove("page-present--no-js");
header.classList.remove("main-header--no-js");
if(map) {
  map.classList.remove("map__iframe--no-js");
}

//Механизм открытия мобильного меню
toggleBtn.addEventListener("click", function (event) {
  navigation.classList.toggle("main-navigation__menu--no-js");
  header.classList.toggle("main-header--no-js");
  if (navigation.classList.contains("main-navigation__menu--no-js")) {
    toggleBtn.classList.remove("main-navigation__toggle-btn--close");
    toggleBtn.classList.add("main-navigation__toggle-btn--open");
  } else {
    toggleBtn.classList.remove("main-navigation__toggle-btn--open");
    toggleBtn.classList.add("main-navigation__toggle-btn--close");
  }
});

//Переключатель блока отзывов
var reviewRadioContainer = document.querySelector(".review__radio-block");
var reviewInput = reviewRadioContainer.querySelectorAll(".slider-radio__input");
var reviewBlock = document.querySelectorAll(".review__block"); //  review__block--active

function switchReviews (evt) { // переключатель для мобильной и планшетной версий
  for (var i = 0; i < reviewBlock.length; i++) {
    if (evt.target === reviewInput[i] && reviewInput[i].checked && reviewBlock[i].className === "review__block") {
      reviewBlock[i].classList.add("review__block--active");
    } else if (reviewInput[i].checked === false && reviewBlock[i].className !== "review__block") {
      reviewBlock[i].classList.remove("review__block--active");
    }
  }
}
reviewRadioContainer.addEventListener("change", switchReviews);

// Переключатель тарифов
var tariffContainer = document.querySelector(".tariff__radio-block");
var tariffInput = tariffContainer.querySelectorAll(".slider-radio__input");
var tariffInfo = document.querySelector(".tariff-info");

function switchTariff (evt) { // переключатель тарифа для мобильной версии
  tariffInfo.style.transition = "0.3s"
  if(evt.target === tariffInput[0]) {
    tariffInfo.style.transform = "translateX(33%)";
  } else if (evt.target === tariffInput[1]) {
    tariffInfo.style.transform = "translateX(0)";
  } else if (evt.target === tariffInput[2]) {
    tariffInfo.style.transform = "translateX(-33%)";
  }
}
tariffContainer.addEventListener("change", switchTariff);

var mql = window.matchMedia("(min-width: 660px)");
function checkMedia(e) {
  if(e.matches) {
    tariffInfo.style.transform = "translateX(0)";
    tariffInput[1].checked = true;
  }
}
mql.addListener(checkMedia);
