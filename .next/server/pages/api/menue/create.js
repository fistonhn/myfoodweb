"use strict";
(() => {
var exports = {};
exports.id = 9167;
exports.ids = [9167];
exports.modules = {

/***/ 6407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ prismaclient)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prismaclient.ts
// lib/prisma.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const prismaclient = (prisma);


/***/ }),

/***/ 9977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// CONCATENATED MODULE: ./constants/globalconstants.ts
const usersType = {
    "bookingclerk": "bookingclerk",
    "seniorclerk": "seniorclerk",
    "wageclerk": "wageclerk",
    "operationclerk": "operationclerk",
    "admin": "admin"
};
const HEAD_CONST = "head";
const CLEANER_CONST = "cleaner";

// EXTERNAL MODULE: ./lib/prismaclient.ts + 1 modules
var prismaclient = __webpack_require__(6407);
// EXTERNAL MODULE: ./utils/customeresponses.ts
var customeresponses = __webpack_require__(854);
;// CONCATENATED MODULE: ./pages/api/menue/create.ts



const handler = async (req, res)=>{
    try {
        let { formdata , selectedItems  } = req.body;
        const { id , ...restFormData } = formdata;
        const _menue = await prismaclient/* default.menue.create */.Z.menue.create({
            data: restFormData
        });
        for (let item of selectedItems){
            let currentDate = new Date();
            const availableContractors = await prismaclient/* default.contractor.findMany */.Z.contractor.findMany({
                where: {
                    AND: [
                        {
                            OR: [
                                {
                                    Categories: {
                                        none: {}
                                    }
                                },
                                {
                                    Categories: {
                                        some: {
                                            menue: {
                                                functionDate: {
                                                    not: _menue.functionDate
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            item: item.item
                        }
                    ]
                },
                take: Number(item.counter) ? Number(item.counter) : 1
            });
            // loop for the number of counter...
            {
                const counterArray = Array(Number(item.counter) ? Number(item.counter) : 1).fill(0);
                for(let c = 0; c < counterArray.length; c++){
                    if (c < availableContractors.length) {
                        console.log("inside my if", availableContractors.length);
                        await prismaclient/* default.categories.create */.Z.categories.create({
                            data: {
                                contractorId: availableContractors[c].id,
                                menueId: _menue.id,
                                itemName: item.item,
                                comment: item.comment
                            }
                        });
                        await prismaclient/* default.contractor.update */.Z.contractor.update({
                            where: {
                                id: availableContractors[c].id
                            },
                            data: {
                                assignTillDate: _menue.functionDate
                            }
                        });
                    } else {
                        await prismaclient/* default.categories.create */.Z.categories.create({
                            data: {
                                menueId: _menue.id,
                                itemName: item.item,
                                comment: item.comment
                            }
                        });
                    }
                }
            }
        }
        // Assign Contractors that have item=="Headname"|"HEADNAME" 
        const findHeadName = await prismaclient/* default.contractor.findFirst */.Z.contractor.findFirst({
            where: {
                AND: [
                    {
                        OR: [
                            {
                                Categories: {
                                    none: {}
                                }
                            },
                            {
                                Categories: {
                                    some: {
                                        menue: {
                                            functionDate: {
                                                not: _menue.functionDate
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        item: {
                            contains: HEAD_CONST,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        if (findHeadName) {
            await prismaclient/* default.categories.create */.Z.categories.create({
                data: {
                    contractorId: findHeadName.id,
                    menueId: _menue.id,
                    itemName: findHeadName.item,
                    comment: ""
                }
            });
        }
        // Assign Contractors that have item=="Headname"|"HEADNAME" 
        // Assign contractors from cleaner in the menue ----> cleaner="Hadi,Madi,"
        let cleaners = [];
        if (_menue.cleaner.includes(",")) {
            cleaners = _menue.cleaner.split(",");
        } else {
            cleaners.push(_menue.cleaner);
        }
        console.log("cleaners", cleaners);
        for(let i = 0; i < cleaners.length; i++){
            if (cleaners[i]) {
                const findCleanerContractor = await prismaclient/* default.contractor.findFirst */.Z.contractor.findFirst({
                    where: {
                        AND: [
                            {
                                OR: [
                                    {
                                        Categories: {
                                            none: {}
                                        }
                                    },
                                    {
                                        Categories: {
                                            some: {
                                                menue: {
                                                    functionDate: {
                                                        not: _menue.functionDate
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                item: {
                                    contains: CLEANER_CONST,
                                    mode: "insensitive"
                                },
                                name: {
                                    contains: cleaners[i],
                                    mode: "insensitive"
                                }
                            }
                        ]
                    }
                });
                if (findCleanerContractor) {
                    await prismaclient/* default.categories.create */.Z.categories.create({
                        data: {
                            contractorId: findCleanerContractor.id,
                            menueId: _menue.id,
                            itemName: findCleanerContractor.item,
                            comment: ""
                        }
                    });
                }
            }
        }
        // Assign contractors from cleaner in the menue ----> cleaner="Hadi,Madi,"
        return (0,customeresponses/* SuccessResponse */.w)({
            msg: {
                id: _menue.id
            },
            res,
            statusCode: 200
        });
    } catch (error) {
        return (0,customeresponses/* ErrorResponse */.i)({
            msg: error.message,
            res,
            statusCode: 500
        });
    }
};
/* harmony default export */ const create = (handler);


/***/ }),

/***/ 854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ErrorResponse),
/* harmony export */   "w": () => (/* binding */ SuccessResponse)
/* harmony export */ });
const ErrorResponse = ({ msg , statusCode , res  })=>{
    let response = {};
    if (typeof msg === "object") {
        response = msg;
    } else {
        response = {
            msg
        };
    }
    return res.status(statusCode).json(response);
};
const SuccessResponse = ({ msg , res , statusCode =200  })=>{
    let response = {};
    if (typeof msg === "object") {
        response = msg;
    } else {
        response = {
            msg
        };
    }
    return res.status(statusCode).json(response);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9977));
module.exports = __webpack_exports__;

})();