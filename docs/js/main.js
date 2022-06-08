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