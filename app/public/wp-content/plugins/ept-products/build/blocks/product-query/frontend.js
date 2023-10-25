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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/*!**********************************************!*\
  !*** ./src/blocks/product-query/frontend.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);



function FavoritePost(props) {
  const [permission] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.loggedIn);
  const [favorite, setFavorite] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.isFavorite);
  const [inCart, setInCart] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.isInCart);
  const [cartEnabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.cartEnabled);
  const className = favorite ? "is-favorite" : "";
  const fill = favorite ? "-fill" : "";
  const className2 = inCart ? "is-carted" : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "heart-button " + className,
    onClick: async event => {
      if (!permission) {
        return alert('You may need to log in.');
      }
      const favResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        //example.com/wp-json/ept/v1/favorite
        path: 'ept/v1/favorite',
        method: 'POST',
        data: {
          userID: props.userID,
          postID: props.postID,
          favorite
        }
      });
      if (favResponse.status == 2) {
        setFavorite(!favorite);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: `bi bi-heart${fill} favorite`
  })), cartEnabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "cart-button " + className2,
    onClick: async event => {
      if (!permission) {
        return alert('You may need to log in.');
      }
      const cartResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        //example.com/wp-json/ept/v1/addtocart
        path: 'ept/v1/addtocart',
        method: 'POST',
        data: {
          userID: props.userID,
          postID: props.postID,
          cart: inCart
        }
      });
      if (cartResponse.status == 2) {
        setInCart(!inCart);
        changeBubbleValue(inCart ? -1 : 1);
        changePostValue(props.postID, inCart);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: `bi bi-cart2 cart`
  })));
}
document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.post-buttons');
  blocks.forEach(block => {
    const postID = parseInt(block.dataset.postId);
    const userID = parseInt(block.dataset.userId);
    const loggedIn = !!block.dataset.loggedIn;
    const isFavorite = !!block.dataset.isFavorite;
    const isInCart = !!block.dataset.isInCart;
    const cartEnabled = !!block.dataset.cartEnabled;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FavoritePost, {
      postID: postID,
      userID: userID,
      isFavorite: isFavorite,
      loggedIn: loggedIn,
      isInCart: isInCart,
      cartEnabled: cartEnabled
    }), block);
  });
});
function changeBubbleValue(newVal) {
  const bubble = document.querySelector('.mini-cart-bubble');
  const currentQ = parseInt(bubble.dataset.quantity);
  const newQ = currentQ + newVal;
  bubble.dataset.quantity = newQ;
}
function changePostValue(postID, newVal) {
  const blocks = document.querySelectorAll('.single-post');
  blocks.forEach(block => {
    /*
    console.log(block)
    if (parseInt(block.dataset.postId)==postID){
      console.log(block)
      block.dataset.isInCart=newVal
    }*/
    //reDraw(block)
  });
}
function refreshCart() {}
function reDraw(element) {
  if (!element) {
    return;
  }
  var n = document.createTextNode(' ');
  var disp = element.style.display; // don't worry about previous display style

  element.appendChild(n);
  element.style.display = 'none';
  setTimeout(function () {
    element.style.display = disp;
    n.parentNode.removeChild(n);
  }, 20); // you can play with this timeout to make it as short as possible
}
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map