(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["leaderboard"],{"2f21":function(t,s,a){"use strict";var e=a("79e5");t.exports=function(t,s){return!!t&&e(function(){s?t.call(null,function(){},1):t.call(null)})}},"30e4":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"m-x_n4 m-t_n4 p_4 p-t_3 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1",attrs:{id:"userbar"}},[a("div",{staticClass:"grid-x flex-child-auto c_white-4"},[a("router-link",{staticClass:"cell shrink self-end",attrs:{to:"dash",tag:"div"}},[a("i",{staticClass:"fas fa-bolt font-golden_1 c_white-6"}),a("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),a("span",{},[t._v("5")])]),a("router-link",{staticClass:"cell auto text-center",attrs:{to:"profile",tag:"div"}},[a("span",{},[a("i",{staticClass:"fas fa-user font-golden_1 c_white-6"}),t._v(" lvl:32\n\t\t\t")])]),a("router-link",{staticClass:"cell shrink self-end",attrs:{to:"inapppurchase",tag:"div"}},[a("i",{staticClass:"far fa-gem font-golden_1 c_white-6"}),a("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),a("span",{},[t._v("105")])])],1),a("router-link",{staticClass:"d_block c_white-4",staticStyle:{width:"100%"},attrs:{to:"profile"}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"small-12 cell"},[a("div",{staticClass:"primary progress m-b_2",staticStyle:{height:"5px"},attrs:{role:"progressbar",tabindex:"0","aria-valuenow":"25","aria-valuemin":"0","aria-valuetext":"25 percent","aria-valuemax":"100"}},[a("div",{staticClass:"progress-meter",staticStyle:{width:"45%"}},[a("p",{staticClass:"progress-meter-text m-b_2"},[t._v(" ")])])]),a("p",{staticClass:"font_n3 c_primary-4 m-b_2"},[t._v("100,254 xp to next level")])])])])],1)},r=[],i=(a("cadf"),a("551c"),a("097d"),{name:"UserBar"}),n=i,l=(a("477d"),a("2877")),c=Object(l["a"])(n,e,r,!1,null,"d43615b8",null);c.options.__file="userBar.vue";s["a"]=c.exports},"477d":function(t,s,a){"use strict";var e=a("f95f"),r=a.n(e);r.a},"55dd":function(t,s,a){"use strict";var e=a("5ca1"),r=a("d8e8"),i=a("4bf8"),n=a("79e5"),l=[].sort,c=[1,2,3];e(e.P+e.F*(n(function(){c.sort(void 0)})||!n(function(){c.sort(null)})||!a("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},6950:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"leaderboard"},[a("userbar"),a("div",{staticClass:"relative"},[a("router-link",{staticClass:"absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3",attrs:{to:"dashboard"}},[a("i",{staticClass:"fas fa-arrow-left"})]),a("h1",{staticClass:"c_white text-center font_2 br_white-5 br_dotted br_0 br-b_1 p-t_4"},[t._v("LEADERBOARD")]),a("div",{staticClass:"counter_reset"},t._l(t.playersByScore,function(s,e){return a("playerlisting",t._b({key:e},"playerlisting",s,!1))}),1)],1)],1)},r=[],i=(a("55dd"),a("cadf"),a("551c"),a("097d"),a("30e4")),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"c_white grid-x"},[t._m(0),a("div",{staticClass:"cell auto"},[a("span",[t._v(t._s(t.name))]),t._v(" -\n\t\t"),a("span",[t._v(t._s(t.score))])])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cell shrink"},[a("span",{staticClass:"font_bold counter counter_increment"},[t._v(":")])])}],c={props:{name:{type:String,default:"Player 1"},score:{type:String,default:"0"}}},o=c,u=(a("73cf"),a("2877")),f=Object(u["a"])(o,n,l,!1,null,"6412723c",null);f.options.__file="leaderbaordperson.vue";var _=f.exports,d={components:{userbar:i["a"],playerlisting:_},data:function(){return{players:[{name:"frankie",score:"100,121"},{name:"josh",score:"3"}]}},computed:{playersByScore:function(){return this.players.sort(score)}}},p=d,v=(a("f461"),Object(u["a"])(p,e,r,!1,null,"0b44b6af",null));v.options.__file="Leaderboard.vue";s["default"]=v.exports},"73cf":function(t,s,a){"use strict";var e=a("d83d"),r=a.n(e);r.a},"757c":function(t,s,a){},d83d:function(t,s,a){},f461:function(t,s,a){"use strict";var e=a("757c"),r=a.n(e);r.a},f95f:function(t,s,a){}}]);
//# sourceMappingURL=leaderboard-legacy.df4fee94.js.map