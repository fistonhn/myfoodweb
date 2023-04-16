"use strict";
exports.id = 6259;
exports.ids = [6259];
exports.modules = {

/***/ 6259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ContractorModel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleapierrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _providers_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4763);
/* harmony import */ var _Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_apis__WEBPACK_IMPORTED_MODULE_2__]);
_providers_apis__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ContractorModel = ({ allowEdit =true  })=>{
    const [update, setupdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [contractors, setcontractors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getContractors = async ()=>{
        try {
            const res = await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .getAllContractorsApi */ .ar)();
            setcontractors(res.data.contractors);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_5__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getContractors();
    }, []);
    const handleUpdate = async ()=>{
        try {
            await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .uploadContractor */ .g0)({
                contractors: contractors
            });
            alert("Contractors Uploaded Successfully.");
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_5__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `relative w-full mb-8 overflow-hidden rounded-lg shadow-lg ${update && "pt-12"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full overflow-x-auto",
            children: [
                update && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                    className: "absolute top-1 left-[50%]",
                    title: "Update",
                    onClick: handleUpdate
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "id"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "item"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase ",
                                        children: "age"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "wage"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "group"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "area"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "phone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "identity number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "px-4 py-3 uppercase",
                                        children: "Docs"
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
                            children: contractors.map((val, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "text-gray-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-4 py-3 border",
                                            children: val.id
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                            data: val
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};

const DocUploadComponent = ({ contractor  })=>{
    const [image, setimage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [name, setname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const handleUpload = async ()=>{
        if (!name) {
            return alert("kindly enter the title of the document.");
        }
        if (!image) {
            return alert("kindly select the file.");
        }
        try {
            await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .uploadDocApi */ .N5)({
                name: name,
                file: image,
                contractorid: contractor.id
            });
            alert("Upload successfully!");
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_5__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        className: "px-4 py-3 border",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid gap-y-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "w-[200px]",
                    placeholder: "Title...",
                    value: name,
                    onChange: (e)=>{
                        setname(e.target.value);
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    ref: inputRef,
                    type: "file",
                    onChange: async (e)=>{
                        if (e.target.files === null) {
                            return;
                        }
                        const file = e.target.files[0];
                        setimage(file);
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                    onClick: handleUpload,
                    title: "Upload"
                })
            ]
        })
    });
};
const DocItem = ({ doc  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid ga",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: doc.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: doc.url,
                className: "text-blue-700 text-sm",
                target: "_blank",
                children: doc.url
            })
        ]
    });
};
const Item = ({ data  })=>{
    const [val, setval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);
    const [allowEdit, setallowEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (name, value)=>{
        setval((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleUpdateContractor = async ()=>{
        try {
            await (0,_providers_apis__WEBPACK_IMPORTED_MODULE_2__/* .updateContractorAPi */ .r1)({
                data: val
            });
            alert("Contractor updated successfully.");
            setallowEdit(false);
        } catch (error) {
            const err = (0,_utils_handleapierrors__WEBPACK_IMPORTED_MODULE_5__/* .handleApiErrors */ .Y)(error);
            alert(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val.name,
                    onChange: (e)=>{
                        handleChange("name", e.target.value);
                    }
                }) : val.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val.item,
                    onChange: (e)=>{
                        handleChange("item", e.target.value);
                    }
                }) : val.item
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val.age,
                    onChange: (e)=>{
                        handleChange("age", e.target.value);
                    }
                }) : val.age
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val.wage,
                    onChange: (e)=>{
                        handleChange("wage", e.target.value);
                    }
                }) : val.wage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val.group,
                    onChange: (e)=>{
                        handleChange("group", e.target.value);
                    }
                }) : val.group
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val.area,
                    onChange: (e)=>{
                        handleChange("area", e.target.value);
                    }
                }) : val.area
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val?.phone ? val.phone : "",
                    onChange: (e)=>{
                        handleChange("phone", e.target.value);
                    }
                }) : val.phone
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val?.address ? val.address : "",
                    onChange: (e)=>{
                        handleChange("address", e.target.value);
                    }
                }) : val.address
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: allowEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: "!w-[200px]",
                    value: val?.identitynumber ? val.identitynumber : "",
                    onChange: (e)=>{
                        handleChange("identitynumber", e.target.value);
                    }
                }) : val.identitynumber
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-4 py-3 border",
                children: [
                    allowEdit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DocUploadComponent, {
                        contractor: val
                    }),
                    !allowEdit && val.documents && val.documents.length > 0 && val?.documents?.map((d, di)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DocItem, {
                            doc: d
                        }, di);
                    })
                ]
            }),
            allowEdit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-4 py-3 border space-x-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        title: "Save",
                        onClick: handleUpdateContractor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        title: "Cancel",
                        onClick: ()=>{
                            setallowEdit(false);
                        }
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-4 py-3 border",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                    title: "Edit",
                    onClick: ()=>{
                        setallowEdit(true);
                    }
                })
            })
        ]
    });
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


/***/ })

};
;