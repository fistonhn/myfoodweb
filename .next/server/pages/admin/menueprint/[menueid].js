"use strict";
(() => {
var exports = {};
exports.id = 8565;
exports.ids = [8565];
exports.modules = {

/***/ 1107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ title , className , type , children , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        ...rest,
        type: type ? type : "button",
        className: `shadow-md bg-primary py-2 px-4 rounded-md text-sm font-semibold outline-none text-white ${className}`,
        children: [
            title,
            children
        ]
    });
};



/***/ }),

/***/ 6146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MenuePrintLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1107);
/* harmony import */ var _TopPrintSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7089);
/* harmony import */ var _constants_globalconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2358);





const MenuePrintLayout = ({ menue  })=>{
    const [tableData, settableData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    function convertCategoriesToResult(categories) {
        const result = [];
        categories.forEach((category)=>{
            const existingCategory = result.find((c)=>c.itemName === category.itemName);
            const { contractor  } = category;
            let _conts = [];
            if (contractor?.name) {
                _conts.push(contractor?.name);
            }
            if (existingCategory) {
                existingCategory.comment.push(category.comment);
                existingCategory.contractors = [
                    ...existingCategory.contractors,
                    ..._conts
                ];
            } else {
                const { itemName , comment  } = category;
                const newCategory = {
                    itemName,
                    comment: [
                        comment
                    ],
                    contractors: _conts
                };
                result.push(newCategory);
            }
        });
        return result;
    }
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (menue) {
            const data = convertCategoriesToResult(menue.Categories);
            settableData(data);
        }
    }, [
        menue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-2 border-black m-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopPrintSection__WEBPACK_IMPORTED_MODULE_3__/* .TopPrintSection */ .q, {
                menue: menue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "text-md font-semibold tracking-wide text-left   text-gray-900 bg-gray-100 uppercase border-2 border-black",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase text-center",
                                            children: "S.NO."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase text-center",
                                            children: "Item name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase text-center",
                                            children: "name of staff"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                className: "bg-white font-semibold",
                                children: [
                                    tableData.filter((f)=>f.itemName !== _constants_globalconstants__WEBPACK_IMPORTED_MODULE_4__/* .HEAD_CONST */ .pS && f.itemName !== _constants_globalconstants__WEBPACK_IMPORTED_MODULE_4__/* .CLEANER_CONST */ .Lx).map((c, ci)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-1 py-2 border-2 border-black",
                                                    children: ci + 1
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-1 py-2 border-2 border-black ",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            c.itemName,
                                                            "(",
                                                            c.comment.length,
                                                            ")-  ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "text-sm",
                                                                children: [
                                                                    c.comment[0],
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                    className: "px-1 py-2 border-2 border-black",
                                                    children: [
                                                        "CONTRACTORS: ",
                                                        c.contractors.map((cont, i)=>`${cont} ${i < c.contractors.length - 1 ? "," : ""}`)
                                                    ]
                                                })
                                            ]
                                        })),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border-2 border-black"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-1 py-3 border-2 border-black",
                                                children: "BOOKED BY:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-1 py-3 border-2 border-black",
                                                children: menue.bookedBy
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                className: "px-1 py-3 border-2 border-black",
                                                children: [
                                                    "WORDS:-  ",
                                                    menue.words
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-1 py-3 border-2 border-black",
                                                children: "MOBILE NO:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-1 py-3 border-2 border-black",
                                                children: menue.mobile
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                className: "px-1 py-3 border-2 border-black",
                                                children: [
                                                    "CLEANER:-  ",
                                                    menue.cleaner
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-xl text-center tracking-tight mb-10",
                children: "Thank You \uD83D\uDC4F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    className: " w-full m-auto",
                    title: "PRINT",
                    onClick: ()=>{
                        window.print();
                    }
                })
            })
        ]
    });
};



/***/ }),

/***/ 2358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "El": () => (/* binding */ usersType),
/* harmony export */   "Lx": () => (/* binding */ CLEANER_CONST),
/* harmony export */   "pS": () => (/* binding */ HEAD_CONST)
/* harmony export */ });
const usersType = {
    "bookingclerk": "bookingclerk",
    "seniorclerk": "seniorclerk",
    "wageclerk": "wageclerk",
    "operationclerk": "operationclerk",
    "admin": "admin"
};
const HEAD_CONST = "head";
const CLEANER_CONST = "cleaner";


/***/ }),

/***/ 9142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menueprintpage_MenuePrintLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6146);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4763);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_2__]);
_providers_apis__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MenuePrint = ({ id  })=>{
    const [menue, setmenue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const getsinglemenue = async ()=>{
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .getSingleMenue */ .yo)(id);
            setmenue(res.data.menue);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_4__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (id) {
            getsinglemenue();
        }
    }, [
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: !menue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_menueprintpage_MenuePrintLayout__WEBPACK_IMPORTED_MODULE_1__/* .MenuePrintLayout */ .p, {
            menue: menue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuePrint);
const getServerSideProps = async (ctx)=>{
    const id = ctx.query.menueid;
    return {
        props: {
            id: id
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4763,4253], () => (__webpack_exec__(9142)));
module.exports = __webpack_exports__;

})();