(function(e){function t(t){for(var a,r,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-027f6096":"02bc56b1","chunk-0f577793":"75f5badc","chunk-1da8d342":"f7535aca","chunk-29f689f0":"7b4eb977","chunk-2d0b6a7c":"7c370e8e","chunk-2d0cbcd4":"7bfe235c","chunk-2d0d5c01":"b2aaa894","chunk-2d0e5757":"e1638673","chunk-2d20885f":"45291b2d","chunk-2d21045f":"b135913d","chunk-2d212b5a":"af749a15","chunk-2d21330c":"eddcc99d","chunk-2d21b489":"3db6c93f","chunk-2d21e6fb":"a76a68cc","chunk-2d229b1d":"be417aca","chunk-2d22d9e7":"a0ee012a","chunk-2d2315aa":"9b027aab","chunk-404b745b":"1fddf68f","chunk-0b18cf92":"c5c1d7fe","chunk-4e37b6da":"8ab297e7","chunk-115f6222":"f395b936","chunk-5da86974":"03a6c26f","chunk-515c80f6":"cd1cb55e","chunk-56c79fea":"608b6aee","chunk-5d8f002c":"c99fe3cf","chunk-2d0c13a5":"87d1cc93","chunk-58c1b54c":"985dc4f3","chunk-6b2c2618":"2c7f3129","chunk-62ea029c":"653ab05b","chunk-8799e188":"bb12b043","chunk-d6d6dff4":"43e9d502","chunk-5dad673b":"3f709447","chunk-0f80c372":"c6fe1d0b","chunk-89c3a514":"0e8dbf22","chunk-75802c4a":"2a815157","chunk-a9de5dce":"3333aad8","chunk-c100e990":"883664d7","chunk-f6be564e":"42aa0269","chunk-f99ba3d6":"8747f6e4"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-027f6096":1,"chunk-0f577793":1,"chunk-1da8d342":1,"chunk-0b18cf92":1,"chunk-4e37b6da":1,"chunk-115f6222":1,"chunk-5da86974":1,"chunk-515c80f6":1,"chunk-56c79fea":1,"chunk-5d8f002c":1,"chunk-58c1b54c":1,"chunk-6b2c2618":1,"chunk-62ea029c":1,"chunk-8799e188":1,"chunk-d6d6dff4":1,"chunk-5dad673b":1,"chunk-0f80c372":1,"chunk-89c3a514":1,"chunk-75802c4a":1,"chunk-a9de5dce":1,"chunk-c100e990":1,"chunk-f6be564e":1,"chunk-f99ba3d6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-027f6096":"0c2dce7c","chunk-0f577793":"82deedac","chunk-1da8d342":"78278229","chunk-29f689f0":"31d6cfe0","chunk-2d0b6a7c":"31d6cfe0","chunk-2d0cbcd4":"31d6cfe0","chunk-2d0d5c01":"31d6cfe0","chunk-2d0e5757":"31d6cfe0","chunk-2d20885f":"31d6cfe0","chunk-2d21045f":"31d6cfe0","chunk-2d212b5a":"31d6cfe0","chunk-2d21330c":"31d6cfe0","chunk-2d21b489":"31d6cfe0","chunk-2d21e6fb":"31d6cfe0","chunk-2d229b1d":"31d6cfe0","chunk-2d22d9e7":"31d6cfe0","chunk-2d2315aa":"31d6cfe0","chunk-404b745b":"31d6cfe0","chunk-0b18cf92":"b8b93826","chunk-4e37b6da":"f2ab8425","chunk-115f6222":"b87bce9c","chunk-5da86974":"6e6d39b4","chunk-515c80f6":"3da87d1d","chunk-56c79fea":"2631e9d1","chunk-5d8f002c":"e36bf177","chunk-2d0c13a5":"31d6cfe0","chunk-58c1b54c":"ae2c2ecb","chunk-6b2c2618":"467ed781","chunk-62ea029c":"70e4f92b","chunk-8799e188":"8fb928d5","chunk-d6d6dff4":"a171fc6c","chunk-5dad673b":"31199a38","chunk-0f80c372":"b9fedbde","chunk-89c3a514":"919f9408","chunk-75802c4a":"ec0efdae","chunk-a9de5dce":"6651d6e0","chunk-c100e990":"ec0efdae","chunk-f6be564e":"ec0efdae","chunk-f99ba3d6":"78278229"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"43f0":function(e,t,n){"use strict";var a=n("9a69"),r=n.n(a);r.a},5402:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"internet-container"},["success"===e.data.type&&!0===e.data.isError?n("div",{staticClass:"internet-active",on:{click:e.closeBtn}},[e._m(0),n("div",{staticClass:"det"},[n("h1",[e._v("Oh Cool")]),n("p",[e._v("\n                    "+e._s(e.data.message)+"\n                ")])])]):e._e(),"error"===e.data.type&&!0===e.data.isError?n("div",{staticClass:"internet-inactive",on:{click:e.closeBtn}},[e._m(1),n("div",{staticClass:"det"},[n("h1",[e._v("Oh Crap")]),n("p",[e._v("\n                    "+e._s(e.data.message)+"\n                ")])])]):e._e()])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clop"},[n("img",{attrs:{src:"/image/good_internet.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clop"},[n("img",{attrs:{src:"/image/no_internet.png"}})])}],c={name:"Internet",props:{data:Object},mounted:function(){},methods:{closeBtn:function(e){this.data.isError=!1}}},o=c,u=(n("43f0"),n("2877")),i=Object(u["a"])(o,a,r,!1,null,"64b8078e",null);t["default"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wholeBody",attrs:{id:"app"}},[e._m(0),n("router-view")],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tweet"},[n("button",{attrs:{id:"tweetBtn"}},[e._v("New Tweets")])])}],o=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),u=n("bd86"),i=n("591e"),s=n("5402"),l=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={name:"app",data:function(){return{notiData:{},username:"",to:"",from:""}},watch:{$route:function(e,t){this.to=e,this.from=t}},computed:f({},Object(l["b"])(["notifications"]),{getNotifications:function(){return this.notifications}}),components:{Internet:s["default"]},methods:{handleScroll:function(){alert("scrolling")},generateContents:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i["a"].checkStorage("fansData")&&(t=i["a"].getStorage("fansData"),t[0].user_type,this.axios.get("/user/details").then((function(e){var t=e.data.data,a={email:t.email,firstname:t.firstname,lastname:t.lastname,username:t.username,club:t.team_details,avatar:t.avatar};n.getAllNotifications(),n.$storeLocalData(a)&&window.eventBus.$emit("localDataStored",!0)})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleConnectivityChange:function(e){this.notiData=!1===e?{type:"error",message:"Connect to an active network to enjoy the full extent of Matchdaydeals",isError:!0}:{type:"success",message:"Great!, now you can enjoy the full extent of Matchdaydeals",isError:!0}},checkUserActiveTime:function(){if(i["a"].checkStorage("ticket")){var e=i["a"].getStorage("ticket");e=e[0].token_generation}},getUserContributions:function(){var e=this;if(i["a"].checkStorage("fansData")){var t=localStorage.fansData;t=JSON.parse(t);var n=t[0].id;this.axios.get("/user/contributions/"+n).then((function(t){var n={followers:t.data.data.followers,followings:t.data.data.followings,reviews:t.data.data.reviews};e.$store.commit("setContributions",n)})).catch((function(e){return e}))}},getAllUnreadNotification:function(){var e=this,t=this.getNotifications;this.axios.get("/notifications/unread/1000").then((function(n){var a=n.data.data,r={data:t.data,total:a.count,first_page_url:t.first_page_url,last_page_url:t.last_page_url,next_page_url:t.next_page_url};e.$store.commit("setNotifications",r),a.count}))},getAllNotifications:function(){var e=this;this.axios.get("/notifications/all/100").then((function(t){var n=t.data.data.notifications,a={first_page_url:n.first_page_url,last_page_url:n.last_page_url,next_page_url:n.next_page_url,total:0,data:n.data};e.$store.commit("setNotifications",a),e.getAllUnreadNotification()}))}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.generateContents();case 2:window.eventBus.$on("loadUserData",(function(e){!0===e&&t.generateContents()})),setInterval((function(){t.getUserContributions()}),5e4),this.checkUserActiveTime(),this.getUserContributions(),$("#tweetBtn").click((function(){return $("html,body").animate({scrollTop:0},1200),window.eventBus.$emit("loadFeeds",!0),setTimeout((function(){$(".tweet").hide()}),1e3),!1}));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},p=h,m=(n("034f"),n("2877")),b=Object(m["a"])(p,r,c,!1,null,null,null),g=b.exports,v=(n("7514"),n("8c4f")),k=n("c0d6"),w=n("05fb"),y=function(){return n.e("chunk-2d229b1d").then(n.bind(null,"df16"))},_=function(){return n.e("chunk-2d21e6fb").then(n.bind(null,"d60c"))},S=function(){return n.e("chunk-2d21330c").then(n.bind(null,"ac2f"))},O=function(){return n.e("chunk-2d21b489").then(n.bind(null,"beb2"))},j=function(){return Promise.all([n.e("chunk-404b745b"),n.e("chunk-4e37b6da"),n.e("chunk-115f6222")]).then(n.bind(null,"eb22"))},P=function(){return Promise.all([n.e("chunk-404b745b"),n.e("chunk-4e37b6da"),n.e("chunk-5da86974")]).then(n.bind(null,"76d2"))},D=function(){return Promise.all([n.e("chunk-5d8f002c"),n.e("chunk-8799e188")]).then(n.bind(null,"e1a9"))},A=function(){return n.e("chunk-29f689f0").then(n.bind(null,"da5d"))},x=function(){return n.e("chunk-5dad673b").then(n.bind(null,"643d"))},R=function(){return n.e("chunk-2d0cbcd4").then(n.bind(null,"4ae6"))},N=function(){return n.e("chunk-2d0d5c01").then(n.bind(null,"702d"))},C=function(){return n.e("chunk-2d212b5a").then(n.bind(null,"aa26"))},E=function(){return Promise.all([n.e("chunk-5d8f002c"),n.e("chunk-d6d6dff4")]).then(n.bind(null,"e3e3"))},z=function(){return Promise.all([n.e("chunk-5d8f002c"),n.e("chunk-2d0c13a5")]).then(n.bind(null,"44c2"))},L=function(){return n.e("chunk-027f6096").then(n.bind(null,"6629"))},B=function(){return n.e("chunk-2d0b6a7c").then(n.bind(null,"1da4"))},F=function(){return Promise.all([n.e("chunk-5d8f002c"),n.e("chunk-6b2c2618"),n.e("chunk-62ea029c")]).then(n.bind(null,"49e5"))},M=function(){return Promise.all([n.e("chunk-6b2c2618"),n.e("chunk-0f80c372")]).then(n.bind(null,"8c49"))},T=function(){return Promise.all([n.e("chunk-6b2c2618"),n.e("chunk-89c3a514")]).then(n.bind(null,"13be"))},I=function(){return Promise.all([n.e("chunk-5d8f002c"),n.e("chunk-58c1b54c")]).then(n.bind(null,"91f4"))},q=function(){return n.e("chunk-2d2315aa").then(n.bind(null,"efd7"))},J=function(){return n.e("chunk-a9de5dce").then(n.bind(null,"d1c2"))},U=function(){return n.e("chunk-515c80f6").then(n.bind(null,"e985"))},Z=function(){return Promise.resolve().then(n.bind(null,"5402"))},H=function(){return n.e("chunk-2d0e5757").then(n.bind(null,"9527"))},Y=function(){return n.e("chunk-2d22d9e7").then(n.bind(null,"f7ee"))},G=function(){return n.e("chunk-2d20885f").then(n.bind(null,"a4c9"))};a["a"].use(v["a"]),a["a"].component("response-message",J),a["a"].component("notification",U),a["a"].component("offline",w["a"]),a["a"].component("internet",Z);var K=function(){return n.e("chunk-56c79fea").then(n.bind(null,"91ca"))};a["a"].component("spinner",K);var W=!1,Q={};i["a"].checkStorage("fansData")&&(Q=i["a"].getStorage("fansData"),Q=Q[0],W=!0);var V=new v["a"]({mode:"history",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/auth",name:"AuthPage",component:y,children:[{path:"login",name:"Login",component:_,meta:{title:"Login Matchdaydeals",metaTags:[{name:"description",content:"Login to access more features of Matchday.ng"}]}},{path:"callback",name:"Callback",component:S},{path:"resetpassword/:token",props:!0,name:"Reset_password",component:O}]},{path:"/",component:j,children:[{path:"/",name:"HomeDefaultPage",component:P,children:[{path:"/",name:"NewsFeed",component:D,meta:{title:"Home"}},{path:"businesstofollow",name:"BusinessToFollow",component:A,meta:{title:"Business - Matchdaydeals",metaTags:[{name:"description",content:"List of Businesses on Matchdaydeals to follow"}]}},{path:"related_deals",name:"related_deals",component:x},{path:"related_deals/:deal_id",name:"deal_page",props:!0,component:R},{path:"recommended_hotels",name:"recommended_hotels",component:N},{path:"profile/:username",props:!0,name:"Profile",meta:{title:"Profile",authRequired:!0},component:F},{path:"/:username/reviews/:tweet_slug",props:!0,name:"Review",meta:{title:"Review",authRequired:!0},component:z},{path:"notifications",props:!0,name:"Notifications",meta:{title:"Notifications",authRequired:!0},component:L},{path:"settings/",name:"Settings",meta:{authRequired:!0},component:B,children:[{path:"accountinfo",name:"AccountInfo",meta:{title:"Account Info",authRequired:!0},component:M},{path:"/passwordchange",name:"PasswordChange",meta:{title:"Password Change",authRequired:!0},component:T}]},{path:"/match/:fixture_id",props:!0,meta:{title:"Matches"},name:"Match",component:I},{path:"livematch",name:"Livematch",meta:{title:"Livematch"},component:C},{path:"livematch/:match_id",name:"LivescoresMatch",meta:{title:"livematch"},component:E},{path:"/terms",name:"Terms",meta:{title:"Terms and Conditions"},component:Y},{path:"/community_rules",name:"Community_rules",meta:{title:"Community Rules"},component:G},{path:"/r/:username",name:"Referral",component:D,meta:{referral:!0,title:"Newsfeeds"}}]}]},{path:"*",name:"404",component:q},{path:"/logout",name:"logout",component:H}]});V.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.referral}))&&(window.eventBus.$emit("openAuthModal",!0),k["a"].state.isFromReferral=!0);e.matched.some((function(e){return e.meta.title}));var a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title}));if(a){var r=k["a"].getters.getNotifications;if(r.total){var c=r.total,o=" (".concat(c,") ").concat(a.meta.title," / ").concat(k["a"].state.projectName);document.title=o}else{var u="".concat(a.meta.title," / ").concat(k["a"].state.projectName);document.title=u}}e.matched.some((function(e){return e.meta.businessRequired}))&&"2"!==Q.user_type?n({path:"/",query:{redirect:e.fullPath}}):n(),e.matched.some((function(e){return e.meta.authRequired}))?W?n():n({path:"/",query:{redirect:e.path}}):n()}));var X=V,ee=n("5efb"),te=n("ed3b"),ne=n("a071"),ae=(n("ba38"),n("a7fe")),re=n.n(ae),ce=n("bc3a"),oe=n.n(ce),ue=localStorage.ticket||null;ue=JSON.parse(ue);var ie=i["a"].fansData||null;ie=JSON.parse(ie);btoa("_$_MDD$___F53cd");var se=oe.a.create({baseURL:k["a"].state.rawURI,headers:{Authorization:"Bearer "+(null!==ue?ue[0].token:null),"Content-Type":"application/json; charset=utf-8;text/html"}});X.beforeEach((function(e,t,n){ie=!0,"/auth/login"==e.path&&ie?n("/home"):"/auth/login"===e.path||"/auth/login"===e.path||ie?n():n("/auth/login")})),se.interceptors.request.use((function(e){var t=localStorage.ticket||null;return t=JSON.parse(t),e.headers["Authorization"]="Bearer "+(null!==t?t[0].token:null),e}),(function(e){return Promise.reject(e)})),se.interceptors.response.use((function(e){return localStorage.ticket&&JSON.parse(localStorage.ticket),e}),(function(e){try{if(401!==e.response.status||"Authentication Failure."===e.response.data.message)return Promise.reject(e)}catch(t){return Promise.reject(e)}}));var le=se,de=n("9062"),fe=n.n(de),he=(n("e40d"),n("0fec")),pe=n("7d1a"),me=n.n(pe),be=n("d225"),ge=n("b0b4"),ve=function(){function e(){Object(be["a"])(this,e)}return Object(ge["a"])(e,null,[{key:"get",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"post",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.post(t,n);case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"put",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.prev=1,e.next=4,le.put(t,n);case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.prev=1,a={data:n},e.next=5,le.delete(t,a);case 5:return r=e.sent,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e["catch"](1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),ke=ve,we=function(e,t,n){var a=e.$loading.show({container:t,loader:n?n.loaderType:"spinner",width:30,height:30,opacity:n&&"undefined"!==typeof n.opacity?n.opacity:.7,color:n&&"undefined"!==typeof n.color?n.color:"#38a9ff"});return a},ye=we,_e=n("1157"),Se=n.n(_e),Oe=function(e,t){var n;if(e&&null!==e&&e.length>1){var a=e.length;return n=a>t?e.substring(0,t)+"...":e.substring(0,t),n}},je=Oe,$e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n.timestamp)t=e;else{var a=Date.parse(e);t=a/1e3}function r(e){var t=new Date(1e3*e),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=t.getFullYear(),c=a[t.getMonth()],o=t.getDate(),u=t.getHours(),i=t.getMinutes(),s=t.getSeconds(),l=o+" "+c+" "+r+" "+(!0===n.hour?u+":":"")+(!0===n.min?i+":":"")+(!0===n.sec?s:"");return l}return r(t)},Pe=$e,De=(n("f559"),function(e,t){var n=/^([A-z0-9]+) ([A-z0-9]+)$/,a=/(?:[^\@]*)[a-z\.]/,r=/^([a-zA-Z]+)$/,c=/^([a-zA-Z0-9]+)$/,o=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,u=/^([0-9]{9,16})$/,i=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,s=/(\S{7})/,l=/(\S{10,})/,d=/^(?:(?:https?|ftp|www|http):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,f=/(\S+)/,h=/(\d+)/,p=/^[1-9]\d{0,7}(?:\.\d{1,4})?$/,m=/^(\d){8,11}$/,b=/^(\d){15}$/,g=/^([A-Z]+)*$/,v=/[^a-zA-Z0-9]/;if("fulltext"===e)return!!n.test(t);if("special"===e)return!!v.test(t);if("username"===e)return!!a.test(t);if("nametext"===e)return!!r.test(t);if("upperNumberandLetter"===e)return!!g.test(t);if("password checker"===e){var k=/(?=.*[a-z])/,w=/(?=.*[A-Z])/,y=(h=/(?=.*[0-9])/,/(?=.*[!@#$%&\*])/);return k.test(t)?w.test(t)?h.test(t)?y.test(t)?!(t.length<8)||"Password must be 8 characters long":"Password must contain atleast one symbol":"Password must contain atleast one number":"Password must contain at least an upper case":"Password must contain at least a lower case"}if("longtext"===e)return!!c.test(t);if("serial"===e)return!!l.test(t);if("number"===e)return!!h.test(t);if("email"===e)return!!o.test(t);if("phone"===e){var _=t.startsWith("+234");return!0===_&&(u=/[+^]([0-9]{9,16})$/),!!u.test(t)}return"price"===e?!!p.test(t):"password"===e?!!i.test(t):"otp"===e?!!s.test(t):"link"===e?!!d.test(t):"general"===e?!!f.test(t):"account_number"===e?!!m.test(t):"bvn"===e?!!b.test(t):void 0}),Ae=De,xe=function(e){var t=localStorage.fansData;t=JSON.parse(t);var n,a=t[0];function r(){var e=JSON.parse(localStorage.fansData);k["a"].commit("setFansData",e),k["a"].state.user.fullname=e[0].firstname+" "+e[0].lastname,k["a"].state.user.username=e[0].username,k["a"].state.user.email=e[0].email,k["a"].state.user.club=e[0].club,k["a"].state.user.id=e[0].id,k["a"].state.user.user_type=e[0].user_type,k["a"].state.user.avatar=e[0].avatar}if(n={id:a.id,username:void 0!==e.username?e.username:a.username,email:void 0!==e.email?e.email:a.email,firstname:void 0!==e.firstname?e.firstname:"",lastname:void 0!==e.lastname?e.lastname:"",club:e.club.length>0?e.club:"",avatar:void 0!==e.avatar?e.avatar:"",user_type:a.user_type},i["a"].clearStorage("fansData")&&i["a"].setStorage("fansData",n))return r(),!0},Re=xe,Ne=(n("a481"),function(e){var t=/(((https?:\/\/)|(www\.))[^\s]+)/g;null!==e&&""!==e||(e="");var n=e.replace(t,(function(e,t,n){var a="www."==n?"http://"+e:e;return'<a href="'+a+'" target="_blank">'+e+"</a>"}));return n}),Ce=Ne;a["a"].use(ee["a"]),a["a"].use(te["a"]),a["a"].use(ne["a"]),window.eventBus=new a["a"],a["a"].config.productionTip=!1;var Ee=window.screen.height-300;Ee=Ee>0?Ee/5:0;var ze=window.screen.width-400;ze=ze>0?ze/2:0,a["a"].use(re.a,le),a["a"].use(fe.a),he["a"].addLocale(me.a);var Le=new he["a"]("en-US");a["a"].prototype.$api=ke,a["a"].prototype.$loader=ye,a["a"].prototype.$Jquery=Se.a,a["a"].prototype.$substring=je,a["a"].prototype.$timeAgo=Le,a["a"].prototype.$getDateYear=Pe,a["a"].prototype.$validate=Ae,a["a"].prototype.$storeLocalData=Re,a["a"].prototype.$urlify=Ce,new a["a"]({router:X,store:k["a"],mounted:function(){window.eventBus.$on("logout",(function(e){!0===e&&(k["a"].commit("logout"),window.location="/")}))},render:function(e){return e(g)}}).$mount("#app")},"591e":function(e,t,n){"use strict";var a=n("7618"),r={isLocalStorage:function(){try{return"localStorage"in window&&null!==window["localStorage"]}catch(e){return!1}},getElements:function(e,t){return Object(a["a"])(e)===t?[e]:document.querySelectorAll(e)},showElements:function(e,t){document.querySelectorAll(t).innerHtml=e},getStorage:function(e){if(0!=r.isLocalStorage()){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}},setStorage:function(e,t){if(0!=r.isLocalStorage()){var n=r.getStorage(e);return!(n.indexOf(e)>-1||!e)&&(n.push(t),localStorage.setItem(e,JSON.stringify(n)),!0)}},clearStorage:function(e){return localStorage.removeItem(e),!0},checkStorage:function(e){return null!==localStorage.getItem(e)}};t["a"]=r},"64a9":function(e,t,n){},"9a69":function(e,t,n){},c0d6:function(e,t,n){"use strict";n("96cf");var a=n("3b8d"),r=n("2b0e"),c=n("2f62"),o=n("591e");r["a"].use(c["a"]);var u=function(){return{user:{fullname:"",username:"",email:"",club:"",avatar:"",id:"",user_type:""},fansData:{},staticImage:"https://fela.matchday.ng//storage/uploads/avatar/avatar.jpg/",rawURI:"http://fela.matchday.africa/api/",homeURI:"https://fela.matchday.ng",projectName:"MatchDayNg",callbackUrl:"https://test.matchdaydeals.com/auth/callback",localhost:"http://localhost:8080",contributions:{},selectedLiveFeed:{},selectedImageFeed:{},selectedReview:{},notifications:{},isFromReferral:!1}};t["a"]=new c["a"].Store({state:u(),mutations:{resetState:function(e){Object.assign(e,u())},setFansData:function(e,t){e.fansData=t},logout:function(){o["a"].clearStorage("ticket"),o["a"].clearStorage("fansData")},setContributions:function(e,t){e.contributions=t},selectedFeed:function(e,t){e.selectedLiveFeed=t},selectedImageFeed:function(e,t){e.selectedImageFeed=t},selectedReview:function(e,t){e.selectedReview=t},setNotifications:function(e,t){e.notifications=t}},actions:{setFansData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=o["a"].getStorage("fansData"),n("setFansData",a),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getFansData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=n.fansData,e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{getNotifications:function(e){return e.notifications}}})}});
//# sourceMappingURL=app.669ff00b.js.map