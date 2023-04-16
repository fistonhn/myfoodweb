"use strict";
(() => {
var exports = {};
exports.id = 3684;
exports.ids = [3684];
exports.modules = {

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

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

/***/ 8067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_customeresponses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(854);
/* harmony import */ var _utils_uploadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4670);
/* harmony import */ var _lib_prismaclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const storage = multer__WEBPACK_IMPORTED_MODULE_1___default().memoryStorage();
const upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({
    storage
});
const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onNoMatch: (req, res)=>{
        res.status(404).end("Page is not found");
    }
}).use(upload.any()).post(async (req, res)=>{
    try {
        // @ts-ignore
        const image = req.files.filter((file)=>file.fieldname === "file")[0];
        const imageresponse = await (0,_utils_uploadImage__WEBPACK_IMPORTED_MODULE_2__/* .uploadImage */ .I)(image);
        const { contractorid , name  } = req.body;
        if (!imageresponse) {
            return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_4__/* .ErrorResponse */ .i)({
                msg: "Error, try again later.",
                res,
                statusCode: 400
            });
        }
        await _lib_prismaclient__WEBPACK_IMPORTED_MODULE_3__/* ["default"].contractorDocs.create */ .Z.contractorDocs.create({
            data: {
                name: name,
                url: imageresponse.secure_url,
                contractorId: contractorid
            }
        });
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_4__/* .SuccessResponse */ .w)({
            msg: "upload successfully",
            res,
            statusCode: 200
        });
    } catch (error) {
        return (0,_utils_customeresponses__WEBPACK_IMPORTED_MODULE_4__/* .ErrorResponse */ .i)({
            msg: error.message,
            res,
            statusCode: 500
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);
const config = {
    api: {
        bodyParser: false
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 4670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ uploadImage)
});

;// CONCATENATED MODULE: external "cloudinary"
const external_cloudinary_namespaceObject = require("cloudinary");
;// CONCATENATED MODULE: external "datauri/parser"
const parser_namespaceObject = require("datauri/parser");
var parser_default = /*#__PURE__*/__webpack_require__.n(parser_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./utils/uploadImage.ts



external_cloudinary_namespaceObject.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const uploadImage = async (img)=>{
    const parser = new (parser_default())();
    const base64Image = parser.format(external_path_default().extname(img.originalname).toString(), img.buffer);
    if (base64Image.content) {
        const uploadedImageResponse = await external_cloudinary_namespaceObject.v2.uploader.upload(base64Image?.content, {
            resource_type: "image",
            folder: "foods-web"
        });
        return uploadedImageResponse;
    }
    return null;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8067));
module.exports = __webpack_exports__;

})();