(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{330:function(t,e){},350:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(47),n(29),n(201),n(330),{name:"listJobs",head:function(){return{script:[{src:"/vendor/datatables/jquery.dataTables.min.js",body:!0},{src:"/vendor/datatables/dataTables.bootstrap4.min.js",body:!0},{src:"/js/demo/datatables-demo.js",body:!0}],link:[{rel:"stylesheet",type:"text/css",href:"/vendor/datatables/dataTables.bootstrap4.min.css"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.$auth,o=r.strategy.token.get().split(" ")[1],n.setHeader("x-access-token",o),e.next=5,n.get("/jobs/jobs");case 5:return c=e.sent,e.abrupt("return",{jobs:c.data});case 7:case"end":return e.stop()}}),e)})))()}}),c=n(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"h3 mb-2 text-gray-800"},[t._v("Jobs")]),t._v(" "),n("div",{staticClass:"card shadow mb-4"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[t._m(0),t._v(" "),n("tbody",t._l(t.jobs,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.url))]),t._v(" "),n("td",[t._v("\n                "+t._s(e.config_status||"open")+"\n              ")]),t._v(" "),n("td",[t._v(t._s(e.config_done_by||null))]),t._v(" "),n("td",[e.config_done_by?"pending"===e.config_status?n("span",[n("nuxt-link",{staticClass:"btn btn-success",attrs:{to:"/jobs/overview/"+e._id}},[t._v("\n                    Review\n                  ")])],1):"cached"===e.config_status?n("span",[n("nuxt-link",{staticClass:"btn btn-warning",attrs:{to:"/jobs/overview/"+e._id}},[t._v("\n                    Cached\n                  ")])],1):"deployed"===e.config_status?n("span",[n("nuxt-link",{staticClass:"btn btn-success",attrs:{to:"/jobs/overview/"+e._id}},[t._v("\n                    Done\n                  ")])],1):t._e():n("span",[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/jobs/overview/"+e._id}},[t._v("\n                    Accept Job\n                  ")])],1)])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("URL")]),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th",[t._v("Done by")]),t._v(" "),n("th",[t._v("Action")])])])}],!1,null,null,null);e.default=component.exports}}]);