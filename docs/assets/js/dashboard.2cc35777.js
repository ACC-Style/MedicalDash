(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"30e4":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"m-x_n4 m-t_n4 p_4 p-t_3 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1",attrs:{id:"userbar"}},[a("div",{staticClass:"grid-x flex-child-auto c_white-4"},[a("router-link",{staticClass:"cell shrink self-end",attrs:{to:"dash",tag:"div"}},[a("i",{staticClass:"fas fa-bolt font-golden_1 c_white-6"}),a("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),a("span",{},[t._v(t._s(t.getDash()))]),a("br"),a("small",[t._v(t._s(t.getRechargeTimer()))])]),a("router-link",{staticClass:"cell auto text-center",attrs:{to:"profile",tag:"div"}},[a("span",{},[a("i",{staticClass:"fas fa-user font-golden_1 c_white-6"}),t._v(" Level: "+t._s(t.getLevel())+"\n\t\t\t")])]),a("router-link",{staticClass:"cell shrink",attrs:{to:"inapppurchase",tag:"div"}},[a("i",{staticClass:"far fa-gem font-golden_1 c_white-6"}),a("i",{staticClass:"fas fa-times p-y_3 p-x_2 font-golden_0"}),a("span",{},[t._v(t._s(t.getGems()))])])],1),a("router-link",{staticClass:"d_block c_white-4 m-t_3",staticStyle:{width:"100%"},attrs:{to:"profile"}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"small-12 cell"},[a("div",{staticClass:"primary progress m-b_2",staticStyle:{height:"5px"},attrs:{role:"progressbar",tabindex:"0","aria-valuenow":"25","aria-valuemin":"0","aria-valuetext":"25 percent","aria-valuemax":"100"}},[a("div",{staticClass:"progress-meter",staticStyle:{width:"45%"},style:{width:t.progress}},[a("p",{staticClass:"progress-meter-text m-b_2"},[t._v(" ")])])]),a("p",{staticClass:"font_n3 c_primary-4 m-b_2"},[t._v(t._s(t.getTotalExp()-t.getExp())+" xp to next level")])])])])],1)},i=[],l={name:"UserBar",methods:{getDash:function(){return this.$store.state.userModule.dash},getGems:function(){return this.$store.state.userModule.gems},getExp:function(){return this.$store.state.userModule.experience},getTotalExp:function(){return this.$store.state.userModule.totalexperience},getLevel:function(){return this.$store.state.userModule.level},getRechargeTimer:function(){return this.$store.getters.dashRechargeTimer}},computed:{progress:function(){return this.getExp()/this.getTotalExp()*100+"%"}}},r=l,o=a("2877"),n=Object(o["a"])(r,e,i,!1,null,"449c5bb5",null);s["a"]=n.exports},7277:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard"},[a("userBar"),a("div",{staticClass:"grid-x p_4"},[a("loginLogo")],1),a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-10 large-8 m_auto",staticStyle:{"max-width":"54em"}},[a("div",{staticClass:"card shadow_2 cell br_radius bg_secondary br_primary-n1 bw_2"},[a("div",{staticClass:"card-section relative br_primary-n3"},[a("ul",{staticClass:"no-bullet grid-x grid-margin-x"},[a("li",{staticClass:"cell small-12"},[a("router-link",{staticClass:"button relative hollow br_radius animated-button victoria-two expanded grid-x bg_primary",class:[{disabled:0===t.getDash()}],attrs:{to:"/dash"}},[a("div",{staticClass:"grid-x font_3 font_4:md"},[a("div",{staticClass:"p_2 cell shrink"},[a("i",{staticClass:"font_4 fas fa-angle-double-right c_white"})]),a("div",{staticClass:"cell auto text font_display font_bold font_italic p-t_3"},[a("i",{staticClass:"fas fa-bolt"}),t._v(" Start Dash\n\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"p_2 cell shrink"},[a("i",{staticClass:"font_4 fas fa-angle-double-right c_white"})])]),0===t.getDash()?a("small",{staticClass:"c_white lowercase"},[t._v("(Wait "+t._s(t.getRechargeTimer())+" for dash recharge, or visit store to buy more dash)")]):t._e()])],1),a("li",{staticClass:"cell small-12"},[a("router-link",{staticClass:"button relative hollow br_radius animated-button victoria-two expanded grid-x",attrs:{to:"/challenges",href:""}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"p_2 cell shrink"},[a("i",{staticClass:"font_2 fas fa-angle-double-right"})]),a("div",{staticClass:"cell auto text font_2 font_display m-t_2 font_bold font_italic"},[a("i",{staticClass:"fas fa-badge-check"}),t._v(" Challenges\n\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"p_2 cell shrink"},[a("i",{staticClass:"font_2 fas fa-angle-double-right"})])])])],1),a("li",{staticClass:"cell small-12"},[a("router-link",{staticClass:"button relative hollow br_radius animated-button victoria-two expanded grid-x",attrs:{to:"/leaderboard",href:""}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"p_2 cell shrink"},[a("i",{staticClass:"font_2 fas fa-angle-double-right"})]),a("div",{staticClass:"cell auto text font_2 font_display m-t_2 font_bold font_italic"},[a("i",{staticClass:"fas fa-trophy-alt"}),t._v(" Leaderboard\n\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"p_2 cell shrink"},[a("i",{staticClass:"font_2 fas fa-angle-double-right"})])])])],1),a("li",{staticClass:"cell small-6"},[a("router-link",{staticClass:"button relative hollow br_radius animated-button br_secondary-n4 victoria-two expanded grid-x m-b_0 bg_secondary-n2 h:c_secondary-5 c_secondary-3",attrs:{to:"/profile"}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell auto text font_2:md font_1 font_display m-t_2 font_bold font_italic"},[a("i",{staticClass:"fas fa-user p-r_4"}),t._v("Profile\n\t\t\t\t\t\t\t\t\t")])])])],1),a("li",{staticClass:"cell small-6"},[a("router-link",{staticClass:"button relative hollow br_radius animated-button br_secondary-n4 victoria-two expanded grid-x bg_secondary-n2 m-b_0 h:c_secondary-5 c_secondary-3",attrs:{to:"/inapppurchase"}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell auto text font_2:md font_1 font_display m-t_2 font_bold font_italic"},[a("i",{staticClass:"fas fa-cart-plus p-r_4"}),t._v(" Store\n\t\t\t\t\t\t\t\t\t")])])])],1)])])])])])],1)},i=[],l=a("a331"),r=a("30e4"),o={name:"dashboard",components:{loginLogo:l["a"],userBar:r["a"]},methods:{getDash:function(){return this.$store.state.userModule.dash},getRechargeTimer:function(){return this.$store.getters.dashRechargeTimer}}},n=o,c=(a("f72f"),a("2877")),d=Object(c["a"])(n,e,i,!1,null,"935dc4f4",null);s["default"]=d.exports},c9fa:function(t,s,a){},f72f:function(t,s,a){"use strict";var e=a("c9fa"),i=a.n(e);i.a}}]);
//# sourceMappingURL=dashboard.2cc35777.js.map