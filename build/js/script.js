'use strict';

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

var itemOneMonth = document.querySelector('.subscription__item_one-month');
var itemSixMonths = document.querySelector('.subscription__item_six-months');
var itemTwelveMonths = document.querySelector('.subscription__item_twelve-months');

itemOneMonth.addEventListener('click', function (evt) {
  evt.preventDefault();
  itemSixMonths.classList.remove('subscription__months_item_active');
  itemTwelveMonths.classList.remove('subscription__months_item_active');
  itemOneMonth.classList.add('subscription__months_item_active');
});

itemSixMonths.addEventListener('click', function (evt) {
  evt.preventDefault();
  itemOneMonth.classList.remove('subscription__months_item_active');
  itemTwelveMonths.classList.remove('subscription__months_item_active');
  itemSixMonths.classList.add('subscription__months_item_active');
});

itemTwelveMonths.addEventListener('click', function (evt) {
  evt.preventDefault();
  itemSixMonths.classList.remove('subscription__months_item_active');
  itemOneMonth.classList.remove('subscription__months_item_active');
  itemTwelveMonths.classList.add('subscription__months_item_active');
});
