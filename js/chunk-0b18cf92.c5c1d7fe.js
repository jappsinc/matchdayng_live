(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b18cf92"],{"2f25":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("44d8"),i=(0,a.twitterEmbedComponent)({embedComponent:function(t){for(var e,s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];return(e=t.widgets).createMoment.apply(e,a)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),r=i;e.default=r},"38de":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("searchMatch"),s("postReview")],1)},i=[],r=(s("96cf"),s("3b8d")),n=s("7fe6"),o=s("1ebd"),l={data:function(){return{}},components:{searchMatch:n["a"],postReview:o["a"]},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},c=l,d=s("2877"),u=Object(d["a"])(c,a,i,!1,null,null,null);e["a"]=u.exports},"44d8":function(t,e,s){"use strict";var a=0;function i(t){if(!a){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e),a=new Promise((function(t,s){e.onload=function(){t(window.twttr)}}))}return a}var r={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object},n=function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},r,t.props),mounted:function(){var e,s=this;e="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:i("//platform.twitter.com/widgets.js")).then((function(a){return t.embedComponent(a,e,s.$el,s.options)})).then((function(t){s.isAvailable=void 0!==t,s.isLoaded=!0}))},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass},this.$props.errorMessage);return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}};t.exports={addPlatformScript:i,twitterEmbedComponent:n}},7397:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return r.default}});var a=n(s("8fea")),i=n(s("2f25")),r=n(s("f088"));function n(t){return t&&t.__esModule?t:{default:t}}},"7db5":function(t,e,s){},"8fea":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("44d8"),i=(0,a.twitterEmbedComponent)({embedComponent:function(t){for(var e,s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];return(e=t.widgets).createTweetEmbed.apply(e,a)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),r=i;e.default=r},b782:function(t,e,s){"use strict";var a=s("7db5"),i=s.n(a);i.a},bcad:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header-spacer",staticStyle:{height:"120px !important"}}),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("leftSideInfo"),s("allDeals")],1)])])},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 d-none d-sm-none d-md-block"},[s("div",{staticClass:"ui-block"},[s("div",{staticClass:"friend-item"},[t._m(0),!0===t.signedIn?s("div",{staticClass:"friend-item-content"},[s("div",{staticClass:"friend-avatar"},[s("div",{staticClass:"author-thumb"},[s("img",{attrs:{src:t.getAvatarLocal(),alt:"author"}})]),s("div",{staticClass:"author-content"},[s("router-link",{staticClass:"h5 author-name",attrs:{to:"/profile/"+t.$store.state.user.username}},[t._v("@"+t._s(t.$store.state.user.username))]),null===t.$store.state.user.club?s("div",{staticClass:"country"},[t._v("No Club")]):s("div",{staticClass:"country"},[t._v(t._s(t.$store.state.user.club))])],1)]),s("div",{staticClass:"swiper-container",attrs:{"data-slide":"fade"}},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"friend-count",attrs:{"data-swiper-parallax":"-500"}},[s("a",{staticClass:"friend-count-item",attrs:{href:"#"}},[s("div",{staticClass:"h6"},[t._v(t._s(t.getUserContributions.reviews))]),s("div",{staticClass:"title"},[t._v("Reviews")])]),s("a",{staticClass:"friend-count-item",attrs:{href:"#"}},[s("div",{staticClass:"h6"},[t._v(t._s(t.getUserContributions.followings))]),s("div",{staticClass:"title"},[t._v("Following")])]),s("a",{staticClass:"friend-count-item",attrs:{href:"#"}},[s("div",{staticClass:"h6"},[t._v(t._s(t.getUserContributions.followers))]),s("div",{staticClass:"title"},[t._v("Followers")])])])])])])]):s("div",{staticClass:"widget w-create-fav-page"},[s("div",{staticClass:"icons-block"},[s("svg",{staticClass:"olymp-star-icon left-menu-icon",attrs:{"data-toggle":"tooltip","data-placement":"right","data-original-title":"FAV PAGE"}},[s("use",{attrs:{"xlink:href":"/svg-icons/sprites/icons.svg#olymp-star-icon"}})]),s("a",{staticClass:"more",attrs:{href:"#"}},[s("svg",{staticClass:"olymp-three-dots-icon"},[s("use",{attrs:{"xlink:href":"/svg-icons/sprites/icons.svg#olymp-three-dots-icon"}})])])]),t._m(1)])])]),!0===t.signedIn&&!0===t.showReviewBox&&"1"!==t.getUserDetails.user_type?s("div",{staticClass:"ui-block"},[t._m(2),s("div",{staticClass:"ui-block-content"},[s("ul",{staticClass:"widget w-featured-topics"},[s("li",[s("div",{staticClass:"content"},[s("a",{staticClass:"h6 title",attrs:{href:"javascript:;"},on:{click:function(e){return t.openDealSelectBox()}}},[s("h5",{staticClass:"dd"},[s("svg",{staticClass:"olymp-dropdown-arrow-icon",staticStyle:{fill:"#00AEEF"}},[s("use",{attrs:{"xlink:href":"/svg-icons/sprites/icons.svg#olymp-football-icon"}})]),s("span",[t._v("Post Deal")])])])])])])])]):t._e(),s("div",{staticClass:"ui-block",staticStyle:{"max-height":"400px",overflow:"auto"}},[s("div",{staticClass:"ui-block-content"},[s("Timeline",{attrs:{id:"matchdaydeals",sourceType:"profile",options:{tweetLimit:"8"}}})],1)]),s("div",{staticClass:"ui-block"},[s("div",{staticClass:"ui-block-content"},[s("div",{staticClass:"widget w-about"},[s("a",{staticClass:"logo",attrs:{href:"/"}},[t._m(3),s("div",{staticClass:"title-block"},[s("h6",{staticClass:"logo-title"},[t._v(t._s(t.projectName))]),s("div",{staticClass:"sub-title"},[t._v("SOCIAL NETWORK FOR FOOTBALL FANS")])])]),s("p",[t._v("Matchdaydeals is everything around a matchday and the deals available. From travel, to hotel bookings, to restaurants, to transport, to betting, to car rentals. It is the go-to site for football fans looking for deals around matchday.")]),t._m(4)])])]),s("reviewBox")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"friend-header-thumb"},[s("img",{attrs:{src:"/image/friend-groups-bg.png",alt:"friend"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("span",[t._v("Be like them and")]),s("h3",{staticClass:"title"},[t._v("Create your own Match Page!")]),s("a",{staticClass:"btn btn-bg-secondary btn-sm",attrs:{href:"#","data-toggle":"modal","data-target":"#registration-login-form-popup"}},[t._v("Start Now!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui-block-title"},[s("h6",{staticClass:"title"},[t._v("Post A Deal")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:"/image/llogo.png",width:"100",alt:"Olympus"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"socials"},[s("li",[s("a",{attrs:{href:"https://www.instagram.com/matchdaydeals",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram",attrs:{"aria-hidden":"true"}})])]),s("li",[s("a",{attrs:{href:"https://www.facebook.com/matchdaydeals",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-square",attrs:{"aria-hidden":"true"}})])]),s("li",[s("a",{attrs:{href:"https://www.twitter.com/matchdaydeals",target:"_blank"}},[s("i",{staticClass:"fab fa-twitter",attrs:{"aria-hidden":"true"}})])])])}],o=(s("7f7f"),s("38de")),l=s("7397"),c=s("4dc8"),d=s("2f62"),u={projectName:"",userData:{},id:null,avatar:"",signedIn:!1,showReviewBox:!1,tweet:0,userContributions:{}},f={name:"LeftSideBar",data:function(){return u},components:{reviewBox:o["a"],Timeline:l["Timeline"]},computed:Object(d["b"])({getAvatar:function(t){return t.user.avatar},getUsername:function(t){return t.user.username},getUserDetails:function(t){return t.user},getUserContributions:function(t){return t.contributions}}),methods:{openDealSelectBox:function(){$("#deal-select-box").modal("show")},setMatchId:function(t){var e=this.$route.params.fixture_id;window.eventBus.$emit("matchID",e),window.eventBus.$emit("review_option",t)},checkUserData:function(t){""===t&&"undefined"===t||(this.userData=JSON.parse(t),this.signedIn=!0)},currentPage:function(){var t=this.$route.name;this.showReviewBox="HomeDefaultPage"!==t},getAvatarLocal:function(){return Object(c["a"])({state:{av:this.getAvatar,us:this.getUsername}})}},mounted:function(){this.currentPage();var t=localStorage.fansData;t&&this.checkUserData(t),this.projectName=this.$store.state.projectName},watch:{showReviewBox:function(){var t=this.$route.name;"HomeDefaultPage"===t&&(this.showReviewBox=!1)}}},p=f,v=(s("b782"),s("2877")),h=Object(v["a"])(p,r,n,!1,null,null,null),m=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"},[s("div",{ref:"allDeals",staticClass:"clients-grid"},[t.allDeals.length>0?s("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"row sorting-container",attrs:{"transition-duration":"0.3s","item-selector":".sorting-item",id:"clients-grid-1"}},t._l(t.allDeals,(function(e,a){return s("div",{key:a,staticClass:"col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item worlds family politics"},[s("div",{staticClass:"ui-block",staticStyle:{position:"relative"}},[s("div",{staticClass:"cover-story",attrs:{id:"cover_story_"+a}}),s("article",{staticClass:"hentry post has-post-thumbnail"},[s("div",{staticClass:"post__author author vcard inline-items"},[null!==e.business_logo?s("img",{attrs:{src:e.business_logo,alt:"author"}}):t._e(),s("div",{staticClass:"author-date"},[s("a",{staticClass:"h6 post__author-name fn",attrs:{href:"#"}},[t._v(" "+t._s(null!==e.business_name?e.business_name:e.business_username)+" ")]),s("div",{staticClass:"post__date"},[s("time",{staticClass:"published",attrs:{datetime:"2004-07-24T18:18"}},[t._v("\n                                        "+t._s(t.dateString(e.offer_deal_date))+"\n                                    ")])])]),s("div",{staticClass:"more"},[s("svg",{staticClass:"olymp-three-dots-icon"},[s("use",{attrs:{"xlink:href":"/svg-icons/sprites/icons.svg#olymp-three-dots-icon"}})]),s("ul",{staticClass:"more-dropdown"},[s("li",[s("a",{attrs:{"data-toggle":"modal","data-target":"#deals-my-poll-update",href:"javascript:;"},on:{click:function(s){return t.updateDeal(e.offer_id,a)}}},[t._v("Edit Deal")])]),s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.deleteDeal(e.offer_id,a)}}},[t._v("Delete Deal")])])])]),e.fixture_home_team?s("div",{staticStyle:{width:"100%","margin-top":"10px"}},[s("code",{staticClass:"bg-blue-light st"},[t._v(" "+t._s(e.fixture_home_team)+" ")]),s("code",{staticClass:"bg-breez-light st"},[t._v(" "+t._s(e.fixture_away_team)+" ")])]):t._e()]),s("h4",{staticStyle:{padding:"0 20px","text-decoration":"underline","text-transform":"capitalize"}},[t._v(t._s(e.offer_name))]),s("p",[e.offer_link?s("span",{staticStyle:{width:"100%"}},[s("a",{attrs:{href:e.offer_link}},[t._v(t._s(e.offer_link))]),s("br"),s("br")]):t._e(),t._v("\n                            "+t._s(null!==e.offer_description?t.$urlify(e.offer_description):"")+"\n                        ")]),s("div",{staticClass:"post-thumb"},[e.offer_file?s("img",{attrs:{src:e.offer_file,alt:"photo"}}):t._e()])])])])})),0):s("div",{staticClass:"col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 offset-3 text-center"},[t._m(0),t._m(1)])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"space"},[s("div",{staticClass:"space-sm"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui-block"},[s("div",{staticClass:"ui-block-content text-center",staticStyle:{padding:"50px 23px","border-top":"solid 4px #08ddc1"}},[s("h4",{staticClass:"title",staticStyle:{"font-weight":"bold"}},[t._v("Opps! no deal yet")]),s("p",[t._v("It appears you have not created any deal yet")])])])}],w=s("591e"),b={name:"allDeals.vue",data:function(){return{allDeals:{},first_page_url:"",current_page:"",last_page:"",from:"",next_page_url:"",to:""}},mounted:function(){var t=this;this.getAllDeals(),window.eventBus.$on("dealsFeed",(function(e){!0===e&&t.getAllDeals()})),$("title").html("Deals | "+this.$store.state.projectName)},methods:{updateDeal:function(t,e){var s={offer_id:t,index:e,deal:this.allDeals[e]};window.eventBus.$emit("dealsUpdateMatchID",s)},deleteDeal:function(t,e){var s=this;$("#cover_story_"+e).show();var a=new FormData;a.append("offer_id",t),this.axios({method:"post",url:"deals/delete",data:a,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(t){return s.allDeals.splice(s.allDeals.indexOf(e),1),t})).catch((function(t){return t}))},dateString:function(t){return this.$getDateYear(t,{timestamp:!0})},showLoading:function(){var t=this.$loader(this,this.$refs.allDeals,{loaderType:"spinner"});return t},getAllDeals:function(){var t=this;console.log("fefefef");var e=this.showLoading(),s=w["a"].getStorage("fansData");s=s[0],this.axios.get("/deals/business/".concat(s.id,"/7")).then((function(s){e.hide(),console.log(s);var a=s.data.data.offers;t.allDeals=a.data,t.first_page_url=a.first_page_url,t.current_page=a.current_page,t.last_page=a.last_page,t.from=a.from,t.next_page_url=a.next_page_url,t.to=a.to})).catch((function(t){return e.hide(),t}))}}},C=b,y=(s("f049"),Object(v["a"])(C,g,_,!1,null,"d22bf16a",null)),x=y.exports,D={name:"Deals",components:{LeftSideInfo:m,allDeals:x}},k=D,S=Object(v["a"])(k,a,i,!1,null,null,null);e["default"]=S.exports},f049:function(t,e,s){"use strict";var a=s("f3ca"),i=s.n(a);i.a},f088:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("44d8"),i=(0,a.twitterEmbedComponent)({embedComponent:function(t){for(var e,s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];return(e=t.widgets).createTimeline.apply(e,a)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),r=i;e.default=r},f3ca:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0b18cf92.c5c1d7fe.js.map