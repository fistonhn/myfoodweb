"use strict";
(() => {
var exports = {};
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 8371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ TotalBookingComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TotalBookingComponent = ({ menues  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                    children: "function"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase whitespace-nowrap",
                                    children: "name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase whitespace-nowrap",
                                    children: "created at"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "function date"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "mobile"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "Service Time"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "venue"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "Departure Date"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "Departure Time"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "PAX"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "Special Instruction"
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
                                    children: "words"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "cleaner"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "booked By"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "booker Mobile Number"
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
                                        className: "px-4 py-3 border",
                                        children: val.function
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.createdAt ? `${new Date(val.createdAt).toLocaleDateString()}` : "null"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: new Date(val.functionDate).toLocaleDateString()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.mobile
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: new Date(val.serviceTime).toTimeString()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.venue
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: new Date(val.departureDate).toLocaleDateString()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: new Date(val.departureTime).toTimeString()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.PAX
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.specialInstruction
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.headName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.headMobileNumber
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.driverName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.vehicleNumber
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.words
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.cleaner
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.bookedBy
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: val.bookerMobileNumber
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        })
    });
};



/***/ }),

/***/ 6584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ ContractorSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var _utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2584);
/* harmony import */ var _providers_apis_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3544);
/* harmony import */ var _ContractorSearchTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis_report__WEBPACK_IMPORTED_MODULE_5__]);
_providers_apis_report__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ContractorSearch = ()=>{
    const [startDate, setstartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [endDate, setendDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [menuesData, setmenuesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [menueSearch, setmenueSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [total, settotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const getMenueData = async ()=>{
        if (!menueSearch) {
            return alert("select start and end date");
        }
        try {
            const res = await (0,_providers_apis_report__WEBPACK_IMPORTED_MODULE_5__/* .searchReportContractorApi */ .IF)({
                search: menueSearch
            });
            console.log({
                data: res.data.menues
            });
            // settotal(res.data.menues)
            setmenuesData(res.data.menues);
        } catch (error) {
            return (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__/* .handleApiErrors */ .Y)(error.message);
        }
    };
    const handleConvertJSONToExcel = ()=>{
        try {
            let data = [];
            menuesData.forEach((v)=>{
                data.push({
                    Booking_id: v.menue.bookingId,
                    Contractor_Name: v.contractor?.name,
                    Total_Wages: v.contractor?.wage,
                    Final_Wages: v.finalWage
                });
            });
            (0,_utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_4__/* .convertJSONintoExcelFile */ .i)(data, "FROM-TO DATE MENUES");
        } catch (error) {
            alert(error.message);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-5 space-y-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: menueSearch,
                        onChange: (e)=>{
                            setmenueSearch(e.target.value);
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Search",
                            onClick: ()=>{
                                getMenueData();
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Download",
                            onClick: handleConvertJSONToExcel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Reset",
                            onClick: ()=>{
                                setmenueSearch("");
                                setmenuesData([]);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContractorSearchTable__WEBPACK_IMPORTED_MODULE_6__/* .ContractorSearchTable */ .O, {
                        meunues: menuesData
                    })
                })
            ]
        })
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ContractorSearchTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContractorSearchTable = ({ meunues  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                    children: "contractor name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "total wages"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "final wages"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        className: "bg-white whitespace-nowrap",
                        children: meunues.map((m, mi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: m.menue.bookingId
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: m.contractor?.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: m.contractor?.wage
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: m.finalWage
                                    })
                                ]
                            }, mi))
                    })
                ]
            })
        })
    });
};



/***/ }),

