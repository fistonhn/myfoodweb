"use strict";
(() => {
var exports = {};
exports.id = 4941;
exports.ids = [4941];
exports.modules = {

/***/ 6407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ prismaclient)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prismaclient.ts
// lib/prisma.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const prismaclient = (prisma);


/***/ }),

/***/ 9768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6407);
// import dbConnect from "@/lib/dbconnect"
// import { ContractorModel } from "@/models/Contractor/contractor.moderl"

const handler = async (req, res)=>{
    try {
        const contractors = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].contractor.findMany */ .Z.contractor.findMany({
            include: {
                documents: {},
                Categories: {}
            }
        });
        return res.status(200).json({
            contractors
        });
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9768));
module.exports = __webpack_exports__;

})();