(this["webpackJsonpcrypt-me"]=this["webpackJsonpcrypt-me"]||[]).push([[0],[,,,,,,function(e,t,c){"use strict";var n=c(4),s=c(0),r=(c(32),c(1));t.a=function(e){var t=Object(s.useState)(!1),c=Object(n.a)(t,2),i=c[0],a=c[1];return Object(r.jsx)("div",{onClick:i?function(){}:function(){e.onClickNoAnimation?e.onClickNoAnimation():(a(!0),i||e.onClick().finally((function(){return a(!1)})))},className:"button",children:i?Object(r.jsx)("div",{className:"spinner"}):e.children})}},,function(e,t,c){"use strict";c(0);var n=c(49),s=c(1);t.a=function(e){var t="#ccd6f6";return Object(s.jsx)("div",{style:{textAlign:"right",maxWidth:e.maxWidth||"280px"},children:Object(s.jsx)(n.a,{title:Object(s.jsxs)("div",{style:{fontSize:"12px",fontFamily:"rubik, sans-serif",fontWeight:"normal"},children:["\ud83d\udc4b Your text will be encrypted before send to our servers and saved securely in our databases.",Object(s.jsx)("br",{}),"This means only you know the real message.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"\ud83d\udd12 For your security:"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"\ud83d\udccb The text will be readable 1 time, because after to read it, we will delete your encryted message in our databases."}),Object(s.jsx)("li",{children:"\ud83d\udc6e\u200d\u2640\ufe0f If anyone try decrypt your message with a wrong secret, we will delete the record from our database, because we are avoiding brute force."}),Object(s.jsx)("li",{children:"\u231b If your message is not readed after 24 hours, we will delete it."}),Object(s.jsxs)("li",{children:["\ud83d\udd11 Before we encrypt your message, we will generate a"," ",Object(s.jsx)("b",{children:"secret"})," randomized for you.",Object(s.jsx)("br",{}),"This secret is used to encrypt and decrypt your message securely. If you lost the secret, it is impossible decrypt the message.",Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"\ud83d\udce2 We never save your secret."})]})]}),"\ud83d\udcbb If you are developer, check it out the console!",Object(s.jsx)("br",{}),"This is a OpenSource project.",Object(s.jsx)("br",{}),"You can see the GitHub repository and the API REST Postman Documentation! \ud83e\udd13"]}),arrow:!0,children:Object(s.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{width:"21px",position:"absolute",top:"7px",cursor:"pointer"},space:"preserve",children:[Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsxs)("g",{children:[Object(s.jsx)("circle",{fill:t,cx:"256",cy:"378.5",r:"25"}),Object(s.jsx)("path",{fill:t,d:"M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256 C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216 c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"}),Object(s.jsx)("path",{fill:t,d:"M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40 c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20 c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"})]})})}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{})]})})})}},function(e,t,c){"use strict";c(0),c(34);var n=c(1);t.a=function(e){return Object(n.jsx)("div",{className:"card",children:e.children})}},function(e,t,c){"use strict";var n=c(4),s=c(0),r=(c(35),c(1));t.a=function(e){var t=e.text,c=e.label,i=e.icon,a=void 0===i?"":i,o=Object(s.useState)(!1),j=Object(n.a)(o,2),l=j[0],b=j[1];return l?Object(r.jsxs)("span",{className:"click-copy-copiado",children:[Object(r.jsx)("i",{className:"clip-icon fas fa-check"}),"Copied!"]}):Object(r.jsxs)("span",{onClick:function(){var e=document.createElement("textarea");e.innerHTML=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),b(!0)},className:"click-copy",children:[a&&Object(r.jsx)("i",{className:"clip-icon "+a}),c]})}},function(e,t,c){"use strict";c(0),c(37);var n=c(1);t.a=function(e){var t=e.onChange,c=e.disabled,s=e.defaultText;return Object(n.jsx)("textarea",{placeholder:"Glup glup glup...",disabled:c||!1,onChange:function(e){return t&&t(e.target.value)},defaultValue:s||""})}},function(e){e.exports=JSON.parse('{"url":"https://api-crypt.rmaafs.com"}')},,,,,function(e,t,c){"use strict";(function(e){var n=c(4),s=c(0),r=c(6),i=c(9),a=c(18),o=c(11),j=c(12),l=c(8),b=c(1);t.a=function(){var t=Object(s.useState)(""),c=Object(n.a)(t,2),u=c[0],d=c[1],x=Object(s.useState)(null),h=Object(n.a)(x,2),f=h[0],O=h[1];return Object(b.jsx)(i.a,{children:f?Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("h2",{children:"Message encrypted"}),Object(b.jsx)(l.a,{maxWidth:"350px"}),Object(b.jsx)(a.a,{data:f,onBack:function(){return O(null)}})]}):Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("h2",{children:"Insert your message"}),Object(b.jsx)(l.a,{maxWidth:"350px"}),Object(b.jsx)(o.a,{onChange:d}),Object(b.jsxs)(r.a,{onClick:function(){return new Promise((function(t){var c=e.from(u).toString("base64");fetch(j.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:c})}).then((function(e){return e.json()})).then((function(e){e.id&&O(e)})).catch((function(){return t(!0)}))}))},children:[Object(b.jsx)("i",{className:"btn-icon fas fa-share-alt"}),"Share"]})]})})}}).call(this,c(16).Buffer)},function(e,t,c){"use strict";var n=c(0),s=c(10),r=(c(36),c(6)),i=c(1);t.a=function(e){var t=e.data,c=e.onBack,a=t.id,o=t.secret,j=window.location.href+a+"/"+o;return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsxs)("div",{className:"share-info",children:[Object(i.jsx)(s.a,{text:j,label:"Click here to copy the link for decrypt the message",icon:"fas fa-clipboard"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"share-info-text",children:[Object(i.jsx)("b",{children:"ID:"}),Object(i.jsx)("br",{}),a,Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Secret:"}),Object(i.jsx)("br",{}),o]})]}),Object(i.jsx)("div",{style:{paddingTop:"30px"},children:Object(i.jsxs)(r.a,{onClickNoAnimation:c,children:[Object(i.jsx)("i",{className:"btn-icon fas fa-arrow-left"}),"Home"]})})]})}},,,,function(e,t,c){"use strict";(function(e){var n=c(4),s=c(0),r=c(9),i=c(11),a=c(12),o=c(10),j=c(6),l=c(8),b=c(1);t.a=function(t){var c=t.navigate,u=t.id,d=t.secret,x=Object(s.useState)(!0),h=Object(n.a)(x,2),f=h[0],O=h[1],p=Object(s.useState)(null),m=Object(n.a)(p,2),g=m[0],v=m[1],y=Object(s.useState)("Loading..."),w=Object(n.a)(y,2),k=w[0],N=w[1];return Object(s.useEffect)((function(){new Promise((function(t){fetch(a.url,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:u,secret:d})}).then((function(e){return e.json()})).then((function(t){if(t.text){var c=e(t.text,"base64").toString("ascii");v(c),N("Glup... Text decrypted!")}else t.error&&N(t.error)})).finally((function(){t(!0),O(!1)}))}))}),[]),Object(b.jsxs)(r.a,{children:[Object(b.jsx)("h2",{children:k}),f||null===g?null:Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(l.a,{maxWidth:"400px"}),Object(b.jsx)(i.a,{disabled:!0,defaultText:g}),Object(b.jsx)("div",{children:Object(b.jsx)(o.a,{text:g,label:"Click here for copy the message",icon:"fas fa-clipboard"})})]}),!f&&Object(b.jsx)("div",{style:{paddingTop:"30px"},children:Object(b.jsxs)(j.a,{onClickNoAnimation:function(){return c("/")},children:[Object(b.jsx)("i",{className:"btn-icon fas fa-arrow-left"}),"Home"]})})]})}}).call(this,c(16).Buffer)},,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(3),r=c.n(s),i=c(17),a=c(23),o=(c(45),c(22)),j=(c(46),c(47),c(1)),l=function(){return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("div",{className:"pond"})})},b=function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)("div",{id:"background-wrap",children:[Object(j.jsx)("div",{className:"bubble x1"}),Object(j.jsx)("div",{className:"bubble x2"}),Object(j.jsx)("div",{className:"bubble x3"}),Object(j.jsx)("div",{className:"bubble x4"}),Object(j.jsx)("div",{className:"bubble x5"}),Object(j.jsx)("div",{className:"bubble x6"}),Object(j.jsx)("div",{className:"bubble x7"}),Object(j.jsx)("div",{className:"bubble x8"}),Object(j.jsx)("div",{className:"bubble x9"}),Object(j.jsx)("div",{className:"bubble x10"})]})]})},u=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(a.a,{children:[Object(j.jsx)(i.a,{default:!0,path:"/"}),Object(j.jsx)(o.a,{path:":id/:secret"})]}),Object(j.jsx)(b,{})]})};var d=function(){return Object(j.jsx)(u,{})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):t&&t.onSuccess&&t.onSuccess(e))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(j.jsx)(d,{}),document.getElementById("root")),console.log("\n\n%cHello developer!\n\nContribute to the project:\nhttps://github.com/rmaafs/crypt-me-front \nhttps://github.com/rmaafs/crypt-me-api \n\n%cPostman API REST:\nhttps://documenter.getpostman.com/view/9525350/U16krkhd \n\n\n","color:aqua","color:orange"),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="./worker.js";x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):h(t,e)}))}}()}],[[48,1,2]]]);
//# sourceMappingURL=main.b3bf3442.chunk.js.map