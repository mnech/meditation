"use strict";(self.webpackChunkmeditation=self.webpackChunkmeditation||[]).push([[885],{6332:function(r,n,e){e.d(n,{Z:function(){return a}});var t=e.p+"static/media/error.a017f0055e104345661e.png",u=e(184);var a=function(){return(0,u.jsxs)("div",{className:"error",children:[(0,u.jsx)("img",{src:t,alt:"error",className:"error__img"}),(0,u.jsx)("p",{className:"error__text",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})]})}},8914:function(r,n,e){var t=e(5861),u=e(885),a=e(7757),s=e.n(a),c=e(2791);n.Z=function(r){var n=(0,c.useState)("loading"),e=(0,u.Z)(n,2),a=e[0],o=e[1],i=function(){var n=(0,t.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o("loading"),n.prev=1,n.next=4,r();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),o("error");case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}();return[i,a,o]}},9975:function(r,n,e){e.r(n),e.d(n,{default:function(){return l}});var t=e(885),u=e(3504),a=e(2791),s=e(7606),c=e(8914),o=e(4960),i=e(5402);var f=e.p+"static/media/done.6ce722dbf869e926411368b5ace35ca4.svg";var p=e.p+"static/media/arrow.7ae3534cb807217aac0c976c733cd68b.svg",d=e(184);var l=function(){var r=(0,a.useState)([]),n=(0,t.Z)(r,2),e=n[0],l=n[1],m=(0,a.useContext)(i.V).currentUser,h=(0,c.Z)((function(){return(0,s._M)(m).then(Z)})),v=(0,t.Z)(h,3),x=v[0],b=v[1],w=v[2],Z=function(r){r?(l(r),w("confirmed")):w("error")};(0,a.useEffect)((function(){x()}),[]);var k=function(r){return r?(0,d.jsx)("img",{src:f,alt:"done",className:"lesson__done"}):null},_=function(r,n){return r-1>n?(0,d.jsx)("img",{src:p,alt:"arrow",className:"lessons__arrow"}):null},g=(0,a.useMemo)((function(){return(0,o.Z)(b,(function(){return function(r){var n=r.length,e=r.map((function(r,e){var t=r.id,a=r.name,s=r.thumbnail,c=r.complete;return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"lesson",children:(0,d.jsxs)(u.rU,{to:"/lessons/".concat(t),children:[(0,d.jsx)("img",{src:s,alt:a,className:"lesson__img"}),(0,d.jsx)("div",{className:"lesson__name",children:a}),k(c)]})}),_(n,e)]},t)}));return(0,d.jsx)("div",{className:"lessons__list",children:e})}(e)}))}),[b]);return(0,d.jsx)("div",{className:"lessons",children:g})}},7606:function(r,n,e){e.d(n,{Oj:function(){return E},Y1:function(){return J},_M:function(){return Z},d7:function(){return k},l9:function(){return h},mr:function(){return _},uM:function(){return g},x4:function(){return v}});var t=e(1413),u=e(5861),a=e(7757),s=e.n(a),c=e(2426),o=e(8112),i=e(9062),f=e(4453),p=(0,c.ZF)({apiKey:"AIzaSyBCOUyg80uA_aj8mOTssPlO10HCxPVKCB8",authDomain:"meditation-b02d2.firebaseapp.com",projectId:"meditation-b02d2",storageBucket:"meditation-b02d2.appspot.com",messagingSenderId:"69484463235",appId:"1:69484463235:web:12f03ae9d88e84728587b6"}),d=(0,i.ad)(p),l=(0,o.v0)(),m=(0,f.cF)(),h=function(){var r=(0,u.Z)(s().mark((function r(n,e,t){var u;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.Xb)(l,e,t);case 2:return u=r.sent,r.next=5,(0,i.pl)((0,i.JU)(d,"users",u.user.uid),{name:n,email:e,password:t,timeStamp:(0,i.Bt)()});case 5:return r.abrupt("return",u);case 6:case"end":return r.stop()}}),r)})));return function(n,e,t){return r.apply(this,arguments)}}(),v=function(){var r=(0,u.Z)(s().mark((function r(n,e){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.e5)(l,n,e);case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(n,e){return r.apply(this,arguments)}}(),x=function(r){var n=r.data();return{id:r.id,number:n.number,name:n.name,thumbnail:n.thumbnail,complete:n.complete}},b=function(){var r=(0,u.Z)(s().mark((function r(n){var e,t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[],t=(0,i.IO)((0,i.hJ)(d,"user_progress"),(0,i.ar)("userId","==",n)),r.next=4,(0,i.PL)(t);case 4:return r.sent.forEach((function(r){e.push(r.data().lessonId)})),r.abrupt("return",e);case 7:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),w=function(){var r=(0,u.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=[],r.next=3,(0,i.PL)((0,i.hJ)(d,"lessons"));case 3:return r.sent.forEach((function(r){n.push(x(r))})),r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),Z=function(){var r=(0,u.Z)(s().mark((function r(n){var e,u,a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w();case 2:return e=r.sent,r.next=5,b(n);case 5:return u=r.sent,(a=e.map((function(r){return u.includes(r.id)?(0,t.Z)((0,t.Z)({},r),{},{complete:!0}):r}))).sort((function(r,n){return r.number>n.number?1:-1})),r.abrupt("return",a);case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),k=function(){var r=(0,u.Z)(s().mark((function r(n){var e,t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=(0,i.JU)(d,"lessons",n),r.next=3,(0,i.QT)(e);case 3:return t=r.sent,r.abrupt("return",t.data());case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),_=function(){var r=(0,u.Z)(s().mark((function r(n,e,t){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,(0,i.ET)((0,i.hJ)(d,"user_progress"),{userId:n,lessonId:e,complete:!0,timeStamp:(0,i.Bt)()});case 4:case"end":return r.stop()}}),r)})));return function(n,e,t){return r.apply(this,arguments)}}(),g=function(){var r=(0,u.Z)(s().mark((function r(n,e){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i.ET)((0,i.hJ)(d,"meditation_time"),{userId:n,seconds:e,timeStamp:(0,i.Bt)()});case 2:case"end":return r.stop()}}),r)})));return function(n,e){return r.apply(this,arguments)}}(),j=function(r){return(0,i.JU)(d,"users",r)},y=function(){var r=(0,u.Z)(s().mark((function r(n,e){var t,u;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=(0,f.iH)(m,e),r.next=3,(0,f.KV)(t,n).then((function(r){return(0,f.Jt)(r.ref)})).catch((function(){return""}));case 3:return u=r.sent,r.abrupt("return",u);case 5:case"end":return r.stop()}}),r)})));return function(n,e){return r.apply(this,arguments)}}(),I=function(){var r=(0,u.Z)(s().mark((function r(n){var e,t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=j(n),r.next=3,(0,i.QT)(e);case 3:return t=r.sent,r.abrupt("return",t.data());case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),N=function(){var r=(0,u.Z)(s().mark((function r(n){var e,t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=0,t=(0,i.IO)((0,i.hJ)(d,"meditation_time"),(0,i.ar)("userId","==",n)),r.next=4,(0,i.PL)(t);case 4:return r.sent.forEach((function(r){e+=r.data().seconds})),e=Math.floor(e/60),r.abrupt("return",e);case 8:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),J=function(){var r=(0,u.Z)(s().mark((function r(n){var e,u;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I(n);case 2:return e=r.sent,r.next=5,N(n);case 5:return u=r.sent,r.abrupt("return",(0,t.Z)((0,t.Z)({},e),{},{time:u}));case 7:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),E=function(){var r=(0,u.Z)(s().mark((function r(n,e,t){var u,a,c,o,p;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,I(n);case 3:return u=r.sent,a=u.pathPhoto,c=j(n),r.next=8,y(e,t);case 8:if(o=r.sent){r.next=11;break}return r.abrupt("return","");case 11:return r.next=13,(0,i.r7)(c,{photo:o,pathPhoto:t});case 13:if(!a){r.next=17;break}return p=(0,f.iH)(m,a),r.next=17,(0,f.oq)(p);case 17:return r.abrupt("return",o);case 20:return r.prev=20,r.t0=r.catch(0),r.abrupt("return","");case 23:case"end":return r.stop()}}),r,null,[[0,20]])})));return function(n,e,t){return r.apply(this,arguments)}}()},4960:function(r,n,e){var t=e(3394),u=e(6332),a=e(184);n.Z=function(r,n,e){switch(r){case"loading":return(0,a.jsx)(t.Z,{});case"confirmed":return(0,a.jsx)(n,{data:e});case"error":return(0,a.jsx)(u.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=885.e16384eb.chunk.js.map