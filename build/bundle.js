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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(2);

var _dog = __webpack_require__(3);

var _dog2 = _interopRequireDefault(_dog);

var _calculator = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log('Hello ES6 from webpack');
// console.log('Auto Updatessdf ')

// const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];
// const highlights = () => {
// 	return averages.filter( player => {
// 		return player > 15 
// 	});
// }

// console.log(highlights());

// console.log(student);
// console.log(teacher);

var Cat = function (_Dog) {
	_inherits(Cat, _Dog);

	function Cat(name, barking) {
		_classCallCheck(this, Cat);

		return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name, barking));
	}

	return Cat;
}(_dog2.default);

var cat = new Cat('Aduri', 'meow meow');
// console.log(cat);
// console.log(cat.getInfo());


// Spread operator 
// function a(...z){
// 	console.log(z);
// }
// a(4, 56,12);

// function butter(...z) {
//   let a = [1, 2, 3];
//   console.log([...a, ...z]);
// }

// butter(4, 5, 6);

// Destructuring assignment ( array ) 
var a = [5, 3, 6, 4];
var b = a[0],
    c = a[1];

console.log(a, b, c);

// Destructuring assignment ( Object )
var obj = { name: 'Azizul', age: 25 };
var name = obj.name,
    age = obj.age;

console.log(name, age);

//import / export
console.log((0, _calculator.add)(8, 2));
console.log((0, _calculator.multiply)(8, 2));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var student = exports.student = ["Rasel", "Kabir", "Inm"];
var teacher = exports.teacher = ["Rahim", "Monir", "Habib"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
	function Dog(name, barking) {
		_classCallCheck(this, Dog);

		this.name = name;
		this.barking = barking;
	}

	_createClass(Dog, [{
		key: "getInfo",
		value: function getInfo() {
			return "The animal name is " + this.name + " and it barks like " + this.barking;
		}
	}]);

	return Dog;
}();

exports.default = Dog;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = function add(a, b) {
  return a + b;
};
var multiply = function multiply(a, b) {
  return a * b;
};

exports.add = add;
exports.multiply = multiply;

/***/ })
/******/ ]);