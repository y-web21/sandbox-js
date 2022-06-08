/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7Ozs7OztBQ2xCRDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbmRib3gvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9zYW5kYm94Ly4vc3JjL2pzL3Rlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWNoZWNrXG5cbi8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbmNvbnN0IHVyaV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFpblVSSWlucHV0Jyk7XG4vKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG5jb25zdCB1cmlfZW5jb2RlZF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmNvZGVVUklpbnB1dCcpO1xuLy8gdHlwZSBzY3JpcHRcbi8vIGNvbnN0IHVyaV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkPEhUTUxJbnB1dEVsZW1lbnQ+KCAnVVJJdGV4dCcpO1xuLy8gY29uc3QgdXJpX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1VSSXRleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gY29uc3QgdXJpX2lucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1VSSXRleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG51cmlfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuY29kZVVSSScpLnRleHRDb250ZW50ID0gZW5jb2RlVVJJKHVyaV9pbnB1dC52YWx1ZSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuY29kZVVSSWNvbXBvbmVudCcpLnRleHRDb250ZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaV9pbnB1dC52YWx1ZSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VzY2FwZScpLnRleHRDb250ZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaV9pbnB1dC52YWx1ZSlcbn0pXG51cmlfZW5jb2RlZF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjb2RlVVJJJykudGV4dENvbnRlbnQgPSBkZWNvZGVVUkkodXJpX2VuY29kZWRfaW5wdXQudmFsdWUpXG59KVxuIiwiLy8gQHRzLWNoZWNrXG5cbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMicpWzBdLnN0eWxlLmJhY2tncm91bmQgPSAnIzgyOCdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==