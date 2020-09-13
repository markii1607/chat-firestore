(this["webpackJsonpchat-firestore"]=this["webpackJsonpchat-firestore"]||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),i=(a(39),a(40),a(13)),u=a(2),s=a(10),l=(a(41),a(42),a(4)),m=a(6),f=a.n(m),d=a(14),p=a(8),h=a.n(p),E="USER_LOGIN",b="USER_LOGOUT",g="GET_REALTIME_USERS",v="GET_REALTIME_MESSAGES",O=a(12),S=function(e){var t=Object(l.c)((function(e){return e.auth})),a=Object(l.b)();return c.a.createElement("header",{className:"header"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"logo"},"Web Messenger"),t.authenticated?null:c.a.createElement("ul",{className:"leftMenu"},c.a.createElement("li",null,c.a.createElement(i.c,{to:"/login"},"Login")),c.a.createElement("li",null,c.a.createElement(i.c,{to:"/signup"},"Sign up")))),c.a.createElement("div",{style:{margin:"20px 0",color:"#fff",fontWeight:"bold"}},t.authenticated?"Hi ".concat(t.firstName," ").concat(t.lastName):""),c.a.createElement("ul",{className:"menu"},t.authenticated?c.a.createElement("li",null,c.a.createElement(i.b,{to:"#",onClick:function(){var e;a((e=t.uid,function(){var t=Object(d.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"".concat(b,"_REQUEST")}),Object(p.firestore)().collection("users").doc(e).update({isOnline:!1}).then((function(){Object(p.auth)().signOut().then((function(){localStorage.clear(),a({type:"".concat(b,"_SUCCESS")})})).catch((function(e){console.log(e),a({type:"".concat(b,"_FAILURE")})}))})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}},"Logout")):null))},j=function(e){return c.a.createElement("div",null,c.a.createElement(S,null),e.children)},y=function(e){var t=e.user,a=e.onClick;return c.a.createElement("div",{onClick:function(){return a(t)},className:"displayName"},c.a.createElement("div",{className:"displayPic"},c.a.createElement("img",{src:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg",alt:""})),c.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"space-between",margin:"0 10px"}},c.a.createElement("span",{style:{fontWeight:500}},t.firstName," ",t.lastName),c.a.createElement("span",{className:t.isOnline?"onlineStatus":"onlineStatus off"})))},_=function(e){var t,a=Object(l.b)(),r=Object(l.c)((function(e){return e.auth})),o=Object(l.c)((function(e){return e.user})),i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],h=u[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),S=b[0],_=b[1],N=Object(n.useState)(""),w=Object(s.a)(N,2),U=w[0],C=w[1],k=Object(n.useState)(null),I=Object(s.a)(k,2),A=I[0],R=I[1];Object(n.useEffect)((function(){var e;t=a((e=r.uid,function(){var t=Object(d.a)(f.a.mark((function t(a){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"".concat(g,"_REQUEST")}),n=Object(p.firestore)(),c=n.collection("users").onSnapshot((function(t){var n=[];t.forEach((function(t){t.data().uid!=e&&n.push(t.data())})),a({type:"".concat(g,"_SUCCESS"),payload:{users:n}})})),t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(e){return e})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){return function(){t.then((function(e){e()})).catch((function(e){console.log(e)}))}}),[]);var x=function(e){h(!0),_("".concat(e.firstName," ").concat(e.lastName)),R(e.uid),console.log(e),a(function(e){return function(){var t=Object(d.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(p.firestore)().collection("conversations").where("user_uid_1","in",[e.uid_1,e.uid_2]).orderBy("createdAt","asc").onSnapshot((function(t){var n=[];t.forEach((function(t){(t.data().user_uid_1==e.uid_1&&t.data().user_uid_2==e.uid_2||t.data().user_uid_1==e.uid_2&&t.data().user_uid_2==e.uid_1)&&n.push(t.data())})),n.length>0?a({type:v,payload:{conversations:n}}):a({type:"".concat(v,"_FAILURE"),payload:{conversations:[]}}),console.log(n)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({uid_1:r.uid,uid_2:e.uid}))};return c.a.createElement(j,null,c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"listOfUsers"},o.users.length>0?o.users.map((function(e){return c.a.createElement(y,{onClick:x,key:e.uid,user:e})})):null),c.a.createElement("div",{className:"chatArea"},c.a.createElement("div",{className:"chatHeader"},m?S:""),c.a.createElement("div",{className:"messageSections"},m?o.conversations.map((function(e){return c.a.createElement("div",{key:e.uid,style:{textAlign:e.user_uid_1==r.uid?"right":"left"}},c.a.createElement("p",{className:"messageStyle"},e.message))})):null),m?c.a.createElement("div",{className:"chatControls"},c.a.createElement("textarea",{value:U,onChange:function(e){return C(e.target.value)},placeholder:"Write message..."}),c.a.createElement("button",{onClick:function(e){var t={user_uid_1:r.uid,user_uid_2:A,message:U};""!==U&&a(function(e){return function(){var t=Object(d.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(p.firestore)().collection("conversations").add(Object(O.a)({},e,{isView:!1,createdAt:new Date})).then((function(e){})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){C("")}))}},"Send")):null)))},N=(a(59),function(e){return c.a.createElement("div",{className:"card"},e.children)}),w=(a(60),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),h=m[0],b=m[1],g=Object(l.b)();return Object(l.c)((function(e){return e.auth})).authenticated?c.a.createElement(u.a,{to:"/"}):c.a.createElement(j,null,c.a.createElement("div",{className:"loginContainer"},c.a.createElement(N,null,c.a.createElement("form",{onSubmit:function(e){var t;(e.preventDefault(),""!=r)?""!=h?g((t={email:r,password:h},function(){var e=Object(d.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"".concat(E,"_REQUEST")}),Object(p.auth)().signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e),Object(p.firestore)().collection("users").doc(e.user.uid).update({isOnline:!0}).then((function(){var t=e.user.displayName.split(" "),n={firstName:t[0],lastName:t[1],uid:e.user.uid,email:e.user.email};localStorage.setItem("user",JSON.stringify(n)),a({type:"".concat(E,"_SUCCESS"),payload:{user:n}})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e),a({type:"".concat(E,"_FAILURE"),payload:{error:e}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):alert("Password is required"):alert("Email is required")}},c.a.createElement("input",{name:"email",type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Email"}),c.a.createElement("input",{name:"password",type:"password",value:h,onChange:function(e){return b(e.target.value)},placeholder:"Password"}),c.a.createElement("div",null,c.a.createElement("button",null,"Login"))))))}),U=(a(61),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),h=m[0],b=m[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),O=v[0],S=v[1],y=Object(n.useState)(""),_=Object(s.a)(y,2),w=_[0],U=_[1],C=Object(l.b)();return Object(l.c)((function(e){return e.auth})).authenticated?c.a.createElement(u.a,{to:"/"}):c.a.createElement(j,null,c.a.createElement("div",{className:"registerContainer"},c.a.createElement(N,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),C(function(e){return function(){var t=Object(d.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(p.firestore)(),a({type:"".concat(E,"_REQUEST")}),Object(p.auth)().createUserWithEmailAndPassword(e.email,e.password).then((function(t){console.log(t);var c=Object(p.auth)().currentUser,r="".concat(e.firstName," ").concat(e.lastName);c.updateProfile({displayName:r}).then((function(){n.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,uid:t.user.uid,createdAt:new Date,isOnline:!0}).then((function(){var n={firstName:e.firstName,lastName:e.lastName,uid:t.user.uid,email:e.email};localStorage.setItem("user",JSON.stringify(n)),console.log("User Logged in successful"),a({type:"".concat(E,"_SUCCESS"),payload:{user:n}})})).catch((function(e){console.log(e),a({type:"".concat(E,"_FAILURE"),payload:{error:e}})}))}))})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({firstName:r,lastName:h,email:O,password:w}))}},c.a.createElement("h3",null,"Sign Up"),c.a.createElement("input",{name:"fname",type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"First Name"}),c.a.createElement("input",{name:"lname",type:"text",value:h,onChange:function(e){return b(e.target.value)},placeholder:"Last Name"}),c.a.createElement("input",{name:"email",type:"text",value:O,onChange:function(e){return S(e.target.value)},placeholder:"Email"}),c.a.createElement("input",{name:"password",type:"password",value:w,onChange:function(e){return U(e.target.value)},placeholder:"Password"}),c.a.createElement("div",null,c.a.createElement("button",null,"Sign Up"))))))}),C=a(33),k=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},a,{component:function(e){return(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null)?c.a.createElement(t,e):c.a.createElement(u.a,{to:"/login"})}}))};var I=function(){var e=Object(l.c)((function(e){return e.auth})),t=Object(l.b)();return Object(n.useEffect)((function(){e.authenticated||t(function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,t(a?{type:"".concat(E,"_SUCCESS"),payload:{user:a}}:{type:"".concat(E,"_FAILURE"),payload:{error:"Login again please"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(k,{path:"/",exact:!0,component:_}),c.a.createElement(u.b,{path:"/login",component:w}),c.a.createElement(u.b,{path:"/signup",component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(17),R={firstName:"",lastName:"",email:"",authenticating:!1,authenticated:!1,error:null},x={users:[],conversations:[]},L=Object(A.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"".concat(E,"_REQUEST"):e=Object(O.a)({},e,{authenticating:!0});break;case"".concat(E,"_SUCCESS"):e=Object(O.a)({},e,{},t.payload.user,{authenticated:!0,authenticating:!1});break;case"".concat(E,"_FAILURE"):e=Object(O.a)({},e,{error:t.payload.error,authenticated:!1,authenticating:!1});break;case"".concat(b,"_REQUEST"):break;case"".concat(b,"_SUCCESS"):e=Object(O.a)({},R);break;case"".concat(b,"_FAILURE"):e=Object(O.a)({},e,{error:t.payload.error})}return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(g,"_REQUEST"):break;case"".concat(g,"_SUCCESS"):e=Object(O.a)({},e,{users:t.payload.users});break;case v:e=Object(O.a)({},e,{conversations:t.payload.conversations})}return e}}),T=a(32),F=Object(A.d)(L,Object(A.a)(T.a));h.a.initializeApp({apiKey:"AIzaSyCWQnOw7DZez4YLRTI4Mr-VU1uFhwhFIA4",authDomain:"chat-firestore-160408.firebaseapp.com",databaseURL:"https://chat-firestore-160408.firebaseio.com",projectId:"chat-firestore-160408",storageBucket:"chat-firestore-160408.appspot.com",messagingSenderId:"966742168017",appId:"1:966742168017:web:0b9bcb2a10d8df285ad0f0"}),window.store=F,o.a.render(c.a.createElement(l.a,{store:F},c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.0af95a40.chunk.js.map