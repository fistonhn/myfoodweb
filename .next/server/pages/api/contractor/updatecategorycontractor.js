"use strict";
(() => {
var exports = {};
exports.id = 6163;
exports.ids = [6163];
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

/***/ 9024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6407);
/* harmony import */ var _utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(854);


const handler = async (req, res)=>{
    try {
        const { categoryId , contractorid  } = req.body;
        const category = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].categories.findUnique */ .Z.categories.findUnique({
            where: {
                id: categoryId
            }
        });
        if (!category) {
            return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .ErrorResponse */ .i)({
                msg: "Category does not exists",
                res,
                statusCode: 400
            });
        }
        const menue = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].menue.findUnique */ .Z.menue.findUnique({
            where: {
                id: category.menueId
            }
        });
        if (!menue) {
            return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .ErrorResponse */ .i)({
                msg: "Menue does not exists",
                res,
                statusCode: 400
            });
        }
        let prevDate = new Date();
        prevDate.setDate(prevDate.getDate() - 1);
        if (category.contractorId) {
            await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].contractor.update */ .Z.contractor.update({
                where: {
                    id: category.contractorId
                },
                data: {
                    assignTillDate: new Date(prevDate)
                }
            });
        }
        await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].contractor.update */ .Z.contractor.update({
            where: {
                id: contractorid
            },
            data: {
                assignTillDate: menue.functionDate
            }
        });
        await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].categories.update */ .Z.categories.update({
            where: {
                id: categoryId
            },
            data: {
                contractorId: contractorid
            }
        });
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .SuccessResponse */ .w)({
            msg: "contractor updated successfully!",
            res,
            statusCode: 200
        });
    } catch (error) {
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .ErrorResponse */ .i)({
            msg: error.message,
            res,
            statusCode: 500
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ErrorResponse),
/* harmony export */   "w": () => (/* binding */ SuccessResponse)
/* harmony export */ });
const ErrorResponse = ({ msg , statusCode , res  })=>{
    let response = {};
    if (typeof msg === "object") {
        response = msg;
    } else {
        response = {
            msg
        };
    }
    return res.status(statusCode).json(response);
};
const SuccessResponse = ({ msg , res , statusCode =200  })=>{
    let response = {};
    if (typeof msg === "object") {
        response = msg;
    } else {
        response = {
            msg
        };
    }
    return res.status(statusCode).json(response);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9024));
module.exports = __webpack_exports__;

})();