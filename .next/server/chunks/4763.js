"use strict";
exports.id = 4763;
exports.ids = [4763];
exports.modules = {

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

/***/ 1365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export updateCategoryFinalWage */
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const updateCategoryFinalWage = async ({ finalWage , categoryId  })=>{
    return await axios.post("/category/updatecategoryfinalwage", {
        finalWage,
        categoryId
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* binding */ updateCatgoryContractor),
/* harmony export */   "Dh": () => (/* binding */ getAllFreeContractorsUsingCategoryIDAPI),
/* harmony export */   "N5": () => (/* binding */ uploadDocApi),
/* harmony export */   "ar": () => (/* binding */ getAllContractorsApi),
/* harmony export */   "dP": () => (/* binding */ getAllOtherItemsContractorsAPI),
/* harmony export */   "g0": () => (/* binding */ uploadContractor),
/* harmony export */   "nA": () => (/* binding */ updateContractorUsingSelectedOneApi),
/* harmony export */   "oK": () => (/* binding */ getAvailableContractorsWithItem),
/* harmony export */   "r1": () => (/* binding */ updateContractorAPi),
/* harmony export */   "xl": () => (/* binding */ removeContractorFromCategoryAPI)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const uploadContractor = async ({ contractors  })=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post(`/contractor/create`, {
        contractors
    });
};
const getAllContractorsApi = async ()=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.get */ .o.get("/contractor/getallcontractors");
};
const getAvailableContractorsWithItem = async ({ item  })=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/getavailablebyitem", {
        item
    });
};
const updateCatgoryContractor = async ({ categoryId , contractorid  })=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/updatecategorycontractor", {
        categoryId,
        contractorid
    });
};
const uploadDocApi = async ({ file , name , contractorid  })=>{
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("file", file);
    formdata.append("contractorid", contractorid);
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/uploaddocuments", formdata);
};
const updateContractorAPi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/updatesinglecontractor", data);
};
const getAllFreeContractorsUsingCategoryIDAPI = async (body)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/getFreeContractorsUsingCategoryId", body);
};
const updateContractorUsingSelectedOneApi = async (body)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/updateContractorUsingSelectedOne", body);
};
const getAllOtherItemsContractorsAPI = async (body)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/getOtherItemsContractors", body);
};
const removeContractorFromCategoryAPI = async (body)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/contractor/removeContractorFromCategory", body);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "CV": () => (/* reexport safe */ _wage__WEBPACK_IMPORTED_MODULE_4__.o),
/* harmony export */   "Cq": () => (/* reexport safe */ _wage__WEBPACK_IMPORTED_MODULE_4__.C),
/* harmony export */   "Dh": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.Dh),
/* harmony export */   "Fx": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.Fx),
/* harmony export */   "N5": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.N5),
/* harmony export */   "Q3": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.Q3),
/* harmony export */   "RA": () => (/* reexport safe */ _menueApis_ts__WEBPACK_IMPORTED_MODULE_0__.RA),
/* harmony export */   "WC": () => (/* reexport safe */ _menueApis_ts__WEBPACK_IMPORTED_MODULE_0__.WC),
/* harmony export */   "ar": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.ar),
/* harmony export */   "dP": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.dP),
/* harmony export */   "g0": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.g0),
/* harmony export */   "hA": () => (/* reexport safe */ _menueApis_ts__WEBPACK_IMPORTED_MODULE_0__.hA),
/* harmony export */   "nA": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.nA),
/* harmony export */   "oK": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.oK),
/* harmony export */   "r1": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.r1),
/* harmony export */   "su": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.su),
/* harmony export */   "xE": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.xE),
/* harmony export */   "xl": () => (/* reexport safe */ _contractor__WEBPACK_IMPORTED_MODULE_2__.xl),
/* harmony export */   "yo": () => (/* reexport safe */ _menueApis_ts__WEBPACK_IMPORTED_MODULE_0__.yo)
/* harmony export */ });
/* harmony import */ var _menueApis_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9025);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1442);
/* harmony import */ var _contractor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6758);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1365);
/* harmony import */ var _wage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1254);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_menueApis_ts__WEBPACK_IMPORTED_MODULE_0__, _user__WEBPACK_IMPORTED_MODULE_1__, _contractor__WEBPACK_IMPORTED_MODULE_2__, _category__WEBPACK_IMPORTED_MODULE_3__, _wage__WEBPACK_IMPORTED_MODULE_4__]);
([_menueApis_ts__WEBPACK_IMPORTED_MODULE_0__, _user__WEBPACK_IMPORTED_MODULE_1__, _contractor__WEBPACK_IMPORTED_MODULE_2__, _category__WEBPACK_IMPORTED_MODULE_3__, _wage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RA": () => (/* binding */ createMenueApi),
/* harmony export */   "WC": () => (/* binding */ seniorClerkSearchMenueApi),
/* harmony export */   "hA": () => (/* binding */ getMenuesApi),
/* harmony export */   "yo": () => (/* binding */ getSingleMenue)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createMenueApi = async ({ formdata , selectedItems  })=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/menue/create", {
        formdata,
        selectedItems
    });
};
const getMenuesApi = async ({ search ="" , endDate ="" , startDate ="" , departureDate ="" , contractorName =""  })=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post(`/menue/getdata`, {
        search,
        endDate,
        startDate,
        departureDate,
        contractorName
    });
};
const getSingleMenue = async (id)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/menue/getsinglemenue", {
        id
    });
};
const seniorClerkSearchMenueApi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/menue/seniorclerksearch", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fx": () => (/* binding */ resetUserApi),
/* harmony export */   "Q3": () => (/* binding */ deleteUserApi),
/* harmony export */   "su": () => (/* binding */ createUserApi),
/* harmony export */   "xE": () => (/* binding */ getUsersApi)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createUserApi = async (data)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/user/createusers", data);
};
const getUsersApi = async (data)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/user/getusers", data);
};
const resetUserApi = async (data)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/user/resetuser", data);
};
const deleteUserApi = async (data)=>{
    return _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/user/deleteuser", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ querywageApi),
/* harmony export */   "o": () => (/* binding */ updateWageCategory)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);
_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const querywageApi = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/wage/querymenues", data);
};
const updateWageCategory = async (data)=>{
    return await _axios__WEBPACK_IMPORTED_MODULE_0__/* .axios.post */ .o.post("/wage/updatewages", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;