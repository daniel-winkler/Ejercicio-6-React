(this.webpackJsonpejercicio_6=this.webpackJsonpejercicio_6||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),o=c.n(a),n=c(20),r=c.n(n),s=(c(26),c(7)),i=(c(27),c(11)),l=c(2),j=c(0);function m(e){return Object(j.jsxs)("div",{className:"card w-25 m-auto",children:[Object(j.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.title}),Object(j.jsx)("p",{className:"card-text",children:e.p}),Object(j.jsx)("a",{href:e.href,target:"blank",className:"btn btn-primary",children:e.button})]})]})}function d(){return Object(j.jsx)("div",{className:"my-4",children:Object(j.jsx)(m,{image:"https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg",title:"Diario Motor",p:"Me acabo de sacar el carnet A2: \xbfqu\xe9 moto me compro?",href:"https://www.diariomotor.com/noticia/comprar-tu-primera-moto-carnet-a2/",button:"Pincha aqu\xed!"})})}function u(e){var t=e.category,c=e.products;return Object(j.jsxs)("div",{className:"container my-4",children:[Object(j.jsx)("h2",{className:"text-center mb-3",children:t}),Object(j.jsx)("ul",{className:"list-group text-center",children:c.map((function(e){var t=e.id,c=e.producto,a=e.marca,o=e.modelo,n=e.precio;return Object(j.jsxs)("li",{className:"list-group-item",children:[c," ",a," ",o," ",n,"\u20ac"]},t)}))})]})}function b(){var e={electronica:[{id:27,producto:"Televisor",marca:"LG",modelo:"XPY775",precio:399},{id:28,producto:"Equipo HIFI",marca:"Samsung",modelo:"VF74",precio:179},{id:29,producto:"Reproductor BluRay",marca:"Sony",modelo:"BR-345",precio:489}],alimentacion:[{id:30,producto:"Galletas",marca:"Maria",precio:.9},{id:31,producto:"Ensalada",marca:"Imizurra",precio:1.1},{id:32,producto:"Patatas",marca:"McCain",precio:1.3},{id:33,producto:"Pasta",marca:"Gallo",precio:1.2}],mascotas:[{id:34,producto:"Croquetas para gato",marca:"Purina",precio:4.9},{id:35,producto:"Bolsitas de perro",marca:"Hacendado",precio:1.9}]},t=Object.keys(e);return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{category:t[0],products:e.electronica}),Object(j.jsx)(u,{category:t[1],products:e.alimentacion}),Object(j.jsx)(u,{category:t[2],products:e.mascotas})]})}function p(){return Object(j.jsx)("div",{className:"App w-25 container",children:Object(j.jsx)(b,{})})}function h(){var e=Object(a.useContext)(w),t=e.contacts,c=e.setContacts;return Object(j.jsx)("div",{className:"row mb-5",children:t.map((function(e,a){return Object(j.jsxs)("ul",{className:"list-group col-4 mb-3",children:[Object(j.jsxs)("li",{className:"list-group-item active",children:["Contacto ",a+1]}),Object(j.jsx)("li",{className:"list-group-item",children:e.firstName}),Object(j.jsx)("li",{className:"list-group-item",children:e.lastName}),Object(j.jsx)("li",{className:"list-group-item",children:e.phone}),Object(j.jsxs)("li",{className:"list-group-item",children:[e.address,", ",e.zip,", ",e.city]}),Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)("button",{className:"btn btn-warning",onClick:function(){return a=e.phone,void c(t.filter((function(e){return e.phone!==a})));var a},children:"Eliminar"})})]},e.phone)}))})}var O=c(9),x=c(15),f=c(10);function N(){var e=Object(a.useContext)(w).setContacts,t={firstName:"",lastName:"",address:"",zip:"",city:"",phone:""},c=Object(a.useState)(t),o=Object(s.a)(c,2),n=o[0],r=o[1];function i(e){r(Object(f.a)(Object(f.a)({},n),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(j.jsxs)("form",{className:"container mb-5 form-group",onSubmit:function(c){c.preventDefault(),e((function(e){return[].concat(Object(O.a)(e),[n])})),r(t)},children:[Object(j.jsx)("input",{type:"text",name:"firstName",className:"form-control mb-2",value:n.firstName,onChange:i,placeholder:"Introduce un nombre"})," ",Object(j.jsx)("input",{type:"text",name:"lastName",className:"form-control mb-2",value:n.lastName,onChange:i,placeholder:"Introduce los apellidos"}),Object(j.jsx)("input",{type:"text",name:"address",className:"form-control mb-2",value:n.address,onChange:i,placeholder:"Introduce la direcci\xf3n"}),Object(j.jsx)("input",{type:"text",name:"zip",className:"form-control mb-2",value:n.zip,onChange:i,placeholder:"Introduce la provincia"}),Object(j.jsx)("input",{type:"text",name:"city",className:"form-control mb-2",value:n.city,onChange:i,placeholder:"Introduce el c\xf3digo postal"}),Object(j.jsx)("input",{type:"text",name:"phone",className:"form-control mb-2",value:n.phone,onChange:i,placeholder:"Introduce el n\xfamero de tel\xe9fono"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success",children:"Registrar"})]})}function v(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"my-4",children:"Lista de contactos"})," ",Object(j.jsx)(h,{}),Object(j.jsx)("h1",{className:"my-4",children:"Nuevo contacto"}),Object(j.jsx)(N,{})]})}function g(){var e=Object(a.useContext)(w).setTodos,t={userId:0,id:0,title:"",completed:!1},c=Object(a.useState)(t),o=Object(s.a)(c,2),n=o[0],r=o[1];return Object(j.jsx)("form",{onSubmit:function(c){c.preventDefault(),e((function(e){return[n].concat(Object(O.a)(e))})),r(t)},children:Object(j.jsx)("input",{type:"text",className:"form-control mb-3",placeholder:"Type in a new To-Do item",value:n.title,onChange:function(e){r(Object(f.a)(Object(f.a)({},n),{},{title:e.target.value}))}})})}c(29);function y(){var e=Object(a.useContext)(w),t=e.todos,c=e.setTodos;return Object(j.jsx)("ul",{className:"list-group",children:t.map((function(e,a){return Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between ".concat(e.completed?"completed":""),onClick:function(e){return function(e,a){if("BUTTON"!==e.target.tagName){var o=Object(O.a)(t);o[a].completed=!o[a].completed,c(o)}}(e,a)},children:[Object(j.jsxs)("span",{children:[a,": ",e.title]}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:(o=e.title,function(){return c(t.filter((function(e){return o!==e.title})))}),children:"X"})]},e.title+a);var o}))})}function C(){return Object(j.jsxs)("div",{className:"container w-50 my-4",children:[Object(j.jsx)("h1",{children:"To-Do List"}),Object(j.jsx)(g,{}),Object(j.jsx)(y,{})]})}var w=Object(a.createContext)();var S=function(){var e=Object(a.useState)([{firstName:"Jake",lastName:"Smith",address:"123 Fake Street",city:"New York",zip:"354414",phone:134127101},{firstName:"Sara",lastName:"Jones",address:"456 Dummy Street",city:"Los Angeles",zip:"526544",phone:152542643},{firstName:"Mark",lastName:"Doe",address:"789 My Street",city:"Washington",zip:"65841",phone:445714327}]),t=Object(s.a)(e,2),c=t[0],o=t[1],n=Object(a.useState)([]),r=Object(s.a)(n,2),m=r[0],u=r[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(e){return u(e.slice(0,20))}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(i.a,{children:[Object(j.jsxs)("nav",{class:"navbar navbar-dark bg-dark justify-content-around font-weight-bold custom",children:[Object(j.jsx)(i.b,{to:"/ejercicio1",activeClassName:"selected",className:"text-decoration-none",children:"Ejercicio 1"}),Object(j.jsx)(i.b,{to:"/ejercicio2",activeClassName:"selected",className:"text-decoration-none",children:"Ejercicio 2"}),Object(j.jsx)(i.b,{to:"/ejercicio3",activeClassName:"selected",className:"text-decoration-none",children:"Ejercicio 3"}),Object(j.jsx)(i.b,{to:"/ejercicio4",activeClassName:"selected",className:"text-decoration-none",children:"Ejercicio 4"})]}),Object(j.jsx)(w.Provider,{value:{contacts:c,setContacts:o,todos:m,setTodos:u},children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/ejercicio1",component:d}),Object(j.jsx)(l.a,{path:"/ejercicio2",component:p}),Object(j.jsx)(l.a,{path:"/ejercicio3",component:v}),Object(j.jsx)(l.a,{path:"/ejercicio4",component:C})]})})]})})};c(38);r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7d0ac44a.chunk.js.map