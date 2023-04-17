"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/places/getall";
exports.ids = ["pages/api/places/getall"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prismaclient.ts":
/*!*****************************!*\
  !*** ./lib/prismaclient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    // @ts-ignore\n    if (!global.prisma) {\n        // @ts-ignore\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    // @ts-ignore\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLGFBQWE7SUFDYixJQUFJLENBQUNDLE9BQU9GLE1BQU0sRUFBRTtRQUNsQixhQUFhO1FBQ2JFLE9BQU9GLE1BQU0sR0FBRyxJQUFJRCx3REFBWUE7SUFDbEMsQ0FBQztJQUNELGFBQWE7SUFDYkMsU0FBU0UsT0FBT0YsTUFBTTtBQUN4QixDQUFDO0FBRUQsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kcy13ZWIvLi9saWIvcHJpc21hY2xpZW50LnRzPzZjNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prismaclient.ts\n");

/***/ }),

/***/ "(api)/./pages/api/places/getall.ts":
/*!************************************!*\
  !*** ./pages/api/places/getall.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismaclient */ \"(api)/./lib/prismaclient.ts\");\n/* harmony import */ var _utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/customeresponses */ \"(api)/./utils/customeresponses.ts\");\n\n\nconst handler = async (req, res)=>{\n    try {\n        const places = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].places.findMany();\n        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__.SuccessResponse)({\n            msg: {\n                places\n            },\n            res,\n            statusCode: 200\n        });\n    } catch (error) {\n        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse)({\n            msg: error.message,\n            res,\n            statusCode: 500\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxhY2VzL2dldGFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDa0M7QUFHMUUsTUFBTUcsVUFBVSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDakUsSUFBSTtRQUNBLE1BQU1DLFNBQVMsTUFBTU4seUVBQXNCO1FBQzNDLE9BQU9FLHdFQUFlQSxDQUFDO1lBQ25CTSxLQUFLO2dCQUFFRjtZQUFPO1lBQ2REO1lBQ0FJLFlBQVk7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQVk7UUFDakIsT0FBT1Qsc0VBQWFBLENBQUM7WUFDakJPLEtBQUtFLE1BQU1DLE9BQU87WUFDbEJOO1lBQ0FJLFlBQVk7UUFDaEI7SUFDSjtBQUNKO0FBRUEsaUVBQWVOLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kcy13ZWIvLi9wYWdlcy9hcGkvcGxhY2VzL2dldGFsbC50cz9kYzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYWNsaWVudFwiO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlLCBTdWNjZXNzUmVzcG9uc2UgfSBmcm9tIFwiQC91dGlscy9jdXN0b21lcmVzcG9uc2VzXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwbGFjZXMgPSBhd2FpdCBwcmlzbWEucGxhY2VzLmZpbmRNYW55KClcclxuICAgICAgICByZXR1cm4gU3VjY2Vzc1Jlc3BvbnNlKHtcclxuICAgICAgICAgICAgbXNnOiB7IHBsYWNlcyB9LFxyXG4gICAgICAgICAgICByZXMsXHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIEVycm9yUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICBtc2c6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHJlcyxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogNTAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsicHJpc21hIiwiRXJyb3JSZXNwb25zZSIsIlN1Y2Nlc3NSZXNwb25zZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwbGFjZXMiLCJmaW5kTWFueSIsIm1zZyIsInN0YXR1c0NvZGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/places/getall.ts\n");

/***/ }),

