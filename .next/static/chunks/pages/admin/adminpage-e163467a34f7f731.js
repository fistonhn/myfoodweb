(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{9672:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/adminpage",function(){return a(3744)}])},4828:function(e,t,a){"use strict";a.d(t,{B:function(){return m}});var r=a(5893),s=a(66);a(7294);var c=a(9226),n=a(7645),l=a(8456),i=a(6514),d=a(1425),o=a(9368),p=a(1107),x=a(1780),u=a(1),h=a(1862);let m=()=>{let e=(0,s.TL)(),t=(0,s.CG)(e=>e.contractor),a=()=>{e((0,x.LG)())},o=()=>{e((0,x.g5)({categoryID:t.contractorCategoryID,contractorID:t.selectedToUpdateUserId}))},m=()=>{e((0,x.Dw)(t.contractorCategoryID))},N=async()=>{try{if(!t.contractorCategoryID)return alert("Kindly try again later.");await (0,h.xl)({categoryID:t.contractorCategoryID}),alert("Contractor removed successfully.")}catch(t){let e=(0,u.Y)(t);alert(e)}};return(0,r.jsxs)(c.Z,{maxWidth:"md",fullWidth:!0,onClose:a,open:t.showUpdateContractorModal,children:[(0,r.jsx)(n.Z,{children:"Edit Contractors"}),t.loadingContractors?(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)(l.Z,{})}):(0,r.jsxs)(i.Z,{children:[t.updatedSuccessfullyMessage&&(0,r.jsx)("h1",{className:"text-center font-bold text-green-600",children:t.updatedSuccessfullyMessage}),(0,r.jsx)("div",{children:t.contractors.length>0?t.contractors.map((e,t)=>(0,r.jsx)(j,{...e})):(0,r.jsx)("h1",{className:"text-center fonbold text-red-600 ",children:"No Contractors available"})})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(p.z,{onClick:m,title:"GET OTHER CONTRACTORS",className:"bg-green-700"}),(0,r.jsx)(p.z,{onClick:N,title:"REMOVE CURRENT CONTRACTOR",className:"text-red-200 bg-red-700"}),(0,r.jsx)(p.z,{title:"CANCEL",onClick:()=>{e((0,x.LG)())}}),(0,r.jsx)(p.z,{onClick:o,title:"UPDATE"})]})]})},j=e=>{let t=(0,s.CG)(e=>e.contractor),a=(0,s.TL)();return(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(o.Z,{onChange:()=>{a((0,x.u1)({userId:e.id}))},checked:t.selectedToUpdateUserId===e.id}),(0,r.jsx)("h1",{children:e.name})]}),(0,r.jsx)("h1",{children:e.item})]})}},3744:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return f},default:function(){return v}});var r=a(5893),s=a(2923),c=a(1862),n=a(7294),l=a(1),i=a(66),d=a(4828),o=a(1780);let p=e=>{let{menues:t}=e,a=(0,i.TL)(),s=(0,i.CG)(e=>e.contractor),c=e=>{a((0,o.ve)({cid:e})),a((0,o.FI)(e))};return(0,r.jsxs)("div",{className:"w-full mb-8 overflow-hidden rounded-lg shadow-lg",children:[s.showUpdateContractorModal&&(0,r.jsx)(d.B,{}),(0,r.jsx)("div",{className:"w-full overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap",children:[(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"booking id"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Categories"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"function"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase whitespace-nowrap",children:"name"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase whitespace-nowrap",children:"created at"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"function date"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"mobile"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Service Time"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"venue"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Departure Date"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Departure Time"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"PAX"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Special Instruction"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Head Name"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Head Mobile Number"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Driver Name"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"Vehicle Number"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"words"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"cleaner"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"booked By"}),(0,r.jsx)("th",{className:"px-4 py-3 uppercase",children:"booker Mobile Number"})]})}),(0,r.jsx)("tbody",{className:"bg-white whitespace-nowrap",children:t.map((e,t)=>{var a;return(0,r.jsxs)("tr",{className:"text-gray-700",children:[(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.bookingId}),(0,r.jsx)("td",{className:"px-4 py-3 border space-y-4",children:null===(a=e.Categories)||void 0===a?void 0:a.map((e,t)=>{var a;return(0,r.jsxs)("div",{className:" grid gap-y-2 bg-gray-100 p-[1px]",children:[(0,r.jsxs)("span",{className:"font-bold text-lg underline underline-offset-4",children:[" ","Item: ",e.itemName]}),(0,r.jsxs)("span",{onClick:()=>{c(e.id)},className:"font-bold text-lg underline underline-offset-4 cursor-pointer hover:text-green-500",children:["Contractor: ",null===(a=e.contractor)||void 0===a?void 0:a.name]}),(0,r.jsxs)("span",{className:"font-bold text-lg underline underline-offset-4",children:[" ","Comment: ",e.comment]})]},t)})}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.function}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.name}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.createdAt?"".concat(new Date(e.createdAt).toLocaleDateString()):"null"}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:new Date(e.functionDate).toLocaleDateString()}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.mobile}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:new Date(e.serviceTime).toTimeString()}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.venue}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:new Date(e.departureDate).toLocaleDateString()}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:new Date(e.departureTime).toTimeString()}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.PAX}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.specialInstruction}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.headName}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.headMobileNumber}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.driverName}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.vehicleNumber}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.words}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.cleaner}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.bookedBy}),(0,r.jsx)("td",{className:"px-4 py-3 border",children:e.bookerMobileNumber})]},t)})})]})})]})};var x=a(1107),u=a(4105),h=a(1175),m=a(9226),j=a(6514),N=a(7645),g=a(6259),y=a(2584);let b=()=>{let e=(0,i.CG)(e=>e.menue),[t,a]=(0,n.useState)(""),[d,o]=(0,n.useState)(""),[b,f]=(0,n.useState)(""),[v,w]=(0,n.useState)(""),[C,D]=(0,n.useState)(!0),[S,T]=(0,n.useState)([]),[k,_]=(0,n.useState)(""),[E,A]=(0,n.useState)(!1),I=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{if(e||t&&d||v||b){let a=await (0,c.hA)({search:e,startDate:t,endDate:d,departureDate:v,contractorName:b});T(a.data.menues)}else{let e=await (0,c.hA)({});T(e.data.menues)}}catch(e){return(0,l.Y)(e.message)}};(0,n.useEffect)(()=>{I()},[]),(0,n.useEffect)(()=>{I()},[e.refetchData]);let L=async e=>{let t=[],a=new Date;a.setDate(a.getDate()-1),e.forEach(e=>{t.push({name:String(e.name),item:String(e.item),age:Number(e.age),wage:Number(e.wage),group:String(e.group),assignTillDate:new Date(a),area:String(e.area),address:String(e.address),identitynumber:String(e.identitynumber),phone:String(e.phone)})});try{let e=await (0,c.g0)({contractors:t});alert(e.data.msg)}catch(t){let e=(0,l.Y)(t);alert(e)}},Z=e=>{if(e.preventDefault(),e.target.files){let t=new FileReader;t.onload=t=>{var a;let r=null===(a=t.target)||void 0===a?void 0:a.result,s=u.ij(r,{type:"array"}),c=s.SheetNames[0],n=s.Sheets[c],l=u.P6.sheet_to_json(n);L(l),e.target.value=""},t.readAsArrayBuffer(e.target.files[0])}},R=()=>{try{let e=[];S.forEach(t=>{e.push({...t,serviceTime:new Date(t.serviceTime).toLocaleTimeString(),departureTime:new Date(t.departureTime).toLocaleTimeString(),functionDate:new Date(t.functionDate).toLocaleDateString(),departureDate:new Date(t.departureDate).toLocaleDateString()})}),(0,y.i)(e,"MENUE DATA")}catch(e){alert(e.message)}},z=()=>{A(!1)};return(0,r.jsxs)("div",{style:{backgroundImage:'url("/bg3.jpg")',backgroundAttachment:"fixed",backgroundSize:"cover"},className:"h-screen overflow-auto",children:[(0,r.jsx)(s.h,{}),(0,r.jsxs)("div",{className:"px-5 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(x.z,{title:"Upload Contractor Staff",className:" relative",children:(0,r.jsx)("input",{type:"file",className:"absolute inset-0 opacity-0",onChange:Z})}),(0,r.jsx)(x.z,{title:"View Contuctors",onClick:()=>{D(!0),A(!0)}})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)(h.Z,{label:"Start Date",onChange:e=>{a(e.target.value)},type:"date",value:t}),(0,r.jsx)(h.Z,{label:"End Date",onChange:e=>{o(e.target.value)},type:"date",value:d})]}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(h.Z,{type:"date",label:"Departure Date",value:v,onChange:e=>{w(e.target.value)}})}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(h.Z,{placeholder:"Search...",value:k,onChange:e=>{_(e.target.value)}}),(0,r.jsx)(x.z,{title:"Search",onClick:()=>{I(k)}}),(0,r.jsx)(x.z,{title:"Download",onClick:R}),(0,r.jsx)(x.z,{title:"Reset",onClick:()=>{w(""),a(""),o(""),_(""),I()}})]}),(0,r.jsx)(p,{menues:S})]}),(0,r.jsxs)(m.Z,{fullWidth:!0,maxWidth:"md",open:E,onClose:z,children:[(0,r.jsx)(N.Z,{children:"CONTRACTORS"}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(g.o,{allowEdit:C})})]})]})};var f=!0,v=b},2584:function(e,t,a){"use strict";a.d(t,{i:function(){return s}});var r=a(4105);function s(e,t){let a=r.P6.json_to_sheet(e),s=r.P6.book_new();r.P6.book_append_sheet(s,a,"students"),r.cW(s,{bookType:"xlsx",type:"buffer"}),r.cW(s,{bookType:"xlsx",type:"binary"}),r.NC(s,"".concat(t,".xlsx"))}},5103:function(){},2061:function(){}},function(e){e.O(0,[251,101,415,29,349,774,888,179],function(){return e(e.s=9672)}),_N_E=e.O()}]);