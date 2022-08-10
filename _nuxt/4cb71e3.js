(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{343:function(t,e,n){"use strict";n.r(e);var d=n(9),o=(n(47),n(29),n(201),{name:"domainOverview",asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var n,d,o,r,l,c,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,d=t.$axios,o=t.$auth,r=o.strategy.token.get().split(" ")[1],d.setHeader("x-access-token",r),e.next=5,d.get("/domains/domain?domainId="+n.domain);case 5:return l=e.sent,e.next=8,d.get("/repositories/repository/"+l.data._id);case 8:return c=e.sent,e.next=11,d.get("/jobs/job/"+l.data._id);case 11:return _=e.sent,e.abrupt("return",{domain:l.data,repository:c.data,job:_.data});case 13:case"end":return e.stop()}}),e)})))()},methods:{pagespeedScore:function(t){return t<=1e3?"text-success":t>=1e3&&t<=2500?"text-warning":"text-danger"}},computed:{domainStatus:function(){return 200===this.domain.sitemap_status_code?"online":"offline"},domainStatusClass:function(){return 200===this.domain.sitemap_status_code?"text-success":"text-danger"}}}),r=n(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-sm-flex align-items-center justify-content-between mb-4"},[n("h1",{staticClass:"h3 mb-0 text-gray-800"},[t._v("\n      "+t._s(t.domain.url)+"\n    ")]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"col-xl-12 col-lg-12"},[n("div",{staticClass:"card shadow mb-4"},[t._m(1),t._v(" "),n("div",{staticClass:"card-body"},[n("ul",[n("li",[t._v("\n                URL:\n                "),n("a",{attrs:{href:t.domain.url,target:"_blank"}},[t._v(t._s(t.domain.url))])]),t._v(" "),n("li",{class:t.domainStatusClass},[t._v("Status: "+t._s(t.domainStatus))])])])])]),t._v(" "),n("div",{staticClass:"col-xl-12 col-lg-12"},[n("div",{staticClass:"card shadow mb-4"},[t._m(2),t._v(" "),n("div",{staticClass:"card-body"},[n("ul",[n("li",[t._v("Status Code: "+t._s(t.domain.status_code))]),t._v(" "),n("li",[t._v("IP: "+t._s(t.domain.ip?t.domain.ip:"None"))]),t._v(" "),n("li",[t._v("\n                Has Sitemap:\n                "+t._s(200===t.domain.sitemap_status_code?"Yes":"No")+"\n                "),n("a",{attrs:{target:"_blank",href:t.domain.url+"/sitemap.xml"}},[t._v("Link")])]),t._v(" "),n("li",[t._v("\n                Has Robots:\n                "+t._s(200===t.domain.robots_status_code?"Yes":"No")+"\n                "),n("a",{attrs:{target:"_blank",href:t.domain.url+"/robots.txt"}},[t._v("Link")])]),t._v(" "),n("li",[t._v("DNS Records: "+t._s(t.domain.nameservers))])])])])]),t._v(" "),n("div",{staticClass:"col-xl-12 col-lg-12"},[n("div",{staticClass:"card shadow mb-4"},[t._m(3),t._v(" "),t.repository?n("div",{staticClass:"card-body"},[n("ul",[n("li",[t._v("\n                URL:\n                "),n("a",{attrs:{target:"_blank",href:t.repository?t.repository.url:"None"}},[t._v(t._s(t.repository.url))])]),t._v(" "),n("li",[t._v("\n                Github online config\n                "),n("a",{attrs:{href:t.repository.url+"/blob/master/assets/data/config.json",target:"_blank"}},[t._v("Config")])])])]):t._e()])]),t._v(" "),t.repository.config_data?n("div",{staticClass:"col-xl-12 col-lg-12"},[n("div",{staticClass:"card shadow mb-4"},[t._m(4),t._v(" "),n("div",{staticClass:"card-body"},[n("ul",[n("li",[t._v("\n                Main Keyword: "+t._s(t.repository.config_data.seo.mainKeyword)+"\n              ")]),t._v(" "),n("li",[t._v("\n                Main Page Title: "+t._s(t.repository.config_data.seo.index.title)+"\n              ")]),t._v(" "),n("li",[t._v("\n                Main Page Meta Desc:\n                "+t._s(t.repository.config_data.seo.index.metaDescription)+"\n              ")])])])])]):t._e(),t._v(" "),t.repository.config_data?n("div",{staticClass:"col-xl-12 col-lg-12"},[n("div",{staticClass:"card shadow mb-4"},[t._m(5),t._v(" "),n("div",{staticClass:"card-body"},[n("p",[t._v("\n              Config Settings:\n              "+t._s(t.domain.pagespeed_data.lighthouseResult.configSettings.emulatedFormFactor)+"\n            ")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("\n                  FCP:\n                  "),n("span",{class:t.pagespeedScore(t.domain.pagespeed_data.lighthouseResult.audits["first-contentful-paint"].numericValue)},[t._v("\n                    "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["first-contentful-paint"].displayValue)+"\n                  ")])]),t._v(" "),n("p",[t._v("\n                  "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["first-contentful-paint"].description)+"\n                ")])]),t._v(" "),n("li",[n("p",[t._v("\n                  LCP:\n                  "),n("span",{class:t.pagespeedScore(t.domain.pagespeed_data.lighthouseResult.audits["largest-contentful-paint"].numericValue)},[t._v("\n                    "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["largest-contentful-paint"].displayValue)+"\n                  ")])]),t._v(" "),n("p",[t._v("\n                  "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["largest-contentful-paint"].description)+"\n                ")])]),t._v(" "),n("li",[n("p",[t._v("\n                  Speed Index\n                  "),n("span",{class:t.pagespeedScore(t.domain.pagespeed_data.lighthouseResult.audits["speed-index"].numericValue)},[t._v("\n                    "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["speed-index"].displayValue)+"\n                  ")])]),t._v(" "),n("p",[t._v("\n                  "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["speed-index"].description)+"\n                ")])]),t._v(" "),n("li",[n("p",[t._v("\n                  FMP:\n                  "),n("span",{class:t.pagespeedScore(t.domain.pagespeed_data.lighthouseResult.audits["first-meaningful-paint"].numericValue)},[t._v("\n                    "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["first-meaningful-paint"].displayValue)+"\n                  ")])]),t._v(" "),n("p",[t._v("\n                  "+t._s(t.domain.pagespeed_data.lighthouseResult.audits["first-meaningful-paint"].description)+"\n                ")])]),t._v(" "),n("li",[n("p",[t._v("\n                  Time to Interactive\n                  "),n("span",{class:t.pagespeedScore(t.domain.pagespeed_data.lighthouseResult.audits.interactive.numericValue)},[t._v("\n                    "+t._s(t.domain.pagespeed_data.lighthouseResult.audits.interactive.displayValue)+"\n                  ")])]),t._v(" "),n("p",[t._v("\n                  "+t._s(t.domain.pagespeed_data.lighthouseResult.audits.interactive.description)+"\n                ")])])])])])]):t._e()]),t._v(" "),t.domain.pagespeed_data?n("div",{staticClass:"col-md-4"},[n("img",{staticClass:"img-fluid",attrs:{src:t.domain.pagespeed_data.lighthouseResult.audits["full-page-screenshot"].details.screenshot.data}})]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-download fa-sm text-white-50"}),t._v(" Generate Report")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n              card-header\n              py-3\n              d-flex\n              flex-row\n              align-items-center\n              justify-content-between\n            "},[n("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Domain Data")]),t._v(" "),n("div",{staticClass:"dropdown no-arrow"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),n("div",{staticClass:"\n                  dropdown-menu dropdown-menu-right\n                  shadow\n                  animated--fade-in\n                ",attrs:{"aria-labelledby":"dropdownMenuLink"}},[n("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),n("div",{staticClass:"dropdown-divider"}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n              card-header\n              py-3\n              d-flex\n              flex-row\n              align-items-center\n              justify-content-between\n            "},[n("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("DNS Data")]),t._v(" "),n("div",{staticClass:"dropdown no-arrow"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),n("div",{staticClass:"\n                  dropdown-menu dropdown-menu-right\n                  shadow\n                  animated--fade-in\n                ",attrs:{"aria-labelledby":"dropdownMenuLink"}},[n("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),n("div",{staticClass:"dropdown-divider"}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n              card-header\n              py-3\n              d-flex\n              flex-row\n              align-items-center\n              justify-content-between\n            "},[n("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Repository")]),t._v(" "),n("div",{staticClass:"dropdown no-arrow"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),n("div",{staticClass:"\n                  dropdown-menu dropdown-menu-right\n                  shadow\n                  animated--fade-in\n                ",attrs:{"aria-labelledby":"dropdownMenuLink"}},[n("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),n("div",{staticClass:"dropdown-divider"}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n              card-header\n              py-3\n              d-flex\n              flex-row\n              align-items-center\n              justify-content-between\n            "},[n("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("SEO Data")]),t._v(" "),n("div",{staticClass:"dropdown no-arrow"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),n("div",{staticClass:"\n                  dropdown-menu dropdown-menu-right\n                  shadow\n                  animated--fade-in\n                ",attrs:{"aria-labelledby":"dropdownMenuLink"}},[n("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),n("div",{staticClass:"dropdown-divider"}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n              card-header\n              py-3\n              d-flex\n              flex-row\n              align-items-center\n              justify-content-between\n            "},[n("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Pagespeed Data")]),t._v(" "),n("div",{staticClass:"dropdown no-arrow"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),n("div",{staticClass:"\n                  dropdown-menu dropdown-menu-right\n                  shadow\n                  animated--fade-in\n                ",attrs:{"aria-labelledby":"dropdownMenuLink"}},[n("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),n("div",{staticClass:"dropdown-divider"}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])}],!1,null,null,null);e.default=component.exports}}]);