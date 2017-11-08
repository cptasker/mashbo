var $ = jQuery;
$('.nav-mobile__toggle-control').on('click', function() {
  this.classList.toggle('active');
  $('nav ul').toggle();
});
