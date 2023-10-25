/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/blocks/fancy-nav/frontend.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.wp-block-eptt-transform-fancy-nav .mobile-button');
  const modalEl = document.querySelector('.wp-block-eptt-transform-fancy-nav .nav-content');
  const modalCloseEl = document.querySelectorAll('.modal-btn-close');
  openModalBtn.addEventListener('click', event => {
    console.log;
    if (window.innerWidth < 1025) {
      modalEl.classList.add('modal-show');
      document.body.style.overflow = "hidden";
    }
  });
  modalCloseEl.forEach(el => {
    el.addEventListener('click', event => {
      console.log(window.innerWidth);
      if (window.innerWidth < 1025) {
        modalEl.classList.remove('modal-show');
        document.body.style.overflow = null;
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map