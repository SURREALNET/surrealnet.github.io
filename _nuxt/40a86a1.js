(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{337:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(47),n(29),n(201),n(40),n(15),{name:"domainList",head:function(){return{script:[{src:"/vendor/datatables/jquery.dataTables.min.js",body:!0},{src:"/vendor/datatables/dataTables.bootstrap4.min.js",body:!0},{src:"/js/demo/datatables-demo.js",body:!0}],link:[{rel:"stylesheet",type:"text/css",href:"/vendor/datatables/dataTables.bootstrap4.min.css"}]}},data:function(){return{addedUrl:""}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.$auth,o=t.route,d=r.strategy.token.get().split(" ")[1],n.setHeader("x-access-token",d),e.next=5,n.get("/domains/domains");case 5:return c=e.sent,(l=o.query.status)&&("online"===l?c.data=c.data.filter((function(t){return 200===t.sitemap_status_code})):"offline"===l&&(c.data=c.data.filter((function(t){return 200!==t.sitemap_status_code})))),e.abrupt("return",{domains:c.data});case 9:case"end":return e.stop()}}),e)})))()},methods:{deleteDomain:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!confirm("Are you sure you want to delete this domain?")){n.next=6;break}return r=e.$auth.strategy.token.get().split(" ")[1],e.$axios.setHeader("x-access-token",r),n.next=5,e.$axios.delete("/domains/delete/",{data:{domainId:t}});case 5:e.$nuxt.refresh();case 6:case"end":return n.stop()}}),n)})))()}}}),d=n(16),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"card shadow mb-4"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered",attrs:{id:"dataTable",width:"100%",cellspacing:"0"}},[t._m(2),t._v(" "),n("tbody",t._l(t.domains,(function(e,r){return n("tr",{key:r},[n("td",[n("a",{attrs:{target:"_blank",href:e.url,rel:"noopener noreferrer"}},[n("i",{staticClass:"fas fa-link"})])]),t._v(" "),n("td",[n("nuxt-link",{attrs:{to:"/domains/overview/"+e._id}},[t._v(t._s(e.url))])],1),t._v(" "),n("td",[n("button",{class:200===e.sitemap_status_code?"btn btn-success":"btn btn-danger"},[n("i",{class:200===e.sitemap_status_code?"fas fa-check":"fas fa-exclamation"})]),t._v("\n\n                "+t._s(200===e.sitemap_status_code?"online":"offline")+"\n              ")]),t._v(" "),n("td",[n("a",{attrs:{target:"_blank",href:e.url+"/sitemap.xml",rel:"noopener noreferrer"}},[t._v("\n                  "+t._s(e.sitemap_entries)+"\n                ")])]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.deleteDomain(e._id)}}},[n("i",{staticClass:"fas fa-trash"})])])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"h3 mb-2 text-gray-800"},[t._v("Domains")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("Manage domains")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[n("a",{staticClass:"btn btn-primary float-right mb-4",attrs:{href:"/domains/add",type:"button"}},[n("i",{staticClass:"fas fa-download fa-sm text-white-50"}),t._v(" Add Domain\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Link")]),t._v(" "),n("th",[t._v("URL")]),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th",[t._v("Sitemap entries")]),t._v(" "),n("th",[t._v("Delete")])])])}],!1,null,null,null);e.default=component.exports}}]);