$(document).scroll(function() {
  if($(document).scrollTop() >= 130) {
    if ($('.top').hasClass('stick')) return;
    $('.top').addClass('stick');
    $('.top').stop().animate({'top': '0'}, 200);
  } else {
    $('.top').removeClass('stick');
    $('.top').removeAttr('style');
  }
});
