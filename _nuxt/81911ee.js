(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{318:function(e,t,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("4f43e89e",content,!0,{sourceMap:!1})},326:function(e,t,r){"use strict";r(318)},327:function(e,t,r){var o=r(83)(!1);o.push([e.i,".bigPadding[data-v-be18eb04]{padding:150px}.labelInput[data-v-be18eb04]{margin-bottom:10px}.btn-primary[data-v-be18eb04],.labelInput[data-v-be18eb04]{font-size:1.5rem;font-weight:700;color:#fff;text-shadow:0 0 .5rem #000}.btn-primary[data-v-be18eb04]{margin-top:1.5rem}#background-video[data-v-be18eb04]{width:100vw;height:100vh;-o-object-fit:cover;object-fit:cover;position:fixed;left:0;right:0;top:0;bottom:0;z-index:-1;filter:blur(3px)}",""]),e.exports=o},340:function(e,t,r){"use strict";r.r(t);var o=r(9),n=(r(47),{head:{bodyAttrs:{class:"bg-gradient-primary"}},layout:"login",data:function(){return{register:{username:"",email:"",password:""},showError:!1,errorMessage:""}},auth:!1,methods:{userRegister:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/register",{username:e.register.username,email:e.register.email,password:e.register.password});case 3:"ok"===(r=t.sent).data.status?e.$router.push("/login"):(e.errorMessage=r.data.msg,e.showError=!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),l=(r(326),r(16)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("video",{attrs:{id:"background-video",autoplay:"",loop:"",muted:"",poster:"https://assets.codepen.io/6093409/river.jpg"},domProps:{muted:!0}},[r("source",{attrs:{src:"/videos/intro.webm",type:"video/webm"}})]),e._v(" "),r("div",{staticClass:"row justify-content-center bigPadding"},[r("div",{staticClass:"col-xl-10 col-lg-12 col-md-9 pt-5"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.userRegister.apply(null,arguments)}}},[r("label",{staticClass:"labelInput",attrs:{for:"username"}},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.username,expression:"register.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",required:""},domProps:{value:e.register.username},on:{input:function(t){t.target.composing||e.$set(e.register,"username",t.target.value)}}}),e._v(" "),r("label",{staticClass:"labelInput",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",required:""},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),e._v(" "),r("label",{staticClass:"labelInput",attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),e._v(" "),e._m(0),e._v(" "),e.showError?r("div",{staticClass:"alert alert-danger labelInput",attrs:{role:"alert"}},[e._v("\n          "+e._s(e.errorMessage)+"\n        ")]):e._e()])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n            Register Account\n          ")])])}],!1,null,"be18eb04",null);t.default=component.exports}}]);