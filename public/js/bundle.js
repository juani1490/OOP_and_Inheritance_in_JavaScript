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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_movieclass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_movieclass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__classes_movieclass_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_loggerclass_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_loggerclass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__classes_loggerclass_js__);




let terminator = new __WEBPACK_IMPORTED_MODULE_0__classes_movieclass_js___default.a('Terminator I', 1985, 60);
let arnold = new __WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js___default.a('Arnold Schwarzenegger', 50);
let actors = [
                new __WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js___default.a('Paul Winfield', 50),
                new __WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js___default.a('Michael Biehn', 50),
                new __WEBPACK_IMPORTED_MODULE_1__classes_actorclass_js___default.a('Linda Hamilton', 50)
               ];

terminator.addCast(arnold);
terminator.addCast(actors);


let logger = new __WEBPACK_IMPORTED_MODULE_2__classes_loggerclass_js___default.a();

$(function(){
     terminator.on('Play', logger.log);
	});

terminator.play();


let ironman = new __WEBPACK_IMPORTED_MODULE_0__classes_movieclass_js___default.a('Iron Man', 2009, 90);
let social = {
	           share: function(friendName){
                         console.log(friendName+' share '+ironman.name);
   
	                  },
	           like: function(friendName){
	           	        console.log(friendName+' likes '+ironman.name)

	                 }
            };

Object.assign(ironman, social);
ironman.share('Mike Blossom');





 

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitterclass = __webpack_require__(2);

var _eventemitterclass2 = _interopRequireDefault(_eventemitterclass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
	_inherits(Movie, _EventEmitter);

	function Movie(name, year, duration) {
		_classCallCheck(this, Movie);

		var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

		_this.name = name;
		_this.year = year;
		_this.duration = duration;
		return _this;
	}

	_createClass(Movie, [{
		key: 'play',
		value: function play() {
			event = 'Play';
		}
	}, {
		key: 'pause',
		value: function pause() {
			event = 'Pause';
		}
	}, {
		key: 'resume',
		value: function resume() {
			event = 'Resume';
		}
	}, {
		key: 'addCast',
		value: function addCast(cast) {
			var array = [];
			if (cast.length === undefined) {
				array.push('Actor: ' + cast.name + ' ' + 'Edad: ' + cast.age);
			} else {
				for (var i = 0; i < cast.length; i++) {
					array.push('Actor: ' + cast[i].name + ' ' + 'Edad: ' + cast[i].age);
				}
			}
			$.each(array, function (index, contenido) {
				console.log(contenido);
			});
		}
	}]);

	return Movie;
}(_eventemitterclass2.default);

exports.default = Movie;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
	function EventEmitter(event) {
		_classCallCheck(this, EventEmitter);

		this.event = event;
	}

	_createClass(EventEmitter, [{
		key: "on",
		value: function on(eventName, callback) {
			if (eventName === event) {
				callback();
			}
		}
	}, {
		key: "emit",
		value: function emit(eventName) {}
	}, {
		key: "off",
		value: function off(eventName, callback) {}
	}]);

	return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
	_classCallCheck(this, Actor);

	this.name = name;
	this.age = age;
};

exports.default = Actor;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
	function Logger() {
		_classCallCheck(this, Logger);
	}

	_createClass(Logger, [{
		key: 'log',
		value: function log(info) {
			console.log('the ' + event + ' event has been emitted');
		}
	}]);

	return Logger;
}();

exports.default = Logger;

/***/ })
/******/ ]);