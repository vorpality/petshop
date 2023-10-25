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
  !*** ./src/blocks/shopping-cart/frontend.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);



function CartPost(props) {
  const [permission] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.loggedIn);
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(props.quantity);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "quantity-button quantity-minus",
    onClick: async event => {
      if (!permission) {
        return alert('You may need to log in.');
      }
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
      if (cartResponse.status == 2) {
        setQuantity(quantity - 1);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "bi bi-dash-square"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    class: "quantity-box ",
    value: quantity,
    data_user_id: props.userID,
    data_post_id: props.postID,
    onChange: async event => {
      const newVal = event.target.value;
      const cartResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        //example.com/wp-json/ept/v1/cartfiddle
        path: 'ept/v1/cartfiddle',
        method: 'POST',
        data: {
          userID: props.userID,
          postID: props.postID,
          amount: newVal
        }
      });
      if (cartResponse.status === 2) {
        setQuantity(newVal);
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "quantity-button quantity-plus",
    onClick: async event => {
      if (!permission) {
        return alert('You may need to log in.');
      }
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
      if (cartResponse.status == 2) {
        setQuantity(quantity + 1);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "bi bi-plus-square"
  })));
}
document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.post-buttons');
  blocks.forEach(block => {
    const postID = parseInt(block.dataset.postId);
    const userID = parseInt(block.dataset.userId);
    const loggedIn = !!block.dataset.loggedIn;
    const quantity = parseInt(block.dataset.quantity);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CartPost, {
      postID: postID,
      userID: userID,
      loggedIn: loggedIn,
      quantity: quantity
    }), block);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const remove_all = document.querySelector('#remove-all-button');
  const userID = parseInt(remove_all.dataset.userId);
  remove_all.addEventListener('click', async event => {
    event.preventDefault();
    const cartResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      //example.com/wp-json/ept/v1/cartfiddle
      path: 'ept/v1/cartfiddle',
      method: 'POST',
      data: {
        userID: userID,
        amount: 0
      }
    });
    if (cartResponse.status === 2) {
      location.reload();
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map