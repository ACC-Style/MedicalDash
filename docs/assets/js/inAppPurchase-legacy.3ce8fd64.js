(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["inAppPurchase"],{"1fb4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about",attrs:{id:"inAppPurchase"}},[a("userbar"),a("div",{staticClass:"relative"},[a("router-link",{staticClass:"absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3",attrs:{to:"dashboard"}},[a("i",{staticClass:"fas fa-arrow-left"})]),a("h1",{staticClass:"c_white text-center font_2 br_white-5 br_dotted br_0 br-b_1 p-t_4"},[t._v("Gain a Little Edge")]),a("div",{staticClass:"grid-x grid-margin-y grid-margin-x"},t._l(t.items,function(e,s){return a("productitem",t._b({key:s},"productitem",e,!1))}),1)],1)],1)},n=[],i=(a("cadf"),a("551c"),a("097d"),a("30e4")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell small-6 medium-4 card br_white-4 br_2 bg_secondary",attrs:{id:"productItem"}},[a("div",{staticClass:"grid-y text-center"},[a("div",{staticClass:"cell shrink card-section br_white-8 br_0 br-b_1 br_solid font_n1 c_white bg_secondary-n3 p_3 p-y_2"},[t._v(t._s(t.name))]),a("div",{staticClass:"cell text-center font_0 c_white p-t_4"},[a("i",{staticClass:"fas font-golden_2",class:t.icon}),a("i",{staticClass:"fas fa-times font-golden_0 p-x_2 p-y-3 p-b_4 d_inline-block"}),a("span",{staticClass:"font-golden_1 font_bold"},[t._v(t._s(t.count))])]),a("div",{staticClass:"cell shrink card-action"},[a("a",{staticClass:"button small bg_warning-n1 br_radius m-x_4",on:{click:function(e){return t.$refs.buyReveal.openReveal()}}},[a("span",[a("i",{staticClass:"fas",class:{"fa-usd-circle":"usd"==t.currency,"fa-gem":"gem"==t.currency}})]),t._v("\n\t\t\t\t"+t._s(t.price)+"\n\t\t\t")])])]),a("reveal",{ref:"buyReveal",staticClass:"bg_secondary-n2"},[a("h1",{staticClass:"c_white",attrs:{slot:"header"},slot:"header"},[t._v("Buy "+t._s(t.name))]),a("div",{staticClass:"c_white-9",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell auto"},[a("p",{staticClass:"font_1"},[t._v("\n\t\t\t\t\t\tYou are about to buy "+t._s(t.name)+" for\n\t\t\t\t\t\t"+t._s(t.price)+"\n\t\t\t\t\t\t"),a("i",{staticClass:"fas",class:{"fa-usd-circle":"usd"==t.currency,"fa-gem":"gem"==t.currency}})])])]),a("div",{staticClass:"flex flex-dir-row-reverse"},[a("div",{staticClass:"d_inline-block m-x_3"},[a("a",{staticClass:"button secondary br_radius"},[t._v("Buy")])]),a("div",{staticClass:"d_inline-block m-x_3"},[a("a",{staticClass:"button secondary br_radius",attrs:{"data-close":"","aria-label":"Close modal"}},[t._v("Close")])])])])])],1)},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reveal",attrs:{id:"reveal-dialog","data-reveal":""}},[t._m(0),t._t("header",[t._v("\n            default header\n            ")]),t._t("content",[a("h1",[t._v("Awesome. I Have It.")]),a("p",{staticClass:"lead"},[t._v("Your couch. It is mine.")]),a("p",[t._v("I'm a cool paragraph that lives inside of an even cooler modal. Wins!")])])],2)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close-button",attrs:{"data-close":"","aria-label":"Close modal",type:"button"}},[a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])}],u={name:"reveal",mounted:function(){this.reveal=new Foundation.Reveal($("#reveal-dialog"),{animationIn:"scale-in-up"})},data:function(){return{msg:"Reveal"}},methods:{openReveal:function(){this.reveal.open()},closeReveal:function(){this.reveal.close()}},destroyed:function(){this.reveal.destroy()}},d=u,_=(a("5fec"),a("2877")),f=Object(_["a"])(d,l,o,!1,null,"f12ee876",null);f.options.__file="Reveal.vue";var p=f.exports,v={components:{reveal:p},props:{name:{type:String,default:"Handfull of Dashes"},icon:{type:String,default:"fa-running"},price:{type:String,default:"0"},count:{type:String,default:"0"},currency:{type:String,default:"usd"}}},m=v,b=(a("ba92"),Object(_["a"])(m,r,c,!1,null,"b3a2b0ea",null));b.options.__file="productItem.vue";var g=b.exports,h={name:"inapppurchase",components:{productitem:g,userbar:i["a"]},data:function(){return{items:[{icon:"fa-gem",price:"1.99",currency:"usd",count:"5",name:"A Few Gems"},{icon:"fa-gem",price:"4.99",currency:"usd",count:"20",name:"Handful Gems"},{icon:"fa-gem",price:"19.99",currency:"usd",count:"100",name:"Bucket of Gems"},{icon:"fa-running",price:"25",currency:"gem",count:"5",name:"Sprint of Dashes"},{icon:"fa-running",price:"100",currency:"gem",count:"30",name:"Marathon of Dashes"},{icon:"fa-ghost",price:"30",currency:"gem",count:"5",name:"Ghosts"},{icon:"fa-axe",price:"50",currency:"gem",count:"2",name:"Cut Time"},{icon:"fa-alicorn",price:"100",currency:"gem",count:"1",name:"Skip"}]}}},C=h,y=(a("5cd7"),Object(_["a"])(C,s,n,!1,null,"1668a422",null));y.options.__file="InAppPurchase.vue";e["default"]=y.exports},"30e4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"m-x_n4 m-t_n4 p_4 p-t_3 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1",attrs:{id:"userbar"}},[a("div",{staticClass:"grid-x flex-child-auto c_white-4"},[a("router-link",{staticClass:"cell shrink self-end",attrs:{to:"dash",tag:"div"}},[a("i",{staticClass:"fas fa-bolt font-golden_1 c_white-6"}),a("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),a("span",{},[t._v("5")])]),a("router-link",{staticClass:"cell auto text-center",attrs:{to:"profile",tag:"div"}},[a("span",{},[a("i",{staticClass:"fas fa-user font-golden_1 c_white-6"}),t._v(" lvl:32\n\t\t\t")])]),a("router-link",{staticClass:"cell shrink self-end",attrs:{to:"inapppurchase",tag:"div"}},[a("i",{staticClass:"far fa-gem font-golden_1 c_white-6"}),a("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),a("span",{},[t._v("105")])])],1),a("router-link",{staticClass:"d_block c_white-4",staticStyle:{width:"100%"},attrs:{to:"profile"}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"small-12 cell"},[a("div",{staticClass:"primary progress m-b_2",staticStyle:{height:"5px"},attrs:{role:"progressbar",tabindex:"0","aria-valuenow":"25","aria-valuemin":"0","aria-valuetext":"25 percent","aria-valuemax":"100"}},[a("div",{staticClass:"progress-meter",staticStyle:{width:"45%"}},[a("p",{staticClass:"progress-meter-text m-b_2"},[t._v(" ")])])]),a("p",{staticClass:"font_n3 c_primary-4 m-b_2"},[t._v("100,254 xp to next level")])])])])],1)},n=[],i=(a("cadf"),a("551c"),a("097d"),{name:"UserBar"}),r=i,c=(a("477d"),a("2877")),l=Object(c["a"])(r,s,n,!1,null,"d43615b8",null);l.options.__file="userBar.vue";e["a"]=l.exports},"477d":function(t,e,a){"use strict";var s=a("f95f"),n=a.n(s);n.a},"5cd7":function(t,e,a){"use strict";var s=a("9e83"),n=a.n(s);n.a},"5fec":function(t,e,a){"use strict";var s=a("d05e"),n=a.n(s);n.a},"9e83":function(t,e,a){},ba92:function(t,e,a){"use strict";var s=a("e4e1"),n=a.n(s);n.a},d05e:function(t,e,a){},e4e1:function(t,e,a){},f95f:function(t,e,a){}}]);
//# sourceMappingURL=inAppPurchase-legacy.3ce8fd64.js.map