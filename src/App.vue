<template>
	<div class="texture-dynamic bg_primary-n3" style="min-height:100vh">
		<div id="app" class="p_4 p-t_4" style="min-height:100vh">
			<div class="viewport">
				<router-view/>
			</div>
		</div>
		<div id="nav" class="bg_acc grid-x c_white shadow_5 font_n3 sticky b_0 r_0 l_0">
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white h:c_primary-4 m-b_0"
				to="/"
			>
				<i class="fas fa-sign-out-alt"></i>
				<span class="p-y_1">&nbsp; Login</span>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white h:c_primary-4 m-b_0"
				to="/reset"
			>
				<i class="fas fa-info-square"></i>
				<span class="p-y_1">&nbsp; Reset Password</span>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white h:c_primary-4 m-b_0"
				to="/dashboard"
			>
				<i class="fas fa-th"></i>
				<span class="p-y_1">&nbsp; Start Screen</span>
			</router-link>
			<router-link
				class="auto text-center p_2 cell center clear c_secondary-5 c_white h:c_primary-4 m-b_0"
				to="/about"
			>
				<i class="fas fa-info-square"></i>
				<span class="p-y_1">&nbsp; About</span>
			</router-link>
		</div>
	</div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
	name: "App",
	data() {
		return {};
	},
	computed: {
		// ...mapState([ ])
	},
	methods: {
		// ...mapMutations([])
	}
};
</script>
<style lang="scss">
#nav {
	z-index: 1000;
}
#nav .router-link-exact-active {
	background-color: #198dae;
}
.fa-layers {
	position: relative;
}
.fa-layers-counter {
	position: absolute;
	top: -0.5em;
	right: -1em;
	border: #00386b;
}
.router-link-exact-active .fa-layers-counter {
	border: #198dae;
}

.logo-lockup {
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 500px) {
		flex-direction: row;
	}
}

.logo-lockup .logo {
	height: 40px;
	flex: 0 1 0px;
	margin-bottom: 0.5rem;
	@media only screen and (min-width: 500px) {
		height: 80px;
	}
}

.logo-lockup .text {
	flex: 1 1 auto;
	line-height: 1;
	font-size: 24px;
	align-self: center;
	border-top: 3px solid #00386b;
	padding-top: 1rem;
	text-align: center;
	color: #00386b;
	@media only screen and (min-width: 500px) {
		border-left: 3px solid #00386b;
		padding-left: 1rem;
		text-align: left;
		padding-top: 0;
		border-top: 0 none;
		font-size: 40px;
	}
}

.slideInRight-enter-active,
.slideInRight-leave-active {
	transition: transform 0.5s ease, opacity 0.25s ease 0.25s;
}
/*.slideInRight-enter-active {
	transition-delay: 0.5s;
}*/
.slideInRight-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
	opacity: 0;
}
.slideInRight-enter /* .slideIn-leave-active below version 2.1.8 */ {
	transform: translateX(100%);
	opacity: 0;
}
.slideInRight-enter-to {
	transform: translateX(1);
	opacity: 1;
}
.slideInRight-move {
	transition: transform 0.5s ease;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}

.crossFade-enter-active,
.crossFade-leave-active {
	transition: opacity 0.25s ease 0.25s;
}

.crossFade-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.crossFade-enter /* .slideIn-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.crossFade-enter-to {
	opacity: 1;
}
.crossFade-move {
	transition: opacity 0.5s ease;
}
</style>
