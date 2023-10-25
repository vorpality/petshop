/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************************************!*\
  !*** ./src/blocks/single-post-details/frontend.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





function FavoritePost(props) {
  const [permission] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.loggedIn);
  const [favorite, setFavorite] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.isFavorite);
  const className = "favorite-button " + favorite ? "favorite-button is-favorite" : 0;
  const fill = favorite ? "-fill" : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: className,
    onClick: async event => {
      if (!permission) {
        return alert('You may need to log in.');
      }
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        //example.com/wp-json/up/v1/favorite
        path: 'up/v1/favorite',
        method: 'POST',
        data: {
          userID: props.userID,
          postID: props.postID,
          favorite
        }
      });
      if (response.status == 2) {
        setFavorite(!favorite);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: `bi bi-heart${fill}`
  }));
}
function AddToCartSP(props) {
  const [permission] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.loggedIn);
  const [inCart, setCart] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.inCart);
  const [spinner, setSpinner] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const renderEl = [];
  const [futureCart, setFutureCart] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(inCart);
  let tmp;
  if (inCart == 0) {
    renderEl.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, spinner ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "solo-btn",
      onClick: async event => {
        if (!permission) {
          return alert('You may need to log in.');
        }
        setSpinner(true);
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          //example.com/wp-json/up/v1/favorite
          path: 'ept/v1/cartfiddle',
          method: 'POST',
          data: {
            userID: props.userID,
            postID: props.postID,
            action: "add"
          }
        });
        setSpinner(false);
        if (response.status == 2) {
          tmp = 1;
          setCart(tmp);
          setFutureCart(tmp);
        }
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add to cart', 'e-potis'))));
  } else {
    renderEl.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, spinner ? '' : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "quantity-button quantity-minus",
      onClick: async event => {
        if (!permission) {
          return alert('You may need to log in.');
        }
        setSpinner(true);
        const cartResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          //example.com/wp-json/ept/v1/cartfiddle
          path: 'ept/v1/cartfiddle',
          method: 'POST',
          data: {
            userID: props.userID,
            postID: props.postID,
            action: "remove"
          }
        });
        setSpinner(false);
        if (cartResponse.status == 2) {
          tmp = inCart - 1;
          setCart(tmp);
          setFutureCart(tmp);
        }
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bi bi-dash-square quantity-button"
    }))));
    renderEl.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, spinner ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
      className: "cart-spinner"
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      class: "quantity-box",
      value: futureCart,
      data_user_id: props.userID,
      data_post_id: props.postID,
      onChange: e => {
        setFutureCart(e.target.value);
      },
      onBlur: async () => {
        tmp = futureCart != parseInt(futureCart) ? 0 : futureCart;
        setSpinner(true);
        const cartResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          //example.com/wp-json/ept/v1/cartfiddle
          path: 'ept/v1/cartfiddle',
          method: 'POST',
          data: {
            userID: props.userID,
            postID: props.postID,
            amount: tmp
          }
        });
        if (cartResponse.status == 2) {
          setCart(tmp);
          setFutureCart(tmp);
        }
        setSpinner(false);
      }
    })));
    renderEl.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, spinner ? '' : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "quantity-button quantity-plus",
      onClick: async event => {
        if (!permission) {
          return alert('You may need to log in.');
        }
        setSpinner(true);
        const cartResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          //example.com/wp-json/ept/v1/cartfiddle
          path: 'ept/v1/cartfiddle',
          method: 'POST',
          data: {
            userID: props.userID,
            postID: props.postID,
            action: "add"
          }
        });
        setSpinner(false);
        if (cartResponse.status == 2) {
          tmp = inCart + 1;
          setCart(tmp);
          setFutureCart(tmp);
        }
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bi bi-plus-square"
    }))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-to-cart"
  }, renderEl);
}
document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.wp-block-ept-products-single-post-details .button-data');
  const postID = parseInt(block.dataset.postId);
  const userID = parseInt(block.dataset.userId);
  const loggedIn = !!block.dataset.loggedIn;
  const isFavorite = !!block.dataset.isFavorite;
  const inCart = parseInt(block.dataset.inCart);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FavoritePost, {
    postID: postID,
    userID: userID,
    isFavorite: isFavorite,
    loggedIn: loggedIn
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddToCartSP, {
    postID: postID,
    userID: userID,
    loggedIn: loggedIn,
    inCart: inCart
  })), block);

  //render({toRender});
});
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map