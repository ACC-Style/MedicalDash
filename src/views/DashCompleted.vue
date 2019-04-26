<template>
	<div class="dashcomplete">
		<userbar></userbar>
		<div class="grid-container text-center">
			<h1 class="c_white">Dash Over!</h1>
			<p class="c_white m-t_3">
				You won
			</p>
			<h5 class="c_white m-t_3">+ {{gainedPoints}} points</h5>
			<div class="grid-x c_warning m-t_5 p_5 rewards-panel">
				<div class="cell auto rewards-panel-item">
					<i class="fas fa-books-medical font-golden_2"></i>
					<h6>+ {{gainedExperience}} xp</h6>
				</div>
				<div class="cell auto rewards-panel-item">
					<i class="fas fa-gem font-golden_2"></i>
					<h6>+ {{gainedGems}} gems</h6>
				</div>
			</div>
			<div class="grid-x m-t_5 grid-margin-x">
			<div class="cell small-12 medium-6 medium-offset-3">
				<router-link
					to="/dash"
					v-bind:class="[{ disabled: getDash === 0}]"
					href
					class="button relative hollow br_radius animated-button victoria-one grid-x"
				>
					<div class="grid-x">
						<div class="cell shrink p_2">
							<i class="fas fa-angle-double-left"></i>
						</div>
						<div class="cell auto text font_display m-t_2 font_bold">
							<span class="c_white">Start New Dash</span>
							<small class="c_white"> ({{getDash}} <i class="fa fa-bolt"></i> remaining)</small>
						</div>
						<div class="cell shrink p_2">
							<i class="fas fa-angle-double-left"></i>
						</div>
					</div>
				</router-link>
				<router-link
					to="/dashboard"
					href
					class="button relative hollow br_radius animated-button victoria-one grid-x"
				>
					<div class="grid-x">
						<div class="cell shrink p_2">
							<i class="fas fa-angle-double-left"></i>
						</div>
						<div class="cell auto text font_display m-t_2 font_bold">
							<span class="c_white">Dashboard</span>
						</div>
						<div class="cell shrink p_2">
							<i class="fas fa-angle-double-left"></i>
						</div>
					</div>
				</router-link>
			</div>	
			</div>
		</div>
	</div>
</template>

<script>
import userbar from "@/components/userBar.vue";

export default {
	components: {
		userbar
	},
	created() {
		///this.newGame();
		this.$store.commit('ASSIGN_REWARDS');
	},
	computed: {
		gainedPoints() {
			return this.$store.state.rewardsModule.points;
		},
		gainedGems() {
			return this.$store.state.rewardsModule.gems;
		},
		gainedExperience() {
			return this.$store.state.rewardsModule.experience;
		},
		getDash() {
			return this.$store.state.userModule.dash;
		}
	},
}
</script>
<style scoped>
a.button.disabled {
	pointer-events: none;
}
	.button {
		word-break: break-word;
		white-space: pre-wrap;
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
	.rewards-panel-item {
		-webkit-animation: beat .25s infinite alternate;
		-moz-animation: beat .25s infinite alternate;
		-ms-animation: beat .25s infinite alternate;
		-o-animation: beat .25s infinite alternate;
		animation: beat .25s infinite alternate;

		-webkit-transform-origin: center;
		-moz-transform-origin: center;
		-o-transform-origin: center;
		-ms-transform-origin: center;
		transform-origin: center;
	}
	@keyframes beat {
		to {
			-webkit-transform: scale(1.1);
			-moz-transform: scale(1.1);
			-o-transform: scale(1.1);
			-ms-transform: scale(1.1);
			transform: scale(1.1);
		}
	}
	@-moz-keyframes beat {
		to {
		-moz-transform: scale(1.1);
		transform: scale(1.1);
		}
	}
	@-webkit-keyframes beat {
		to {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		}
	}
	@-ms-keyframes beat {
		to {
		-ms-transform: scale(1.1);
		transform: scale(1.1);
		}

	}
	@-o-keyframes beat {
		to {
		-o-transform: scale(1.1);
		transform: scale(1.1);
		}
	} 
</style>