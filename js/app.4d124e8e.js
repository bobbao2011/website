(function(t){function e(e){for(var n,i,c=e[0],o=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"04e4":function(t,e,a){},"0f81":function(t,e,a){"use strict";var n=a("ac3f"),r=a.n(n);r.a},"51e3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),s=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("head-part"),a("nav-part"),a("router-view"),a("foot-part")],1)},c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Header",{staticClass:"page-header"},[a("div",{staticClass:"title"},[a("h1",[t._v("北京崎崛科技发展有限公司")])])])},u=[],l={},f=l,p=(a("9832"),a("2877")),v=Object(p["a"])(f,o,u,!1,null,"2dc817a7",null),d=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"menu",attrs:{id:"main-menu"}},[a("button",{staticClass:"menu-toggle",attrs:{id:"toggle-menu"},on:{click:function(e){return e.preventDefault(),t.open(e)}}},[t._v(" toggle menu ")]),t._m(0)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-dropdown"},[a("ul",{staticClass:"nav-menu"},[a("li",{staticClass:"item-1"},[a("a",{attrs:{href:"/"}},[t._v("北京崎崛科技发展有限公司")])]),a("li",{staticClass:"item-2"},[a("a",{attrs:{href:"/"}},[t._v("主页")])]),a("li",{staticClass:"item-3"},[a("a",{attrs:{href:"/clinicaltrial.html"}},[t._v("临床试验")])]),a("li",{staticClass:"item-4"},[a("a",{attrs:{href:"/datamanagement.html"}},[t._v("数据管理")])]),a("li",{staticClass:"item-5"},[a("a",{attrs:{href:"/dataanalysis.html"}},[t._v("医学统计")])]),a("li",{staticClass:"item-6"},[a("a",{attrs:{href:"/aboutus.html"}},[t._v("关于我们")])])])])}],b={methods:{open:function(){var t=document.getElementById("main-menu");t.classList.toggle("is-open")}}},_=b,g=(a("0f81"),Object(p["a"])(_,m,h,!1,null,"a1513504",null)),C=g.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"page-footer"},[a("p",[t._v("© 2021 北京崎崛科技发展有限公司 All rights reserved ")]),a("p",[t._v("备案号：京ICP备15012807号")])])])}],j={},O=j,w=(a("dcb3"),Object(p["a"])(O,x,y,!1,null,"ac8c062c",null)),$=w.exports,P={components:{HeadPart:d,NavPart:C,FootPart:$}},E=P,k=(a("034f"),Object(p["a"])(E,i,c,!1,null,null,null)),S=k.exports,M=a("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("img",{staticClass:"item-1",attrs:{src:a("a0e3"),alt:""}}),n("p",{staticClass:"item-2"},[t._v("临床研究数据信息化服务提供商")]),n("p",{staticClass:"item-3"},[t._v("信息驱动服务，数据创造价值")]),n("p",{staticClass:"item-4"},[n("router-link",{staticClass:"item-4-1",attrs:{to:"/aboutus"}},[t._v("关于我们 →")])],1)])},H=[],I={},J=I,R=(a("d0c2"),Object(p["a"])(J,T,H,!1,null,"2a7a4bda",null)),q=R.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutus-page"},[a("p",[t._v("北京崎崛科技发展有限公司是一家专注于临床试验数据管理、数据统计分析的信息化服务提供商")]),a("p",[t._v(t._s(t.message))]),a("p",[t._v(t._s(t.aboutus))])])},B=[],D=(a("96cf"),a("1da1")),F={data:function(){return{message:{},aboutus:{}}},created:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios("/datamanage.json");case 2:return a=e.sent.data.data,e.next=5,t.$axios("/aboutus.txt");case 5:n=e.sent.data,t.message=a,t.aboutus=n;case 8:case"end":return e.stop()}}),e)})))()}},L=F,N=Object(p["a"])(L,A,B,!1,null,"2da67b64",null),z=N.exports;n["a"].use(M["a"]);var G=new M["a"]({routes:[{path:"/",component:q},{path:"/aboutus",component:z}]});n["a"].config.productionTip=!1,n["a"].prototype.$axios=s.a,new n["a"]({router:G,render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,a){},9832:function(t,e,a){"use strict";var n=a("ca0b"),r=a.n(n);r.a},a0e3:function(t,e,a){t.exports=a.p+"img/qijue.bf994777.png"},ac3f:function(t,e,a){},ca0b:function(t,e,a){},d0c2:function(t,e,a){"use strict";var n=a("51e3"),r=a.n(n);r.a},dcb3:function(t,e,a){"use strict";var n=a("04e4"),r=a.n(n);r.a}});
//# sourceMappingURL=app.4d124e8e.js.map