(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["leaderboard"],{"2f21":function(t,s,e){"use strict";var a=e("79e5");t.exports=function(t,s){return!!t&&a(function(){s?t.call(null,function(){},1):t.call(null)})}},"30e4":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"m-x_n4 m-t_n4 p_4 p-t_3 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1",attrs:{id:"userbar"}},[e("div",{staticClass:"grid-x flex-child-auto c_white-4"},[e("router-link",{staticClass:"cell shrink self-end",attrs:{to:"dash",tag:"div"}},[e("i",{staticClass:"fas fa-bolt font-golden_1 c_white-6"}),e("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),e("span",{},[t._v("5")])]),e("router-link",{staticClass:"cell auto text-center",attrs:{to:"profile",tag:"div"}},[e("span",{},[e("i",{staticClass:"fas fa-user font-golden_1 c_white-6"}),t._v(" lvl:32\n\t\t\t")])]),e("router-link",{staticClass:"cell shrink self-end",attrs:{to:"inapppurchase",tag:"div"}},[e("i",{staticClass:"far fa-gem font-golden_1 c_white-6"}),e("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),e("span",{},[t._v("105")])])],1),e("router-link",{staticClass:"d_block c_white-4",staticStyle:{width:"100%"},attrs:{to:"profile"}},[e("div",{staticClass:"grid-x"},[e("div",{staticClass:"small-12 cell"},[e("div",{staticClass:"primary progress m-b_2",staticStyle:{height:"5px"},attrs:{role:"progressbar",tabindex:"0","aria-valuenow":"25","aria-valuemin":"0","aria-valuetext":"25 percent","aria-valuemax":"100"}},[e("div",{staticClass:"progress-meter",staticStyle:{width:"45%"}},[e("p",{staticClass:"progress-meter-text m-b_2"},[t._v(" ")])])]),e("p",{staticClass:"font_n3 c_primary-4 m-b_2"},[t._v("100,254 xp to next level")])])])])],1)},r=[],i=(e("cadf"),e("551c"),e("097d"),{name:"UserBar"}),n=i,l=(e("477d"),e("2877")),c=Object(l["a"])(n,a,r,!1,null,"d43615b8",null);c.options.__file="userBar.vue";s["a"]=c.exports},"477d":function(t,s,e){"use strict";var a=e("f95f"),r=e.n(a);r.a},"55dd":function(t,s,e){"use strict";var a=e("5ca1"),r=e("d8e8"),i=e("4bf8"),n=e("79e5"),l=[].sort,c=[1,2,3];a(a.P+a.F*(n(function(){c.sort(void 0)})||!n(function(){c.sort(null)})||!e("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},"5d6b":function(t,s,e){},6950:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"leaderboard"},[e("userbar"),e("div",{staticClass:"relative"},[e("router-link",{staticClass:"absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3",attrs:{to:"dashboard"}},[e("i",{staticClass:"fas fa-arrow-left"})]),e("h1",{staticClass:"c_white text-center font_2 br_white-5 br_dotted br_0 br-b_1 p-t_4"},[t._v("LEADERBOARD")]),e("div",{staticClass:"counter_reset"},t._l(t.playersByScore,function(s,a){return e("playerlisting",t._b({key:a},"playerlisting",s,!1))}),1)],1)],1)},r=[],i=(e("55dd"),e("cadf"),e("551c"),e("097d"),e("30e4")),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"c_white grid-x"},[t._m(0),e("div",{staticClass:"cell auto"},[e("span",[t._v(t._s(t.name))]),t._v(" -\n\t\t"),e("span",[t._v(t._s(t.score))])])])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cell shrink"},[e("span",{staticClass:"font_bold counter counter_increment"},[t._v(":")])])}],c={props:{name:{type:String,default:"Player 1"},score:{type:String,default:0}}},o=c,u=(e("7576"),e("2877")),f=Object(u["a"])(o,n,l,!1,null,"62dfdbc0",null);f.options.__file="leaderbaordperson.vue";var _=f.exports,d={components:{userbar:i["a"],playerlisting:_},data:function(){return{players:[{name:"frankie",score:"100121"},{name:"josh",score:"3"},{name:"mike",score:"4654"},{name:"josh",score:"3132"},{name:"simon",score:"30514"}]}},computed:{playersByScore:function(){return this.players.sort(score)}},methods:{compare:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(t,s){}}}},p=d,v=(e("cf24"),Object(u["a"])(p,a,r,!1,null,"0cdf259c",null));v.options.__file="Leaderboard.vue";s["default"]=v.exports},7576:function(t,s,e){"use strict";var a=e("5d6b"),r=e.n(a);r.a},a512:function(t,s,e){},cf24:function(t,s,e){"use strict";var a=e("a512"),r=e.n(a);r.a},f95f:function(t,s,e){}}]);
//# sourceMappingURL=leaderboard-legacy.25d91239.js.map