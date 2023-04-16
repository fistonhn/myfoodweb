"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
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

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: ./lib/prismaclient.ts + 1 modules
var prismaclient = __webpack_require__(6407);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts



const authOptions = {
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Email",
                    type: "email",
                    placeholder: "jsmith@gmailc.om"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                const { email , password  } = credentials;
                console.log({
                    email,
                    password
                });
                const dbuser = await prismaclient/* default.user.findFirst */.Z.user.findFirst({
                    where: {
                        email: email
                    }
                });
                console.log({
                    dbuser
                });
                if (!dbuser || dbuser?.password !== password) {
                    throw Error("Incorrect Credentials");
                    return null;
                } else {
                    return {
                        id: dbuser.id,
                        email: dbuser.email,
                        image: null,
                        role: dbuser.role
                    };
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt ({ token , user , account , profile , isNewUser  }) {
            if (user) {
                // @ts-ignore
                token.role = user.role;
            }
            return token;
        },
        async session ({ session , token , user  }) {
            // console.log(session, token, user)
            // console.log('userin session', session);
            // session.user.role = user.role;
            if (token) {
                // @ts-ignore
                session.user.role = token.role;
            }
            return session;
        }
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(409));
module.exports = __webpack_exports__;

})();