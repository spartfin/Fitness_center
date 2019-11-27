/* eslint-disable new-cap */
'use strict';

(function () {

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

  var active = 0;
  var prev = 0;
  var subscriptionBtn = document.getElementsByClassName('subscription__btn');

  var activeBtn = function () {
    for (var i = 0; i < subscriptionBtn.length; i++) {
      // eslint-disable-next-line no-shadow
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

  // eslint-disable-next-line no-undef
  IMask(document.getElementById('training-phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

})();
