(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{317:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("54372033",content,!0,{sourceMap:!1})},324:function(t,e,r){"use strict";r(317)},325:function(t,e,r){var o=r(83)(!1);o.push([t.i,".bigPadding[data-v-70424d45]{padding:150px}.labelInput[data-v-70424d45]{margin-bottom:10px}.btn-primary[data-v-70424d45],.labelInput[data-v-70424d45]{font-size:1.5rem;font-weight:700;color:#fff;text-shadow:0 0 .5rem #000}.btn-primary[data-v-70424d45]{margin-top:1.5rem}#background-video[data-v-70424d45]{width:100vw;height:100vh;-o-object-fit:cover;object-fit:cover;position:fixed;left:0;right:0;top:0;bottom:0;z-index:-1;filter:blur(3px)}",""]),t.exports=o},337:function(t,e,r){"use strict";r.r(e);var o=r(9),n=(r(47),{head:{bodyAttrs:{class:"bg-gradient-primary"}},layout:"login",data:function(){return{login:{email:"",password:""},showError:!1,errorMessage:""}},methods:{userLogin:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:t.login});case 3:"error"===(r=e.sent).data.status&&(t.errorMessage=r.data.msg,t.showError=!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=(r(324),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("video",{attrs:{id:"background-video",autoplay:"",loop:"",muted:"",poster:"https://assets.codepen.io/6093409/river.jpg"},domProps:{muted:!0}},[r("source",{attrs:{src:"/videos/intro.webm",type:"video/webm"}})]),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-4 col-md-8 col-xs-12 pt-5"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[r("label",{staticClass:"labelInput",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",required:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),t._v(" "),r("label",{staticClass:"labelInput",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t.showError?r("div",{staticClass:"alert alert-danger labelInput",attrs:{role:"alert"}},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")]):t._e()])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center pt-5"},[r("a",{staticClass:"labelInput",attrs:{href:"/register"}},[t._v("Create an Account")])])}],!1,null,"70424d45",null);e.default=component.exports}}]);