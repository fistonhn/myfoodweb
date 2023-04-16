"use strict";
exports.id = 4828;
exports.ids = [4828];
exports.modules = {

/***/ 4828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ GetContractorModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1107);
/* harmony import */ var _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1780);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__, _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__, _providers_apis__WEBPACK_IMPORTED_MODULE_6__]);
([_store__WEBPACK_IMPORTED_MODULE_1__, _slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__, _providers_apis__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const GetContractorModal = ()=>{
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .TL)();
    const contractorState = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((s)=>s.contractor);
    const onClose = ()=>{
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__/* .toggleUpdateContractorModal */ .LG)());
    };
    const handleUpdateSelectedContractor = ()=>{
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__/* .updateContractorThunk */ .g5)({
            categoryID: contractorState.contractorCategoryID,
            contractorID: contractorState.selectedToUpdateUserId
        }));
    };
    const handleGetOtherContractors = ()=>{
        dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__/* .fetchOtherItemsContractorsThunk */ .Dw)(contractorState.contractorCategoryID));
    };
    const handleDeleteCurrentContractor = async ()=>{
        try {
            if (!contractorState.contractorCategoryID) {
                return alert("Kindly try again later.");
            }
            await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_6__/* .removeContractorFromCategoryAPI */ .xl)({
                categoryID: contractorState.contractorCategoryID
            });
            alert("Contractor removed successfully.");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_7__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
        maxWidth: "md",
        fullWidth: true,
        onClose: onClose,
        open: contractorState.showUpdateContractorModal,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
                children: "Edit Contractors"
            }),
            contractorState.loadingContractors ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {})
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
                children: [
                    contractorState.updatedSuccessfullyMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-center font-bold text-green-600",
                        children: contractorState.updatedSuccessfullyMessage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: contractorState.contractors.length > 0 ? contractorState.contractors.map((c, ci)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContractorItem, {
                                ...c
                            })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-center fonbold text-red-600 ",
                            children: "No Contractors available"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogActions, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        onClick: handleGetOtherContractors,
                        title: "GET OTHER CONTRACTORS",
                        className: "bg-green-700"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        onClick: handleDeleteCurrentContractor,
                        title: "REMOVE CURRENT CONTRACTOR",
                        className: "text-red-200 bg-red-700"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        title: "CANCEL",
                        onClick: ()=>{
                            dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__/* .toggleUpdateContractorModal */ .LG)());
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        onClick: handleUpdateSelectedContractor,
                        title: "UPDATE"
                    })
                ]
            })
        ]
    });
};

const ContractorItem = (c)=>{
    const cstate = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((s)=>s.contractor);
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .TL)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
                        onChange: ()=>{
                            dispatch((0,_slices_contractors_slice__WEBPACK_IMPORTED_MODULE_5__/* .setSelectedToUpdateUserId */ .u1)({
                                userId: c.id
                            }));
                        },
                        checked: cstate.selectedToUpdateUserId === c.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: c.name
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: c.item
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;