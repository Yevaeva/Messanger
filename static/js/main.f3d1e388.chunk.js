(this.webpackJsonpmessanger=this.webpackJsonpmessanger||[]).push([[0],{130:function(e,s,t){},131:function(e,s,t){},132:function(e,s,t){},133:function(e,s,t){},134:function(e,s,t){},135:function(e,s,t){},136:function(e,s,t){},137:function(e,s,t){},139:function(e,s,t){"use strict";t.r(s);var n=t(0),a=t(1),r=t.n(a),c=t(69),i=t.n(c),o=(t(76),t(77),t(78),t(14)),l=t.p+"static/media/logo.8b1d0e4d.png",u=function(e){return Object(n.jsx)("div",{className:"background",children:Object(n.jsxs)("main",{children:[Object(n.jsx)("img",{className:"img",src:l,alt:"Logo"}),Object(n.jsxs)("div",{className:"btnWrapper",children:[Object(n.jsx)(o.b,{to:"/register",exact:"true",className:"register",children:Object(n.jsx)("input",{type:"submit",value:"Register"})}),Object(n.jsx)(o.b,{to:"/sign-in",exact:"true",className:"signin",children:Object(n.jsx)("input",{className:"sub input",type:"submit",value:"Sign in"})})]})]})})},j=t(2),d=t(19),m=t(20),b=t(21),h=t(23),p=t(22),O=(t(45),t(31)),g=t.n(O),f=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",g.a.stopTimer),e.addEventListener("mouseleave",g.a.resumeTimer)}}),x=function(e,s){f.fire({icon:e,title:s})},v=function(e){Object(h.a)(t,e);var s=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=s.call(this,e)).handleChange=function(e,s){n.setState(Object(d.a)({},s,e.target.value))},n.handleSignUp=function(e){e.preventDefault();var s=n.state,t=s.email,a=s.password,r=s.name,c=s.surname;if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t))if(a.length>4){var i={email:t,password:a,name:r,surname:c};fetch("https://classchatmessanger.herokuapp.com/user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){if(e.error)throw e.error;e.error?console.log(e.error.message,"----response.mes"):(x("success","Successfull registration"),n.props.history.push("/sign-in"))})).catch((function(e){x("error",e.message),console.log(e)}))}else x("warning","Password should be more than 5 characters");else x("warning","The email address field must contain a valid email address")},n.state={email:"",password:"",name:"",surname:""},n}return Object(b.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"background",children:Object(n.jsxs)("form",{className:"form",onSubmit:this.handleSignUp,children:[Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"label-email",children:[Object(n.jsx)("span",{className:"required",children:"Name"}),Object(n.jsx)("input",{className:"inp",type:"text",name:"Name",placeholder:"Name",required:!0,value:this.state.name,onChange:function(s){return e.handleChange(s,"name")}})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"label-email",children:[Object(n.jsx)("span",{className:"required",children:"Surname"}),Object(n.jsx)("input",{className:"inp",type:"text",name:"Surname",placeholder:"Surname",required:!0,value:this.state.surname,onChange:function(s){return e.handleChange(s,"surname")}})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"label-email",children:[Object(n.jsx)("span",{className:"required",children:"Email"}),Object(n.jsx)("input",{type:"email",className:"text inp",name:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(s){return e.handleChange(s,"email")}})]})}),Object(n.jsx)("input",{type:"checkbox",name:"show-password",className:"inp show-password a11y-hidden",id:"show-password"}),Object(n.jsx)("label",{className:"label-show-password",htmlFor:"show-password",children:Object(n.jsx)("span",{children:"Show Password"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"label-password",children:[Object(n.jsx)("span",{className:"required",children:"Password"}),Object(n.jsx)("input",{type:"text",className:"text inp",name:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(s){return e.handleChange(s,"password")}})]})}),Object(n.jsx)("input",{className:"inp",type:"submit",value:"Sign up"}),Object(n.jsxs)("figure",{"aria-hidden":"true",children:[Object(n.jsx)("div",{className:"person-body"}),Object(n.jsx)("div",{className:"neck skin"}),Object(n.jsxs)("div",{className:"head skin",children:[Object(n.jsx)("div",{className:"eyes"}),Object(n.jsx)("div",{className:"mouth"})]}),Object(n.jsx)("div",{className:"hair"}),Object(n.jsx)("div",{className:"ears"}),Object(n.jsx)("div",{className:"shirt-1"}),Object(n.jsx)("div",{className:"shirt-2"})]})]})})}}]),t}(r.a.Component),N=t(42),y=t(33),w=t(16),S=t.n(w),T=t(32),C=t(5),E=t(39),k=t.n(E),I=t(27),M=t.n(I),P=t.p+"static/media/avatar.79bfd233.png",A="NEW_CHAT_MESSAGE_EVENT",_="START_TYPING_MESSAGE_EVENT",q="STOP_TYPING_MESSAGE_EVENT",U="https://classchatmessanger.herokuapp.com",F=function(e,s){var t=Object(a.useState)([]),n=Object(C.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),o=Object(C.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)([]),d=Object(C.a)(j,2),m=d[0],b=d[1],h=Object(a.useState)(),p=Object(C.a)(h,2),O=p[0],g=p[1],f=Object(a.useRef)();Object(a.useEffect)((function(){(function(){var e=Object(T.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("".concat(U,"/user/:").concat(s));case 2:t=e.sent,n=t.data,g({picture:P,name:n.name,id:n.id});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var s=Object(T.a)(S.a.mark((function s(){var t,n;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,M.a.get("".concat(U,"/rooms/").concat(e,"/users"));case 2:t=s.sent,n=t.data.users,u(n);case 5:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[e]),Object(a.useEffect)((function(){(function(){var s=Object(T.a)(S.a.mark((function s(){var t,n;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,M.a.get("".concat(U,"/rooms/").concat(e,"/messages"));case 2:t=s.sent,n=t.data.messages,c(n);case 5:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}),[e]),Object(a.useEffect)((function(){if(O)return f.current=k()(U,{query:{roomId:e,name:O.name,picture:O.picture}}),f.current.on("connect",(function(){console.log(f.current.id)})),f.current.on("USER_JOIN_CHAT_EVENT",(function(e){e.error&&(x("error",e.error),sessionStorage.setItem("user.error",e.error)),e.id!==f.current.id&&u((function(s){return[].concat(Object(y.a)(s),[e])}))})),f.current.on("USER_LEAVE_CHAT_EVENT",(function(e){u((function(s){return s.filter((function(s){return s.id!==e.id}))}))})),f.current.on(A,(function(e){console.log("message",e);var s=Object(N.a)(Object(N.a)({},e),{},{ownedByCurrentUser:e.senderId===f.current.id});console.log(s,"incomingMessage"),c((function(e){return[].concat(Object(y.a)(e),[s])})),console.log("messages",r)})),f.current.on(_,(function(e){if(e.senderId!==f.current.id){var s=e.user;b((function(e){return[].concat(Object(y.a)(e),[s])}))}})),f.current.on(q,(function(e){if(e.senderId!==f.current.id){var s=e.user;b((function(e){return e.filter((function(e){return e.name!==s.name}))}))}})),function(){f.current.disconnect()}}),[e,O]);return{messages:r,user:O,users:l,typingUsers:m,sendMessage:function(e){f.current&&e.trim()&&f.current.emit(A,{body:e,senderId:f.current.id,user:O})},startTypingMessage:function(){f.current&&f.current.emit(_,{senderId:f.current.id,user:O})},stopTypingMessage:function(){f.current&&f.current.emit(q,{senderId:f.current.id,user:O})}}},L=(t(130),function(e){var s=Object(a.useState)(""),t=Object(C.a)(s,2),r=t[0],c=t[1];return Object(n.jsxs)("div",{className:"home-container",children:[Object(n.jsx)("input",{type:"text",placeholder:"Room",value:r,onChange:function(e){c(e.target.value)},className:"text-input-field"}),Object(n.jsx)(o.b,{to:"/home/".concat(r,"/").concat(e.emailQuery),className:"enter-room-button",children:"Join room"})]})}),B=function(e){Object(h.a)(t,e);var s=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=s.call(this,e)).handleChange=function(e,s){n.setState(Object(d.a)({},s,e.target.value))},n.handleSignIn=function(e){e.preventDefault();if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.state.email)){var s={email:n.state.email,password:n.state.password};fetch("https://classchatmessanger.herokuapp.com/user/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){if(e.error)throw Error();if(!e.token)return x("error",e.message);x("success",e.message),localStorage.setItem("token",e.token),n.setState({emailQuery:s.email,bool:!1}),console.log("Login successfull"),console.log(e.message,"response.mes")})).catch((function(e){console.log(e)}))}},n.state={email:"",password:"",emailQuery:"",bool:!0},n}return Object(b.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsx)(n.Fragment,{children:this.state.bool?Object(n.jsx)("div",{className:"background",children:Object(n.jsxs)("form",{className:"login-form form",onSubmit:this.handleSignIn,children:[Object(n.jsx)("h1",{className:"a11y-hidden",children:"Login Form"}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"label-email",children:[Object(n.jsx)("span",{className:"required",children:"Email"}),Object(n.jsx)("input",{type:"email",className:"text inp",name:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(s){return e.handleChange(s,"email")}})]})}),Object(n.jsx)("input",{type:"checkbox",name:"show-password",className:" inp show-password a11y-hidden",id:"show-password"}),Object(n.jsx)("label",{className:"label-show-password",htmlFor:"show-password",children:Object(n.jsx)("span",{children:"Show Password"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"label-password",children:[Object(n.jsx)("span",{className:"required",children:"Password"}),Object(n.jsx)("input",{className:"inp text",type:"text",name:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(s){return e.handleChange(s,"password")}})]})}),Object(n.jsx)("input",{className:"inp",type:"submit",value:"Log In"}),Object(n.jsx)("div",{className:"email",children:Object(n.jsx)("a",{href:"#",children:"Forgot password?"})}),Object(n.jsxs)("figure",{"aria-hidden":"true",children:[Object(n.jsx)("div",{className:"person-body"}),Object(n.jsx)("div",{className:"neck skin"}),Object(n.jsxs)("div",{className:"head skin",children:[Object(n.jsx)("div",{className:"eyes"}),Object(n.jsx)("div",{className:"mouth"})]}),Object(n.jsx)("div",{className:"hair"}),Object(n.jsx)("div",{className:"ears"}),Object(n.jsx)("div",{className:"shirt-1"}),Object(n.jsx)("div",{className:"shirt-2"})]})]})}):Object(n.jsx)(L,{emailQuery:this.state.emailQuery})})}}]),t}(r.a.Component),R=function(e){Object(h.a)(t,e);var s=Object(p.a)(t);function t(){return Object(m.a)(this,t),s.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Error 404"}),Object(n.jsx)("h2",{children:"Page not found \ud83d\ude16"})]})}}]),t}(r.a.Component),J=(t(131),t(132),function(e){var s=e.user;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:s.picture,alt:s.name,title:s.name,className:"avatar"}),Object(n.jsx)("p",{children:s.name})]})}),V=(t(133),function(e){var s=e.message;return Object(n.jsxs)("div",{className:"message-item ".concat(s.ownedByCurrentUser?"my-message":"received-message"),children:[!s.ownedByCurrentUser&&Object(n.jsx)("div",{className:"message-avatar-container",children:Object(n.jsx)(J,{user:s.user})}),Object(n.jsxs)("div",{className:"message-body-container",children:[!s.ownedByCurrentUser&&Object(n.jsx)("div",{className:"message-user-name",children:s.user.name}),Object(n.jsx)("div",{className:"message-body",children:s.body})]})]})}),G=function(){var e=Object(a.useState)(!1),s=Object(C.a)(e,2),t=s[0],n=s[1],r=Object(a.useState)(!1),c=Object(C.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(5),u=Object(C.a)(l,2),j=u[0],d=u[1];return Object(a.useEffect)((function(){var e;return i?(i||0===j)&&clearInterval(e):e=setInterval((function(){d((function(e){return e-1}))}),1e3),0===j&&n(!1),function(){return clearInterval(e)}}),[i,j]),{isTyping:t,startTyping:function(){o(!0),d(5),n(!0)},stopTyping:function(){o(!1)},cancelTyping:function(){d(0)}}},Q=(t(134),function(e){var s=e.newMessage,t=e.handleNewMessageChange,a=e.handleStartTyping,r=e.handleStopTyping,c=e.handleSendMessage;return Object(n.jsxs)("form",{className:"new-message-form",children:[Object(n.jsx)("input",{type:"text",value:s,onChange:t,placeholder:"Aa",className:"new-message-input-field",onKeyPress:a,onKeyUp:r}),Object(n.jsx)("button",{type:"submit",onClick:c,className:"send-message-button",children:"Send"})]})}),z=(t(135),function(){return Object(n.jsxs)("div",{className:"dotsContainer",children:[Object(n.jsx)("span",{id:"dot1"}),Object(n.jsx)("span",{id:"dot2"}),Object(n.jsx)("span",{id:"dot3"})]})}),D=(t(136),function(e){var s=e.user;return Object(n.jsxs)("div",{className:"message-item",children:[Object(n.jsx)("div",{className:"message-avatar-container",children:Object(n.jsx)("img",{src:s.picture,alt:s.name,className:"message-avatar"})}),Object(n.jsx)(z,{})]})}),Z=(t(137),function(e){var s=e.users;return s.length>0?Object(n.jsxs)("div",{className:"roomUser",children:[Object(n.jsx)("h4",{children:"Also in this room:"}),Object(n.jsx)("ul",{className:"user-list",children:s.map((function(e,s){return Object(n.jsx)("li",{className:"user-box",children:Object(n.jsx)(J,{user:e})},s)}))})]}):Object(n.jsx)("div",{children:"There is no one else in this room"})}),H=function(e){var s=e.match.params,t=s.roomId,r=s.email,c=F(t,r),i=c.messages,o=c.user,l=c.users,u=c.typingUsers,j=c.sendMessage,d=c.startTypingMessage,m=c.stopTypingMessage,b=Object(a.useState)(""),h=Object(C.a)(b,2),p=h[0],O=h[1],g=G(),f=g.isTyping,x=g.startTyping,v=g.stopTyping,N=g.cancelTyping;return Object(a.useEffect)((function(){f?(d(),console.log("typing")):m()}),[f]),Object(n.jsxs)("div",{className:"chat-room-container",children:[Object(n.jsxs)("div",{className:"chat-room-top-bar",children:[Object(n.jsxs)("h1",{className:"room-name",children:["Room: ",t]}),o&&Object(n.jsx)(J,{user:o})]}),Object(n.jsx)(Z,{users:l}),Object(n.jsx)("div",{className:"messages-container",children:Object(n.jsxs)("ol",{className:"messages-list",children:[i.map((function(e,s){return Object(n.jsx)("li",{children:Object(n.jsx)(V,{message:e})},s)})),u.map((function(e,s){return Object(n.jsx)("li",{children:Object(n.jsx)(D,{user:e})},i.length+s)}))]})}),Object(n.jsx)(Q,{newMessage:p,handleNewMessageChange:function(e){O(e.target.value)},handleStartTyping:x,handleStopTyping:v,handleSendMessage:function(e){e.preventDefault(),N(),j(p),O("")}})]})};var K=function(){var e=localStorage.getItem("token"),s=sessionStorage.getItem("user.error");return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(j.d,{children:[!s&&Object(n.jsx)(j.b,{exact:!0,path:"/home",component:L}),e&&Object(n.jsx)(j.b,{exact:!0,path:"/home/:roomId/:email",component:H}),Object(n.jsx)(j.b,{path:"/",exact:!0,component:u}),Object(n.jsx)(j.b,{path:"/register",exact:!0,component:v}),Object(n.jsx)(j.b,{path:"/sign-in",exact:!0,component:B}),Object(n.jsx)(j.b,{path:"/404",exact:!0,component:R}),Object(n.jsx)(j.a,{to:"/404"})]})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,140)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,r=s.getLCP,c=s.getTTFB;t(e),n(e),a(e),r(e),c(e)}))};t(138);i.a.render(Object(n.jsx)(o.a,{basename:"/Messanger",children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(K,{})})}),document.getElementById("root")),W()},45:function(e,s,t){},76:function(e,s,t){},77:function(e,s,t){},78:function(e,s,t){}},[[139,1,2]]]);
//# sourceMappingURL=main.f3d1e388.chunk.js.map