/***/ "(api)/./utils/customeresponses.ts":
/*!***********************************!*\
  !*** ./utils/customeresponses.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorResponse\": () => (/* binding */ ErrorResponse),\n/* harmony export */   \"SuccessResponse\": () => (/* binding */ SuccessResponse)\n/* harmony export */ });\nconst ErrorResponse = ({ msg , statusCode , res  })=>{\n    let response = {};\n    if (typeof msg === \"object\") {\n        response = msg;\n    } else {\n        response = {\n            msg\n        };\n    }\n    return res.status(statusCode).json(response);\n};\nconst SuccessResponse = ({ msg , res , statusCode =200  })=>{\n    let response = {};\n    if (typeof msg === \"object\") {\n        response = msg;\n    } else {\n        response = {\n            msg\n        };\n    }\n    return res.status(statusCode).json(response);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jdXN0b21lcmVzcG9uc2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBTU8sTUFBTUEsZ0JBQWdCLENBQUMsRUFBRUMsSUFBRyxFQUFFQyxXQUFVLEVBQUVDLElBQUcsRUFBaUIsR0FBSztJQUN0RSxJQUFJQyxXQUFXLENBQUM7SUFDaEIsSUFBSSxPQUFPSCxRQUFRLFVBQVU7UUFDekJHLFdBQVdIO0lBQ2YsT0FBTztRQUNIRyxXQUFXO1lBQUVIO1FBQUk7SUFDckIsQ0FBQztJQUNELE9BQU9FLElBQUlFLE1BQU0sQ0FBQ0gsWUFBWUksSUFBSSxDQUFDRjtBQUN2QyxFQUFDO0FBTU0sTUFBTUcsa0JBQWtCLENBQUMsRUFBRU4sSUFBRyxFQUFFRSxJQUFHLEVBQUVELFlBQWEsSUFBRyxFQUFvQixHQUFLO0lBQ2pGLElBQUlFLFdBQVcsQ0FBQztJQUNoQixJQUFJLE9BQU9ILFFBQVEsVUFBVTtRQUN6QkcsV0FBV0g7SUFDZixPQUFPO1FBQ0hHLFdBQVc7WUFBRUg7UUFBSTtJQUNyQixDQUFDO0lBQ0QsT0FBT0UsSUFBSUUsTUFBTSxDQUFDSCxZQUFZSSxJQUFJLENBQUNGO0FBQ3ZDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kcy13ZWIvLi91dGlscy9jdXN0b21lcmVzcG9uc2VzLnRzPzUzZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW50ZXJmYWNlIElIYW5kbGVyRXJyb3Mge1xyXG4gICAgc3RhdHVzQ29kZTogNDAwIHwgNTAwXHJcbiAgICBtc2c6IHN0cmluZyB8IHt9LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxufVxyXG5leHBvcnQgY29uc3QgRXJyb3JSZXNwb25zZSA9ICh7IG1zZywgc3RhdHVzQ29kZSwgcmVzIH06IElIYW5kbGVyRXJyb3MpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IHt9XHJcbiAgICBpZiAodHlwZW9mIG1zZyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHJlc3BvbnNlID0gbXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3BvbnNlID0geyBtc2cgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSkuanNvbihyZXNwb25zZSlcclxufVxyXG5pbnRlcmZhY2UgSVN1Y2Nlc3NSZXNwb25zZSB7XHJcbiAgICBzdGF0dXNDb2RlOiBudW1iZXJcclxuICAgIG1zZzogc3RyaW5nIHwge30sXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG59XHJcbmV4cG9ydCBjb25zdCBTdWNjZXNzUmVzcG9uc2UgPSAoeyBtc2csIHJlcywgc3RhdHVzQ29kZSA9IDIwMCB9OiBJU3VjY2Vzc1Jlc3BvbnNlKSA9PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSB7fVxyXG4gICAgaWYgKHR5cGVvZiBtc2cgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICByZXNwb25zZSA9IG1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXNwb25zZSA9IHsgbXNnIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKHN0YXR1c0NvZGUpLmpzb24ocmVzcG9uc2UpXHJcbn0iXSwibmFtZXMiOlsiRXJyb3JSZXNwb25zZSIsIm1zZyIsInN0YXR1c0NvZGUiLCJyZXMiLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJTdWNjZXNzUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/customeresponses.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/places/getall.ts"));
module.exports = __webpack_exports__;

})();