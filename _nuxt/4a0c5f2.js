(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3],{314:function(t,e,o){var content=o(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("dab4e86a",content,!0,{sourceMap:!1})},316:function(t,e,o){"use strict";o.r(e);var l={props:{configValue:String,variableName:String}},r=o(16),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.configValue.includes(t.variableName)?o("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"}},[t._v("\n  "+t._s(t.variableName)+"\n")]):o("button",{staticClass:"btn btn-secondary mt-2",attrs:{type:"button"}},[t._v("\n  "+t._s(t.variableName)+"\n")])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,o){"use strict";o(314)},326:function(t,e,o){var l=o(83)(!1);l.push([t.i,".rowShadow[data-v-7f0af580]{box-shadow:0 0 30px rgba(0,0,0,.1);border-radius:5px;padding:20px;margin:20px}",""]),t.exports=l},347:function(t,e,o){"use strict";o.r(e);var l=o(9),r=(o(47),o(65),o(66),o(29),o(201),{name:"doTheJob",data:function(){return{showError:!1,errorMessage:"",advancedSettings:!1,validConfig:!1}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var o,l,r,n,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,l=t.$auth,r=t.route,n=r.params.jobid,c=l.strategy.token.get().split(" ")[1],o.setHeader("x-access-token",c),e.next=6,o.get("/jobs/job?domainId=".concat(n)).then((function(t){return t.data}));case 6:return(d=e.sent).local_config_data=d.github_config_data,e.abrupt("return",{job:d});case 9:case"end":return e.stop()}}),e)})))()},methods:{toggleAdvancedMode:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.advancedSettings=!t.advancedSettings;case 1:case"end":return e.stop()}}),e)})))()},sendJobConfig:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.$auth.strategy.token.get().split(" ")[1],t.$axios.setHeader("x-access-token",o),r=t.job.local_config_data,!(r.productSeo.defaultTitle.includes("$PRODUKT")&&r.productSeo.defaultMetaDescription.includes("$PRODUKT")&&r.productSeo.defaultMetaDescription.includes("$HERSTELLER")&&r.productSeo.defaultMetaDescription.includes("$KATEGORIE")&&r.categorySeo.defaultTitle.includes("$KATEGORIE")&&r.categorySeo.defaultMetaDescription.includes("$KATEGORIE")&&r.brandSeo.defaultTitle.includes("$HERSTELLER")&&r.brandSeo.defaultMetaDescription.includes("$HERSTELLER"))){e.next=11;break}return console.log("config validation successfull"),e.next=7,t.$axios.post("/jobs/update",t.job);case 7:"ok"===(l=e.sent).data.status?t.$router.push("/dashboard"):(t.errorMessage=l.data.msg,t.showError=!0),e.next=12;break;case 11:console.log("config validation failed");case 12:case"end":return e.stop()}var r}),e)})))()}}}),n=(o(325),o(16)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"col-12 d-sm-flex align-items-center justify-content-between mb-4"},[o("h1",{staticClass:"h3 mb-0 text-gray-800"},[t._v("\n      Create a configuration for "+t._s(t.job.url)+"\n    ")])]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("button",{class:t.advancedSettings?"btn btn-primary float-right mb-4":"btn btn-secondary float-right mb-4",on:{click:function(e){t.advancedSettings=!t.advancedSettings}}},[t._v("\n        Expert Mode\n      ")])])]),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.sendJobConfig.apply(null,arguments)}}},[o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(1),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.title,expression:"job.local_config_data.title"}],staticClass:"form-control",attrs:{placeholder:t.job.local_config_data.title,name:"title",type:"text","aria-describedby":"title",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.title},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data,"title",e.target.value)}}}),t._v(" "),t.showError?o("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n            "+t._s(t.errorMessage)+"\n          ")]):t._e(),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v('Add a title for the Website like "Der Shop für\n            Fahrradbekleidung". Minimum 5 characters long and maximal 60\n            characters long.')])]),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"subline"}},[t._v("Subline")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.subline,expression:"job.local_config_data.subline"}],staticClass:"form-control",attrs:{name:"subline",type:"text","aria-describedby":"subline",required:"",minlength:"10",maxlength:"80"},domProps:{value:t.job.local_config_data.subline},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data,"subline",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v('Add a subline for the website like "Finde die richtige\n            Fahrradbekleidung". Minimum 10 characters long and maximal 80\n            characters long.')])]),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"featureText"}},[t._v("Featured Text on the Startpage header")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.featureText,expression:"job.local_config_data.seo.featureText"}],staticClass:"form-control",attrs:{name:"featureText",type:"text","aria-describedby":"featureText",required:"",minlength:"350",maxlength:"1000"},domProps:{value:t.job.local_config_data.seo.featureText},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo,"featureText",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Add a featureText for the website like intro. You can use html\n            tags here like the <p> tag to format the text. Minimum\n            length is 350 characters and maximal character length is\n            1000.")])]),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"checklist"}},[t._v("Checklist for product reviews")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.checklist,expression:"job.local_config_data.checklist"}],staticClass:"form-control",attrs:{name:"checklist",type:"text","aria-describedby":"checklist",required:""},domProps:{value:t.job.local_config_data.checklist},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data,"checklist",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("This field defines the criteria for which a product has been\n            tested. You need to define this values comma seperated. Example:\n            Material, Komfort, Funktion, Haltbarkeit, Whatever. Dont use more\n            then six criteria if possible.")])])])]),t._v(" "),o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(2),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"indexTitle"}},[t._v(" Site title for the index page")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.index.title,expression:"job.local_config_data.seo.index.title"}],staticClass:"form-control",attrs:{name:"indexTitle",type:"text","aria-describedby":"indexTitle",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.seo.index.title},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo.index,"title",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define the site title for the index page")])]),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"indexMetaDescription"}},[t._v("\n            Meta description for the index page")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.index.metaDescription,expression:"job.local_config_data.seo.index.metaDescription"}],staticClass:"form-control",attrs:{name:"indexMetaDescription",type:"text","aria-describedby":"indexMetaDescription",required:"",min:"120",max:"160"},domProps:{value:t.job.local_config_data.seo.index.metaDescription},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo.index,"metaDescription",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define a meta description for the index page. This meta\n            description will be shown on Google's result pages and should\n            invite the user to click to our site.")])])])]),t._v(" "),o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(3),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"shopTitle"}},[t._v(" Site title for the shop page")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.shop.title,expression:"job.local_config_data.seo.shop.title"}],staticClass:"form-control",attrs:{name:"shopTitle",type:"text","aria-describedby":"shopTitle",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.seo.shop.title},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo.shop,"title",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define the site title for the shop page")])]),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"shopMetaDescription"}},[t._v("\n            Meta description for the shop page")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.shop.metaDescription,expression:"job.local_config_data.seo.shop.metaDescription"}],staticClass:"form-control",attrs:{name:"shopMetaDescription",type:"text","aria-describedby":"shopMetaDescription",required:"",min:"120",max:"160"},domProps:{value:t.job.local_config_data.seo.shop.metaDescription},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo.shop,"metaDescription",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define a meta description for the shop page. This meta\n            description will be shown on Google's result pages and should\n            invite the user to click to our site.")])])])]),t._v(" "),o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(4),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"brandTitle"}},[t._v(" Site title for the brand page")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.hersteller.title,expression:"job.local_config_data.seo.hersteller.title"}],staticClass:"form-control",attrs:{name:"brandTitle",type:"text","aria-describedby":"brandTitle",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.seo.hersteller.title},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo.hersteller,"title",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define the site title for the brand page")])]),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"brandMetaDescription"}},[t._v("\n            Meta description for the brand page")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.seo.hersteller.metaDescription,expression:"job.local_config_data.seo.hersteller.metaDescription"}],staticClass:"form-control",attrs:{name:"brandMetaDescription",type:"text","aria-describedby":"brandMetaDescription",required:"",min:"120",max:"160"},domProps:{value:t.job.local_config_data.seo.hersteller.metaDescription},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.seo.hersteller,"metaDescription",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define a meta description for the brand page. This meta\n            description will be shown on Google's result pages and should\n            invite the user to click to our site.")])])])]),t._v(" "),o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(5),t._v(" "),o("div",{staticClass:"form-group pb-4"},[o("label",{attrs:{for:"defaultTitle"}},[t._v("The default title for product pages")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.productSeo.defaultTitle,expression:"job.local_config_data.productSeo.defaultTitle"}],staticClass:"form-control",attrs:{name:"defaultTitle",type:"text","aria-describedby":"defaultTitle",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.productSeo.defaultTitle},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.productSeo,"defaultTitle",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define the default site title for product pages. You can insert\n            the product name with the placeholder $PRODUKT.")]),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.productSeo.defaultTitle,variableName:"$PRODUKT"}})],1),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"defaultMetaDescription"}},[t._v("Default meta description for product pages")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.productSeo.defaultMetaDescription,expression:"job.local_config_data.productSeo.defaultMetaDescription"}],staticClass:"form-control",attrs:{name:"defaultMetaDescription",type:"text","aria-describedby":"defaultMetaDescription",required:"",min:"120",max:"160"},domProps:{value:t.job.local_config_data.productSeo.defaultMetaDescription},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.productSeo,"defaultMetaDescription",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define a meta description for a product page. This meta\n            description will be shown on Google's result pages and should\n            invite the user to click to our site. You can use the following\n            placeholder names:")]),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.productSeo.defaultMetaDescription,variableName:"$PRODUKT"}}),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.productSeo.defaultMetaDescription,variableName:"$HERSTELLER"}}),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.productSeo.defaultMetaDescription,variableName:"$KATEGORIE"}})],1)])]),t._v(" "),o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(6),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"defaultTitle"}},[t._v("The default title for category pages")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.categorySeo.defaultTitle,expression:"job.local_config_data.categorySeo.defaultTitle"}],staticClass:"form-control",attrs:{name:"defaultTitle",type:"text","aria-describedby":"defaultTitle",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.categorySeo.defaultTitle},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.categorySeo,"defaultTitle",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v('Use $KATEGORIE for the category name placeholder. That word will\n            later then be replaced by the category name. For example: If you\n            write a default title like "Buy $KATEGORIE online", it will be\n            translated to a title like "Buy Ankerboots online" for every\n            single category page. You can use the following placeholder\n            names:')]),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.categorySeo.defaultTitle,variableName:"$KATEGORIE"}})],1),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"defaultMetaDescription"}},[t._v("Default meta description for category pages")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.categorySeo.defaultMetaDescription,expression:"job.local_config_data.categorySeo.defaultMetaDescription"}],staticClass:"form-control",attrs:{name:"defaultMetaDescription",type:"text","aria-describedby":"defaultMetaDescription",required:"",min:"120",max:"160"},domProps:{value:t.job.local_config_data.categorySeo.defaultMetaDescription},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.categorySeo,"defaultMetaDescription",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define a meta description for a category page. This meta\n            description will be shown on Google's result pages and should\n            invite the user to click to our site. You can use the following\n            placeholder names:")]),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.categorySeo.defaultMetaDescription,variableName:"$KATEGORIE"}})],1)])]),t._v(" "),o("div",{staticClass:"row rowShadow pb-5"},[o("div",{staticClass:"col-12"},[t._m(7),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"defaultTitle"}},[t._v("The default title for manufacturer pages")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.brandSeo.defaultTitle,expression:"job.local_config_data.brandSeo.defaultTitle"}],staticClass:"form-control",attrs:{name:"defaultTitle",type:"text","aria-describedby":"defaultTitle",required:"",minlength:"5",maxlength:"60"},domProps:{value:t.job.local_config_data.brandSeo.defaultTitle},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.brandSeo,"defaultTitle",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v('Use $HERSTELLER for the manufacturer name placeholder. That word\n            will later then be replaced by the manufacturer name. For example:\n            If you write a default title like "Buy $HERSTELLER online", it\n            will be translated to a title like "Buy Ankerboots online" for\n            every single manufacturer page. You can use the following\n            placeholder names:')]),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.brandSeo.defaultTitle,variableName:"$HERSTELLER"}})],1),t._v(" "),o("div",{staticClass:"form-group pt-5"},[o("label",{attrs:{for:"defaultMetaDescription"}},[t._v("Default meta description for manufacturer pages")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.job.local_config_data.brandSeo.defaultMetaDescription,expression:"job.local_config_data.brandSeo.defaultMetaDescription"}],staticClass:"form-control",attrs:{name:"defaultMetaDescription",type:"text","aria-describedby":"defaultMetaDescription",required:"",min:"120",max:"160"},domProps:{value:t.job.local_config_data.brandSeo.defaultMetaDescription},on:{input:function(e){e.target.composing||t.$set(t.job.local_config_data.brandSeo,"defaultMetaDescription",e.target.value)}}}),t._v(" "),o("small",{staticClass:"form-text text-muted text-lg"},[t._v("Define a meta description for a manufacturer page. This meta\n            description will be shown on Google's result pages and should\n            invite the user to click to our site. You can use the following\n            placeholder names:")]),t._v(" "),o("TagButton",{attrs:{configValue:t.job.local_config_data.brandSeo.defaultMetaDescription,variableName:"$HERSTELLER"}})],1)])]),t._v(" "),t._m(8)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-6"},[o("p",[t._v("\n      In order to execute the Job, you need to fill in the whole form and then\n      send it for approval.\n    ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("General configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("Index Page Configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("Shop Page Configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("Brand Page Configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("Product pages configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("Category pages configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pt-3"},[o("h1",[t._v("Manufacturer pages configuration")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("button",{staticClass:"btn btn-lg btn-primary float-right mb-4",attrs:{type:"submit"}},[t._v("\n          Save\n        ")])])])}],!1,null,"7f0af580",null);e.default=component.exports;installComponents(component,{TagButton:o(316).default})}}]);