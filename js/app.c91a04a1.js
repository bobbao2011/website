(function(t){function e(e){for(var a,c,i=e[0],o=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"04e4":function(t,e,n){},"0f81":function(t,e,n){"use strict";var a=n("ac3f"),r=n.n(a);r.a},"51e3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),s=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("head-part"),n("nav-part"),n("router-view"),n("foot-part")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Header",{staticClass:"page-header"},[n("div",{staticClass:"title"},[n("h1",[t._v("北京崎崛科技发展有限公司")])])])},u=[],l={},f=l,p=(n("9832"),n("2877")),v=Object(p["a"])(f,o,u,!1,null,"2dc817a7",null),m=v.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu",attrs:{id:"main-menu"}},[n("button",{staticClass:"menu-toggle",attrs:{id:"toggle-menu"},on:{click:function(e){return e.preventDefault(),t.open(e)}}},[t._v(" toggle menu ")]),t._m(0)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-dropdown"},[n("ul",{staticClass:"nav-menu"},[n("li",{staticClass:"item-1"},[n("a",{attrs:{href:"/"}},[t._v("北京崎崛科技发展有限公司")])]),n("li",{staticClass:"item-2"},[n("a",{attrs:{href:"/"}},[t._v("主页")])]),n("li",{staticClass:"item-3"},[n("a",{attrs:{href:"/clinicaltrial.html"}},[t._v("临床试验")])]),n("li",{staticClass:"item-4"},[n("a",{attrs:{href:"/datamanagement.html"}},[t._v("数据管理")])]),n("li",{staticClass:"item-5"},[n("a",{attrs:{href:"/dataanalysis.html"}},[t._v("医学统计")])]),n("li",{staticClass:"item-6"},[n("a",{attrs:{href:"/aboutus.html"}},[t._v("关于我们")])])])])}],_={methods:{open:function(){var t=document.getElementById("main-menu");t.classList.toggle("is-open")}}},b=_,g=(n("0f81"),Object(p["a"])(b,d,h,!1,null,"a1513504",null)),C=g.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"page-footer"},[n("p",[t._v("© 2021 北京崎崛科技发展有限公司 All rights reserved ")]),n("p",[t._v("备案号：京ICP备15012807号")])])])}],O={},w=O,x=(n("dcb3"),Object(p["a"])(w,y,j,!1,null,"ac8c062c",null)),P=x.exports,$={components:{HeadPart:m,NavPart:C,FootPart:P}},E=$,k=(n("034f"),Object(p["a"])(E,c,i,!1,null,null,null)),S=k.exports,M=n("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("img",{staticClass:"item-1",attrs:{src:n("a0e3"),alt:""}}),a("p",{staticClass:"item-2"},[t._v("临床研究数据信息化服务提供商")]),a("p",{staticClass:"item-3"},[t._v("信息驱动服务，数据创造价值")]),a("p",{staticClass:"item-4"},[a("router-link",{staticClass:"item-4-1",attrs:{to:"/aboutus"}},[t._v("关于我们 →")])],1)])},H=[],I={},J=I,R=(n("d0c2"),Object(p["a"])(J,T,H,!1,null,"2a7a4bda",null)),q=R.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutus-page"},[n("p",[t._v("北京崎崛科技发展有限公司是一家专注于临床试验数据管理、数据统计分析的信息化服务提供商")]),n("p",[t._v(t._s(t.message))])])},B=[],D=(n("96cf"),n("1da1")),F={data:function(){return{message:{}}},created:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios("http://localhost:3000/data/hello.json").data;case 2:n=e.sent,t.message=n;case 4:case"end":return e.stop()}}),e)})))()}},L=F,N=Object(p["a"])(L,A,B,!1,null,"13cc15f0",null),z=N.exports;a["a"].use(M["a"]);var G=new M["a"]({routes:[{path:"/",component:q},{path:"/aboutus",component:z}]});a["a"].config.productionTip=!1,a["a"].prototype.$axios=s.a,new a["a"]({router:G,render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,n){},9832:function(t,e,n){"use strict";var a=n("ca0b"),r=n.n(a);r.a},a0e3:function(t,e,n){t.exports=n.p+"img/qijue.bf994777.png"},ac3f:function(t,e,n){},ca0b:function(t,e,n){},d0c2:function(t,e,n){"use strict";var a=n("51e3"),r=n.n(a);r.a},dcb3:function(t,e,n){"use strict";var a=n("04e4"),r=n.n(a);r.a}});
//# sourceMappingURL=app.c91a04a1.js.map