"use strict";
(() => {
var exports = {};
exports.id = 3623;
exports.ids = [3623];
exports.modules = {

/***/ 4460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Select = ({ options , value , className , label , labelClassName , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid text-start w-[150px]",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `text-sm font-semibold text-white ${labelClassName}`,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                ...props,
                value: value,
                className: `shadow-md w-full border border-gray-300 rounded-md focus:border-primary p-2  outline-none ${className}`,
                children: options.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: val.value,
                        children: val.content
                    }, index))
            })
        ]
    });
};



/***/ }),

/***/ 5620:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ WageMenueLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4763);
/* harmony import */ var _utils_convertExcelToJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2407);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1107);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2923);
/* harmony import */ var _Inputs_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4460);
/* harmony import */ var _providers_apis_places__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9924);
/* harmony import */ var _menueprintpage_TopPrintSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7089);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_1__, _providers_apis_places__WEBPACK_IMPORTED_MODULE_8__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_1__, _providers_apis_places__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const WageMenueLayout = ({ menue  })=>{
    const [printing, setprinting] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [placesValues, setplacesValues] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(menue);
    const handleChangeCalculation = (cindex, value, key)=>{
        const _cat = [
            ...data.Categories
        ].map((c, ci)=>ci === cindex ? {
                ...c,
                [key]: value
            } : c);
        setdata((prev)=>({
                ...prev,
                Categories: _cat
            }));
    };
    const getTotalwages = ()=>{
        let sum = 0;
        data.Categories.forEach((c)=>{
            if (c.contractor?.wage !== undefined) {
                sum += c.contractor.wage;
            }
        });
        return sum;
    };
    const getPluses = ()=>{
        let sum = 0;
        data.Categories.forEach((c)=>{
            if (c.plus !== undefined) {
                sum += Math.abs(Number(c.plus));
            }
        });
        return sum;
    };
    const getMinuses = ()=>{
        let sum = 0;
        data.Categories.forEach((c)=>{
            if (c.minus !== undefined) {
                sum += Math.abs(Number(c.minus));
            }
        });
        return sum;
    };
    const getFinalTotal = ()=>{
        let sum = 0;
        data.Categories.forEach((c)=>{
            if (c.minus !== undefined) {
                sum += Number(c.contractor?.wage) * Number(c.placevalue) + Number(c.plus) - Number(c.minus) ? Number(c.contractor?.wage) * Number(c.placevalue) + Number(c.plus) - Number(c.minus) : 0;
            }
        });
        return sum;
    };
    const handleUpdateCategories = async ()=>{
        try {
            await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_1__/* .updateWageCategory */ .CV)({
                categories: data.Categories
            });
            alert("updated successfully!");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_10__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    const handleUploadPlacesValues = async (json)=>{
        try {
            await (0,_providers_apis_places__WEBPACK_IMPORTED_MODULE_8__/* .createPlacesApi */ .E)({
                places: json
            });
            alert("uploaded successfull!");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_10__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
        setplacesValues(json);
    };
    const getAllPlaces = async ()=>{
        try {
            const res = await (0,_providers_apis_places__WEBPACK_IMPORTED_MODULE_8__/* .getAllPlacesApi */ .A)();
            setplacesValues(res.data.places);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_10__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        getAllPlaces();
    }, []);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (printing) {
            window.print();
        }
    }, [
        printing
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            !printing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {
                className: "bg-sky-500"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menueprintpage_TopPrintSection__WEBPACK_IMPORTED_MODULE_9__/* .TopPrintSection */ .q, {
                menue: menue
            }),
            !printing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-4 bg-gray-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    label: "Upload Places",
                    labelClassName: "!text-black",
                    type: "file",
                    onChange: (e)=>{
                        if (!e.target.files) {
                            return;
                        }
                        const file = e.target.files[0];
                        (0,_utils_convertExcelToJson__WEBPACK_IMPORTED_MODULE_2__/* .convertExcelToJson */ .M)({
                            callback: handleUploadPlacesValues,
                            file: file
                        });
                        e.target.value = "";
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full mb-8 overflow-hidden bg-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full overflow-x-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-b border-2 border-black",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "px-4 py-3 uppercase  border-2 border-black  text-center",
                                                children: "s.no"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "px-4 py-3 uppercase  border-2 border-black  text-center",
                                                children: "NAME OF staff"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "px-4 py-3 uppercase  border-2 border-black  text-center",
                                                children: "wage"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "px-4 py-3 uppercase  border-2 border-black  text-center",
                                                children: "value of place"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                className: "px-4 py-3 uppercase  border-2 border-black  text-center",
                                                children: [
                                                    "Bonus",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "flex justify-between text-md font-semibold tracking-wide text-left text-gray-900  uppercase ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "px-4 py-3 uppercase text-center",
                                                                children: "+"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "px-4 py-3 uppercase text-center",
                                                                children: "-"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "px-4 py-3 uppercase text-center",
                                                children: "TOTAL"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                    className: "bg-white font-semibold",
                                    children: [
                                        data.Categories.map((c, ci)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-1 py-3 border-2 border-black  text-center",
                                                        children: ci + 1
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-1 py-3 border-2 border-black  ",
                                                        children: c.contractor?.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-1 py-3 border-2 border-black  text-center",
                                                        children: c.contractor?.wage ? c.contractor.wage : "0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        className: "px-1 py-3 border-2 border-black  text-center ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-full",
                                                                children: !printing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    className: "!w-[100px] ",
                                                                    type: "number",
                                                                    value: c.placevalue !== null ? c.placevalue : "0"
                                                                }) : c.placevalue !== null ? c.placevalue : "0"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex items-center space-x-3 mt-4",
                                                                children: !printing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select__WEBPACK_IMPORTED_MODULE_7__/* .Select */ .P, {
                                                                    value: c.placevalue !== null ? c.placevalue : "",
                                                                    onChange: (e)=>{
                                                                        handleChangeCalculation(ci, e.target.value, "placevalue");
                                                                    },
                                                                    label: "Select Place",
                                                                    labelClassName: "!text-black",
                                                                    className: "!text-black !w-[150px]",
                                                                    options: [
                                                                        ...placesValues.map((v)=>({
                                                                                content: `${v.name}: ${v.value}`,
                                                                                value: v.value
                                                                            }))
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-4 py-3 border-2 border-black  text-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            className: "text-gray-700 flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "px-4 py-3  text-center",
                                                                    children: !printing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                        type: "number",
                                                                        onChange: (e)=>{
                                                                            handleChangeCalculation(ci, e.target.value, "plus");
                                                                        },
                                                                        className: "!w-[100px] ",
                                                                        value: c.plus !== null ? c.plus : "0"
                                                                    }) : c.plus !== null ? c.plus : "0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "px-4 py-3  text-center",
                                                                    children: !printing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                        type: "number",
                                                                        onChange: (e)=>{
                                                                            handleChangeCalculation(ci, e.target.value, "minus");
                                                                        },
                                                                        className: "!w-[100px] ",
                                                                        value: c.minus !== null ? c.minus : "0"
                                                                    }) : c.minus !== null ? c.minus : "0"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-4 py-3 border-2 border-black  text-center",
                                                        children: Number(c.contractor?.wage) * Number(c.placevalue) + Number(c.plus) - Number(c.minus)
                                                    })
                                                ]
                                            })),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            className: "text-gray-700 font-bold",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-4 py-3 border-2 border-black  text-center"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-1 py-3 border-2 border-black  font-bold",
                                                    children: "Total value:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-4 py-3 border-2 border-black  text-center",
                                                    children: getTotalwages()
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-4 py-3 border-2 border-black  text-center"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-4 py-3 border-2 border-black  text-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "text-gray-700 flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "px-4 py-3  text-center",
                                                                children: getPluses()
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "px-4 py-3  text-center",
                                                                children: getMinuses()
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-4 py-3 border-2 border-black  text-center",
                                                    children: getFinalTotal()
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "text-end font-semibold text-lg p-3 underline underline-offset-4",
                        children: [
                            "Total payable amount : ",
                            getFinalTotal()
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl text-center tracking-tight mb-10",
                        children: "Thank You \uD83D\uDC4F"
                    })
                ]
            }),
            !printing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        className: " w-full m-auto",
                        title: "UPDATE",
                        onClick: handleUpdateCategories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        className: "mt-4 w-full m-auto",
                        title: "PRINT",
                        onClick: async ()=>{
                            setprinting(true);
                        }
                    })
                ]
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Wage_WageMenueLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5620);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4763);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Wage_WageMenueLayout__WEBPACK_IMPORTED_MODULE_1__, _providers_apis__WEBPACK_IMPORTED_MODULE_2__]);
([_components_Wage_WageMenueLayout__WEBPACK_IMPORTED_MODULE_1__, _providers_apis__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const WageEdit = ({ id  })=>{
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
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (id) {
            getsinglemenue();
        }
    }, [
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: !menue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "loading..."
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Wage_WageMenueLayout__WEBPACK_IMPORTED_MODULE_1__/* .WageMenueLayout */ .j, {
            menue: menue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WageEdit);
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

/***/ 9924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getAllPlacesApi),
/* harmony export */   "E": () => (/* binding */ createPlacesApi)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createPlacesApi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/places/create", data);
};
const getAllPlacesApi = async ()=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.get */ .o.get("/places/getall");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ convertExcelToJson)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);

const convertExcelToJson = ({ callback , file  })=>{
    if (file) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e)=>{
            const data = e.target?.result;
            const workbook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(data, {
                type: "array"
            });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(worksheet);
            callback(json);
        };
    }
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

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("xlsx");

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
var __webpack_exports__ = __webpack_require__.X(0, [1071,4763,4253], () => (__webpack_exec__(784)));
module.exports = __webpack_exports__;

})();