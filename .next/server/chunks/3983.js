"use strict";
exports.id = 3983;
exports.ids = [3983];
exports.modules = {

/***/ 3983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ OperationMenueTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1107);
/* harmony import */ var _Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var _providers_apis_operation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1499);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5063);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4664);
/* harmony import */ var _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1780);
/* harmony import */ var _Admin_GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis_operation__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_6__, _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_7__, _Admin_GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_8__]);
([_providers_apis_operation__WEBPACK_IMPORTED_MODULE_4__, _store__WEBPACK_IMPORTED_MODULE_6__, _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_7__, _Admin_GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const OperationMenueTable = ({ menues , isWagePageRequest =false  })=>{
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const cstate = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((s)=>s.contractor);
    const handleShowModal = (cid)=>{
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_7__/* .selectContractorsUsingCategoryId */ .ve)({
            cid: cid
        }));
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_7__/* .fetchContractorsThunk */ .FI)(cid));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg",
        children: [
            cstate.showUpdateContractorModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Admin_GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_8__/* .GetContractorModal */ .B, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full overflow-x-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "booking id"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "Categories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "function date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "Head Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "Head Mobile Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "Driver Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "Vehicle Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "cleaner"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "actions"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            className: "bg-white whitespace-nowrap",
                            children: menues.map((val, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "text-gray-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: val.bookingId
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border space-y-4",
                                            children: val.Categories?.map((c, ci)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " grid gap-y-2 bg-gray-100 p-[1px]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "font-bold text-lg underline underline-offset-4",
                                                            children: [
                                                                ` `,
                                                                "Item: ",
                                                                c.itemName
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            onClick: ()=>{
                                                                handleShowModal(c.id);
                                                            },
                                                            className: "font-bold text-lg underline underline-offset-4 cursor-pointer hover:text-green-500",
                                                            children: [
                                                                "Contractor: ",
                                                                c.contractor?.name
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "font-bold text-lg underline underline-offset-4",
                                                            children: [
                                                                ` `,
                                                                "Comment: ",
                                                                c.comment
                                                            ]
                                                        })
                                                    ]
                                                }, ci);
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: new Date(val.functionDate).toLocaleDateString()
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditAbleColumns, {
                                            isWagePageRequest: isWagePageRequest,
                                            val: val
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            })
        ]
    });
};

const EditAbleColumns = ({ val , isWagePageRequest  })=>{
    const [update, setupdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(val);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    const handleUpdate = async ()=>{
        try {
            await (0,_providers_apis_operation__WEBPACK_IMPORTED_MODULE_4__/* .updateOperationMenueApi */ .E)({
                data: {
                    cleaner: data.cleaner,
                    driverName: data.driverName,
                    headMobileNumber: data.headMobileNumber,
                    headName: data.headName,
                    vehicleNumber: data.vehicleNumber,
                    id: data.id
                }
            });
            alert("Updated Successfully!");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "headName",
                    value: data.headName,
                    onChange: handleChange
                }) : data.headName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "headMobileNumber",
                    value: data.headMobileNumber,
                    onChange: handleChange
                }) : data.headMobileNumber
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "driverName",
                    value: data.driverName,
                    onChange: handleChange
                }) : data.driverName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "vehicleNumber",
                    value: data.vehicleNumber,
                    onChange: handleChange
                }) : data.vehicleNumber
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "cleaner",
                    value: data.cleaner,
                    onChange: handleChange
                }) : data.cleaner
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border space-x-3",
                children: isWagePageRequest ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    title: "Edit",
                    onClick: ()=>{
                        window.location.href = `/wage/edit/${val.id}`;
                    }
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            onClick: ()=>{
                                setupdate(!update);
                            },
                            title: "Edit"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Update",
                            onClick: handleUpdate,
                            disabled: !update
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: `/admin/menueprint/${val.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                title: "Print"
                            })
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ updateOperationMenueApi)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const updateOperationMenueApi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/operation/updateoperationmenue", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;