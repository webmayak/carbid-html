$(function () {

  $('.car-slider__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.car-slider__nav'
  });
  $('.car-slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.car-slider__main',
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

});
