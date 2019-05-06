  var navMain = document.querySelector('.navigation');
  var navToggle = document.querySelector('.navigation__toggle');

  navMain.classList.remove('navigation--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation--closed')) {
      navMain.classList.remove('navigation--closed');
      navMain.classList.add('navigation--opened');
    } else {
      navMain.classList.add('navigation--closed');
      navMain.classList.remove('navigation--opened');
    }
  });

  var link = document.querySelector(".modal-open");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal-close");
  link.addEventListener("click", function (a) {
    a.preventDefault();
    popup.classList.add("modal-show")
  });

  window.addEventListener("keydown", function (a) {
    a.preventDefault();
    if (a.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show")
      }
    }
  });
