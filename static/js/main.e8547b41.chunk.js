(this.webpackJsonpnotelist=this.webpackJsonpnotelist||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(6),r=n.n(a),o=(n(14),n(3)),l=n(7),u=n(16),j=function(e,t){switch(t.type){case"ADD_NOTE":return[].concat(Object(l.a)(e),[{title:t.note.title,day:t.note.day,id:Object(u.a)()}]);case"REMOVE_NOTE":return e.filter((function(e){return e.id!==t.id}));default:return e}},O=Object(s.createContext)(),d=function(e){var t=Object(s.useReducer)(j,[],(function(){var e=localStorage.getItem("notes");return e?JSON.parse(e):[]})),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(s.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(i))}),[i]),Object(c.jsx)(O.Provider,{value:{notes:i,dispatch:a},children:e.children})},b=function(){var e=Object(s.useContext)(O).notes;return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("h1",{className:"display-4",children:"Notes"}),Object(c.jsxs)("p",{className:"lead mx-auto",children:["YOU HAVE ",e.length," THINGS TO DO"]})]})},h=function(e){var t=e.note,n=Object(s.useContext)(O).dispatch;return Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"title",children:t.title}),Object(c.jsx)("div",{className:"day",children:t.day}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){n({type:"REMOVE_NOTE",id:t.id})},children:"delete"})]})},x=function(){var e=Object(s.useContext)(O).notes;return e.length?Object(c.jsx)("div",{className:"note-list",children:Object(c.jsx)("ul",{children:e.map((function(e){return Object(c.jsx)(h,{note:e},e.id)}))})}):Object(c.jsx)("h6",{className:"empty",children:"YOU HAVE DONE EVERYTHING! GOOD JOB!"})},f=function(){var e=Object(s.useContext)(O).dispatch,t=Object(s.useState)(""),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),u=l[0],j=l[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_NOTE",note:{title:i,day:u}}),a(""),j("")},children:[Object(c.jsx)("label",{htmlFor:"note",children:"Write Down Note in Here: "}),Object(c.jsx)("input",{type:"text",required:!0,placeholder:"NOTE",value:i,onChange:function(e){a(e.target.value)}}),Object(c.jsx)("input",{type:"text",required:!0,placeholder:"DAY",value:u,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("input",{className:"btn btn-outline-dark",type:"submit",name:"note",id:"note",value:"ADD NOTE"})]})};var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(d,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(x,{}),Object(c.jsx)(f,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.e8547b41.chunk.js.map