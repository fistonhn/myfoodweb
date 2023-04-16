"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 5075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2923);






const intitalData = {
    email: "",
    password: ""
};
const Home = ()=>{
    const [formdata, setformdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(intitalData);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setformdata((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)("credentials", {
            redirect: false,
            email: formdata.email,
            password: formdata.password
        });
        console.log(res);
        if (res?.error) {
            alert(res.error);
        } else {
            window.location.href = "/order";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundImage: `url("bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        },
        className: "h-screen overflow-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {
                onlyLogo: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center  mt-14 pb-14",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "grid w-[30%] m-auto gap-y-3 bg-white p-10 shadow-md rounded-md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-bold text-center text-2xl mb-5",
                            children: "Login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            required: true,
                            name: "email",
                            onChange: handleChange,
                            placeholder: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            required: true,
                            name: "password",
                            onChange: handleChange,
                            placeholder: "Password",
                            type: "password"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                            title: "Submit",
                            type: "submit"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async (ctx)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)(ctx);
    if (session) {
        return {
            redirect: {
                destination: "/order",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
};


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1071], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();