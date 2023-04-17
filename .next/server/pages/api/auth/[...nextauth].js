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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/prismaclient.ts":
/*!*****************************!*\
  !*** ./lib/prismaclient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    // @ts-ignore\n    if (!global.prisma) {\n        // @ts-ignore\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    // @ts-ignore\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUM4QjtBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLGFBQWE7SUFDYixJQUFJLENBQUNDLE9BQU9GLE1BQU0sRUFBRTtRQUNsQixhQUFhO1FBQ2JFLE9BQU9GLE1BQU0sR0FBRyxJQUFJRCx3REFBWUE7SUFDbEMsQ0FBQztJQUNELGFBQWE7SUFDYkMsU0FBU0UsT0FBT0YsTUFBTTtBQUN4QixDQUFDO0FBRUQsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kcy13ZWIvLi9saWIvcHJpc21hY2xpZW50LnRzPzZjNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prismaclient.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismaclient */ \"(api)/./lib/prismaclient.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"jsmith@gmailc.om\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const { email , password  } = credentials;\n                console.log({\n                    email,\n                    password\n                });\n                const dbuser = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        email: email\n                    }\n                });\n                console.log({\n                    dbuser\n                });\n                if (!dbuser || dbuser?.password !== password) {\n                    throw Error(\"Incorrect Credentials\");\n                    return null;\n                } else {\n                    return {\n                        id: dbuser.id,\n                        email: dbuser.email,\n                        image: null,\n                        role: dbuser.role\n                    };\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (user) {\n                // @ts-ignore\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // console.log(session, token, user)\n            // console.log('userin session', session);\n            // session.user.role = user.role;\n            if (token) {\n                // @ts-ignore\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDVTtBQUNnQjtBQUMxRCxNQUFNRyxjQUEyQjtJQUNwQ0MsV0FBVztRQUNQRixzRUFBbUJBLENBQUM7WUFDaEJHLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBbUI7Z0JBQzNFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ3BEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBQzlCLE1BQU0sRUFBRUMsTUFBSyxFQUFFSCxTQUFRLEVBQUUsR0FBR0w7Z0JBSTVCUyxRQUFRQyxHQUFHLENBQUM7b0JBQUVGO29CQUFPSDtnQkFBUztnQkFDOUIsTUFBTU0sU0FBUyxNQUFNakIsd0VBQXFCLENBQUM7b0JBQ3ZDb0IsT0FBTzt3QkFDSE4sT0FBT0E7b0JBQ1g7Z0JBQ0o7Z0JBRUFDLFFBQVFDLEdBQUcsQ0FBQztvQkFBRUM7Z0JBQU87Z0JBQ3JCLElBQUksQ0FBQ0EsVUFBVUEsUUFBUU4sYUFBYUEsVUFBVTtvQkFDMUMsTUFBTVUsTUFBTSx5QkFBd0I7b0JBQ3BDLE9BQU8sSUFBSTtnQkFDZixPQUFPO29CQUNILE9BQU87d0JBQ0hDLElBQUlMLE9BQU9LLEVBQUU7d0JBQ2JSLE9BQU9HLE9BQU9ILEtBQUs7d0JBQ25CUyxPQUFPLElBQUk7d0JBQ1hDLE1BQU1QLE9BQU9PLElBQUk7b0JBQ3JCO2dCQUNKLENBQUM7WUFDTDtRQUNKO0tBQ0g7SUFDREMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxXQUFXO1FBQ1AsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUViLEtBQUksRUFBRWMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLFVBQVMsRUFBRSxFQUFFO1lBQ3BELElBQUloQixNQUFNO2dCQUNOLGFBQWE7Z0JBQ2JhLE1BQU1QLElBQUksR0FBR04sS0FBS00sSUFBSTtZQUMxQixDQUFDO1lBQ0QsT0FBT087UUFDWDtRQUNBLE1BQU1JLFNBQVEsRUFBRUEsUUFBTyxFQUFFSixNQUFLLEVBQUViLEtBQUksRUFBRSxFQUFFO1lBQ3BDLG9DQUFvQztZQUNwQywwQ0FBMEM7WUFDMUMsaUNBQWlDO1lBQ2pDLElBQUlhLE9BQU87Z0JBQ1AsYUFBYTtnQkFDYkksUUFBUWpCLElBQUksQ0FBQ00sSUFBSSxHQUFHTyxNQUFNUCxJQUFJO1lBQ2xDLENBQUM7WUFDRCxPQUFPVztRQUNYO0lBQ0o7QUFDSixFQUFDO0FBRUQsaUVBQWVsQyxnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RzLXdlYi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFjbGllbnRcIlxyXG5pbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwianNtaXRoQGdtYWlsYy5vbVwiIH0sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzIGFzIHVua25vd24gYXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBlbWFpbCwgcGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRidXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGRidXNlciB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKCFkYnVzZXIgfHwgZGJ1c2VyPy5wYXNzd29yZCAhPT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkluY29ycmVjdCBDcmVkZW50aWFsc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkYnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBkYnVzZXIucm9sZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uLCB0b2tlbiwgdXNlcilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXJpbiBzZXNzaW9uJywgc2Vzc2lvbik7XHJcbiAgICAgICAgICAgIC8vIHNlc3Npb24udXNlci5yb2xlID0gdXNlci5yb2xlO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImRidXNlciIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIkVycm9yIiwiaWQiLCJpbWFnZSIsInJvbGUiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();