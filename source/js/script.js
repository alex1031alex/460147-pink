var navMain = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-nav_closed')) {
    navMain.classList.remove('site-nav_closed');
    navMain.classList.add('site-nav_open');
  } else {
    navMain.classList.add('site-nav_closed');
    navMain.classList.remove('site-nav_open');
  }
});
