(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{4:function(e){e.exports=JSON.parse('{"he":{"strings":["\u05d4\u05e2\u05e8\u05d4 \u05d7\u05d3\u05e9\u05d4","\u05e9\u05de\u05d5\u05e8","\u05d1\u05d8\u05dc","\u05e9\u05e0\u05d4","\u05de\u05d7\u05e7"]},"en-US":{"strings":["New note","Save","Cancel","Edit","Delete"]}}')},40:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c,a,s,i,r,o,l,d,u=n(1),b=n(0),g=n.n(b),j=n(13),O=n.n(j),p=(n(40),n(16)),m=n(2),f=n(7),h=n(22),A=n(15),x=n(8),y=n(6),v=n.n(y),w="SET_CONNECTED",M="SET_LOADING",N="SET_NOTES",S=n(4),B=function(e,t,n,c,a){return e.map((function(s,i){return Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsx)("div",{dir:"rtl",name:"card".concat(i),className:"card ".concat(s.editMode?"shadow-lg b":""),style:{width:"18rem"},children:Object(u.jsxs)("div",{className:"card-body",children:[s.editMode?[Object(u.jsx)("input",{id:"input",name:i,onClick:function(n){return s.justOpened?[n.target.focus(),n.target.select(),t(e.map((function(e,t){return t==i?Object(m.a)(Object(m.a)({},e),{},{justOpened:!1}):e})))]:""},className:"text-center",style:{fontSize:"17px"},defaultValue:s.title,onChange:function(n){return t(e.map((function(e,t){return t==i?Object(m.a)(Object(m.a)({},e),{},{tempTitle:n.target.value}):e})))}}),Object(u.jsx)("textarea",{id:"textarea",name:i,onClick:function(e){return e.target.value==S[a].strings[0]?[e.target.focus(),e.target.select()]:""},onFocus:function(e){return C(e.target)},onBlur:function(e){return C(e.target)},className:"text-center",defaultValue:s.body,onChange:function(n){return[C(n.target),t(e.map((function(e,t){return t==i?Object(m.a)(Object(m.a)({},e),{},{tempBody:n.target.value}):e})))]}})]:[Object(u.jsx)("h5",{className:"card-title",children:s.title}),Object(u.jsx)("p",{className:"card-text",style:{whiteSpace:"pre-wrap"},children:s.body})],Object(u.jsx)("div",{className:"row justify-content-between",children:s.editMode?[Object(u.jsx)("a",{className:"btn btn-primary",style:{width:"40%"},onClick:function(){return t(e.map((function(e,t){return t==i?Object(m.a)(Object(m.a)({},e),{},{title:e.tempTitle,body:e.tempBody,editMode:!1,justOpened:!1}):e})))},children:S[a].strings[1]}),Object(u.jsx)("div",{className:"btn",children:i}),Object(u.jsx)("a",{className:"btn btn-danger",style:{width:"40%"},onClick:function(){return t(e.map((function(e,t){return t==i?Object(m.a)(Object(m.a)({},e),{},{editMode:!1,justOpened:!1}):e})))},children:S[a].strings[2]})]:[Object(u.jsx)("a",{className:"btn btn-primary",style:{width:"40%"},onClick:function(){return[t(e.map((function(e,t){return t==i?Object(m.a)(Object(m.a)({},e),{},{tempTitle:e.title,tempBody:e.body,editMode:!0,justOpened:!0}):Object(m.a)(Object(m.a)({},e),{},{title:void 0!=e.tempTitle?e.tempTitle:e.title,body:void 0!=e.tempBody?e.tempBody:e.body,editMode:!1,justOpened:!1})}))),setTimeout((function(){return C(document.getElementById("textarea"))}),0)]},children:S[a].strings[3]}),Object(u.jsx)("div",{className:"btn",children:i}),Object(u.jsx)("a",{className:"btn btn-danger",style:{width:"40%"},onClick:function(){return[e.splice(i,1),t(e),n(!c)]},children:S[a].strings[4]})]})]})})})})}))};function C(e){var t=window.getComputedStyle(e);setTimeout((function(){e.style.cssText="height:auto; padding:0",e.style.cssText="height:"+(17+e.scrollHeight+parseInt(t.getPropertyValue("border-top-width"))+parseInt(t.getPropertyValue("padding-top"))+parseInt(t.getPropertyValue("padding-bottom"))+parseInt(t.getPropertyValue("border-bottom-width")))+"px"}),0)}var E=Object(f.b)((function(e){return{notes:e.general.notes}}),(function(e){return{setNotes:function(t){return e({type:N,payload:t})}}}))((function(e){var t=Object(b.useState)(!1),n=Object(p.a)(t,2),g=n[0],j=n[1],O=Object(b.useState)(),f=Object(p.a)(O,2),w=f[0],M=f[1],N=Object(b.useState)(!1),C=Object(p.a)(N,2),E=C[0],D=C[1];Object(b.useEffect)((function(){if(localStorage.getItem("notes")){var t=localStorage.getItem("notes");t=Object(h.a)(t),t=JSON.parse(t),e.setNotes(t)}localStorage.getItem("langauge")?M(localStorage.getItem("langauge")):(localStorage.setItem("langauge","en-US"),M("en-US"))}),[]),Object(b.useEffect)((function(){c=JSON.stringify(e.notes),c=Object(h.b)(c),localStorage.setItem("notes",c)})),Object(b.useEffect)((function(){try{document.getElementsByName("card".concat(e.notes.length-1))[0].scrollIntoView({behavior:"smooth"})}catch(t){}}),[g]);var I=Object(y.useSpeechRecognition)(),T=I.transcript,R=I.resetTranscript,L=I.listening;Object(b.useEffect)((function(){L||(i?i=!1:s?(s=!1,l=!0,r=a.value,(a=document.getElementById("textarea")).focus(),a.select(),v.a.startListening({language:w})):l?(l=!1,"input"==a.id?r=a.value:o=a.value,e.setNotes(e.notes.map((function(e,t){return t==a.name?Object(m.a)(Object(m.a)({},e),{},{title:r||e.title,body:o||e.body,editMode:!1,justOpened:!1}):e}))),r=void 0,o=void 0,a=void 0,d=!1,D(!1)):(a=void 0,D(!1)))}),[L]),Object(b.useEffect)((function(){if(E&&a)a.value=T,d&&l&&(T.includes("\u05dc\u05d7\u05d6\u05d5\u05e8 \u05dc\u05d0\u05d7\u05d5\u05e8")||T.includes("\u05d7\u05d6\u05d5\u05e8 \u05dc\u05d0\u05d7\u05d5\u05e8"))&&(a.value="",l=!1,s=!0,i=!0,v.a.stopListening(),(a=document.getElementById("input")).focus(),a.select(),setTimeout((function(){v.a.startListening({language:w})}),500));else switch(T.toLowerCase()){case"make a note":case"make note":case"create note":case"create a note":case"new note":case"\u05d4\u05db\u05df \u05d4\u05e2\u05e8\u05d4":case"\u05d4\u05db\u05e0\u05ea \u05d4\u05e2\u05e8\u05d4":case"\u05d4\u05e2\u05e8\u05d4 \u05d7\u05d3\u05e9\u05d4":case"\u05d4\u05db\u05d9\u05e0\u05d9 \u05d4\u05e2\u05e8\u05d4":case"\u05e6\u05d5\u05e8 \u05d4\u05e2\u05e8\u05d4":case"\u05d9\u05e6\u05d9\u05e8\u05ea \u05d4\u05e2\u05e8\u05d4":case"\u05e6\u05e8\u05d9 \u05d4\u05e2\u05e8\u05d4":Q(e.notes,e.setNotes,!0),d=!0,v.a.stopListening()}}),[T]);var Q=function(e,t,n){var c=!0;e=e.map((function(e){return e.title==S[w].strings[0]&&e.body==S[w].strings[0]?(c=!1,Object(m.a)(Object(m.a)({},e),{},{editMode:!0})):e.editMode?Object(m.a)(Object(m.a)({},e),{},{title:e.tempTitle,body:e.tempBody,editMode:!1}):e})),c&&e.push({title:S[w].strings[0],body:S[w].strings[0],tempTitle:S[w].strings[0],tempBody:S[w].strings[0],editMode:!0,justOpened:!0}),j(!g),t(e),n&&setTimeout((function(){s=!0,(a=document.getElementById("input")).focus(),a.select(),D(!0),setTimeout((function(){return v.a.startListening({language:w})}),500)}),0)};return Object(u.jsx)("div",{className:"text-center",children:w?Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{type:"button",onClick:function(){var t="en-US"==w?"he":"en-US";e.setNotes(e.notes.map((function(e){return e.title==S[w].strings[0]&&e.body==S[w].strings[0]||e.tempTitle==S[w].strings[0]&&e.tempBody==S[w].strings[0]?Object(m.a)(Object(m.a)({},e),{},{title:S[t].strings[0],body:S[t].strings[0],tempTitle:S[t].strings[0],tempBody:S[t].strings[0],editMode:!1}):Object(m.a)(Object(m.a)({},e),{},{editMode:!1})}))),localStorage.setItem("langauge",t),M(t)},src:"en-US"==w?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA+VBMVEUAAADw8PDaEzfl1tbdJkfw8PDx8fHu7u4fZ7zbGj3eMFDx7+/gSWTw8PAla77w8PDhT2nw8PDccIDeOVjx8fFHgMbiWnLhTmru6OpQicvkN1Lw8PDv7+/iaoHiXXXkj5/eRF/hX3dDf8U1dcLhUGvw8PDfRmJbjsvhWnLjboJVispmlc68zeNgkcukvd2LrtjmkKClvt7qx83w8PDYACcAUrTgUmzfSmXonavopbEXYrsNW7jv6OpSiMjo6+6kvt0yc8Eobb/V3+q9z+RNhMjM2Oisw+B3odLf5ey2yeKZt9uRstl+pdRllc1bjstDf8U6eMNtms+FqtaYG5KvAAAAM3RSTlMAZf0M9L+MHfz86umxcfDXqU0W1bOyiEI9Fw7ypH9vMOrc2tjUy7mwsKWMdnI97dbNoVeKw+ZFAAACvElEQVRYw6WU53ajMBBGB/feYztO32zaZrvQFmlpxj1O7OT9H2aFRSCODQJ0f3B0OHx3hDQSBHF4f3BZqxF6VM8e56rNNMTiy0GNYg5y6Sh5iMjhTY0Fn4gr8LmqRprHAa89efIEPmUFRHxyC1M0cQXb1JsQRj6LxibGZI42LH2BTzZkLfpltOA/MGVfDteY8W+Hch8C+MxSpvsHOkLGZqTuoQF7+TC2n2ZLLtD0Z0OnQQL14968xcLkgQumFtvIFRdENFzi/aj7ae/sPnZY+0GThgrUCmxxjx2I7QseVuEC9XSr93m5R0Q8wexBIEidgc83p/kNY4hsw3AaaWHM0cwwpmECtfSmf+mmvu51T8FGjBfn9d9gfnrHz12vZxay/EZa8LMQTN3rQMyZ6BP0yIdrNB8ORQKkuBP4uuJVbQtrBhe8TDGZmCJBmd8PN5jwTaTOA/Ox90BhVMGhgD3I9lAouAJG3vRCdOELppZQwMgzgbL0QiOdeuPxVChwl7Ez1LQR+3KlaRO01DRWmWjaIxrz139C+Q6QdrrHxN499kJfe2pzu2E1nBY0EbKpe35YaMSHFjPMKRYLTqCqozF+FeivggIb2jiCoAI/rNXMXfDhMzEWblfbhdGMRBC0oYYxWfOqzi9rXOBMhJgRBCUo4BDEggwQOUEKqJxAhSMkxRHU5QR1yMoJsnAsJziGnJwgB1U5QRWacoImpOUEaYCLXxJcAEBFlaDCBD0ZQQ8YmeT5DDjcJhfcgkMrlTSfasGGRlJBAziDVMIJDMCl+zsRXfDIJjvJPvly/Hw5D2/oxxf0YQslbl6Bd+TiXiQ7dOLkO7CHnET9mOugQACnRTUCxVMI5OxcnD8/gzC6KUH/d0HAoFEMmX1jAGLSd5mA++cuDRHpVUrv06VKD2LROrlulzJFNu1MqX190oIA/gP8qY8JPhZ/1QAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAADw8PDw8PDw8PDp6enw8PDw8PDu7u7w8PDw8PDx8fHw8PDw8PBIgcbv7+/w8PA5eMLn6u5QiMg8ecNRiMhnlczH1uXU4OePr9Xw8PAAUrSlvt3o6+4XYbpDfsXW3+rI1ua6zOORsdjh5uycudt9pNN3oNJpl85YjMo6eMMucMAlar12YEIvAAAAGXRSTlMA13JmC79NHPjy5cu2raSK7Ove1clqV0EwOOHeewAAAXRJREFUWMOc09mSglAMBNCwKyC4a1ovAu76//83UsMslgnbeeu3pFMhjevbaeJZ47HlJantu9RL4MQjfjOKnYA6cu2IRZHdaQ4nZFXoUBvf4kaW37y7x628gFSb2b6D2YYUE3Q0IdESnS1JMEcPc/qwQC8Ldf+BPazQ24r+2Rr0Zrb0Z4oBpvRrvRtkTT8sHsSimsMDOfX/h6wrCtaFLlVsbvB4cAObKhHrSqBkXUQvAeuOBjBH1gUtFV7xcm2pMWZVDhgD5KyKidwRqzKgLIGMVSOXfP50h+jOn3zxiAVEhXjIlAU3wGQGeGYvzzrcWJBSwoIDgNwAhzqYHFUQJOSx5IzK5TtcUDmzxFM+cW8AmP17kFg0ZtEOwIlrJwA7Fo2/Sq8DGgBgGIZh/FkbhAlc+r+1SR/QV+hH7G/sQepR7mXqdd5A6UjrUN1Y72Lpatty3XpvwFjEachazFvQXNRt2H7cf+F45Xnpeu178Xz1fflu/QcSVT5kR34r5QAAAABJRU5ErkJggg==",className:"position-absolute",style:{left:0,zIndex:1}}),Object(u.jsx)("a",{className:"position-absolute btn ".concat(v.a.browserSupportsSpeechRecognition()?"":"disabled"," ").concat(L?"text-primary":"text-danger"),onClick:function(){return v.a.startListening({language:w})},style:{right:0,transform:"translateX(".concat(L?"-23%":"0",")")},children:Object(u.jsx)(A.a,{icon:L?x.a:x.b,size:"3x",type:"button",style:{zIndex:1}})}),Object(u.jsx)("div",{className:"btn btn-info my-2",onClick:function(){return Q(e.notes,e.setNotes)},children:S[w].strings[0]}),Object(u.jsx)("div",{className:"btn btn-primary",onClick:function(){return v.a.startListening({language:w})},children:"start"}),Object(u.jsx)("div",{className:"btn btn-primary",onClick:function(){return v.a.stopListening()},children:"stop"}),Object(u.jsx)("div",{className:"btn btn-primary",onClick:function(){return R()},children:"reset"}),Object(u.jsx)("div",{children:"text: ".concat(T)}),Object(u.jsx)("table",{className:"m-0 table justify-content-center row",children:B(e.notes,e.setNotes,j,g,w)})]}):""})})),D=(n(53),n.p+"static/media/loading.3bdc9192.svg");Object(f.b)((function(e){return{general:e.general}}),(function(e){return{setIsConnected:function(t){return e({type:w,payload:t})},setIsLoading:function(t){return e({type:M,payload:t})}}}))((function(e){return Object(b.useEffect)((function(){return t=e.setIsLoading,e.setIsConnected,void t(!0);var t}),[]),Object(u.jsxs)("div",{children:[e.general.isLoading?Object(u.jsx)("img",{src:D}):Object(u.jsx)(A.a,{icon:e.isOnline?x.c:x.d,size:"2x"}),Object(u.jsx)("hr",{})]})}));var I=n(10),T={isConnected:!1,isLoading:!0,notes:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{isConnected:t.payload});case M:return Object(m.a)(Object(m.a)({},e),{},{isLoading:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{notes:t.payload});default:return e}},L=Object(I.b)({general:R}),Q=Object(I.c)(L);n(71);var U=function(e){return Object(u.jsx)("div",{style:{color:"white",paddingTop:"3em",position:"relative",bottom:0,width:"100%",textAlign:"center"},children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("a",{href:"https://saharzzz.github.io/saharhayon/",className:"".concat(e.class," link-unstyled text-decoration-none"),children:"\xa9 ".concat((new Date).getFullYear()," Copyright: Sahar Hayon")})})})};var z=function(){return Object(u.jsxs)("div",{className:"page-container",children:[Object(u.jsx)("div",{className:"content-wrap",children:Object(u.jsx)(f.a,{store:Q,children:Object(u.jsx)(E,{})})}),Object(u.jsx)(U,{style:{fontSize:"14px",backgroundColor:"#fdf8c8"},class:"text-muted"})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(72);O.a.render(Object(u.jsx)(g.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),F()}},[[73,1,2]]]);
//# sourceMappingURL=main.a707407a.chunk.js.map