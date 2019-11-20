'use strict';

(function () {

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
