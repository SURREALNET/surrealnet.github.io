(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{335:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(47),r(29),r(201),r(40),r(15),{name:"crawlQueue",data:function(){return{showError:!1,errorMessage:""}},head:function(){return{script:[{src:"/vendor/datatables/jquery.dataTables.min.js",body:!0},{src:"/vendor/datatables/dataTables.bootstrap4.min.js",body:!0},{src:"/js/demo/datatables-demo.js",body:!0}],link:[{rel:"stylesheet",type:"text/css",href:"/vendor/datatables/dataTables.bootstrap4.min.css"}]}},asyncData:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.$axios,o=t.$auth,c=o.strategy.token.get().split(" ")[1],n.setHeader("x-access-token",c),r.next=5,n.get("/crawls/queue");case 5:if("error"!==(l=r.sent).data.status){r.next=11;break}e.showError=!0,e.errorMessage=l.data.msg,r.next=13;break;case 11:return d=l.data.filter((function(t){return"open"===t.status||"running"===t.status})),r.abrupt("return",{crawls:d});case 13:case"end":return r.stop()}}),r)})))()}}),c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"h3 mb-2 text-gray-800"},[t._v("Crawler Queue")]),t._v(" "),r("div",{staticClass:"card shadow mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[t._m(0),t._v(" "),r("tbody",t._l(t.crawls,(function(e,n){return r("tr",{key:n},[r("th",[r("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[r("i",{staticClass:"fas fa-link"})])]),t._v(" "),r("td",[t._v(t._s(e.url))]),t._v(" "),r("td",[t._v("\n                "+t._s(e.created_by)+"\n              ")]),t._v(" "),r("td",[t._v("\n                "+t._s(e.created_at)+"\n              ")]),t._v(" "),r("td",[t._v("\n                "+t._s(e.status)+"\n              ")])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Link")]),t._v(" "),r("th",[t._v("URL")]),t._v(" "),r("th",[t._v("Deployed by")]),t._v(" "),r("th",[t._v("Deployed time")]),t._v(" "),r("th",[t._v("Status")])])])}],!1,null,null,null);e.default=component.exports}}]);