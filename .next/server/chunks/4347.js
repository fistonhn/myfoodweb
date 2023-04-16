"use strict";
exports.id = 4347;
exports.ids = [4347];
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

/***/ 6776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SeniorClerkEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4763);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6259);
/* harmony import */ var _SeniorClerkTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_1__, _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_6__, _SeniorClerkTable__WEBPACK_IMPORTED_MODULE_7__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_1__, _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_6__, _SeniorClerkTable__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SeniorClerkEdit = ()=>{
    const [disableContractorEdit, serdisableContractorEdit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [menuesData, setmenuesData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [menueSearch, setmenueSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [contractorDialogeState, setcontractorDialogeState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getMenueData = async ()=>{
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_1__/* .seniorClerkSearchMenueApi */ .WC)({
                search: menueSearch
            });
            setmenuesData(res.data.menues);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_8__/* .handleApiErrors */ .Y)(error.message);
            alert(err);
        }
    };
    const manuetable = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-5 space-y-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "min-w-[50%]",
                        label: "Search",
                        placeholder: "Booking ID/Phone Number/Customer Name...",
                        onChange: (e)=>{
                            setmenueSearch(e.target.value);
                        },
                        type: "text",
                        value: menueSearch
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                            title: "Search",
                            onClick: ()=>{
                                getMenueData();
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                            title: "Reset",
                            onClick: ()=>{
                                setmenueSearch("");
                                setmenuesData([]);
                            }
                        })
                    ]
                }),
                menuesData.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SeniorClerkTable__WEBPACK_IMPORTED_MODULE_7__/* .SeniorClerkTable */ .s, {
                    menues: menuesData
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-center text-white uppercase font-bold",
                        children: "No records found"
                    })
                })
            ]
        });
    };
    const handleContractorClose = ()=>{
        setcontractorDialogeState(false);
    };
    const contractorModals = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5___default()), {
            fullWidth: true,
            maxWidth: "md",
            open: contractorDialogeState,
            onClose: handleContractorClose,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_6__/* .ContractorModel */ .o, {
                allowEdit: disableContractorEdit
            })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            manuetable(),
            contractorModals()
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SeniorClerkTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4763);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1107);
/* harmony import */ var _Inputs_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1175);
/* harmony import */ var _providers_apis_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6395);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4460);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7119);
/* harmony import */ var _utils_ISODateToLocalDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8189);
/* harmony import */ var _utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_3__, _providers_apis_order__WEBPACK_IMPORTED_MODULE_9__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_3__, _providers_apis_order__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const UpdateContractorsModal = ({ onClose , open , category  })=>{
    const [contractors, setcontractors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedContractor, setselectedContractor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const getContractores = async ()=>{
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_3__/* .getAvailableContractorsWithItem */ .oK)({
                item: category?.itemName
            });
            setcontractors(res.data.contractors);
            console.log({
                setselectedContractores: res.data.contractors
            });
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (category?.itemName) {
            getContractores();
        }
    }, [
        category?.itemName
    ]);
    const handleUpdate = async ()=>{
        if (!selectedContractor) {
            return alert("Kindly select one contractor.");
        }
        if (!category) {
            return;
        }
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_3__/* .updateCatgoryContractor */ .Bc)({
                categoryId: category.id,
                contractorid: selectedContractor.id
            });
            alert(res.data.msg);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
        open: open,
        maxWidth: "md",
        fullWidth: true,
        onClose: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: "Available Contractors"
            }),
            contractors.map((c, ci)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
                            checked: c.id === selectedContractor?.id,
                            onChange: ()=>{
                                setselectedContractor(c);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-lg font-bold",
                            children: c.name
                        })
                    ]
                }, ci)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.DialogActions, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex space-x-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z, {
                            title: "Cancel",
                            onClick: onClose
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z, {
                            title: "Update",
                            onClick: handleUpdate
                        })
                    ]
                })
            })
        ]
    });
};
const SeniorClerkTable = ({ menues  })=>{
    const [updateDialoge, setupdateDialoge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedContractores, setselectedContractores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedContractor, setselectedContractor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selectedCategory, setselectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleClose = ()=>{
        setselectedCategory(undefined);
        setselectedCategory(undefined);
        setupdateDialoge(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full  overflow-hidden rounded-lg shadow-lg ",
        children: [
            updateDialoge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UpdateContractorsModal, {
                open: updateDialoge,
                onClose: handleClose,
                category: selectedCategory
            }),
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
                                        children: "Mobile"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "booked by"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "booker Mobile Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "cleaner"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "driver Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "function"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "head Mobile Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "head Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "PAX"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "special Instruction"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "vehicle Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "venue"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "words"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "function date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "service time"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "departure date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "departure time"
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditAbleColumns, {
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

const EditAbleColumns = ({ val  })=>{
    const [update, setupdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(val);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        console.log(value);
        setData({
            ...data,
            [name]: value
        });
    };
    const handleUpdate = async ()=>{
        try {
            let _departureTime = data.departureTime;
            if (data?.departureTime && !data.departureTime.toString().includes("Z")) {
                const _departureHourMinute = data.departureTime.split(":");
                _departureTime = (0,_utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_13__/* .updateDateWithHourAndMinute */ .C)(new Date(data.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]));
            }
            // 
            let _serviceTime = data.serviceTime;
            if (data?.serviceTime && !data.serviceTime.toString().includes("Z")) {
                const _serviceHourMinute = data.serviceTime.split(":");
                _serviceTime = (0,_utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_13__/* .updateDateWithHourAndMinute */ .C)(new Date(data.functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]));
            }
            await (0,_providers_apis_order__WEBPACK_IMPORTED_MODULE_9__/* .updateSeniorClekMenueApi */ .D)({
                data: {
                    bookingId: data.bookingId,
                    id: data.id,
                    mobile: data.mobile,
                    name: data.name,
                    bookedBy: data.bookedBy,
                    bookerMobileNumber: data.bookerMobileNumber,
                    cleaner: data.cleaner,
                    driverName: data.driverName,
                    function: data.function,
                    headMobileNumber: data.headMobileNumber,
                    headName: data.headName,
                    PAX: data.PAX,
                    specialInstruction: data.specialInstruction,
                    vehicleNumber: data.vehicleNumber,
                    venue: data.venue,
                    words: data.words,
                    functionDate: new Date(data.functionDate),
                    serviceTime: _serviceTime,
                    departureTime: _departureTime,
                    departureDate: new Date(data.departureDate)
                }
            });
            alert("Updated Successfully!");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "mobile",
                    value: data.mobile,
                    onChange: handleChange
                }) : data.mobile
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "name",
                    value: data.name,
                    onChange: handleChange
                }) : data.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "bookedBy",
                    value: data.bookedBy,
                    onChange: handleChange
                }) : data.bookedBy
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "bookerMobileNumber",
                    value: data.bookerMobileNumber,
                    onChange: handleChange
                }) : data.bookerMobileNumber
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: data.cleaner
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: data.driverName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Select__WEBPACK_IMPORTED_MODULE_10__/* .Select */ .P, {
                    options: Object.values(_data_data__WEBPACK_IMPORTED_MODULE_11__/* .functionsConstants */ .x).map((v)=>({
                            content: v,
                            value: v
                        })),
                    name: "function",
                    value: data.function,
                    onChange: handleChange
                }) : data.function
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: data.headMobileNumber
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: data.headName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "PAX",
                    value: data.PAX,
                    onChange: handleChange
                }) : data.PAX
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "specialInstruction",
                    value: data.specialInstruction,
                    onChange: handleChange
                }) : data.specialInstruction
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: data.vehicleNumber
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "venue",
                    value: data.venue,
                    onChange: handleChange
                }) : data.venue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    name: "words",
                    value: data.words,
                    onChange: handleChange
                }) : data.words
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    type: "date",
                    name: "functionDate",
                    value: typeof data.functionDate === "string" ? data.functionDate : (0,_utils_ISODateToLocalDate__WEBPACK_IMPORTED_MODULE_14__/* .ISODateIntoLocalDate */ .e)(data.functionDate),
                    onChange: handleChange
                }) : new Date(data.functionDate).toLocaleDateString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    type: "time",
                    name: "serviceTime",
                    value: data.serviceTime,
                    onChange: handleChange
                }) : new Date(data.serviceTime).toLocaleTimeString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    type: "date",
                    name: "departureDate",
                    value: data.departureDate,
                    onChange: handleChange
                }) : new Date(data.departureDate).toLocaleDateString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: update ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    type: "time",
                    name: "departureTime",
                    value: data.departureTime,
                    onChange: handleChange
                }) : new Date(data.departureTime).toLocaleTimeString()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-4 py-3 border space-x-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z, {
                        onClick: ()=>{
                            setupdate(!update);
                        },
                        title: "Edit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .z, {
                        title: "Update",
                        onClick: handleUpdate,
                        disabled: !update
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ UploadMenueExcelFile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4763);
/* harmony import */ var _utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4823);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const UploadMenueExcelFile = ()=>{
    const [uploading, setuploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleCategories = (v)=>{
        let toReturn = [];
        Object.entries(v).forEach(([key, value])=>{
            if (key.startsWith("item")) {
                toReturn.push({
                    comment: "",
                    counter: `${v[`counter${key.slice(4)}`]}`,
                    item: `${value}`
                });
            }
        });
        if (toReturn.length > 0) {
            return toReturn;
        }
        return false;
    };
    const handleData = async (json)=>{
        const arrayFormData = [];
        json.forEach((v)=>{
            // categories
            const result = handleCategories(v);
            if (typeof result === "boolean") {
                return alert("kindly select the items and counters.");
            }
            console.log("results==>", result);
            // categories
            const formData = {
                id: "",
                bookingId: String((0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()).substring(0, 8)
            };
            if (!v.departureTime || !v.serviceTime || !v.departureDate || !v.functionDate) {
                return alert("service time | service date | departureDate| departureTime is required.");
            }
            // @ts-ignore
            const _departureHourMinute = v.departureTime.split(":");
            const _departureTime = (0,_utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_7__/* .updateDateWithHourAndMinute */ .C)(new Date(v.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]));
            // @ts-ignore
            const _serviceHourMinute = v.serviceTime.split(":");
            const _serviceTime = (0,_utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_7__/* .updateDateWithHourAndMinute */ .C)(new Date(v.functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]));
            // bookedBy
            if (v.bookedBy) {
                formData.bookedBy = v.bookedBy;
            } else {
                return alert("Booked By is Required.");
            }
            // bookerMobileNumber 
            if (v.bookerMobileNumber) {
                formData.bookerMobileNumber = v.bookerMobileNumber;
            } else {
                return alert("bookerMobileNumber is Required.");
            }
            // cleaner 
            if (v.cleaner) {
                formData.cleaner = v.cleaner;
            } else {
                return alert("cleaner is Required.");
            }
            // departureDate 
            if (v.departureDate) {
                formData.departureDate = new Date(v.departureDate);
            } else {
                return alert("departureDate is Required.");
            }
            // departureTime 
            if (v.departureTime) {
                formData.departureTime = _departureTime;
            } else {
                return alert("departureTime is Required.");
            }
            // driverName 
            if (v.driverName) {
                formData.driverName = v.driverName;
            } else {
                return alert("driverName is Required.");
            }
            // function 
            if (v.function) {
                formData.function = v.function;
            } else {
                return alert("function is Required.");
            }
            // functionDate 
            if (v.functionDate) {
                formData.functionDate = new Date(v.functionDate);
            } else {
                return alert("functionDate is Required.");
            }
            // headMobileNumber 
            if (v.headMobileNumber) {
                formData.headMobileNumber = v.headMobileNumber;
            } else {
                return alert("headMobileNumber is Required.");
            }
            // headName 
            if (v.headName) {
                formData.headName = v.headName;
            } else {
                return alert("headName is Required.");
            }
            // mobile 
            if (v.mobile) {
                formData.mobile = v.mobile;
            } else {
                return alert("mobile is Required.");
            }
            // name 
            if (v.name) {
                formData.name = v.name;
            } else {
                return alert("name is Required.");
            }
            // PAX 
            if (v.PAX) {
                formData.PAX = v.PAX;
            } else {
                return alert("PAX is Required.");
            }
            // serviceTime 
            if (v.serviceTime) {
                formData.serviceTime = _serviceTime;
            } else {
                return alert("serviceTime is Required.");
            }
            // specialInstruction 
            if (v.specialInstruction) {
                formData.specialInstruction = v.specialInstruction;
            } else {
                return alert("specialInstruction is Required.");
            }
            // vehicleNumber 
            if (v.vehicleNumber) {
                formData.vehicleNumber = v.vehicleNumber;
            } else {
                return alert("vehicleNumber is Required.");
            }
            // venue 
            if (v.venue) {
                formData.venue = v.venue;
            } else {
                return alert("venue is Required.");
            }
            // words 
            if (v.words) {
                formData.words = v.words;
            } else {
                return alert("words is Required.");
            }
            arrayFormData.push({
                _data: formData,
                cat: result
            });
        });
        try {
            setuploading(true);
            for(let index = 0; index < arrayFormData.length; index++){
                await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_4__/* .createMenueApi */ .RA)({
                    formdata: arrayFormData[index]._data,
                    selectedItems: arrayFormData[index].cat
                });
            }
            setuploading(false);
            alert("Menue uploaded successfully.");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_8__/* .handleApiErrors */ .Y)(error);
            alert(err);
            setuploading(false);
        }
    };
    const handleFileChange = (_e)=>{
        _e.preventDefault();
        if (_e.target.files) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                const data = e.target?.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_3__.read(data, {
                    type: "array"
                });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.sheet_to_json(worksheet);
                console.log({
                    json
                });
                handleData(json);
                _e.target.value = "";
            };
            reader.readAsArrayBuffer(_e.target.files[0]);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center px-4 space-x-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                label: "Upload Menues",
                type: "file",
                onChange: (e)=>{
                    if (!e.target.files) {
                        return;
                    }
                    handleFileChange(e);
                }
            }),
            uploading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {
                className: "mt-6 !text-white"
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ itemsData),
/* harmony export */   "x": () => (/* binding */ functionsConstants)
/* harmony export */ });
const itemsData = [
    {
        title: "Garma Garam",
        sub: [
            {
                title: "Alootkki",
                days: "",
                stalls: ""
            },
            {
                title: "Chilla",
                days: "",
                stalls: ""
            },
            {
                title: "Green Samosa",
                days: "",
                stalls: ""
            },
            {
                title: "Red Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Red Chhat",
                days: "",
                stalls: ""
            },
            {
                title: "Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Pink Bol",
                days: "",
                stalls: ""
            }
        ]
    },
    {
        title: "Cold Collection",
        sub: [
            {
                title: "Gol Gappe",
                days: "",
                stalls: ""
            },
            {
                title: "Raju Kachori",
                days: "",
                stalls: ""
            },
            {
                title: "Bada",
                days: "",
                stalls: ""
            },
            {
                title: "Puri",
                days: "",
                stalls: ""
            },
            {
                title: "Chadap",
                days: "",
                stalls: ""
            },
            {
                title: "Best Tasty",
                days: "",
                stalls: ""
            },
            {
                title: "Pink Bol",
                days: "",
                stalls: ""
            }
        ]
    },
    {
        title: "Garma Garam",
        sub: [
            {
                title: "Alootkki",
                days: "",
                stalls: ""
            },
            {
                title: "Chilla",
                days: "",
                stalls: ""
            },
            {
                title: "Green Samosa",
                days: "",
                stalls: ""
            },
            {
                title: "Red Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Red Chhat",
                days: "",
                stalls: ""
            },
            {
                title: "Laddu",
                days: "",
                stalls: ""
            },
            {
                title: "Pink Bol",
                days: "",
                stalls: ""
            }
        ]
    },
    {
        title: "Deserts",
        sub: [
            {
                title: "Rasgulla",
                days: "",
                stalls: ""
            },
            {
                title: "Sponge",
                days: "",
                stalls: ""
            },
            {
                title: "Kulfi",
                days: "",
                stalls: ""
            },
            {
                title: "Rasmalai",
                days: "",
                stalls: ""
            }
        ]
    },
    {
        title: "Combos",
        sub: [
            {
                title: "Pao Bhaji",
                days: "",
                stalls: ""
            },
            {
                title: "Xyz",
                days: "",
                stalls: ""
            },
            {
                title: "Abcd",
                days: "",
                stalls: ""
            },
            {
                title: "Wxyz",
                days: "",
                stalls: ""
            },
            {
                title: "Daal Roti",
                days: "",
                stalls: ""
            }
        ]
    },
    {
        title: "South Special",
        sub: [
            {
                title: "Idli",
                days: "",
                stalls: ""
            },
            {
                title: "Sambhar",
                days: "",
                stalls: ""
            },
            {
                title: "uppma",
                days: "",
                stalls: ""
            },
            {
                title: "Sweet",
                days: "",
                stalls: ""
            }
        ]
    }
];
const functionsConstants = {
    breakfast: "Breakfast",
    dinner: "Dinner",
    hightea: "Hightea",
    lunch: "Lunch"
};


/***/ }),

/***/ 6395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ updateSeniorClekMenueApi)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const updateSeniorClekMenueApi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/menue/seniorclerkupdatemenue", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ISODateIntoLocalDate)
/* harmony export */ });
const ISODateIntoLocalDate = (inputDate)=>{
    console.log("input date", inputDate);
    let date = new Date(inputDate);
    date.setMonth(date.getMonth() + 1);
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const isoDate = `${year}-${month}-${day}`;
    console.log(isoDate);
    // T${hours}:${minutes}
    return isoDate;
};


/***/ }),

/***/ 4823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ updateDateWithHourAndMinute)
/* harmony export */ });
const updateDateWithHourAndMinute = (date, hour, minute)=>{
    const updatedDate = new Date(date); // Create a new date object to avoid modifying the original date
    updatedDate.setHours(hour); // Set the hour value
    updatedDate.setMinutes(minute); // Set the minute value
    updatedDate.setSeconds(0); // Set the seconds value to zero
    return updatedDate;
};


/***/ })

};
;