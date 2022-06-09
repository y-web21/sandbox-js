/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// @ts-check



/** @type {HTMLInputElement} */
const uri_input = document.getElementById('plainURIinput');
/** @type {HTMLInputElement} */
const uri_encoded_input = document.getElementById('encodeURIinput');
// type script
// const uri_input = document.getElementById<HTMLInputElement>( 'URItext');
// const uri_input = document.getElementById('URItext') as HTMLInputElement;
// const uri_input = <HTMLInputElement>document.getElementById('URItext') as HTMLInputElement;

uri_input.addEventListener("input", () => {
  document.getElementById('encodeURI').textContent = encodeURI(uri_input.value)
  document.getElementById('encodeURIcomponent').textContent = encodeURIComponent(uri_input.value)
  document.getElementById('escape').textContent = encodeURIComponent(uri_input.value)
})
uri_encoded_input.addEventListener("input", () => {
  document.getElementById('decodeURI').textContent = decodeURI(uri_encoded_input.value)
})

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// @ts-check

document.getElementsByTagName('h2')[0].style.background = '#828'

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOQTs7QUFFNEI7O0FBRTVCLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FDcEJEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FuZGJveC8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiIsIndlYnBhY2s6Ly9zYW5kYm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbmRib3gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zYW5kYm94Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vc2FuZGJveC8uL3NyYy9qcy90ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBAdHMtY2hlY2tcblxuaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZS5zY3NzXCI7XG5cbi8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbmNvbnN0IHVyaV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFpblVSSWlucHV0Jyk7XG4vKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG5jb25zdCB1cmlfZW5jb2RlZF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmNvZGVVUklpbnB1dCcpO1xuLy8gdHlwZSBzY3JpcHRcbi8vIGNvbnN0IHVyaV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkPEhUTUxJbnB1dEVsZW1lbnQ+KCAnVVJJdGV4dCcpO1xuLy8gY29uc3QgdXJpX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1VSSXRleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gY29uc3QgdXJpX2lucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1VSSXRleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG51cmlfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuY29kZVVSSScpLnRleHRDb250ZW50ID0gZW5jb2RlVVJJKHVyaV9pbnB1dC52YWx1ZSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuY29kZVVSSWNvbXBvbmVudCcpLnRleHRDb250ZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaV9pbnB1dC52YWx1ZSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VzY2FwZScpLnRleHRDb250ZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaV9pbnB1dC52YWx1ZSlcbn0pXG51cmlfZW5jb2RlZF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjb2RlVVJJJykudGV4dENvbnRlbnQgPSBkZWNvZGVVUkkodXJpX2VuY29kZWRfaW5wdXQudmFsdWUpXG59KVxuIiwiLy8gQHRzLWNoZWNrXG5cbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMicpWzBdLnN0eWxlLmJhY2tncm91bmQgPSAnIzgyOCdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==