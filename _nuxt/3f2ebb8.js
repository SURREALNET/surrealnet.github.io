(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(e,t,r){"use strict";r.r(t);var l=r(9),n=(r(47),r(29),r(201),{name:"deployCrawler",data:function(){return{url:"",showError:!1,errorMessage:""}},methods:{deployCrawler:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$auth.strategy.token.get().split(" ")[1],e.$axios.setHeader("x-access-token",r),t.next=4,e.$axios.post("/crawls/deploy",{url:e.url});case 4:"ok"===(l=t.sent).data.status?e.$router.push("/crawls/queue"):(e.errorMessage=l.data.msg,e.showError=!0);case 6:case"end":return t.stop()}}),t)})))()}}}),o=r(16),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.deployCrawler.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[e._v("URL")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"form-control",attrs:{type:"url",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),e._v(" "),e.showError?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n            "+e._s(e.errorMessage)+"\n          ")]):e._e(),e._v(" "),r("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Add the full url like https://www.footlocker.de/")])]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Save")])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-sm-flex align-items-center justify-content-between mb-4"},[r("h1",{staticClass:"h3 mb-0 text-gray-800"},[e._v("Deploy a crawler")])])}],!1,null,null,null);t.default=component.exports}}]);