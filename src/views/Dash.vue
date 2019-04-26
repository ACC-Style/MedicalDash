<template>
	<div class="dash">
		<userbar></userbar>
		<div class="grid-x">
			<div class="cell small-12">
				<timer ref="dashTimer"
					v-bind:startTime="5"
					v-bind:criticalTime="1"
					v-on:time-expired="timeExpired"
				></timer>
			</div>
		</div>
		<dashquestion 
			class="fade-in" 
			v-bind="currentQuestion" 
			v-bind:isLastQuestion="currentQuestionIndex===2" 
			v-on:next-question="nextQuestionHandler"
			v-on:last-question-answered="gameOver"
			v-on:correct-answered="correctAnswers++"
			v-on:wrong-answered="wrongAnswers++"
		>
		</dashquestion>
		<div class="grid-y absolute lifeline-holder" v-bind:class="{closed: !isLifelinePanelOpen}">
			<div class="cell"> 
				<button class="button round shadow primary tiny">
					<i class="fas fa-axe font-golden_1 c_white"></i>
				</button>
			</div>
			<div class="cell"> 
				<button class="button round shadow primary tiny">
					<i class="fas fa-alarm-clock font-golden_1 c_white"></i>
				</button>
			</div>
			<div class="cell"> 
				<button class="button round shadow primary tiny">
					<i class="fas fa-alicorn font-golden_1 c_white"></i>
				</button>
			</div>
			<div class="cell"> 
				<button class="button round shadow primary tiny">
					<i class="fas fa-air-freshener font-golden_1 c_white"></i>
				</button>
			</div>
			<div class="cell"> 
				<button class="button round shadow primary tiny" v-on:click="toggleLifelinePanel">
					<i class="font-golden_1 c_white" v-bind:class="{'fas fa-hand-heart': !isLifelinePanelOpen, 'far fa-hand-heart': isLifelinePanelOpen}"></i>
				</button>
			</div>
		</div>
		<reveal ref="timeExpiredReveal" v-bind:hideCloseButton="true" class="bg_secondary-n2">
			<div slot="header">
				<h1 class="c_white text-center">Time Expired</h1>
			</div>
			<div slot="content">
				<p class="c_white-9">
					<i>It seems you were unable to complete the dash within given time. Better luck next time!</i>
				</p>
				<div class="grid-x grid-margin-x">
					<a href="#" v-on:click.prevent="completeDash" class="button small hollow br_radius animated-button victoria-six cell small-6 small-offset-3">
						<span class="c_white">Complete Dash</span>
					</a>
				</div>
			</div>
		</reveal>
	</div>
</template>

<script>
import userbar from "@/components/userBar.vue";
import dashquestion from "@/components/dashQuestion.vue";
import questionModule from "@/helpers/QuestionModule";
import reveal from "@/components/Reveal.vue";
import timer from "@/components/subComponents/timer.vue";

export default {
	components: {
		userbar,
		dashquestion,
		reveal,
		timer
	},
	data() {
		return {
			questions: [],
			currentQuestionIndex: 0,
			correctAnswers: 0,
			wrongAnswers: 0,
			isLifelinePanelOpen: false
		}
	},
	mounted() {
		this.newGame();
	},
	computed: {
		currentQuestion() {
			return this.questions[this.currentQuestionIndex];
		},
		rewards() {
			var reward = {
				gems: 50 * this.correctAnswers,
				experience: 1000 * this.correctAnswers,
				points: 5 * this.correctAnswers
			}
			return reward;
		}
	},
	methods: {
		newGame: function() {
			this.$store.commit('CONSUME_DASH');
			this.$store.dispatch('startDashRecharge');
			this.$refs.dashTimer.startTimer();
			this.questions = questionModule.getRandomQuestionSet();
			this.currentQuestionIndex = 0;
		},
		nextQuestionHandler: function() {
			if(this.currentQuestionIndex !== 2)
				this.currentQuestionIndex++;
		},
		gameOver: function() {
			this.$refs.dashTimer.stopTimer();
			this.$store.commit('ADD_REWARD', this.rewards);
			this.$router.push("/dashComplete");
		},
		timeExpired: function() {
			this.$refs.timeExpiredReveal.openReveal();
		},
		completeDash: function() {
			this.$store.commit('ADD_REWARD', this.rewards);
			this.$router.push("/dashComplete");
		},
		toggleLifelinePanel: function() {
			this.isLifelinePanelOpen = !this.isLifelinePanelOpen;
		}
	}
};
</script>

<style scoped>
.button.shadow:focus {
	background-color: #14718b;
	color: white;
}
	.lifeline-holder {
		top: 7rem;
		z-index: 999;
		right: 3rem;
		height: 50vh;
	}
	.lifeline-holder .button {
		outline: none;
	}
	.lifeline-holder .cell {
		transition: all 0.5s ease;
		position: absolute;
	}

	.lifeline-holder.closed .cell:nth-child(n) {
		top: 0;
	}

	.lifeline-holder .cell:nth-child(2) {
		top: 3rem;
	}
	.lifeline-holder .cell:nth-child(3) {
		top: 6rem;
	}
	.lifeline-holder .cell:nth-child(4) {
		top: 9rem;
	}
	.lifeline-holder .cell:nth-child(5) {
		top: 12rem;
	}

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
	height: 100%;
	left: 0;
	top: 0;
	width: 0%;
	z-index: -1;
	-webkit-transition: all 1s ease 0s;
	-moz-transition: all 1s ease 0s;
	-o-transition: all 1s ease 0s;
	transition: all 1s ease 0s;
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
a.animated-button.victoria-five, 
a.animated-button.victoria-six,
a.animated-button.victoria-seven {
	border: 2px solid #db7b14;
}
a.animated-button.victoria-five:after {
	background: #db7b14;
}
a.animated-button.victoria-seven:hover {
	-ms-transform: scale(1.05);
	transform: scale(1.05);
}
a.animated-button.victoria-five:hover:after {
	width: 100%;
	opacity: 1;
}
.animated-button.victoria-six:hover {
	background-color: #db7b14;
}
</style>
