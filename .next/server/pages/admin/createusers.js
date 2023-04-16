"use strict";
(() => {
var exports = {};
exports.id = 1411;
exports.ids = [1411];
exports.modules = {

/***/ 8685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ EditModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4763);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_8__]);
_providers_apis__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const options = [
    {
        value: "bookingclerk",
        content: "Booking Clerk"
    },
    {
        value: "operationclerk",
        content: "Operation Clerk"
    },
    {
        value: "seniorclerk",
        content: "Senior Clerk"
    },
    {
        value: "wageclerk",
        content: "Wage Clerk"
    }
];
const EditModal = ({ open , setopen , user  })=>{
    const [userData, setuserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setuserData(user);
    }, [
        user
    ]);
    console.log(userData);
    const handleChange = (e)=>{
        const { value , name  } = e.target;
        setuserData({
            ...userData,
            [name]: value
        });
    };
    const handleUpdate = async ()=>{
        if (!userData.id || !userData.email || !userData.password || !userData.role) {
            return alert("Kindly Fill All The Fields OR Try Again Later.");
        }
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_8__/* .resetUserApi */ .Fx)({
                password: userData.password,
                role: userData.role,
                email: userData.email,
                id: userData.id
            });
            alert(res.data.msg);
            setopen();
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
        maxWidth: "sm",
        fullWidth: true,
        className: "!w-full",
        open: open,
        onClose: setopen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: "Update User"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            name: "email",
                            onChange: handleChange,
                            value: userData?.email
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            name: "password",
                            onChange: handleChange,
                            value: userData?.password
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            name: "role",
                            onChange: handleChange,
                            value: userData?.role,
                            className: "shadow-md w-full border border-gray-300 rounded-md focus:border-primary p-2 outline-none",
                            children: options.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: val.value,
                                    children: val.content
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        title: "Cancel",
                        onClick: setopen
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        title: "Update",
                        onClick: handleUpdate
                    })
                ]
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DeleteModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1107);







const DeleteModal = ({ open , setopen , handleDelete  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
        maxWidth: "sm",
        fullWidth: true,
        className: "!w-full",
        open: open,
        onClose: setopen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-2xl font-semibold",
                    children: "Delete User?"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        title: "Cancel",
                        onClick: setopen
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        title: "Delete",
                        onClick: handleDelete
                    })
                ]
            })
        ]
    });
};



/***/ }),

