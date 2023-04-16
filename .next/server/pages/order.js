"use strict";
(() => {
var exports = {};
exports.id = 1941;
exports.ids = [1941];
exports.modules = {

/***/ 4838:
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
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4460);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7119);
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1507);
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_DeleteForever__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4334);
/* harmony import */ var _mui_icons_material_DeleteForever__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DeleteForever__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1107);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4763);
/* harmony import */ var _utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4823);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6555);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_orderpage_SeniorClerkEdit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6776);
/* harmony import */ var _components_orderpage_UploadMenueExcelFile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_10__, uuid__WEBPACK_IMPORTED_MODULE_12__, _components_orderpage_SeniorClerkEdit__WEBPACK_IMPORTED_MODULE_15__, _components_orderpage_UploadMenueExcelFile__WEBPACK_IMPORTED_MODULE_16__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_10__, uuid__WEBPACK_IMPORTED_MODULE_12__, _components_orderpage_SeniorClerkEdit__WEBPACK_IMPORTED_MODULE_15__, _components_orderpage_UploadMenueExcelFile__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const intitialData = {
    bookedBy: "",
    bookerMobileNumber: "",
    bookingId: "",
    cleaner: "",
    departureDate: "",
    departureTime: "",
    driverName: "",
    function: "breakfast",
    functionDate: "",
    headMobileNumber: "",
    headName: "",
    mobile: "",
    name: "",
    PAX: "",
    serviceTime: "",
    specialInstruction: "",
    vehicleNumber: "",
    venue: "",
    words: "",
    onion: false,
    garlic: false
};
const functionOptions = [
    {
        value: "breakfast",
        content: "breakfast"
    },
    {
        value: "dinner",
        content: "dinner"
    },
    {
        value: "hightea",
        content: "hightea"
    },
    {
        value: "lunch",
        content: "lunch"
    }
];
const Order = ()=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)();
    const [itemsNameOnly, setitemsNameOnly] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [formData, setformData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(intitialData);
    const [searchedItemsResult, setsearchedItemsResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [selectedItems, setselectedItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };
    const handleSearchItem = (e)=>{
        const toReturn = [];
        if (!e.target.value) {
            setsearchedItemsResult([]);
            return;
        }
        _data_data__WEBPACK_IMPORTED_MODULE_5__/* .itemsData.forEach */ .w.forEach((v)=>{
            v.sub.forEach((item)=>{
                if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    toReturn.push({
                        item: item.title,
                        title: v.title
                    });
                }
            });
        });
        setsearchedItemsResult(toReturn);
    };
    const informationForm = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-2 w-[60%] mx-auto gap-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Function Date",
                    name: "functionDate",
                    onChange: handleChange,
                    value: formData.functionDate,
                    type: "date"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "PAX",
                    name: "PAX",
                    onChange: handleChange,
                    value: formData.PAX,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Booked By",
                    name: "bookedBy",
                    onChange: handleChange,
                    value: formData.bookedBy,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Booker Mobile Number",
                    name: "bookerMobileNumber",
                    onChange: handleChange,
                    value: formData.bookerMobileNumber,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Cleaner",
                    name: "cleaner",
                    onChange: handleChange,
                    value: formData.cleaner,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Departure Date",
                    name: "departureDate",
                    onChange: handleChange,
                    value: formData.departureDate,
                    type: "date"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Departure Time",
                    name: "departureTime",
                    onChange: handleChange,
                    value: formData.departureTime,
                    type: "time"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Driver Name",
                    name: "driverName",
                    onChange: handleChange,
                    value: formData.driverName,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, {
                    required: true,
                    label: "Function",
                    name: "function",
                    onChange: handleChange,
                    value: formData.function,
                    options: functionOptions
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Head Mobile Number",
                    name: "headMobileNumber",
                    onChange: handleChange,
                    value: formData.headMobileNumber,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Head Name",
                    name: "headName",
                    onChange: handleChange,
                    value: formData.headName,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Mobile",
                    name: "mobile",
                    onChange: handleChange,
                    value: formData.mobile,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Name",
                    name: "name",
                    onChange: handleChange,
                    value: formData.name,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Service Time",
                    name: "serviceTime",
                    onChange: handleChange,
                    value: formData.serviceTime,
                    type: "time"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Special Instruction",
                    name: "specialInstruction",
                    onChange: handleChange,
                    value: formData.specialInstruction,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Vehicle Number",
                    name: "vehicleNumber",
                    onChange: handleChange,
                    value: formData.vehicleNumber,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Venue",
                    name: "venue",
                    onChange: handleChange,
                    value: formData.venue,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    required: true,
                    label: "Words",
                    name: "words",
                    onChange: handleChange,
                    value: formData.words,
                    type: "text"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, {
                    required: true,
                    label: "Onion",
                    onChange: (e)=>{
                        setformData((prev)=>({
                                ...prev,
                                onion: e.target.value === "true" ? true : false
                            }));
                    },
                    value: String(formData.onion),
                    options: [
                        {
                            content: "false",
                            value: "false"
                        },
                        {
                            content: "true",
                            value: "true"
                        }
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, {
                    required: true,
                    label: "Garlic",
                    onChange: (e)=>{
                        setformData((prev)=>({
                                ...prev,
                                garlic: e.target.value === "true" ? true : false
                            }));
                    },
                    value: String(formData.garlic),
                    options: [
                        {
                            content: "false",
                            value: "false"
                        },
                        {
                            content: "true",
                            value: "true"
                        }
                    ]
                })
            ]
        });
    };
    const itemSearchComponent = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "w-[30%]",
                    endIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                            searchedItemsResult.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                onClick: ()=>{
                                    setsearchedItemsResult([]);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14___default()), {})
                            })
                        ]
                    }),
                    label: "Search Items",
                    onFocus: (e)=>{
                        const toReturn = [];
                        if (e.target.value) {
                            return;
                        }
                        _data_data__WEBPACK_IMPORTED_MODULE_5__/* .itemsData.forEach */ .w.forEach((v)=>{
                            v.sub.forEach((item)=>{
                                toReturn.push({
                                    item: item.title,
                                    title: v.title
                                });
                            });
                        });
                        setsearchedItemsResult(toReturn);
                    },
                    onChange: handleSearchItem
                }),
                searchedItemsResult.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white p-2 mt-2 rounded h-[300px] overflow-auto",
                    children: searchedItemsResult.map((val, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "border p-1 flex-1 bg-white rounded-md",
                                    children: val.item
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    onClick: ()=>{
                                        const obj = {
                                            item: val.item,
                                            counter: "0",
                                            comment: ""
                                        };
                                        setselectedItems([
                                            ...selectedItems,
                                            obj
                                        ]);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                })
                            ]
                        }))
                })
            ]
        });
    };
    const handleChangeFormData = (index, e)=>{
        const { value , name  } = e.target;
        const newData = [
            ...selectedItems
        ].map((v, i)=>{
            if (index === i) {
                return {
                    ...v,
                    [name]: value
                };
            }
            return v;
        });
        setselectedItems(newData);
    };
    const handleDeleteSelectedItems = (index)=>{
        const updated = [];
        selectedItems.forEach((v, i)=>{
            if (i !== index) {
                updated.push(v);
            }
        });
        setselectedItems(updated);
    };
    const renderSelectedItems = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full overflow-x-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "no."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "item"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase whitespace-nowrap",
                                        children: "counter"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "comment"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "actions"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            className: "bg-white",
                            children: selectedItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "text-gray-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: index + 1
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: item.item
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "counter",
                                                type: "number",
                                                value: item.counter,
                                                onChange: (e)=>{
                                                    handleChangeFormData(index, e);
                                                },
                                                className: "w-[100px] outline-none border p-1"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                name: "comment",
                                                className: "outline-none border p-1",
                                                onChange: (e)=>{
                                                    handleChangeFormData(index, e);
                                                },
                                                placeholder: "Enter Comments...",
                                                value: item.comment
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                onClick: ()=>{
                                                    handleDeleteSelectedItems(index);
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DeleteForever__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    className: "text-red-700"
                                                })
                                            })
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            })
        });
    };
    const handleSubmitForm = async (e)=>{
        e.preventDefault();
        let isOkay = true;
        let isGreaterThanFive = false;
        selectedItems.forEach((v)=>{
            if (!v.counter || Number(v.counter) <= 0 || Number(v.counter) > 5) {
                isOkay = false;
            }
        });
        if (!isOkay) {
            return alert("kindly select number of counters for all items and maximum of 5.");
        }
        formData.bookingId = String((0,uuid__WEBPACK_IMPORTED_MODULE_12__.v4)()).substring(0, 8);
        if (selectedItems.length === 0) {
            return alert("Kindly Select Atleast One Item.");
        }
        console.log({
            selectedItems,
            formData
        });
        try {
            // _formDate.
            const _departureHourMinute = formData.departureTime.split(":");
            const _departureTime = (0,_utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_17__/* .updateDateWithHourAndMinute */ .C)(new Date(formData.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]));
            // 
            const _serviceHourMinute = formData.serviceTime.split(":");
            const _serviceTime = (0,_utils_updateDateWithHoursAndMinutes__WEBPACK_IMPORTED_MODULE_17__/* .updateDateWithHourAndMinute */ .C)(new Date(formData.functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]));
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_10__/* .createMenueApi */ .RA)({
                formdata: {
                    bookedBy: formData.bookedBy,
                    bookerMobileNumber: formData.bookerMobileNumber,
                    bookingId: formData.bookingId,
                    cleaner: formData.cleaner,
                    departureDate: new Date(formData.departureDate),
                    departureTime: new Date(_departureTime),
                    driverName: formData.driverName,
                    function: formData.function,
                    functionDate: new Date(formData.functionDate),
                    headMobileNumber: formData.headMobileNumber,
                    headName: formData.headName,
                    mobile: formData.mobile,
                    name: formData.name,
                    PAX: formData.PAX,
                    serviceTime: _serviceTime,
                    specialInstruction: formData.specialInstruction,
                    vehicleNumber: formData.vehicleNumber,
                    venue: formData.venue,
                    words: formData.words,
                    id: "",
                    onion: formData.onion !== undefined ? formData.onion : null,
                    garlic: formData.garlic !== undefined ? formData.garlic : null
                },
                selectedItems: selectedItems
            });
            alert("created successfully!");
            window.location.href = `/admin/menueprint/${res.data.id}`;
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_18__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (_data_data__WEBPACK_IMPORTED_MODULE_5__/* .itemsData */ .w) {
            let _sub = [];
            _data_data__WEBPACK_IMPORTED_MODULE_5__/* .itemsData.forEach */ .w.forEach((it)=>{
                it.sub.forEach((c)=>{
                    _sub.push(c.title);
                });
            });
            setitemsNameOnly(_sub);
        }
    }, [
        _data_data__WEBPACK_IMPORTED_MODULE_5__/* .itemsData */ .w
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        },
        className: "h-screen overflow-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmitForm,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {}),
                    informationForm(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-5 w-[90%] mx-auto   mt-10 pb-10",
                        children: [
                            itemSearchComponent(),
                            renderSelectedItems(),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-x-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                        title: "Submit",
                                        type: "submit"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                        onClick: ()=>{
                                            window.open(`mailto:`);
                                        },
                                        title: "Email",
                                        type: "button"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            session?.user.role === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-40",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orderpage_UploadMenueExcelFile__WEBPACK_IMPORTED_MODULE_16__/* .UploadMenueExcelFile */ .d, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orderpage_SeniorClerkEdit__WEBPACK_IMPORTED_MODULE_15__/* .SeniorClerkEdit */ .m, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);
const getServerSideProps = async (ctx)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.getSession)(ctx);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    if (session.user.role === "operationclerk") {
        return {
            redirect: {
                destination: "/operation",
                permanent: false
            }
        };
    }
    if (session.user.role === "wageclerk") {
        return {
            redirect: {
                destination: "/wage",
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

/***/ 1507:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircleOutline");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 4334:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DeleteForever");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8330:
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1071,4763,6259,4347], () => (__webpack_exec__(4838)));
module.exports = __webpack_exports__;

})();