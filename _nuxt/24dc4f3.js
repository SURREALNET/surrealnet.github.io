(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{347:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(47),r(29),r(201),r(40),r(15),{name:"addRepository",data:function(){return{showError:!1,errorMessage:""}},methods:{addRepo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$auth.strategy.token.get().split(" ")[1],t.$axios.setHeader("x-access-token",r),e.next=4,t.$axios.post("/repositories/add",{repo:t.repo});case 4:"error"===(n=e.sent).data.status?(t.showError=!0,t.errorMessage=n.data.msg):t.$router.push("/repositories/list");case 6:case"end":return e.stop()}}),e)})))()}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.$auth,o=n.strategy.token.get().split(" ")[1],r.setHeader("x-access-token",o),e.next=5,r.get("/domains/domains");case 5:return c=e.sent,console.log(c,"asdf"),l=c.data.filter((function(t){return void 0!==t.workflow})),console.log(l,"asdfsaf"),e.abrupt("return",{domains:l});case 10:case"end":return e.stop()}}),e)})))()}}),c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card shadow mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[t._m(1),t._v(" "),r("tbody",t._l(t.domains,(function(e,n){return r("tr",{key:n},[r("td",[r("a",{staticClass:"btn btn-primary btn-icon-split",attrs:{"data-v-7d5e41a2":"",href:e.repo_link,target:"_blank"}},[t._m(2,!0),t._v(" "),r("span",{staticClass:"text"},[t._v(t._s(e.repo_name))])])]),t._v(" "),r("td",[t._v("\n                    "+t._s(e.workflow.name)+"\n                  ")]),t._v(" "),r("td",[t._v("\n                    "+t._s(e.workflow.display_title)+"\n                  ")]),t._v(" "),r("td",[t._v("\n                    "+t._s(e.workflow.status)+"\n                  ")]),t._v(" "),r("td",["success"==e.workflow.conclusion?r("button",{staticClass:"btn btn-success btn-icon-split"},[t._m(3,!0),t._v(" "),r("span",{staticClass:"text"},[t._v("Success")])]):t._e()])])})),0)])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-sm-flex align-items-center justify-content-between mb-4"},[r("h1",{staticClass:"h3 mb-0 text-gray-800"},[t._v("Add repository")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Repo")]),t._v(" "),r("th",[t._v("Workflow Name")]),t._v(" "),r("th",[t._v("Commit Message")]),t._v(" "),r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Conclusion")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon text-white-50"},[e("i",{staticClass:"fab fa-github",attrs:{"data-v-7d5e41a2":""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon text-white-50"},[e("i",{staticClass:"fas fa-check"})])}],!1,null,null,null);e.default=component.exports}}]);