/***/ 5512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ CreateUserTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4763);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6843);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3435);
/* harmony import */ var _EditModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_1__, _EditModal__WEBPACK_IMPORTED_MODULE_8__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_1__, _EditModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CreateUserTable = ()=>{
    const [selectedItem, setselectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [deleteModal, setdeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [updateModalState, setupdateModalState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getUserData = async ()=>{
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_1__/* .getUsersApi */ .xE)({});
            setdata(res.data.users);
        } catch (error) {
            alert((0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__/* .handleApiErrors */ .Y)(error));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getUserData();
    }, []);
    const handleDeleteUser = (item)=>{
        setselectedItem(item);
        setdeleteModal(!deleteModal);
    };
    const handleCopy = (item)=>{
        navigator.clipboard.writeText(`
            Username: ${item.email}
            Password: ${item.password}
            `).then(()=>{
            alert("Credentials Copied Successfully!");
        });
    };
    const handleDeleteModalClose = ()=>{
        setdeleteModal(false);
    };
    const handleDelete = async ()=>{
        try {
            if (!selectedItem) {
                return;
            }
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_1__/* .deleteUserApi */ .Q3)({
                id: selectedItem?.id
            });
            alert(res.data.msg);
            setdeleteModal(false);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_9__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    const handleUpdateModalClose = ()=>{
        setupdateModalState(!updateModalState);
    };
    console.log("selected item", selectedItem);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            selectedItem && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditModal__WEBPACK_IMPORTED_MODULE_8__/* .EditModal */ .F, {
                        user: {
                            id: selectedItem.id,
                            email: selectedItem.email,
                            password: selectedItem.password,
                            role: selectedItem.role
                        },
                        open: updateModalState,
                        setopen: handleUpdateModalClose
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_7__/* .DeleteModal */ .p, {
                        handleDelete: handleDelete,
                        open: deleteModal,
                        setopen: handleDeleteModalClose
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mb-8 overflow-hidden rounded-lg shadow-lg",
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
                                            children: "id"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase",
                                            children: "email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase whitespace-nowrap",
                                            children: "password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase",
                                            children: "role"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "px-4 py-3 uppercase",
                                            children: "actions"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                className: "bg-white ",
                                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "text-gray-700",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border",
                                                children: item.id
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border",
                                                children: item.email
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border",
                                                children: item.password
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                className: "px-4 py-3 border",
                                                children: item.role
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                className: "px-4 py-3 border",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        onClick: ()=>{
                                                            handleCopy(item);
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            fontSize: "small",
                                                            className: "text-green-700"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        onClick: ()=>{
                                                            setselectedItem(item);
                                                            setupdateModalState(true);
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            fontSize: "small",
                                                            className: "text-blue-700"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        onClick: ()=>{
                                                            handleDeleteUser(item);
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            fontSize: "small",
                                                            className: "text-red-700"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                })
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "El": () => (/* binding */ usersType),
/* harmony export */   "Lx": () => (/* binding */ CLEANER_CONST),
/* harmony export */   "pS": () => (/* binding */ HEAD_CONST)
/* harmony export */ });
const usersType = {
    "bookingclerk": "bookingclerk",
    "seniorclerk": "seniorclerk",
    "wageclerk": "wageclerk",
    "operationclerk": "operationclerk",
    "admin": "admin"
};
const HEAD_CONST = "head";
const CLEANER_CONST = "cleaner";


/***/ }),

/***/ 3885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1107);
/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2923);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6563);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5374);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4763);
/* harmony import */ var _components_Auth_CreateUserTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5512);
/* harmony import */ var _constants_globalconstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_9__, _components_Auth_CreateUserTable__WEBPACK_IMPORTED_MODULE_10__]);
([_providers_apis__WEBPACK_IMPORTED_MODULE_9__, _components_Auth_CreateUserTable__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const intitalData = {
    username: "",
    password: "",
    type: "bookingclerk"
};
const CreateUsers = ()=>{
    const [formdata, setformdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(intitalData);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setformdata((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_9__/* .createUserApi */ .su)({
                password: formdata.password,
                role: formdata.type,
                email: formdata.username
            });
            alert(res.data.msg);
        } catch (error) {
            if (error?.response?.data?.msg) {
                alert(error?.response?.data?.msg);
            } else {
                alert(error.message);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        },
        className: "h-screen overflow-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center  mt-14 pb-14",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "grid w-[30%] m-auto gap-y-3 bg-white p-10 shadow-md rounded-md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-bold text-center text-2xl mb-5",
                            children: "Create Users"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            required: true,
                            name: "username",
                            onChange: handleChange,
                            placeholder: "Username"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            required: true,
                            name: "password",
                            onChange: handleChange,
                            placeholder: "Password",
                            type: "password"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-semibold mt-2",
                            children: "Select type:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_6___default()), {
                            row: true,
                            "aria-labelledby": "demo-row-radio-buttons-group-label",
                            name: "row-radio-buttons-group",
                            value: formdata.type,
                            // @ts-ignore
                            onChange: (_, value)=>{
                                setformdata({
                                    ...formdata,
                                    type: value
                                });
                            },
                            className: "grid",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    value: _constants_globalconstants__WEBPACK_IMPORTED_MODULE_11__/* .usersType.bookingclerk */ .El.bookingclerk,
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                    label: "Booking Clerk"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    value: _constants_globalconstants__WEBPACK_IMPORTED_MODULE_11__/* .usersType.operationclerk */ .El.operationclerk,
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                    label: "Operation Clerk"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    value: _constants_globalconstants__WEBPACK_IMPORTED_MODULE_11__/* .usersType.seniorclerk */ .El.seniorclerk,
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                    label: "Senior Clerk"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    value: _constants_globalconstants__WEBPACK_IMPORTED_MODULE_11__/* .usersType.wageclerk */ .El.wageclerk,
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                    label: "Wage Clerk"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                            title: "Submit",
                            type: "submit"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-14 w-[60%] mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl text-white font-bold text-center mb-3",
                        children: "Users"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Auth_CreateUserTable__WEBPACK_IMPORTED_MODULE_10__/* .CreateUserTable */ .I, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateUsers);
const getServerSideProps = async (ctx)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)(ctx);
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

/***/ 6843:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ContentCopy");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 1664:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 5374:
/***/ ((module) => {

module.exports = require("@mui/material/Radio");

/***/ }),

/***/ 6563:
/***/ ((module) => {

module.exports = require("@mui/material/RadioGroup");

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
var __webpack_exports__ = __webpack_require__.X(0, [1071,4763], () => (__webpack_exec__(3885)));
module.exports = __webpack_exports__;

})();