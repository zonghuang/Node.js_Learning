/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib.js":
/*!****************!*\
  !*** ./lib.js ***!
  \****************/
/***/ ((module, exports) => {

console.log('this is module')

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
  console.log('good')
}

// 知识点1：对module.exports赋值，exports对象就不再是外面require所得到的结果了。
// 但exports变量本身还是存在的
module.exports = function () {
  console.log('hello geekbang')
}

// 知识点2：外部拿到require调用的结果和这里的exports对象是同一个引用
setTimeout(()=> {
  // 验证index.js里加的additional属性是否生效
  // 用于确定外部require到的对象和此处的exports是否是同一个属性
  console.log(exports)
}, 100)


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
console.log('start require')
const lib = __webpack_require__(/*! ./lib */ "./lib.js")
console.log('end require')
lib.test = 'test'
console.log(lib)

// require返回的对象，和lib.js里的exports对象属于同一个引用
// 因此此处加的属性能在lib.js里面体现出来。
lib.additional = 'test'

// 使用webpack命令辅助理解commonjs
// webpack --devtool=inline-source-map --mode=development --target=node ./index.js
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLGdCQUFnQixJQUFJOztBQUVwQixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O1VDbkJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQTtBQUNBLFlBQVksbUJBQU8sQ0FBQyx1QkFBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCd0aGlzIGlzIG1vZHVsZScpXHJcblxyXG5leHBvcnRzLmdlZWtiYW5nID0geyAnaGVsbG8nOiAnaGFoYScgfVxyXG5cclxuZXhwb3J0cy50ZW5jZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCdnb29kJylcclxufVxyXG5cclxuLy8g55+l6K+G54K5Me+8muWvuW1vZHVsZS5leHBvcnRz6LWL5YC877yMZXhwb3J0c+WvueixoeWwseS4jeWGjeaYr+WklumdonJlcXVpcmXmiYDlvpfliLDnmoTnu5PmnpzkuobjgIJcclxuLy8g5L2GZXhwb3J0c+WPmOmHj+acrOi6q+i/mOaYr+WtmOWcqOeahFxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmxvZygnaGVsbG8gZ2Vla2JhbmcnKVxyXG59XHJcblxyXG4vLyDnn6Xor4bngrky77ya5aSW6YOo5ou/5YiwcmVxdWlyZeiwg+eUqOeahOe7k+aenOWSjOi/memHjOeahGV4cG9ydHPlr7nosaHmmK/lkIzkuIDkuKrlvJXnlKhcclxuc2V0VGltZW91dCgoKT0+IHtcclxuICAvLyDpqozor4FpbmRleC5qc+mHjOWKoOeahGFkZGl0aW9uYWzlsZ7mgKfmmK/lkKbnlJ/mlYhcclxuICAvLyDnlKjkuo7noa7lrprlpJbpg6hyZXF1aXJl5Yiw55qE5a+56LGh5ZKM5q2k5aSE55qEZXhwb3J0c+aYr+WQpuaYr+WQjOS4gOS4quWxnuaAp1xyXG4gIGNvbnNvbGUubG9nKGV4cG9ydHMpXHJcbn0sIDEwMClcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnNvbGUubG9nKCdzdGFydCByZXF1aXJlJylcclxuY29uc3QgbGliID0gcmVxdWlyZSgnLi9saWInKVxyXG5jb25zb2xlLmxvZygnZW5kIHJlcXVpcmUnKVxyXG5saWIudGVzdCA9ICd0ZXN0J1xyXG5jb25zb2xlLmxvZyhsaWIpXHJcblxyXG4vLyByZXF1aXJl6L+U5Zue55qE5a+56LGh77yM5ZKMbGliLmpz6YeM55qEZXhwb3J0c+WvueixoeWxnuS6juWQjOS4gOS4quW8leeUqFxyXG4vLyDlm6DmraTmraTlpITliqDnmoTlsZ7mgKfog73lnKhsaWIuanPph4zpnaLkvZPnjrDlh7rmnaXjgIJcclxubGliLmFkZGl0aW9uYWwgPSAndGVzdCdcclxuXHJcbi8vIOS9v+eUqHdlYnBhY2vlkb3ku6TovoXliqnnkIbop6Njb21tb25qc1xyXG4vLyB3ZWJwYWNrIC0tZGV2dG9vbD1pbmxpbmUtc291cmNlLW1hcCAtLW1vZGU9ZGV2ZWxvcG1lbnQgLS10YXJnZXQ9bm9kZSAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==