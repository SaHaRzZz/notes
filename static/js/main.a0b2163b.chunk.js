(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{35:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c,o=n(1),a=n(0),s=n.n(a),i=n(10),r=n.n(i),l=(n(35),n.p,n(29)),d=n(3),b=n(5),u=n(17),j="SET_CONNECTED",O="SET_LOADING",f="SET_NOTES",m=function(e,t,n,c){return e.map((function(a,s){return Object(o.jsx)("tr",{children:Object(o.jsx)("td",{children:Object(o.jsx)("div",{name:"card".concat(s),className:"card",style:{width:"18rem"},children:Object(o.jsxs)("div",{className:"card-body",children:[a.editMode?[Object(o.jsx)("input",{className:"text-center",style:{fontSize:"19px"},defaultValue:a.title,onChange:function(n){return t(e.map((function(e,t){return t==s?Object(d.a)(Object(d.a)({},e),{},{tempTitle:n.target.value}):e})))}}),Object(o.jsx)("textarea",{className:"text-center",defaultValue:a.body,onChange:function(n){return t(e.map((function(e,t){return t==s?Object(d.a)(Object(d.a)({},e),{},{tempBody:n.target.value}):e})))}})]:[Object(o.jsx)("h5",{className:"card-title",children:a.title}),Object(o.jsx)("p",{className:"card-text",style:{whiteSpace:"pre-wrap"},children:a.body})],Object(o.jsx)("div",{className:"row justify-content-between",children:a.editMode?[Object(o.jsx)("a",{className:"btn btn-primary",style:{width:"40%"},onClick:function(){return t(e.map((function(e,t){return t==s?Object(d.a)(Object(d.a)({},e),{},{title:e.tempTitle,body:e.tempBody,editMode:!1}):e})))},children:"Save"}),Object(o.jsx)("a",{className:"btn btn-danger",style:{width:"40%"},onClick:function(){return t(e.map((function(e,t){return t==s?Object(d.a)(Object(d.a)({},e),{},{editMode:!1}):e})))},children:"Cancel"})]:[Object(o.jsx)("a",{className:"btn btn-primary",style:{width:"40%"},onClick:function(){return t(e.map((function(e,t){return t==s?Object(d.a)(Object(d.a)({},e),{},{tempTitle:e.title,tempBody:e.body,editMode:!0}):Object(d.a)(Object(d.a)({},e),{},{title:void 0!=e.tempTitle?e.tempTitle:e.title,body:void 0!=e.tempBody?e.tempBody:e.body,editMode:!1})})))},children:"Edit"}),Object(o.jsx)("a",{className:"btn btn-danger",style:{width:"40%"},onClick:function(){return[e.splice(s,1),t(e),n(!c)]},children:"Delete"})]})]})})})})}))};var p=Object(b.b)((function(e){return{notes:e.general.notes}}),(function(e){return{setNotes:function(t){return e({type:f,payload:t})}}}))((function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){if(localStorage.getItem("snotes-notes")){var t=localStorage.getItem("snotes-notes");console.log("first:",Object.values(t)),t=Object(u.a)(t),t=JSON.parse(t),e.setNotes(t)}else localStorage.setItem("snotes-notes","+ex\u05f0^nrN+ex\u05f0^y\u062d2^"),console.log("this")}),[]),Object(a.useEffect)((function(){c=JSON.stringify(e.notes),c=Object(u.b)(c),localStorage.setItem("snotes-notes",c),console.log("set")})),Object(a.useEffect)((function(){try{document.getElementsByName("card".concat(e.notes.length-1))[0].scrollIntoView({behavior:"smooth"})}catch(t){}}),[s]),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("div",{className:"btn btn-info my-2",onClick:function(){return function(e,t,n,c){(e=e.map((function(e){return e.editMode?Object(d.a)(Object(d.a)({},e),{},{title:e.tempTitle,body:e.tempBody,editMode:!1}):e}))).push({title:"New note",body:"",tempTitle:"New note",editMode:!0}),n(!c),t(e)}(e.notes,e.setNotes,i,s)},children:"New note"}),Object(o.jsx)("table",{className:"m-0 table justify-content-center row",children:m(e.notes,e.setNotes,i,s)})]})})),h=(n(40),n(28)),y=n(16),g=n.p+"static/media/loading.3bdc9192.svg";Object(b.b)((function(e){return{general:e.general}}),(function(e){return{setIsConnected:function(t){return e({type:j,payload:t})},setIsLoading:function(t){return e({type:O,payload:t})}}}))((function(e){return Object(a.useEffect)((function(){return t=e.setIsLoading,e.setIsConnected,void t(!0);var t}),[]),Object(o.jsxs)("div",{children:[e.general.isLoading?Object(o.jsx)("img",{src:g}):Object(o.jsx)(h.a,{icon:e.isOnline?y.a:y.b,size:"2x"}),Object(o.jsx)("hr",{})]})}));var x=n(7),N={isConnected:!1,isLoading:!0,notes:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{isConnected:t.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.payload});case f:return Object(d.a)(Object(d.a)({},e),{},{notes:t.payload});default:return e}},w=Object(x.b)({general:v}),C=Object(x.c)(w);var S=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(b.a,{store:C,children:Object(o.jsx)(p,{})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};n(60);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),T()}},[[61,1,2]]]);
//# sourceMappingURL=main.a0b2163b.chunk.js.map