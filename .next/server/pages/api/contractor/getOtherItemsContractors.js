"use strict";
(() => {
var exports = {};
exports.id = 4481;
exports.ids = [4481];
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

/***/ 1995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6407);
/* harmony import */ var _utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(854);


const handler = async (req, res)=>{
    try {
        const { categoryID  } = req.body;
        const category = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].categories.findUnique */ .Z.categories.findUnique({
            where: {
                id: categoryID
            },
            include: {
                menue: {}
            }
        });
        if (!category) {
            return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .ErrorResponse */ .i)({
                msg: "category not exists!",
                res,
                statusCode: 400
            });
        }
        console.log(category);
        const contractors = await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].contractor.findMany */ .Z.contractor.findMany({
            where: {
                AND: [
                    {
                        item: {
                            not: category.itemName
                        }
                    },
                    {
                        OR: [
                            {
                                Categories: {
                                    none: {}
                                }
                            },
                            {
                                Categories: {
                                    every: {
                                        menue: {
                                            functionDate: {
                                                not: category.menue.functionDate
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        });
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_1__/* .SuccessResponse */ .w)({
            msg: {
                contractors
            },
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
var __webpack_exports__ = (__webpack_exec__(1995));
module.exports = __webpack_exports__;

})();