/***/ 1138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ DateSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var _utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2584);
/* harmony import */ var _components_Admin_TotalBookingComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8371);
/* harmony import */ var _providers_apis_report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis_report__WEBPACK_IMPORTED_MODULE_6__]);
_providers_apis_report__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const DateSearch = ()=>{
    const [startDate, setstartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [endDate, setendDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [menuesData, setmenuesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [menueSearch, setmenueSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [total, settotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [menues, setmenues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getMenueData = async ()=>{
        if (!startDate || !endDate) {
            return alert("select start and end date");
        }
        try {
            const res = await (0,_providers_apis_report__WEBPACK_IMPORTED_MODULE_6__/* .getTotalBookingsApi */ .Ng)({
                startdate: startDate,
                enddate: endDate
            });
            setmenues(res.data.menues);
        } catch (error) {
            return (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__/* .handleApiErrors */ .Y)(error.message);
        }
    };
    const handleConvertJSONToExcel = ()=>{
        try {
            (0,_utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_4__/* .convertJSONintoExcelFile */ .i)(menues, "FROM-TO DATE MENUES");
        } catch (error) {
            alert(error.message);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-5 space-y-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            labelClassName: "!text-black",
                            label: "Booking From",
                            onChange: (e)=>{
                                setstartDate(e.target.value);
                            },
                            type: "date",
                            value: startDate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            labelClassName: "!text-black",
                            label: "Booking To",
                            onChange: (e)=>{
                                setendDate(e.target.value);
                            },
                            type: "date",
                            value: endDate
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Search...",
                            onClick: ()=>{
                                getMenueData();
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Download",
                            onClick: handleConvertJSONToExcel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Reset",
                            onClick: ()=>{
                                setstartDate("");
                                setendDate("");
                                setmenues([]);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_TotalBookingComponent__WEBPACK_IMPORTED_MODULE_5__/* .TotalBookingComponent */ .T, {
                        menues: menues
                    })
                })
            ]
        })
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5093:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ WageSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var _utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2584);
/* harmony import */ var _providers_apis_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3544);
/* harmony import */ var _WageSearchTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6931);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis_report__WEBPACK_IMPORTED_MODULE_5__]);
_providers_apis_report__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const WageSearch = ()=>{
    const [startDate, setstartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [endDate, setendDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [menuesData, setmenuesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [menueSearch, setmenueSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [total, settotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const getMenueData = async ()=>{
        if (!startDate || !endDate) {
            return alert("select start and end date");
        }
        try {
            const res = await (0,_providers_apis_report__WEBPACK_IMPORTED_MODULE_5__/* .startenddatewages */ .Nz)({
                startdate: startDate,
                enddate: endDate
            });
            const { menues , totalwages , finalwages  } = res.data;
            setmenuesData(menues);
            console.log({
                menues,
                totalwages,
                finalwages
            });
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__/* .handleApiErrors */ .Y)(error.message);
            alert(err);
        }
    };
    const handleConvertJSONToExcel = ()=>{
        try {
            const data = [];
            menuesData.forEach((v)=>{
                data.push({
                    START_DATE: startDate,
                    END_DATE: endDate,
                    BOOKING_ID: v.bookingId,
                    VENUE: v.venue,
                    TOTAL_WAGES: (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .getTotalwages */ .Z)(v),
                    FINAL_WAGES: (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .getFinalWages */ .p)(v)
                });
            });
            (0,_utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_4__/* .convertJSONintoExcelFile */ .i)(data, "FROM-TO DATE WAGE");
        } catch (error) {
            alert(error.message);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-5 space-y-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            labelClassName: "!text-black",
                            label: "Booking From",
                            onChange: (e)=>{
                                setstartDate(e.target.value);
                            },
                            type: "date",
                            value: startDate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            labelClassName: "!text-black",
                            label: "Booking To",
                            onChange: (e)=>{
                                setendDate(e.target.value);
                            },
                            type: "date",
                            value: endDate
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Search",
                            onClick: ()=>{
                                getMenueData();
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Download",
                            onClick: handleConvertJSONToExcel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                            title: "Reset",
                            onClick: ()=>{
                                setstartDate("");
                                setendDate("");
                                setmenueSearch("");
                                setmenuesData([]);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WageSearchTable__WEBPACK_IMPORTED_MODULE_6__/* .WageSearchTable */ .S, {
                        meunues: menuesData
                    })
                })
            ]
        })
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ WageSearchTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7453);



const WageSearchTable = ({ meunues  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                    children: "venue"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "total wages"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "px-4 py-3 uppercase",
                                    children: "final wages"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        className: "bg-white whitespace-nowrap",
                        children: meunues.map((m, mi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: m.bookingId
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: m.venue
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getTotalwages */ .Z)(m)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "px-4 py-3 border",
                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getFinalWages */ .p)(m)
                                    })
                                ]
                            }, mi))
                    })
                ]
            })
        })
    });
};



