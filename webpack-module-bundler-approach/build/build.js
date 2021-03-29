/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/countdown.js":
/*!**********************************!*\
  !*** ./src/classes/countdown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countdown": () => (/* binding */ countdown)
/* harmony export */ });
const countdown = ({ initial, final: final = 0, interval: interval = 1, initial: current, }) => {
    while (current > final) {
        console.log(current);
        current -= interval;
    }
};



/***/ }),

/***/ "./src/classes/todo.js":
/*!*****************************!*\
  !*** ./src/classes/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoTemplate": () => (/* binding */ todoTemplate)
/* harmony export */ });
const todo = {
    id: 123,
    name: 'Pick up dog',
    completed: true,
};
const todoTemplate = `
<div todo=${todo.id} class='list-group-item'>
  <i class="${todo.completed ? '' : 'hidden'}"></i>
  <span class="name">${todo.name}</span>
</div>
`;



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

exports.__esModule = true;
var todo_js_1 = __webpack_require__(/*! ./classes/todo.js */ "./src/classes/todo.js");
var countdown_js_1 = __webpack_require__(/*! ./classes/countdown.js */ "./src/classes/countdown.js");
var container = document.getElementById('container');
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
countdown_js_1.countdown({ initial: 10, final: 0 });
console.log(filtered.join());
container.innerHTML = "\n <div>Data</div>\n  " + todo_js_1.todoTemplate + "\n";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9jbGFzc2VzL2NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9jbGFzc2VzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0IsdUVBQXVFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsY0FBYywrQkFBK0I7QUFDN0MsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUN3Qjs7Ozs7OztVQ1h4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCLG1CQUFPLENBQUMsZ0RBQW1CO0FBQzNDLHFCQUFxQixtQkFBTyxDQUFDLDBEQUF3QjtBQUNyRDtBQUNBLDhDQUE4QyxjQUFjLEVBQUU7QUFDOUQsMEJBQTBCLHdCQUF3QjtBQUNsRDtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY291bnRkb3duID0gKHsgaW5pdGlhbCwgZmluYWw6IGZpbmFsID0gMCwgaW50ZXJ2YWw6IGludGVydmFsID0gMSwgaW5pdGlhbDogY3VycmVudCwgfSkgPT4ge1xyXG4gICAgd2hpbGUgKGN1cnJlbnQgPiBmaW5hbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xyXG4gICAgICAgIGN1cnJlbnQgLT0gaW50ZXJ2YWw7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7IGNvdW50ZG93biB9O1xyXG4iLCJjb25zdCB0b2RvID0ge1xyXG4gICAgaWQ6IDEyMyxcclxuICAgIG5hbWU6ICdQaWNrIHVwIGRvZycsXHJcbiAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbn07XHJcbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGBcclxuPGRpdiB0b2RvPSR7dG9kby5pZH0gY2xhc3M9J2xpc3QtZ3JvdXAtaXRlbSc+XHJcbiAgPGkgY2xhc3M9XCIke3RvZG8uY29tcGxldGVkID8gJycgOiAnaGlkZGVuJ31cIj48L2k+XHJcbiAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHt0b2RvLm5hbWV9PC9zcGFuPlxyXG48L2Rpdj5cclxuYDtcclxuZXhwb3J0IHsgdG9kb1RlbXBsYXRlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciB0b2RvX2pzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzL3RvZG8uanNcIik7XHJcbnZhciBjb3VudGRvd25fanNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvY291bnRkb3duLmpzXCIpO1xyXG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG52YXIgZmlsdGVyZWQgPSBbMSwgMiwgM10uZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ID4gMDsgfSk7XHJcbmNvdW50ZG93bl9qc18xLmNvdW50ZG93bih7IGluaXRpYWw6IDEwLCBmaW5hbDogMCB9KTtcclxuY29uc29sZS5sb2coZmlsdGVyZWQuam9pbigpKTtcclxuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXFxuIDxkaXY+RGF0YTwvZGl2PlxcbiAgXCIgKyB0b2RvX2pzXzEudG9kb1RlbXBsYXRlICsgXCJcXG5cIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==