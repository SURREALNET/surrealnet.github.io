(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{309:function(t,e,r){"use strict";var n=r(2),o=r(3),l=r(48),c=r(310),d=r(202),v=r(4),m=RangeError,f=String,h=Math.floor,_=o(d),C=o("".slice),x=o(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},y=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},D=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},O=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:v((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!v((function(){x({})}))},{toFixed:function(t){var e,r,n,o,d=c(this),v=l(t),data=[0,0,0,0,0,0],h="",x="0";if(v<0||v>20)throw m("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return f(d);if(d<0&&(h="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(y(data,0,r),n=v;n>=7;)y(data,1e7,0),n-=7;for(y(data,w(10,n,1),0),n=e-1;n>=23;)D(data,1<<23),n-=23;D(data,1<<n),y(data,1,1),D(data,2),x=O(data)}else y(data,0,r),y(data,1<<-e,0),x=O(data)+_("0",v);return x=v>0?h+((o=x.length)<=v?"0."+_("0",v-o)+x:C(x,0,o-v)+"."+C(x,o-v)):h+x}})},310:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},349:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(47),r(29),r(201),r(40),r(15),r(309),{name:"dashboard",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,v,m,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$axios,"admin"!==!(n=t.$auth).user.role){e.next=3;break}return e.abrupt("return",{});case 3:return o=n.strategy.token.get().split(" ")[1],r.setHeader("x-access-token",o),e.next=7,r.get("/domains/domains");case 7:return l=e.sent,c=l.data.length,d=l.data.filter((function(t){return 200===t.sitemap_status_code})).length,v=l.data.filter((function(t){return 200!==t.sitemap_status_code})).length,e.next=13,r.get("/jobs/jobs");case 13:return m=e.sent,f=m.data.filter((function(t){return"ready"===t.status})),h=(f.length/m.data.length*100).toFixed(0),e.abrupt("return",{numberOfDomains:c,healthyDomains:d,unhealthyDomains:v,percentageOfDoneJobs:h});case 17:case"end":return e.stop()}}),e)})))()}}),l=r(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[r("div",{staticClass:"card border-left-primary shadow h-100 py-2"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row no-gutters align-items-center"},[r("div",{staticClass:"col mr-2"},[r("div",{staticClass:"\n                  text-xs\n                  font-weight-bold\n                  text-primary text-uppercase\n                  mb-1\n                "},[r("nuxt-link",{attrs:{to:"/domains/list"}},[t._v("Number of Domains")])],1),t._v(" "),r("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("\n                "+t._s(t.numberOfDomains)+"\n              ")])]),t._v(" "),t._m(1)])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[r("div",{staticClass:"card border-left-success shadow h-100 py-2"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row no-gutters align-items-center"},[r("div",{staticClass:"col mr-2"},[r("div",{staticClass:"\n                  text-xs\n                  font-weight-bold\n                  text-success text-uppercase\n                  mb-1\n                "},[r("nuxt-link",{attrs:{to:"/domains/list?status=online"}},[t._v("Domains online")])],1),t._v(" "),r("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("\n                "+t._s(t.healthyDomains)+"\n              ")])]),t._v(" "),t._m(2)])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[r("div",{staticClass:"card border-left-danger shadow h-100 py-2"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row no-gutters align-items-center"},[r("div",{staticClass:"col mr-2"},[r("div",{staticClass:"\n                  text-xs\n                  font-weight-bold\n                  text-danger text-uppercase\n                  mb-1\n                "},[r("nuxt-link",{attrs:{to:"/domains/list?status=offline"}},[t._v("Domains offline")])],1),t._v(" "),r("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("\n                "+t._s(t.unhealthyDomains)+"\n              ")])]),t._v(" "),t._m(3)])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[r("div",{staticClass:"card border-left-info shadow h-100 py-2"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row no-gutters align-items-center"},[r("div",{staticClass:"col mr-2"},[r("div",{staticClass:"text-xs font-weight-bold text-info text-uppercase mb-1"},[t._v("\n                Jobs\n              ")]),t._v(" "),r("div",{staticClass:"row no-gutters align-items-center"},[r("div",{staticClass:"col-auto"},[r("div",{staticClass:"h5 mb-0 mr-3 font-weight-bold text-gray-800"},[t._v("\n                    "+t._s(t.percentageOfDoneJobs)+"%\n                  ")])]),t._v(" "),r("div",{staticClass:"col"},[r("div",{staticClass:"progress progress-sm mr-2"},[r("div",{staticClass:"progress-bar bg-info",style:"width: "+t.percentageOfDoneJobs+"%",attrs:{role:"progressbar","aria-valuenow":""+t.percentageOfDoneJobs,"aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),t._m(4)])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 mb-4"},[r("div",{staticClass:"card shadow mb-4"},[t._m(5),t._v(" "),r("div",{staticClass:"card-body"},[r("h4",{staticClass:"small font-weight-bold"},[t._v("\n            100 Domains\n            "),r("span",{staticClass:"float-right"},[t._v(t._s(1*t.numberOfDomains)+"%")])]),t._v(" "),r("div",{staticClass:"progress mb-4"},[r("div",{staticClass:"progress-bar bg-danger",style:"width: "+1*t.numberOfDomains+"%",attrs:{role:"progressbar","aria-valuenow":""+1*t.numberOfDomains,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),r("h4",{staticClass:"small font-weight-bold"},[t._v("\n            250 Domains\n            "),r("span",{staticClass:"float-right"},[t._v(t._s(.4*t.numberOfDomains)+"%")])]),t._v(" "),r("div",{staticClass:"progress mb-4"},[r("div",{staticClass:"progress-bar bg-warning",style:"width: "+.4*t.numberOfDomains+"%",attrs:{role:"progressbar","aria-valuenow":""+.4*t.numberOfDomains,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),r("h4",{staticClass:"small font-weight-bold"},[t._v("\n            500 Domains\n            "),r("span",{staticClass:"float-right"},[t._v(t._s(.2*t.numberOfDomains)+"%")])]),t._v(" "),r("div",{staticClass:"progress mb-4"},[r("div",{staticClass:"progress-bar",style:"width: "+.2*t.numberOfDomains+"%",attrs:{role:"progressbar","aria-valuenow":""+.2*t.numberOfDomains,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),r("h4",{staticClass:"small font-weight-bold"},[t._v("\n            1000\n            "),r("span",{staticClass:"float-right"},[t._v(t._s(.1*t.numberOfDomains)+"%")])]),t._v(" "),r("div",{staticClass:"progress mb-4"},[r("div",{staticClass:"progress-bar bg-info",style:"width: "+.1*t.numberOfDomains+"%",attrs:{role:"progressbar","aria-valuenow":""+.1*t.numberOfDomains,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),r("h4",{staticClass:"small font-weight-bold"},[t._v("\n            5000\n            "),r("span",{staticClass:"float-right"},[t._v(t._s(.02*t.numberOfDomains)+"%")])]),t._v(" "),r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar bg-success",style:"width: "+.02*t.numberOfDomains+"%",attrs:{role:"progressbar","aria-valuenow":""+.02*t.numberOfDomains,"aria-valuemin":"0","aria-valuemax":"100"}})])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-sm-flex align-items-center justify-content-between mb-4"},[r("h1",{staticClass:"h3 mb-0 text-gray-800"},[t._v("Dashboard")]),t._v(" "),r("a",{staticClass:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",attrs:{href:"#"}},[r("i",{staticClass:"fas fa-download fa-sm text-white-50"}),t._v(" Generate Report")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("i",{staticClass:"fas fa-calendar fa-2x text-gray-300"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("i",{staticClass:"fas fa-dollar-sign fa-2x text-gray-300"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("i",{staticClass:"fas fa-comments fa-2x text-gray-300"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("i",{staticClass:"fas fa-clipboard-list fa-2x text-gray-300"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header py-3"},[r("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Meilensteine")])])}],!1,null,null,null);e.default=component.exports}}]);