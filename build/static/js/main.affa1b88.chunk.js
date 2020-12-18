(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{101:function(e,t){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(54),o=a.n(s),m=a(61),l=a(6),i=a(55),u=a.n(i),A=a(56),E=a.n(A),f=a(57),p=a.n(f),g=(a(139),a(27)),d=a.n(g),N=function(e){var t=e.message,a=t.text,n=t.user,c=!1;return n===e.name.trim().toLowerCase()&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText mt-8"},d.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"sentText"},n),r.a.createElement("p",{className:"messageText"},d.a.emojify(a))))},v=(a(140),function(e){var t=e.messages,a=e.name;return r.a.createElement(p.a,{className:"messages"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(N,{message:e,name:a}))}))}),b=a(58),j=a.n(b),h=a(59),O=a.n(h),C=(a(141),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:j.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:O.a,alt:"close icon"}))))}),S=(a(142),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),w=(a(143),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(l.a)(a,2),o=s[0],i=s[1],A=Object(c.useState)(""),f=Object(l.a)(A,2),p=f[0],g=f[1],d=Object(c.useState)(""),N=Object(l.a)(d,2),b=(N[0],N[1]),j=Object(c.useState)(""),h=Object(l.a)(j,2),O=h[0],w=h[1],I=Object(c.useState)([]),x=Object(l.a)(I,2),y=x[0],R=x[1],B="https://netflixchatparty.herokuapp.com/";Object(c.useEffect)(function(){var e=u.a.parse(t.search),a=e.name,c=e.room;n=E()(B),g(c),i(a),n.emit("join",{name:a,room:c},function(e){e&&alert(e)})},[B,t.search]),Object(c.useEffect)(function(){n.on("message",function(e){R(function(t){return[].concat(Object(m.a)(t),[e])})}),n.on("roomData",function(e){var t=e.users;b(t)})},[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(C,{room:p}),r.a.createElement(v,{messages:y,name:o}),r.a.createElement(S,{message:O,setMessage:w,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,function(){return w("")})}})))}),I=a(15),x=(a(144),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),m=o[0],i=o[1];return r.a.createElement("div",{id:"out"},r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement("header",{className:"login-cta"},r.a.createElement("h2",null,"Join Room")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("input",{type:"text",onChange:function(e){return n(e.target.value)},required:!0}),r.a.createElement("span",null,"Name")),r.a.createElement("div",{className:"form-row"},r.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},required:!0}),r.a.createElement("span",null,"Room")),r.a.createElement("div",{className:"form-row"}),r.a.createElement("div",{className:"form-row just"},r.a.createElement(I.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"joinbutton",type:"submit"},"Join"))))))}),y=a(1),R=function(){return r.a.createElement(I.a,null,r.a.createElement(y.a,{path:"/",exact:!0,component:x}),r.a.createElement(y.a,{path:"/chat",component:w}))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))},58:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},59:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,t,a){e.exports=a(147)}},[[62,1,2]]]);
//# sourceMappingURL=main.affa1b88.chunk.js.map