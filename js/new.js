function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(function() {

var headerOverlay = document.querySelector(".header__overlay"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__close"),
  menuList = document.querySelector(".main-nav__box"),
  searchOpenIcon = document.querySelector(".nav__icon-search"),
  searchCloseIcon = document.querySelector(".search__close"),
  searchBox = document.querySelector(".search"),

  headercontainer = document.querySelector(".header-box"),
  contentcontainer = document.querySelector("main.content"),
  footercontainer = document.querySelector("#footer");

/* =======================
// Menu and Search
======================= */

menuOpenIcon.addEventListener('click', () => {
  menuOpen()
})
menuCloseIcon.addEventListener('click', () => menuClose())
searchOpenIcon.addEventListener('click', () => {
  searchOpen()
  addBlur()
})
searchCloseIcon.addEventListener('click', () => {
  searchClose()
  removeBlur()
})
headerOverlay.addEventListener('click', () => {
  menuClose();
  searchClose();
})

// searchBox.keyup = function (event) {
//   // alert('keyup')
//   if (searchBox.classList.contains('is-visible')) {
//     if (event.code == 'Escape') {
//       searchClose()
//     }
//   }
// }

searchBox.addEventListener('keyup', event => {
  if (searchBox.classList.contains('is-visible')) {
    if (event.code == 'Escape') {
      searchClose()
      removeBlur()
    }
  }
})

function addBlur() {
  headercontainer.classList.add('add-blur')
  contentcontainer.classList.add('add-blur')
  footercontainer.classList.add('add-blur')
}

function removeBlur() {
  headercontainer.classList.remove('add-blur')
  contentcontainer.classList.remove('add-blur')
  footercontainer.classList.remove('add-blur')
}

function menuOpen() {
  menuList.classList.add("is-open");
  headerOverlay.classList.add("is-visible");
}

function menuClose() {
  menuList.classList.remove("is-open");
  headerOverlay.classList.remove("is-visible");
}

function searchOpen() {
  searchBox.classList.add("is-visible");
  setTimeout(() => {
    document.getElementById('js-search-input').focus()
  }, 50)
}

function searchClose() {
  searchBox.classList.remove("is-visible");
}

/* =======================
// Responsive Videos
======================= */

reframe(document.querySelectorAll('.post__content iframe, .page__content iframe'))

/* =======================
// Scroll Top Button
======================= */
// $(".top").click(function () {
//   $("html, body")
//     .stop()
//     .animate({ scrollTop: 0 }, "slow", "swing");
// });

// $(window).scroll(function () {
//   if ($(this).scrollTop() > $(window).height()) {
//     $(".top").addClass("is-active");
//   } else {
//     $(".top").removeClass("is-active");
//   }
// });

/* =======================
// WOW & Zoom Image
======================= */

var imgList = document.querySelectorAll('.page img, .post img')
for (let i = 0; i < imgList.length; i++) {
  imgList[i].classList.add("wow", "fadeIn");
  imgList[i].setAttribute('data-zoomable', '')
}

mediumZoom('[data-zoomable]')

new WOW().init();


})