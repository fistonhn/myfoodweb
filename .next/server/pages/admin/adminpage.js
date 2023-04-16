"use strict";
(() => {
var exports = {};
exports.id = 2558;
exports.ids = [2558];
exports.modules = {

/***/ 6954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MenueTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4664);
/* harmony import */ var _GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4828);
/* harmony import */ var _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__, _GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_3__, _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_4__]);
([_store__WEBPACK_IMPORTED_MODULE_2__, _GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_3__, _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const MenueTable = ({ menues  })=>{
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const cstate = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)((s)=>s.contractor);
    const handleShowModal = (cid)=>{
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectContractorsUsingCategoryId */ .ve)({
            cid: cid
        }));
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_4__/* .fetchContractorsThunk */ .FI)(cid));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg",
        children: [
            cstate.showUpdateContractorModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GetContractorsModal_GetContractorModal__WEBPACK_IMPORTED_MODULE_3__/* .GetContractorModal */ .B, {}),
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
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7596:
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
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4763);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
/* harmony import */ var _components_Admin_MenueTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6954);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1107);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6259);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2584);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_2__, _components_Admin_MenueTable__WEBPACK_IMPORTED_MODULE_4__, _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_14__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_2__, _components_Admin_MenueTable__WEBPACK_IMPORTED_MODULE_4__, _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_11__, _store__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const AdminPage = ()=>{
    const menueState = (0,_store__WEBPACK_IMPORTED_MODULE_14__/* .useAppSelector */ .CG)((s)=>s.menue);
    const [startDate, setstartDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [endDate, setendDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [contractorNameSearch, setcontractorNameSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [searchDepartureDate, setsearchDepartureDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [disableContractorEdit, serdisableContractorEdit] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [menuesData, setmenuesData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [menueSearch, setmenueSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [contractorDialogeState, setcontractorDialogeState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const getMenueData = async (search = "")=>{
        try {
            if (search || startDate && endDate || searchDepartureDate || contractorNameSearch) {
                const menues = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .getMenuesApi */ .hA)({
                    search: search,
                    startDate: startDate,
                    endDate: endDate,
                    departureDate: searchDepartureDate,
                    contractorName: contractorNameSearch
                });
                setmenuesData(menues.data.menues);
            } else {
                const menues = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .getMenuesApi */ .hA)({});
                setmenuesData(menues.data.menues);
            }
        } catch (error) {
            return (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_15__/* .handleApiErrors */ .Y)(error.message);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getMenueData();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getMenueData();
    }, [
        menueState.refetchData
    ]);
    const handleExcelJsonData = async (data)=>{
        let updatedData = [];
        const prevDate = new Date();
        prevDate.setDate(prevDate.getDate() - 1);
        data.forEach((d)=>{
            updatedData.push({
                name: String(d.name),
                item: String(d.item),
                age: Number(d.age),
                wage: Number(d.wage),
                group: String(d.group),
                assignTillDate: new Date(prevDate),
                area: String(d.area),
                address: String(d.address),
                identitynumber: String(d.identitynumber),
                phone: String(d.phone)
            });
        });
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .uploadContractor */ .g0)({
                contractors: updatedData
            });
            alert(res.data.msg);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_15__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    const handleFileChange = (_e)=>{
        _e.preventDefault();
        if (_e.target.files) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                const data = e.target?.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_6__.read(data, {
                    type: "array"
                });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx__WEBPACK_IMPORTED_MODULE_6__.utils.sheet_to_json(worksheet);
                handleExcelJsonData(json);
                _e.target.value = "";
            };
            reader.readAsArrayBuffer(_e.target.files[0]);
        }
    };
    const handleConvertJSONToExcel = ()=>{
        try {
            const data = [];
            menuesData.forEach((v)=>{
                data.push({
                    ...v,
                    serviceTime: new Date(v.serviceTime).toLocaleTimeString(),
                    departureTime: new Date(v.departureTime).toLocaleTimeString(),
                    functionDate: new Date(v.functionDate).toLocaleDateString(),
                    departureDate: new Date(v.departureDate).toLocaleDateString()
                });
            });
            (0,_utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_13__/* .convertJSONintoExcelFile */ .i)(data, "MENUE DATA");
        } catch (error) {
            alert(error.message);
        }
    };
    const manuetable = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-5 space-y-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            title: "Upload Contractor Staff",
                            className: " relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                className: "absolute inset-0 opacity-0",
                                onChange: handleFileChange
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            title: "View Contuctors",
                            onClick: ()=>{
                                serdisableContractorEdit(true);
                                setcontractorDialogeState(true);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            label: "Start Date",
                            onChange: (e)=>{
                                setstartDate(e.target.value);
                            },
                            type: "date",
                            value: startDate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            label: "End Date",
                            onChange: (e)=>{
                                setendDate(e.target.value);
                            },
                            type: "date",
                            value: endDate
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "date",
                        label: "Departure Date",
                        value: searchDepartureDate,
                        onChange: (e)=>{
                            setsearchDepartureDate(e.target.value);
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            placeholder: "Search...",
                            value: menueSearch,
                            onChange: (e)=>{
                                setmenueSearch(e.target.value);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            title: "Search",
                            onClick: ()=>{
                                getMenueData(menueSearch);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            title: "Download",
                            onClick: handleConvertJSONToExcel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            title: "Reset",
                            onClick: ()=>{
                                setsearchDepartureDate("");
                                setstartDate("");
                                setendDate("");
                                setmenueSearch("");
                                getMenueData();
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_MenueTable__WEBPACK_IMPORTED_MODULE_4__/* .MenueTable */ .s, {
                    menues: menuesData
                })
            ]
        });
    };
    const handleContractorClose = ()=>{
        setcontractorDialogeState(false);
    };
    const contractorModals = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default()), {
            fullWidth: true,
            maxWidth: "md",
            open: contractorDialogeState,
            onClose: handleContractorClose,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default()), {
                    children: "CONTRACTORS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_11__/* .ContractorModel */ .o, {
                        allowEdit: disableContractorEdit
                    })
                })
            ]
        });
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
            manuetable(),
            contractorModals()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPage);
const getServerSideProps = async (ctx)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.getSession)(ctx);
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

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [1071,4763,6259,4664,4828], () => (__webpack_exec__(7596)));
module.exports = __webpack_exports__;

})();