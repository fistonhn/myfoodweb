(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},1107:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(5893);n(7294);let s=e=>{let{title:t,className:n,type:s,children:i,...o}=e;return(0,r.jsxs)("button",{...o,type:s||"button",className:"shadow-md bg-primary py-2 px-4 rounded-md text-sm font-semibold outline-none text-white ".concat(n),children:[t,i]})}},2923:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(5893),s=n(3299);n(7294);let i=e=>{let{onlyLogo:t,className:n}=e,{data:i}=(0,s.useSession)();return(0,r.jsxs)("div",{className:n,children:[(0,r.jsxs)("div",{className:"flex items-center justify-evenly cursor-pointer uppercase ",children:[(0,r.jsx)("div",{className:"flex items-center flex-wrap gap-5",children:!t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{onClick:()=>{window.location.href="/"},className:"text-white hover:text-primary font-bold",children:"Home"}),(0,r.jsx)("h1",{onClick:()=>{window.location.href="/admin/createusers"},className:"text-white hover:text-primary font-bold",children:"Create Roles"}),(0,r.jsx)("h1",{onClick:()=>{window.location.href="/admin/report"},className:"text-white hover:text-primary font-bold",children:"Report"}),(0,r.jsx)("h1",{onClick:()=>{window.location.href="/booking"},className:"text-white hover:text-primary font-bold",children:"Bookings"})]})}),(0,r.jsx)("div",{className:"",onClick:()=>{window.location.href="/order"},children:(0,r.jsx)("img",{src:"/logo.png",className:"w-[200px] h-[200px] object-contain"})}),(0,r.jsx)("div",{className:"flex items-center flex-wrap gap-5",children:!t&&(0,r.jsxs)(r.Fragment,{children:[(null==i?void 0:i.user.role)==="admin"&&(0,r.jsx)("h1",{onClick:()=>{window.location.href="/admin/adminpage"},className:"text-white hover:text-primary font-bold",children:"Admin"}),(0,r.jsx)("h1",{onClick:()=>{window.location.href="/wage"},className:"text-white hover:text-primary font-bold",children:"Wage Page"}),(0,r.jsx)("h1",{onClick:()=>{window.location.href="/operation"},className:"text-white hover:text-primary font-bold",children:"Operation"}),(0,r.jsx)("h1",{className:" font-bold text-white hover:text-primary",onClick:()=>{(0,s.signOut)()},children:"logout"})]})})]}),(0,r.jsxs)("div",{className:"flex items-center flex-col text-white",children:[(0,r.jsx)("h2",{className:" font-semibold text-3xl ",children:"Reserve Menu & Catering"}),(0,r.jsx)("h5",{className:" font-semibold text-xl ",children:"XYZ place Pin: 1234567"}),!t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"abc@gmail.com"}),(0,r.jsx)("span",{children:"Contact: 1234567"})]})]})]})}},1175:function(e,t,n){"use strict";var r=n(5893);n(7294);let s=e=>{let{type:t="text",label:n,labelClassName:s,className:i,endIcon:o,...a}=e;return(0,r.jsxs)("div",{className:"grid text-start gap-y-1 ".concat(i),children:[n&&(0,r.jsx)("label",{className:"text-sm font-semibold text-white ".concat(s),children:n}),(0,r.jsxs)("div",{className:" flex items-center border border-gray-300 rounded-md  focus:border-primary shadow-md bg-white ",children:[(0,r.jsx)("input",{...a,type:t,className:" w-full outline-none   p-2"}),o&&o]})]})};t.Z=s},5075:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return h}});var r=n(5893),s=n(1107),i=n(1175),o=n(7294),a=n(3299),l=n(2923);let c={email:"",password:""},d=()=>{let[e,t]=(0,o.useState)(c),n=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))},d=async t=>{t.preventDefault();let n=await (0,a.signIn)("credentials",{redirect:!1,email:e.email,password:e.password});console.log(n),(null==n?void 0:n.error)?alert(n.error):window.location.href="/order"};return(0,r.jsxs)("div",{style:{backgroundImage:'url("bg3.jpg")',backgroundAttachment:"fixed",backgroundSize:"cover"},className:"h-screen overflow-auto",children:[(0,r.jsx)(l.h,{onlyLogo:!0}),(0,r.jsx)("div",{className:"flex items-center justify-center  mt-14 pb-14",children:(0,r.jsxs)("form",{onSubmit:d,className:"grid w-[30%] m-auto gap-y-3 bg-white p-10 shadow-md rounded-md",children:[(0,r.jsx)("h1",{className:"font-bold text-center text-2xl mb-5",children:"Login"}),(0,r.jsx)(i.Z,{required:!0,name:"email",onChange:n,placeholder:"Email"}),(0,r.jsx)(i.Z,{required:!0,name:"password",onChange:n,placeholder:"Password",type:"password"}),(0,r.jsx)(s.z,{title:"Submit",type:"submit"})]})})]})};var h=!0;t.default=d}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);