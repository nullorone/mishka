var btnToggle = document.querySelector(".header-nav__toggle");
var navItem = document.querySelectorAll(
  ".header-nav__item:not(.header-nav__item--logo)"
);
var modal = document.querySelector(".modal-buy");
var overlay = document.querySelector(".overlay");
var btnModalBuy = [];
btnModalBuy = document.querySelectorAll(".js-modal-buy");

//Добавляет иконку закрытого меню по-умолчанию
btnToggle.classList.add("header-nav__toggle--close");

// Функция скрытия пунктов меню, кроме пункта с логотипом
function isNavItemsToggle() {
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle("visually-hidden");
  }
}

// Функция отображения модального окна и оверлея
function showModal(evt) {
  evt.preventDefault();
  modal.classList.add("modal-buy--show");
  modal.classList.remove("visually-hidden");
  modal.style.display = "block";
  overlay.classList.remove("visually-hidden");
  // Отрабатывает нажатие на клавишу Esc
  window.addEventListener("keydown", function(evt) {
    27 === evt.keyCode && hideModal(evt);
  });
}

// Функция скрытия модального окна и оверлея
function hideModal(evt) {
  evt.preventDefault();
  modal.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
  modal.style.display = "none";
}

// Скрываем пункты меню, если ширина окна меньше 768px
if (window.matchMedia("(max-width: 767px)").matches) {
  isNavItemsToggle(); //Скрывает пункты меню по-умолчанию
}

//Проверяем ширину viewport
window.onresize = function() {
  //Если больше 768px, то показываем пункты навигации
  if (window.matchMedia("(min-width: 768px)").matches) {
    for (var i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("visually-hidden");
    }
  } else {
    //Если меньше 767px, то скрываем пункты навигации и меняем иконку для закрытой навигации
    for (var i = 0; i < navItem.length; i++) {
      navItem[i].classList.add("visually-hidden");
    }
    btnToggle.classList.add("header-nav__toggle--close");
  }
};

// Скрывает модальное окно по-умолчанию
modal.classList.add("visually-hidden");
modal.style.display = "none";

// При нажатии на иконку меню - переключает отображение пунктов меню
btnToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  isNavItemsToggle();
  btnToggle.classList.toggle("header-nav__toggle--close");
});

// При нажатии на кнопку заказать в блоке оффер главной страницы, меняет отображение окна и оверлея
for (var i = 0; i < btnModalBuy.length; i++) {
  btnModalBuy[i].addEventListener("click", showModal);
}
overlay.addEventListener("click", hideModal);
