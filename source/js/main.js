'use strict';

(function () {

  // Плавный переход по якорям
  var subscription = document.getElementById('subscription');
  var headerInfoBuy = document.querySelector('.header__info_buy');

  var headerInfoBuyClick = function () {
    headerInfoBuy.addEventListener('click', function (evt) {
      evt.preventDefault();
      subscription.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  headerInfoBuyClick();


  // Переключение кнопок в блоке абонементы
  var active = 0;
  var prev = 0;
  var subscriptionBtn = document.getElementsByClassName('subscription__btn');

  var activeBtn = function () {
    for (var i = 0; i < subscriptionBtn.length; i++) {
      var activeButton = function (i) {
        subscriptionBtn[i].addEventListener('click', function () {
          prev = active;
          active = i;
          changeActiveBtn();
        });
      };
      activeButton(i);
    }
  };
  activeBtn();

  var changeActiveBtn = function () {
    subscriptionBtn[prev].classList.remove('subscription__btn_active');
    subscriptionBtn[active].classList.add('subscription__btn_active');
  };


  // Валидация номера телефона
  var inp = document.querySelector('#tel');

  // Проверяем фокус
  inp.addEventListener('focus', _ => {
    // Если там ничего нет или есть, но левое
    if(!/^\+\d*$/.test(inp.value))
      // То вставляем знак плюса как значение
      inp.value = '+7';
  });

  inp.addEventListener('keypress', e => {
    // Отменяем ввод не цифр
    if(!/\d/.test(e.key))
      e.preventDefault();
  });


  // Слайдер блоке отзывы
  var next = document.querySelector('.reviews__click_right');
  var prew = document.querySelector('.reviews__click_left');

  var slides = document.getElementsByClassName('reviews__card');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = slides.length - i;
  }

  next.addEventListener('click', function (evt) {
    evt.preventDefault();
    var activeEl = document.querySelector('.active');
    if (activeEl.nextElementSibling) {
      activeEl.style.left = '-100%';
      activeEl.classList.remove('active');
      activeEl.nextElementSibling.classList.add('active');
      prew.classList.remove('no_active');
      prew.classList.remove('no_active');
      if (!activeEl.nextElementSibling.nextElementSibling) {
        next.classList.add('no_active');
      }
    }
  });

  prew.addEventListener('click', function (evt) {
    evt.preventDefault();
    var activeEl = document.querySelector('.active');
    if (activeEl.previousElementSibling) {
      activeEl.previousElementSibling.style.left = '0%';
      activeEl.classList.remove('active');
      activeEl.previousElementSibling.classList.add('active');
      next.classList.remove('no_active');
      next.classList.remove('no_active');
      if (!activeEl.previousElementSibling.previousElementSibling) {
        prew.classList.add('no_active');
      }
    }
  });

})();
