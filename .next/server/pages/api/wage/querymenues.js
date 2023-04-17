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
exports.id = "pages/api/wage/querymenues";
exports.ids = ["pages/api/wage/querymenues"];
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

/***/ "(api)/./pages/api/wage/querymenues.ts":
/*!***************************************!*\
  !*** ./pages/api/wage/querymenues.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismaclient */ \"(api)/./lib/prismaclient.ts\");\n/* harmony import */ var _utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/customeresponses */ \"(api)/./utils/customeresponses.ts\");\n\n\nconst handler = async (req, res)=>{\n    try {\n        const { enddate , startdate  } = req.body;\n        const menues = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menue.findMany({\n            where: {\n                AND: [\n                    {\n                        functionDate: {\n                            gte: new Date(startdate)\n                        }\n                    },\n                    {\n                        functionDate: {\n                            lte: new Date(enddate)\n                        }\n                    }\n                ]\n            },\n            include: {\n                Categories: {\n                    include: {\n                        contractor: {}\n                    }\n                }\n            }\n        });\n        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__.SuccessResponse)({\n            msg: {\n                menues\n            },\n            res,\n            statusCode: 200\n        });\n    } catch (error) {\n        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse)({\n            msg: error.message,\n            res,\n            statusCode: 500\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2FnZS9xdWVyeW1lbnVlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFa0M7QUFHekUsTUFBTUcsVUFBVSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDakUsSUFBSTtRQUNBLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxVQUFTLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUN2QyxNQUFNQyxTQUFTLE1BQU1ULHdFQUFxQixDQUFDO1lBQ3ZDWSxPQUFPO2dCQUNIQyxLQUFLO29CQUNEO3dCQUNJQyxjQUFjOzRCQUNWQyxLQUFLLElBQUlDLEtBQUtUO3dCQUNsQjtvQkFDSjtvQkFDQTt3QkFDSU8sY0FBYzs0QkFDVkcsS0FBSyxJQUFJRCxLQUFLVjt3QkFDbEI7b0JBQ0o7aUJBQ0g7WUFDTDtZQUNBWSxTQUFTO2dCQUNMQyxZQUFZO29CQUNSRCxTQUFTO3dCQUNMRSxZQUFZLENBQUM7b0JBQ2pCO2dCQUNKO1lBQ0o7UUFDSjtRQUNBLE9BQU9sQix3RUFBZUEsQ0FBQztZQUNuQm1CLEtBQUs7Z0JBQUVaO1lBQU87WUFDZEo7WUFDQWlCLFlBQVk7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQVk7UUFDakIsT0FBT3RCLHNFQUFhQSxDQUFDO1lBQ2pCb0IsS0FBS0UsTUFBTUMsT0FBTztZQUNsQm5CO1lBQUtpQixZQUFZO1FBQ3JCO0lBQ0o7QUFDSjtBQUNBLGlFQUFlbkIsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RzLXdlYi8uL3BhZ2VzL2FwaS93YWdlL3F1ZXJ5bWVudWVzLnRzP2FhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hY2xpZW50XCJcclxuaW1wb3J0IHsgSVF1ZXJ5V2FnZSB9IGZyb20gXCJAL3Byb3ZpZGVycy9hcGlzXCJcclxuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSwgU3VjY2Vzc1Jlc3BvbnNlIH0gZnJvbSBcIkAvdXRpbHMvY3VzdG9tZXJlc3BvbnNlc1wiXHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZW5kZGF0ZSwgc3RhcnRkYXRlIH0gPSByZXEuYm9keSBhcyBJUXVlcnlXYWdlXHJcbiAgICAgICAgY29uc3QgbWVudWVzID0gYXdhaXQgcHJpc21hLm1lbnVlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIEFORDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25EYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndGU6IG5ldyBEYXRlKHN0YXJ0ZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkRhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx0ZTogbmV3IERhdGUoZW5kZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3Rvcjoge31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBTdWNjZXNzUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICBtc2c6IHsgbWVudWVzIH0sXHJcbiAgICAgICAgICAgIHJlcyxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gRXJyb3JSZXNwb25zZSh7XHJcbiAgICAgICAgICAgIG1zZzogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgcmVzLCBzdGF0dXNDb2RlOiA1MDBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsicHJpc21hIiwiRXJyb3JSZXNwb25zZSIsIlN1Y2Nlc3NSZXNwb25zZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbmRkYXRlIiwic3RhcnRkYXRlIiwiYm9keSIsIm1lbnVlcyIsIm1lbnVlIiwiZmluZE1hbnkiLCJ3aGVyZSIsIkFORCIsImZ1bmN0aW9uRGF0ZSIsImd0ZSIsIkRhdGUiLCJsdGUiLCJpbmNsdWRlIiwiQ2F0ZWdvcmllcyIsImNvbnRyYWN0b3IiLCJtc2ciLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/wage/querymenues.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/wage/querymenues.ts"));
module.exports = __webpack_exports__;

})();