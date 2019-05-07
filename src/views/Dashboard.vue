<template>
	<div class="dashboard">
		<userBar></userBar>
		<div class="grid-x p_4">
			<loginLogo></loginLogo>
		</div>
		<div class="grid-x">
			<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
				<div class="card shadow_2 cell br_radius bg_secondary br_primary-n1 bw_2">
					<div class="card-section relative br_primary-n3">
						<ul class="no-bullet grid-x grid-margin-x">
							<li class="cell small-12">
								<router-link
									to="/dash"
									v-bind:class="[{ disabled: getDash() === 0}]"
									class="button relative hollow br_radius animated-button victoria-two expanded grid-x bg_primary"
								>
									<div class="grid-x font_3 font_4:md">
										<div class="p_2 cell shrink">
											<i class="font_4 fas fa-angle-double-right c_white"></i>
										</div>
										<div class="cell auto text font_display font_bold font_italic p-t_3">
											<i class="fas fa-bolt"></i> Start Dash
										</div>
										<div class="p_2 cell shrink">
											<i class="font_4 fas fa-angle-double-right c_white"></i>
										</div>
									</div>
									<small
										class="c_white lowercase"
										v-if="getDash()===0"
									>(Wait {{getRechargeTimer()}} for dash recharge, or visit store to buy more dash)</small>
								</router-link>
							</li>
							<li class="cell small-12">
								<router-link
									to="/challenges"
									href
									class="button relative hollow br_radius animated-button victoria-two expanded grid-x"
								>
									<div class="grid-x">
										<div class="p_2 cell shrink">
											<i class="font_2 fas fa-angle-double-right"></i>
										</div>
										<div class="cell auto text font_2 font_display m-t_2 font_bold font_italic">
											<i class="fas fa-badge-check"></i> Challenges
										</div>
										<div class="p_2 cell shrink">
											<i class="font_2 fas fa-angle-double-right"></i>
										</div>
									</div>
								</router-link>
							</li>
							<li class="cell small-12">
								<router-link
									to="/leaderboard"
									href
									class="button relative hollow br_radius animated-button victoria-two expanded grid-x"
								>
									<div class="grid-x">
										<div class="p_2 cell shrink">
											<i class="font_2 fas fa-angle-double-right"></i>
										</div>
										<div class="cell auto text font_2 font_display m-t_2 font_bold font_italic">
											<i class="fas fa-trophy-alt"></i> Leaderboard
										</div>
										<div class="p_2 cell shrink">
											<i class="font_2 fas fa-angle-double-right"></i>
										</div>
									</div>
								</router-link>
							</li>
							<li class="cell small-6">
								<router-link
									to="/profile"
									class="button relative hollow br_radius animated-button br_secondary-n4 victoria-two expanded grid-x m-b_0 bg_secondary-n2 h:c_secondary-5 c_secondary-3"
								>
									<div class="grid-x">
										<div class="cell auto text font_2:md font_1 font_display m-t_2 font_bold font_italic">
											<i class="fas fa-user p-r_4"></i>Profile
										</div>
									</div>
								</router-link>
							</li>
							<li class="cell small-6">
								<router-link
									to="/inapppurchase"
									class="button relative hollow br_radius animated-button br_secondary-n4 victoria-two expanded grid-x bg_secondary-n2 m-b_0 h:c_secondary-5 c_secondary-3"
								>
									<div class="grid-x">
										<div class="cell auto text font_2:md font_1 font_display m-t_2 font_bold font_italic">
											<i class="fas fa-cart-plus p-r_4"></i> Store
										</div>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import loginLogo from "@/components/loginLogo.vue";
import userBar from "@/components/userBar.vue";
export default {
	name: "dashboard",
	components: {
		loginLogo,
		userBar
	},
	methods: {
		getDash() {
			return this.$store.state.userModule.dash;
		},
		getRechargeTimer() {
			return this.$store.getters.dashRechargeTimer;
		}
	}
};
</script>

<style scoped>
a.button.disabled {
	pointer-events: none;
}
/* https://codepen.io/sazzad/pen/yNNNJG?editors=0100 */
a.animated-button:link,
a.animated-button:visited {
	position: relative;
	z-index: 1;
	display: block;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
	-webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}
a.animated-button:link:after,
a.animated-button:visited:after {
	content: "";
	position: absolute;
	height: 0%;
	left: 50%;
	top: 50%;
	width: 300%;
	z-index: -1;
	-webkit-transition: all 0.75s ease 0s;
	-moz-transition: all 0.75s ease 0s;
	-o-transition: all 0.75s ease 0s;
	transition: all 0.75s ease 0s;
}
a.animated-button:link .text,
a.animated-button:visited .text {
	color: #fff;
	text-shadow: none;
	z-index: 100;
}
a.animated-button:link:hover,
a.animated-button:visited:hover {
	color: #fff;
	text-shadow: none;
}
a.animated-button:link:hover:after,
a.animated-button:visited:hover:after {
	height: 1000%;
}
/* Victoria Buttons */

a.animated-button.victoria-one {
	border: 2px solid #db7b14;
}
a.animated-button.victoria-one:after {
	background: #db7b14;
	-moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
	-ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
	-webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
	transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
a.animated-button.victoria-two {
	border: 2px solid #db7b14;
}
a.animated-button.victoria-two:after {
	background: #db7b14;
	-moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
	-ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
	-webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
	transform: translateX(-50%) translateY(-50%) rotate(25deg);
}
a.animated-button.victoria-three {
	border: 2px solid #db7b14;
}
a.animated-button.victoria-three:after {
	background: #db7b14;
	opacity: 0.5;
	-moz-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	-webkit-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}
a.animated-button.victoria-three:hover:after {
	height: 140%;
	opacity: 1;
}
a.animated-button.victoria-four {
	border: 2px solid #db7b14;
}
a.animated-button.victoria-four:after {
	background: #db7b14;
	opacity: 0.5;
	-moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
	-ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
	-webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
	transform: translateY(-50%) translateX(-50%) rotate(90deg);
}
a.animated-button.victoria-four:hover:after {
	opacity: 1;
	height: 600% !important;
}
</style>
