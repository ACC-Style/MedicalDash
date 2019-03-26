import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "login",
			component: Login
		},
		{
			path: "/about",
			name: "about",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: () =>
				import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
		},
		{
			path: "/leaderboard",
			name: "leaderboard",

			component: () =>
				import(/* webpackChunkName: "leaderboard" */ "./views/Leaderboard.vue")
		},
		{
			path: "/profile",
			name: "profile",
			component: () =>
				import(/* webpackChunkName: "profile" */ "./views/Profile.vue")
		},
		{
			path: "/inAppPurchase",
			name: "inAppPurchase",
			component: () =>
				import(/* webpackChunkName: "inAppPurchase" */ "./views/InAppPurchase.vue")
		},
		{
			path: "/dashComplete",
			name: "dashComplete",
			component: () =>
				import(/* webpackChunkName: "dashComplete" */ "./views/DashCompleted.vue")
		},
		{
			path: "/dash",
			name: "dash",
			component: () => import(/* webpackChunkName: "dash" */ "./views/Dash.vue")
		},
		{
			path: "/reset",
			name: "reset",
			// route level code-splitting
			// this generates a separate chunk (Reset.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "Reset" */ "./views/Reset.vue")
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	}
});
