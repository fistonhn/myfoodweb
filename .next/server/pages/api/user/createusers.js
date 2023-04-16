"use strict";
(() => {
var exports = {};
exports.id = 2824;
exports.ids = [2824];
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

/***/ 1498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(854);
/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6407);


// import { UserModel } from '../../../models/User/user.model'
// import dbConnect from '../../../lib/dbconnect'
const handler = async (req, res)=>{
    try {
        const { password , email , role  } = req.body;
        // await dbConnect()
        // const alreadyExist = await UserModel.findOne({ email: username })
        const alreadyExist = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findFirst */ .Z.user.findFirst({
            where: {
                email: email
            }
        });
        if (alreadyExist) {
            return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .ErrorResponse */ .i)({
                msg: "User Already Exists",
                res: res,
                statusCode: 400
            });
        }
        // await UserModel.create({
        //     email: username,
        //     name: username,
        //     password: password,
        //     role: type,
        // })
        await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.create */ .Z.user.create({
            data: {
                email: email,
                password: password,
                role: role
            }
        });
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .SuccessResponse */ .w)({
            msg: "User Created Successfully",
            res: res,
            statusCode: 200
        });
    } catch (error) {
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .ErrorResponse */ .i)({
            msg: error.message,
            res: res,
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
var __webpack_exports__ = (__webpack_exec__(1498));
module.exports = __webpack_exports__;

})();