import $ from 'jquery';
import ripples from 'jquery.ripples';
import {
  TimelineMax,
  Expo,
  TweenMax
} from 'gsap';

$(window).on('load', function() {
  const tl = new TimelineMax();
  tl.to('.landing-mask', 1, {
    width: 0,
    ease: Power4.easeOut,
  })
  tl.to('.landing-image', 2, {
    scale: 1,
    opacity: 1,
    ease: Expo.easeOut,
  }, '-=0.6')
  tl.to('.landing-logo', 0.6, {
    opacity: 1,
    top: 0,
    ease: Expo.easeOut,
  }, '-=1')
  tl.staggerTo('.landing-title span', 1.2, {
    opacity: 1,
    top: 0,
    ease: Expo.easeOut,
  }, 0.2, '-=0.6')
  tl.to('.landing-description', 0.6, {
    opacity: 1,
    top: 0,
    ease: Expo.easeOut,
  }, '-=0.8')
  tl.to('.landing-form', 0.6, {
    opacity: 1,
    top: 0,
    ease: Expo.easeOut,
  }, '-=0.6')
})

$('.landing-form').on('submit', function() {
  return false;
})

$('.landing-form').find('input[type=text]').on('focus', function() {
  $(this).removeClass('is-error');
  $('.error-message').addClass('is-hidden');
})

$('.landing-form-submit').on('click', function() {
  if($('.landing-form').find('input[type=text]').val().length < 1) {
    $('.landing-form').find('input[type=text]').addClass('is-error');
    $('.error-message').removeClass('is-hidden');
  } else {
    $(this).addClass('is-sent');
    $('.landing-description').fadeOut(function() {
      $('.landing-description').html('Thank you for subscribing lorem ipsum dolor sit amet, consectetur.');
      $('.landing-description').fadeIn();
    });
  }
})