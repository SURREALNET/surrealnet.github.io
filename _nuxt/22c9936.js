(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{348:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(47),r(29),r(201),{name:"listRepositories",head:function(){return{script:[{src:"/vendor/datatables/jquery.dataTables.min.js",body:!0},{src:"/vendor/datatables/dataTables.bootstrap4.min.js",body:!0},{src:"/js/demo/datatables-demo.js",body:!0}],link:[{rel:"stylesheet",type:"text/css",href:"/vendor/datatables/dataTables.bootstrap4.min.css"}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.$auth,o=n.strategy.token.get().split(" ")[1],r.setHeader("x-access-token",o),e.next=5,r.get("/repositories/list");case 5:return c=e.sent,e.abrupt("return",{repositories:c.data});case 7:case"end":return e.stop()}}),e)})))()}}),c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"h3 mb-2 text-gray-800"},[t._v("Repositories")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("Manage repositories")]),t._v(" "),r("div",{staticClass:"card shadow mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[t._m(0),t._v(" "),r("tbody",t._l(t.repositories,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Repository name")]),t._v(" "),r("th",[t._v("Repository URL")])])])}],!1,null,null,null);e.default=component.exports}}]);