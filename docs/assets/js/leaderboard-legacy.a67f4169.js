(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["leaderboard"],{"05e5":function(t,e,r){"use strict";var a=r("e7fd"),n=r.n(a);n.a},"0bfb":function(t,e,r){"use strict";var a=r("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,r){var a=r("52a7"),n=r("4630"),s=r("6821"),i=r("6a99"),c=r("69a8"),o=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=s(t),e=i(e,!0),o)try{return l(t,e)}catch(t){}if(c(t,e))return n(!a.f.call(t,e),t[e])}},"28c7":function(t,e,r){"use strict";var a=r("4d9a"),n=r.n(a);n.a},"2f21":function(t,e,r){"use strict";var a=r("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"30e4":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"m-x_n4 m-t_n4 p_4 p-t_3 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1",attrs:{id:"userbar"}},[r("div",{staticClass:"grid-x flex-child-auto c_white-4"},[r("router-link",{staticClass:"cell shrink self-end",attrs:{to:"dash",tag:"div"}},[r("i",{staticClass:"fas fa-bolt font-golden_1 c_white-6"}),r("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),r("span",{},[t._v("5")])]),r("router-link",{staticClass:"cell auto text-center",attrs:{to:"profile",tag:"div"}},[r("span",{},[r("i",{staticClass:"fas fa-user font-golden_1 c_white-6"}),t._v(" lvl:32\n\t\t\t")])]),r("router-link",{staticClass:"cell shrink self-end",attrs:{to:"inapppurchase",tag:"div"}},[r("i",{staticClass:"far fa-gem font-golden_1 c_white-6"}),r("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),r("span",{},[t._v("105")])])],1),r("router-link",{staticClass:"d_block c_white-4",staticStyle:{width:"100%"},attrs:{to:"profile"}},[r("div",{staticClass:"grid-x"},[r("div",{staticClass:"small-12 cell"},[r("div",{staticClass:"primary progress m-b_2",staticStyle:{height:"5px"},attrs:{role:"progressbar",tabindex:"0","aria-valuenow":"25","aria-valuemin":"0","aria-valuetext":"25 percent","aria-valuemax":"100"}},[r("div",{staticClass:"progress-meter",staticStyle:{width:"45%"}},[r("p",{staticClass:"progress-meter-text m-b_2"},[t._v(" ")])])]),r("p",{staticClass:"font_n3 c_primary-4 m-b_2"},[t._v("100,254 xp to next level")])])])])],1)},n=[],s=(r("cadf"),r("551c"),r("097d"),{name:"UserBar"}),i=s,c=(r("477d"),r("2877")),o=Object(c["a"])(i,a,n,!1,null,"d43615b8",null);o.options.__file="userBar.vue";e["a"]=o.exports},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"477d":function(t,e,r){"use strict";var a=r("f95f"),n=r.n(a);n.a},"4d9a":function(t,e,r){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"55dd":function(t,e,r){"use strict";var a=r("5ca1"),n=r("d8e8"),s=r("4bf8"),i=r("79e5"),c=[].sort,o=[1,2,3];a(a.P+a.F*(i(function(){o.sort(void 0)})||!i(function(){o.sort(null)})||!r("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(s(this)):c.call(s(this),n(t))}})},"5dbc":function(t,e,r){var a=r("d3f4"),n=r("8b97").set;t.exports=function(t,e,r){var s,i=e.constructor;return i!==r&&"function"==typeof i&&(s=i.prototype)!==r.prototype&&a(s)&&n&&n(t,s),t}},6950:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"leaderboard"},[r("userbar"),r("div",{staticClass:"relative"},[r("router-link",{staticClass:"absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3",attrs:{to:"dashboard"}},[r("i",{staticClass:"fas fa-arrow-left"})]),r("h1",{staticClass:"c_white text-center font_2 br_white-5 br_dotted br_0 br-b_1 p-t_4"},[t._v("LEADERBOARD")]),r("div",{staticClass:"counter_reset"},t._l(t.playersByScore,function(e,a){return r("playerlisting",t._b({key:a},"playerlisting",e,!1))}),1)],1)],1)},n=[],s=(r("55dd"),r("cadf"),r("551c"),r("097d"),r("30e4")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c_white grid-x font_3 br-b_1 br_solid br_white-2"},[t._m(0),r("div",{staticClass:"cell auto"},[r("span",{},[t._v(t._s(t.name))]),t._v(" -\n\t\t"),r("span",{staticClass:"c_primary-3"},[t._v(t._s(t.visiblescore))])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cell shrink"},[r("span",{staticClass:"font_bold counter counter_increment"},[t._v(":")])])}],o=(r("6b54"),r("c5f6"),{props:{name:{type:String,default:"Player 1"},score:{type:Number,default:0}},data:function(){return{visiblescore:this.score.toString()}}}),l=o,f=(r("05e5"),r("2877")),u=Object(f["a"])(l,i,c,!1,null,"7670ebef",null);u.options.__file="leaderbaordperson.vue";var p=u.exports,_={components:{userbar:s["a"],playerlisting:p},data:function(){return{players:[{name:"frankie",score:100121},{name:"josh",score:3},{name:"mike",score:4654},{name:"josh",score:3132},{name:"simon",score:30514}]}},computed:{playersByScore:function(){return this.players.sort(this.compare("score","desc"))}},methods:{compare:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(r,a){if(!r.hasOwnProperty(t)||!a.hasOwnProperty(t))return 0;var n="string"===typeof r[t]?r[t].toUpperCase():r[t],s="string"===typeof a[t]?a[t].toUpperCase():a[t],i=0;return n>s?i=1:n<s&&(i=-1),"desc"==e?-1*i:i}}}},d=_,b=(r("28c7"),Object(f["a"])(d,a,n,!1,null,"5261057e",null));b.options.__file="Leaderboard.vue";e["default"]=b.exports},"6b54":function(t,e,r){"use strict";r("3846");var a=r("cb7c"),n=r("0bfb"),s=r("9e1e"),i="toString",c=/./[i],o=function(t){r("2aba")(RegExp.prototype,i,t,!0)};r("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?o(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)}):c.name!=i&&o(function(){return c.call(this)})},"8b97":function(t,e,r){var a=r("d3f4"),n=r("cb7c"),s=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return s(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:s}},9093:function(t,e,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},aa77:function(t,e,r){var a=r("5ca1"),n=r("be13"),s=r("79e5"),i=r("fdef"),c="["+i+"]",o="​",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),u=function(t,e,r){var n={},c=s(function(){return!!i[t]()||o[t]()!=o}),l=n[t]=c?e(p):i[t];r&&(n[r]=l),a(a.P+a.F*c,"String",n)},p=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(f,"")),t};t.exports=u},c5f6:function(t,e,r){"use strict";var a=r("7726"),n=r("69a8"),s=r("2d95"),i=r("5dbc"),c=r("6a99"),o=r("79e5"),l=r("9093").f,f=r("11e9").f,u=r("86cc").f,p=r("aa77").trim,_="Number",d=a[_],b=d,v=d.prototype,g=s(r("2aeb")(v))==_,h="trim"in String.prototype,m=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():p(e,3);var r,a,n,s=e.charCodeAt(0);if(43===s||45===s){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var i,o=e.slice(2),l=0,f=o.length;l<f;l++)if(i=o.charCodeAt(l),i<48||i>n)return NaN;return parseInt(o,a)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(g?o(function(){v.valueOf.call(r)}):s(r)!=_)?i(new b(m(e)),r,d):m(e)};for(var y,C=r("9e1e")?l(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)n(b,y=C[x])&&!n(d,y)&&u(d,y,f(b,y));d.prototype=v,v.constructor=d,r("2aba")(a,_,d)}},e7fd:function(t,e,r){},f95f:function(t,e,r){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=leaderboard-legacy.a67f4169.js.map