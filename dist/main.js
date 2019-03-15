/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import GenerateMaze from './generate_maze';

// $(() => {
//   const canvasEl = document.getElementsByTagName("canvas")[0];
//   let width = 34;
//   let height = 24;
//   canvasEl.height = height * 20 + 40;
//   canvasEl.width = width * 20 + 40;

//   const clickNames = ["BFS", "DFS", "AstarM", "AstarSL", "Dijkstra"];

//   const disableAllBtns = () => {
//     clickNames.concat(["maze-regen"]).forEach(className => {
//       $(`.${className}`).prop("disabled", true);
//       $(`.${className}-recent`).unbind("mouseenter mouseleave");
//     });
//   };

//   const enableAllBtns = () => {
//     clickNames.concat(["maze-regen"]).forEach(className => {
//       $(`.${className}`).prop("disabled", false);
//       $(`.${className}-recent`).mouseenter(() => {
//         handleHover(`${className}`);
//       }).mouseleave(() => {
//         handleHover(lastAction);
//       });
//     });
//   };

//   const maze = new GenerateMaze(canvasEl, width, height, enableAllBtns);
//   disableAllBtns();
//   maze.generate(canvasEl);

//   $(".prims").removeClass("hidden");
//   let lastAction = null;

//   const handleClick = searchType => {
//     maze.quickRegen();
//     maze.displayVisited(searchType);

//     $(".info").addClass("hidden");
//     $(`.${searchType}`).removeClass("hidden");
//     $(`.${searchType}-recent`).removeClass("hidden");

//     lastAction = searchType;
//   };

//   const handleHover = searchType => {
//     maze.quickRegen();
//     maze.quickDisplay(searchType);
//     $(".info").addClass("hidden");
//     $(`.${searchType}`).removeClass("hidden");
//   };

//   $(".maze-regen").on("click", () => {
//     disableAllBtns();
//     maze.generate(canvasEl);
//     $(".info").addClass("hidden");
//     $(".recenttrav").addClass("hidden");
//     $(".prims").removeClass("hidden");
//   });

//   $(".search-btns").on("click", (event) => {
//     if (clickNames.includes(event.target.className)) {
//       disableAllBtns();
//       handleClick(event.target.className);
//     }
//   });
// });

document.getElementById("gen").addEventListener('click', function () {
	setUp();initialize();
	generateMaze(randint(generatex), randint(generatey));
	mazeGenerated = true;currMaze = JSON.stringify(maze);

	showProcess(30);
});

document.getElementById("dfs").addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp();searchMazeWithDFS(outsetx, outsety, 30);
});

document.getElementById("bfs").addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp();searchMazeWithBFS(outsetx, outsety, 300);
});

document.getElementById("gen-res").addEventListener('click', function () {
	setUp();initialize();
	generateMaze(randint(generatex), randint(generatey));
	mazeGenerated = true;currMaze = JSON.stringify(maze);

	paintMaze(maze);
});

document.getElementById("dfs-res").addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp();searchMazeWithDFS(outsetx, outsety, 0);
});

document.getElementById("bfs-res").addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp();searchMazeWithBFS(outsetx, outsety, 0);
});

function setUp() {
	timeouts.forEach(function (t) {
		clearTimeout(t);
	});
	dumps = [];backTrack = true;
	if (mazeGenerated) maze = JSON.parse(currMaze);
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map