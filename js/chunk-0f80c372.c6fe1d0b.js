(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f80c372"],{"03a3":function(e,t,a){},1461:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none"},[a("div",{staticClass:"ui-block"},[a("div",{staticClass:"your-profile"},[e._m(0),a("div",{attrs:{id:"accordion",role:"tablist","aria-multiselectable":"true"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header",attrs:{role:"tab",id:"headingOne"}},[a("h6",{staticClass:"mb-0"},[a("a",{attrs:{"data-toggle":"collapse","data-parent":"#accordion",href:"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e._v("\n                Profile Settings\n                "),a("svg",{staticClass:"olymp-dropdown-arrow-icon"},[a("use",{attrs:{"xlink:href":"svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"}})])])])]),a("div",{staticClass:"collapse show",attrs:{id:"collapseOne",role:"tabpanel","aria-labelledby":"headingOne"}},[a("ul",{staticClass:"your-profile-menu"},[a("li",[a("router-link",{class:"Account"===e.data.active?"settingsActive":"",attrs:{to:{name:"AccountInfo"}}},[e._v("Personal Information")])],1),a("li",[a("router-link",{class:"Password"===e.data.active?"settingsActive":"",attrs:{to:{name:"PasswordChange"}}},[e._v("Change Password")])],1)])])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui-block-title ui-block-title-small"},[a("h6",{staticClass:"title"},[e._v("Your PROFILE")])])}],o={props:{data:Object}},l=o,i=(a("3ecb"),a("2877")),n=Object(i["a"])(l,r,s,!1,null,null,null);t["a"]=n.exports},"22db":function(e,t,a){"use strict";var r=a("03a3"),s=a.n(r);s.a},"2fdb":function(e,t,a){"use strict";var r=a("5ca1"),s=a("d2c8"),o="includes";r(r.P+r.F*a("5147")(o),"String",{includes:function(e){return!!~s(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"3ecb":function(e,t,a){"use strict";var r=a("9d30"),s=a.n(r);s.a},"3fcc":function(e,t,a){},"4dc8":function(e,t,a){"use strict";a("c0d6"),a("bc3a");var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.local){var t,a=e.local;if(null===a.av||void 0===a.av){t=a.us;var r=t;r&&"/avatars/av".concat(r.length-2+1,".png");return"https://api.adorable.io/avatars/285/"+r}return t=a.av,t}if(e.state){var s;a=e.state;if(""===a.av||null===a.av){s=e.state.us;r=s;return"https://api.adorable.io/avatars/285/"+r}return s=e.state.av,s}};t["a"]=r},6762:function(e,t,a){"use strict";var r=a("5ca1"),s=a("c366")(!0);r(r.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"7f21":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer",attrs:{id:"footer"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-lg-12 col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"sub-footer-copyright"},[a("span",[e._v("\n\t\t\t\t\t\tCopyright "),a("router-link",{attrs:{to:"#"}},[e._v("info@matchdaydeals.com")]),e._v(" All Rights Reserved "+e._s(e.year)+"\n\t\t\t\t\t")],1)])])])])])},s=[],o={name:"Footer",data:function(){return{projectName:"",year:""}},mounted:function(){this.year=(new Date).getFullYear(),this.projectName=this.$store.state.projectName}},l=o,i=(a("22db"),a("2877")),n=Object(i["a"])(l,r,s,!1,null,null,null);t["a"]=n.exports},"7f7f":function(e,t,a){var r=a("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,l="name";l in s||a("9e1e")&&r(s,l,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"8c49":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ProfileBanner"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"},[a("div",{ref:"updateInfo",staticClass:"ui-block"},[e._m(0),a("div",{staticClass:"ui-block-content"},[a("response-message",{attrs:{data:e.errorData}}),a("form",{attrs:{id:"info_change_form",method:"post"},on:{submit:function(t){return t.preventDefault(),e.updateInfo()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-lg-6 col-md-6 col-sm-12 col-12"},[a("div",{class:null!==e.formModel.firstname?"form-group label-floating":"form-group label-floating is-empty"},[a("label",{staticClass:"control-label"},[e._v(" "+e._s("1"===e.getUserDetails.user_type?"First Name":"Business Name")+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.firstname,expression:"formModel.firstname"}],staticClass:"form-control",attrs:{id:"firstname",placeholder:"",type:"text",value:"John"},domProps:{value:e.formModel.firstname},on:{input:function(t){t.target.composing||e.$set(e.formModel,"firstname",t.target.value)}}})]),a("div",{class:null!==e.formModel.email?"form-group label-floating":"form-group label-floating is-empty"},[a("label",{staticClass:"control-label"},[e._v("Your Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.email,expression:"formModel.email"}],staticClass:"form-control",attrs:{placeholder:"",type:"email",id:"email",value:"support@matchdaydeals.com"},domProps:{value:e.formModel.email},on:{input:function(t){t.target.composing||e.$set(e.formModel,"email",t.target.value)}}})]),a("div",{class:null!==e.formModel.club&&"1"===e.getUserDetails.user_type||null!==e.formModel.business_address?"form-group label-floating":"form-group label-floating is-empty"},[a("div",{staticClass:"dropdown"},[a("label",{staticClass:"control-label"},[e._v("Fan Club Name")]),0===Object.keys(e.selectedItem).length?a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:"Search Club"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}):a("div",{staticClass:"dropdown-selected",on:{click:e.resetItem}},[a("img",{staticClass:"dropdown-item-flag",attrs:{src:e.selectedItem.team_badge}}),e._v("\n                        "+e._s(e.selectedItem.team_name)+"\n                      ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.inputValue&&e.itemList.length>0,expression:"inputValue && itemList.length > 0"}],staticClass:"dropdown-list"},e._l(e.itemList,(function(t){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.itemVisible(t),expression:"itemVisible(item)"}],key:t.name,staticClass:"dropdown-item",on:{click:function(a){return e.selectTeam(t)}}},[a("img",{staticClass:"dropdown-item-flag",attrs:{src:t.team_badge}}),e._v("\n                          "+e._s(t.team_name)+"\n                        ")])})),0)])])]),a("div",{staticClass:"col col-lg-6 col-md-6 col-sm-12 col-12"},[a("div",{class:null!==e.userDetails.lastname&&null!==this.formModel.business_city?"form-group label-floating":"form-group label-floating is-empty"},[a("label",{staticClass:"control-label"},[e._v(e._s("1"===e.getUserDetails.user_type?"Last Name":"Business City"))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.lastname,expression:"formModel.lastname"}],staticClass:"form-control",attrs:{id:"lastname",placeholder:"",type:"text",value:"Doe"},domProps:{value:e.formModel.lastname},on:{input:function(t){t.target.composing||e.$set(e.formModel,"lastname",t.target.value)}}})]),a("div",{class:null!==e.userDetails.username?"form-group label-floating":"form-group label-floating is-empty"},[a("label",{staticClass:"control-label"},[e._v("Your Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.username,expression:"formModel.username"}],staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"username",value:"johndoe",disabled:""},domProps:{value:e.formModel.username},on:{input:function(t){t.target.composing||e.$set(e.formModel,"username",t.target.value)}}})]),a("div",{class:null!==e.userDetails.username?"form-group label-floating":"form-group label-floating is-empty"},[a("label",{staticClass:"control-label"},[e._v("Your Phone Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.phone,expression:"formModel.phone"}],staticClass:"form-control",attrs:{placeholder:"",type:"number",id:"phone",value:"+234()"},domProps:{value:e.formModel.phone},on:{input:function(t){t.target.composing||e.$set(e.formModel,"phone",t.target.value)}}})])]),e._m(1)])])],1)])]),a("settingsBar",{attrs:{data:e.SettingsData}})],1)]),a("Footer")],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui-block-title"},[a("h6",{staticClass:"title",staticStyle:{color:"#fff"}},[e._v("Personal Information")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col col-lg-6 col-md-6 col-sm-12 col-12"},[a("button",{staticClass:"btn bg-mdd btn-lg full-width",attrs:{type:"submit"}},[e._v("Update Profile")])])}],o=(a("6762"),a("2fdb"),a("1777")),l=a("1461"),i=a("7f21"),n=a("2f62"),c=(a("1157"),{projectName:"",userData:{},id:null,avatar:"",signedIn:!1,SettingsData:{active:"Account"},formModel:{email:"",firstname:"",lastname:"",phone:"",club:"",username:""},inputValue:"",itemList:[],selectedItem:{},errorData:{},userDetails:{}}),m={name:"AccountInfo",data:function(){return c},components:{settingsBar:l["a"],Footer:i["a"],ProfileBanner:o["a"]},computed:Object(n["b"])({getAvatar:function(e){return e.user.avatar},getUsername:function(e){return e.user.username},getUserDetails:function(e){return e.user}}),methods:{selectTeam:function(e){var t={team_name:e.team_name,team_id:e.team_id,team_badge:e.team_badge};this.selectedItem=t,this.formModel.club=e.team_id,this.inputValue=""},resetItem:function(){var e=this;this.selectedItem={},this.$nextTick((function(){return e.$refs.dropdowninput.focus()}))},itemVisible:function(e){var t=e.team_name.toLowerCase(),a=this.inputValue.toLowerCase();return t.includes(a)},getTeamsData:function(){var e=this;this.itemList={},this.axios.get("/teams/all").then((function(t){var a=t.data.data.teams;e.itemList=a}))},showLoading:function(){var e=this.$loader(this,this.$refs.updateInfo,{loaderType:"spinner"});return e},validateForm:function(){return""===this.formModel.email&&""===this.formModel.firstname&&""===this.formModel.lastname&&""===this.formModel.club&&""===this.formModel.username?($("#info_change_form .label-floating").addClass("has-error"),$("#info_change_form input").addClass("form-control-danger"),this.errorData={message:"Sorry all fields are required",isError:!0},!1):this.$validate("nametext",this.formModel.firstname)?this.$validate("nametext",this.formModel.lastname)?this.$validate("email",this.formModel.email)?this.$validate("longtext",this.formModel.username)?""===this.formModel.phone||this.$validate("phone",this.formModel.phone)?($("#info_change_form .label-floating").removeClass("has-error"),$("#info_change_form input").removeClass("form-control-danger"),!0):($("#info_change_form #phone").parent(".label-floating").addClass("has-error"),$("#info_change_form input#phone").addClass("form-control-danger"),this.errorData={message:"Sorry give a valid phone number",isError:!0},!1):($("#info_change_form #username").parent(".label-floating").addClass("has-error"),$("#info_change_form input#username").addClass("form-control-danger"),this.errorData={message:"Sorry your Username Characters are wrong",isError:!0},!1):($("#info_change_form #email").parent(".label-floating").addClass("has-error"),$("#info_change_form input#email").addClass("form-control-danger"),this.errorData={message:"Sorry your Email Characters are wrong",isError:!0},!1):($("#info_change_form #lastname").parent(".label-floating").addClass("has-error"),$("#info_change_form input#lastname").addClass("form-control-danger"),this.errorData={message:"Sorry your Lastname Characters are wrong",isError:!0},!1):($("#info_change_form input#firstname").parent(".label-floating").addClass("has-error"),$("#info_change_form input#firstname").addClass("form-control-danger"),this.errorData={message:"Sorry your Firstname Characters are wrong",isError:!0},!1)},updateInfo:function(){var e=this;if(this.validateForm()){var t=this.showLoading(),a={firstname:this.formModel.firstname,lastname:this.formModel.lastname,email:this.formModel.email,club:this.formModel.club,phone:this.formModel.phone};this.axios.post("/profile/update",a).then((function(){t.hide(),e.errorData={message:"Profile updated successfully",isError:"success"},e.fetchUserDetails()})).catch((function(a){t.hide(),e.errorData={message:a.response?"Please check your Profile Details":"Sorry an error occurred, check your internet",isError:!0}}))}},fetchUserDetails:function(){var e=this,t=this.showLoading();this.axios.get("/user/details").then((function(a){t.hide(),e.userDetails=a.data.data,e.formModel.email=e.userDetails.email,e.formModel.firstname=e.userDetails.firstname,e.formModel.lastname=e.userDetails.lastname,e.formModel.username=e.userDetails.username,e.userDetails.team_details[0]&&(e.selectedItem=e.userDetails.team_details[0]),e.formModel.phone=e.userDetails.phone,window.eventBus.$emit("loadUserData",!0)})).catch((function(a){e.errorData={message:a.response?"An error from our end":"Sorry an error occured, check your internet",isError:!0},t.hide()}))},checkUserData:function(e){""===e&&"undefined"===e||(this.userData=JSON.parse(e),this.signedIn=!0)}},mounted:function(){var e=localStorage.fansData;this.fetchUserDetails(),e&&this.checkUserData(e),this.getTeamsData()}},d=m,u=(a("f174"),a("2877")),f=Object(u["a"])(d,r,s,!1,null,null,null);t["default"]=f.exports},"9d30":function(e,t,a){},f174:function(e,t,a){"use strict";var r=a("3fcc"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-0f80c372.c6fe1d0b.js.map