/***/ }),

/***/ 7453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getTotalwages),
/* harmony export */   "p": () => (/* binding */ getFinalWages)
/* harmony export */ });
const getTotalwages = (w)=>{
    let sum = 0;
    w.Categories.forEach((v)=>{
        if (v.contractor?.wage !== undefined) {
            sum += Number(v.contractor?.wage);
        }
    });
    return sum;
};
const getFinalWages = (w)=>{
    let sum = 0;
    w.Categories.forEach((v)=>{
        if (v.finalWage !== null) {
            sum += Number(v.finalWage);
        }
    });
    return sum;
};


/***/ }),

/***/ 7329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2923);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_reportPage_DateSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1138);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_reportPage_WageSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5093);
/* harmony import */ var _components_reportPage_ContractorSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_reportPage_DateSearch__WEBPACK_IMPORTED_MODULE_4__, _components_reportPage_WageSearch__WEBPACK_IMPORTED_MODULE_6__, _components_reportPage_ContractorSearch__WEBPACK_IMPORTED_MODULE_7__]);
([_components_reportPage_DateSearch__WEBPACK_IMPORTED_MODULE_4__, _components_reportPage_WageSearch__WEBPACK_IMPORTED_MODULE_6__, _components_reportPage_ContractorSearch__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
            sx: {
                p: 3
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        })
    });
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
const ReportPage = ()=>{
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        },
        className: "h-screen overflow-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    width: "60%",
                    bgcolor: "white",
                    marginX: "auto"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            borderBottom: 1,
                            borderColor: "divider"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tabs, {
                            value: value,
                            onChange: handleChange,
                            "aria-label": "basic tabs example",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                    label: "FROM-TO DATE",
                                    ...a11yProps(0)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                    label: "FROM-TO DATE WAGE",
                                    ...a11yProps(1)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                    label: "SEARCH CONTRACTOR",
                                    ...a11yProps(2)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
                        value: value,
                        index: 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reportPage_DateSearch__WEBPACK_IMPORTED_MODULE_4__/* .DateSearch */ .O, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
                        value: value,
                        index: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reportPage_WageSearch__WEBPACK_IMPORTED_MODULE_6__/* .WageSearch */ .X, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
                        value: value,
                        index: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_reportPage_ContractorSearch__WEBPACK_IMPORTED_MODULE_7__/* .ContractorSearch */ .a, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportPage);
const getServerSideProps = async (ctx)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(ctx);
    if (!session || session.user.role !== "admin") {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ axios)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:3000/api"
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IF": () => (/* binding */ searchReportContractorApi),
/* harmony export */   "Ng": () => (/* binding */ getTotalBookingsApi),
/* harmony export */   "Nz": () => (/* binding */ startenddatewages)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getTotalBookingsApi = async (data)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/report/totalbookings", data);
};
const startenddatewages = async (data)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/report/tofromdatewages", data);
};
const searchReportContractorApi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/search", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ convertJSONintoExcelFile)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);

function convertJSONintoExcelFile(data, fileName) {
    const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(data);
    const workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_new();
    // Object.entries(workSheet).map(([key, value]) => {
    //     if (!!value.v && value.v.includes("http")) {
    //         workSheet[key].l = { Target: `${value.v}`, Tooltip: `${value.v}` };
    //     }
    // })
    xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_append_sheet(workBook, workSheet, "students");
    // Generate buffer
    xlsx__WEBPACK_IMPORTED_MODULE_0__.write(workBook, {
        bookType: "xlsx",
        type: "buffer"
    });
    // Binary string
    xlsx__WEBPACK_IMPORTED_MODULE_0__.write(workBook, {
        bookType: "xlsx",
        type: "binary"
    });
    xlsx__WEBPACK_IMPORTED_MODULE_0__.writeFile(workBook, `${fileName}.xlsx`);
}


/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ handleApiErrors)
/* harmony export */ });
const handleApiErrors = (error)=>{
    if (error?.response?.data?.msg) {
        return error?.response?.data?.msg;
    }
    return error.message;
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1071], () => (__webpack_exec__(7329)));
module.exports = __webpack_exports__;

})();