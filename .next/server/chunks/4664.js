"use strict";
exports.id = 4664;
exports.ids = [4664];
exports.modules = {

/***/ 1780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dw": () => (/* binding */ fetchOtherItemsContractorsThunk),
/* harmony export */   "FI": () => (/* binding */ fetchContractorsThunk),
/* harmony export */   "LG": () => (/* binding */ toggleUpdateContractorModal),
/* harmony export */   "ZU": () => (/* binding */ ContractorReducer),
/* harmony export */   "g5": () => (/* binding */ updateContractorThunk),
/* harmony export */   "u1": () => (/* binding */ setSelectedToUpdateUserId),
/* harmony export */   "ve": () => (/* binding */ selectContractorsUsingCategoryId)
/* harmony export */ });
/* unused harmony export contractorSlice */
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4763);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menue_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_0__]);
_providers_apis__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Define the initial state using that type
const initialState = {
    showUpdateContractorModal: false,
    contractorCategoryID: "",
    contractors: [],
    loadingContractors: false,
    selectedToUpdateUserId: "",
    updatedSuccessfullyMessage: ""
};
const fetchContractorsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("contractors/fetch", async (catId, thunkAPI)=>{
    const response = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_0__/* .getAllFreeContractorsUsingCategoryIDAPI */ .Dh)({
        categoryID: catId
    });
    return response.data;
});
const fetchOtherItemsContractorsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("contractors/fetch/others", async (catId, thunkAPI)=>{
    const response = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_0__/* .getAllOtherItemsContractorsAPI */ .dP)({
        categoryID: catId
    });
    return response.data;
});
const updateContractorThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("contractor/update", async (body, thunkAPI)=>{
    const response = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_0__/* .updateContractorUsingSelectedOneApi */ .nA)(body);
    thunkAPI.dispatch((0,_menue_slice__WEBPACK_IMPORTED_MODULE_2__/* .toggleAdminFetchMenuesData */ .d8)());
});
const contractorSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "contractor",
    initialState,
    reducers: {
        toggleUpdateContractorModal: (state)=>{
            if (state.showUpdateContractorModal) {
                state.updatedSuccessfullyMessage = "";
            }
            state.showUpdateContractorModal = !state.showUpdateContractorModal;
        },
        selectContractorsUsingCategoryId: (state, action)=>{
            state.contractorCategoryID = action.payload.cid;
            state.showUpdateContractorModal = true;
        },
        setSelectedToUpdateUserId: (state, action)=>{
            state.selectedToUpdateUserId = action.payload.userId;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchContractorsThunk.fulfilled, (state, action)=>{
            state.contractors = action.payload.contractors;
            state.loadingContractors = false;
        }), // 
        builder.addCase(fetchContractorsThunk.pending, (state, action)=>{
            state.loadingContractors = true;
        }), builder.addCase(fetchContractorsThunk.rejected, (state, action)=>{
            state.loadingContractors = false;
        }), builder.addCase(updateContractorThunk.fulfilled, (state)=>{
            state.updatedSuccessfullyMessage = "updated Successfully!";
        }), // 
        // 
        builder.addCase(fetchOtherItemsContractorsThunk.pending, (state)=>{
            state.loadingContractors = true;
        }), builder.addCase(fetchOtherItemsContractorsThunk.rejected, (state)=>{
            state.loadingContractors = false;
        }), builder.addCase(fetchOtherItemsContractorsThunk.fulfilled, (state, action)=>{
            state.contractors = action.payload.contractors;
            state.loadingContractors = false;
        });
    // 
    }
});
const { toggleUpdateContractorModal , selectContractorsUsingCategoryId , setSelectedToUpdateUserId  } = contractorSlice.actions;
const ContractorReducer = contractorSlice.reducer;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _contractors_slice__WEBPACK_IMPORTED_MODULE_0__.ZU),
/* harmony export */   "_": () => (/* reexport safe */ _menue_slice__WEBPACK_IMPORTED_MODULE_1__._v)
/* harmony export */ });
/* harmony import */ var _contractors_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1780);
/* harmony import */ var _menue_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contractors_slice__WEBPACK_IMPORTED_MODULE_0__]);
_contractors_slice__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_v": () => (/* binding */ MenueReducer),
/* harmony export */   "d8": () => (/* binding */ toggleAdminFetchMenuesData)
/* harmony export */ });
/* unused harmony export menueSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    refetchData: false
};
// export const filterMenuesThunk = createAsyncThunk(
//     "menue/filterdata",
//     async ({ contractorName, departureDate, endDate, search, startDate }: IGetMenueApi) => {
//         const response = await getMenuesApi({
//             search: search,
//             startDate: startDate,
//             endDate: endDate,
//             departureDate: departureDate,
//             contractorName: contractorName
//         })
//         return response.data
//     }
// )
const menueSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "menue",
    initialState,
    reducers: {
        toggleAdminFetchMenuesData: (state)=>{
            state.refetchData = !state.refetchData;
        }
    }
});
const { toggleAdminFetchMenuesData  } = menueSlice.actions;
const MenueReducer = menueSlice.reducer;


/***/ }),

/***/ 1361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 4664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CG": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "TL": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   "h": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6073);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_0__]);
_store__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices__WEBPACK_IMPORTED_MODULE_1__]);
_slices__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        contractor: _slices__WEBPACK_IMPORTED_MODULE_1__/* .ContractorReducer */ .Z,
        menue: _slices__WEBPACK_IMPORTED_MODULE_1__/* .MenueReducer */ ._
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;