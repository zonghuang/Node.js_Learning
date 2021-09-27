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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./workspace/src/page.data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./workspace/src/page.data.js":
/*!************************************!*\
  !*** ./workspace/src/page.data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  column: {
    protocol: 'geek-rpc',

    ip: '127.0.0.1',

    port: 4000,

    protobufFile: __webpack_require__(/*! ./workspace/src/proto/detail.proto */ "./workspace/src/proto/detail.proto"),

    requestStruct: 'ColumnRequest',
    responseStruct: 'ColumnResponse',

    then(res) {
      return res.column;
    }
  },
  articleList: {
    protocol: 'http',

    url: 'http://127.0.0.1:4003',

    before: function (data) {
      return data;
    },

    then: function (res) {
      return JSON.parse(res).data.list;
    },

    catch: function () {

    }
  }
}

/***/ }),

/***/ "./workspace/src/proto/detail.proto":
/*!******************************************!*\
  !*** ./workspace/src/proto/detail.proto ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "message Column {\r\n  required int32 id = 1;\r\n  required string column_cover = 2;\r\n  required string column_title = 3;\r\n  required string column_subtitle = 4;\r\n  required string author_name = 5;\r\n  required string author_intro = 6;\r\n  required string column_intro = 7;\r\n  required string column_unit = 8;\r\n  required uint32 sub_count = 9;\r\n  required string update_frequency = 10;\r\n  required uint32 column_price = 11;\r\n  optional uint32 column_price_market = 12;\r\n  repeated Article articles = 13;\r\n}\r\nmessage Article {\r\n  required uint32 id = 1;\r\n  required bool is_video_preview = 2;\r\n  required string article_title = 3;\r\n}\r\n\r\nmessage ColumnResponse {\r\n  required Column column = 1;\r\n  repeated Column recommendColumns = 2;\r\n}\r\nmessage ColumnRequest {\r\n  required int32 columnid = 1;\r\n}\r\n"

/***/ })

/******/ });