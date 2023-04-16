"use strict";
(() => {
var exports = {};
exports.id = 2104;
exports.ids = [2104];
exports.modules = {

/***/ 6846:
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
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1107);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6259);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2584);
/* harmony import */ var _components_operation_OperationMenueTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3983);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_2__, _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_8__, _components_operation_OperationMenueTable__WEBPACK_IMPORTED_MODULE_11__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_2__, _components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_8__, _components_operation_OperationMenueTable__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const OperationPage = ()=>{
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
            return (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__/* .handleApiErrors */ .Y)(error.message);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getMenueData();
    }, []);
    const handleExcelJsonData = async (data)=>{
        let updatedData = [];
        const prevDate = new Date();
        prevDate.setDate(prevDate.getDate() - 1);
        data.forEach((d)=>{
            console.log({
                d
            });
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
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_12__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    const handleFileChange = (_e)=>{
        _e.preventDefault();
        if (_e.target.files) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                const data = e.target?.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_5__.read(data, {
                    type: "array"
                });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.sheet_to_json(worksheet);
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
            (0,_utils_convertJSONintoExcelFile__WEBPACK_IMPORTED_MODULE_10__/* .convertJSONintoExcelFile */ .i)(data, "MENUE DATA");
        } catch (error) {
            alert(error.message);
        }
    };
    const manuetable = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "px-5 space-y-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            label: "Start Date",
                            onChange: (e)=>{
                                setstartDate(e.target.value);
                            },
                            type: "date",
                            value: startDate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            label: "End Date",
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            title: "Search",
                            onClick: ()=>{
                                getMenueData(menueSearch);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            title: "Download",
                            onClick: handleConvertJSONToExcel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            title: "Reset",
                            onClick: ()=>{
                                setstartDate("");
                                setendDate("");
                                setmenueSearch("");
                                getMenueData();
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_operation_OperationMenueTable__WEBPACK_IMPORTED_MODULE_11__/* .OperationMenueTable */ .V, {
                    menues: menuesData
                })
            ]
        });
    };
    const handleContractorClose = ()=>{
        setcontractorDialogeState(false);
    };
    const contractorModals = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7___default()), {
            fullWidth: true,
            maxWidth: "md",
            open: contractorDialogeState,
            onClose: handleContractorClose,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContractorModel_ContractorModel__WEBPACK_IMPORTED_MODULE_8__/* .ContractorModel */ .o, {
                allowEdit: disableContractorEdit
            })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationPage);
const getServerSideProps = async (ctx)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_9__.getSession)(ctx);
    if (!session || session.user.role !== "admin" && session.user.role !== "operationclerk") {
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

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,1071,4763,6259,4664,4828,3983], () => (__webpack_exec__(6846)));
module.exports = __webpack_exports__;

})();