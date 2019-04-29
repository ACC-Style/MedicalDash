<template>
	<div class="grid-x m-t_5">
		<div class="cell small-12 bg_warning p_4 br-tl_radius br-tr_radius">
			<h2 class="c_white text-left m_0 p-x_4 lh_2" v-html="text"></h2>
		</div>
		<div class="cell grid-x small-12 br_solid br_warning br_2 bg_secondary-n4">
			<!--<div class="card shadow_2 cell br_radius bg_secondary br_primary-n1 bw_2">-->
			<!--<div class="card-section relative br_primary-n3">-->
			<div class="cell small-12 p_5">
				<ul class="no-bullet" id="list">
					<li
						v-for="(option, index) in options"
						v-bind:key="index"
						v-on:click.prevent="optionClicked(index)"
						class="option"
					>
						<a href="#" class="button hollow br_radius animated-button victoria-five p_0">
							<div class="grid-x grid-padding-x align-middle">
								<div class="cell shrink c_white uppercase p-y_4 p-x_4 font_bold font_4">{{index + 1}}.</div>
								<div
									class="cell auto c_white lowercase text_left p-l_0"
									v-html="option"
								>resolves with sublingual nitroglycerin</div>
							</div>
						</a>
					</li>
				</ul>
				<div v-on:click.prevent="gotoNextQuestion" v-if="!isLastQuestion" class="bg_secondary-n2 m-t_5">
					<a
						href="#"
						class="button hollow br_radius animated-button br_secondary-n4 victoria-six expanded grid-x"
					>
						<span class="c_white uppercase font_bold">skip</span>
					</a>
				</div>
			</div>
			<!--</div>-->
			<!--</div>-->
		</div>

		<reveal ref="incorrectReveal" v-bind:hideCloseButton="true" class="bg_secondary-n2">
			<div slot="header">
				<h1 class="c_white text-center">Incorrect!</h1>
				<h4 class="c_white text-center">
					The correct answer is
					<strong class="c_primary" v-html="answer"></strong>
				</h4>
			</div>
			<div slot="content">
				<p class="c_white-9">
					<strong class="c_warning">Rationale: &nbsp;</strong>
					<i v-html="rationale"></i>
				</p>
				<div class="grid-x grid-margin-x" v-on:click.prevent="gotoNextQuestion" v-if="!isLastQuestion">
					<a
						href="#"
						class="button small hollow br_radius animated-button victoria-six cell small-6 small-offset-3"
					>
						<span class="c_white">Next Question</span>
					</a>
				</div>
				<div class="grid-x grid-margin-x" v-if="isLastQuestion">
					<a
						href="#"
						v-on:click.prevent="completeDash"
						class="button small hollow br_radius animated-button victoria-six cell small-6 small-offset-3"
					>
						<span class="c_white">Complete Dash</span>
					</a>
				</div>
			</div>
		</reveal>
		<reveal ref="correctReveal" v-bind:hideCloseButton="true" class="bg_secondary-n2">
			<div slot="header">
				<h1 class="c_white text-center">Correct!</h1>
			</div>
			<div slot="content">
				<p class="c_white-9">
					<strong class="c_warning">Rationale: &nbsp;</strong>
					<i v-html="rationale"></i>
				</p>
				<div class="grid-x grid-margin-x" v-on:click.prevent="gotoNextQuestion" v-if="!isLastQuestion">
					<a
						href="#"
						class="button small hollow br_radius animated-button victoria-six cell small-6 small-offset-3"
					>
						<span class="c_white">Next Question</span>
					</a>
				</div>
				<div class="grid-x grid-margin-x" v-if="isLastQuestion">
					<a
						href="#"
						v-on:click.prevent="completeDash"
						class="button small hollow br_radius animated-button victoria-six cell small-6 small-offset-3"
					>
						<span class="c_white">Complete Dash</span>
					</a>
				</div>
			</div>
		</reveal>
	</div>
</template>

<script>
import reveal from "@/components/Reveal.vue";

export default {
	components: {
		reveal
	},
	props: {
		text: { type: String, default: "dummy question" },
		options: {
			type: Array,
			default: function() {
				return [];
			}
		},
		answer: { type: Number, default: 1 },
		rationale: { type: String, default: "dummy rationale" },
		isLastQuestion: { type: Boolean, default: false }
	},
	created() {},
	methods: {
		optionClicked(optionIndex) {
			if (optionIndex + 1 === this.answer) {
				this.$refs.correctReveal.openReveal();
				this.$emit("correct-answered");
			} else {
				this.$refs.incorrectReveal.openReveal();
				this.$emit("wrong-answered");
			}
		},
		gotoNextQuestion(event) {
			this.$refs.incorrectReveal.closeReveal();
			this.$refs.correctReveal.closeReveal();
			this.$emit("next-question");
		},
		completeDash(event) {
			this.$refs.incorrectReveal.closeReveal();
			this.$refs.correctReveal.closeReveal();
			this.$emit("last-question-answered");
		}
	}
};
</script>

<style scoped>
@media screen and (min-width: 640px) {
	li.option a {
		background: rgba(219, 123, 20, 1);
		background: -moz-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.8rem,
			rgba(100, 102, 109, 1) 3.8rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: -webkit-gradient(
			left top,
			right top,
			color-stop(0%, rgba(219, 123, 20, 1)),
			color-stop(3.8rem, rgba(219, 123, 20, 1)),
			color-stop(3.8rem, rgba(100, 102, 109, 1)),
			color-stop(100%, rgba(100, 102, 109, 1))
		);
		background: -webkit-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.8rem,
			rgba(100, 102, 109, 1) 3.8rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: -o-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.8rem,
			rgba(100, 102, 109, 1) 3.8rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: -ms-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.8rem,
			rgba(100, 102, 109, 1) 3.8rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: linear-gradient(
			to right,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.8rem,
			rgba(100, 102, 109, 1) 3.8rem,
			rgba(100, 102, 109, 1) 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db7b14', endColorstr='#64666d', GradientType=1 );
	}
}
@media screen and (max-width: 639px) {
	li.option a {
		background: rgba(219, 123, 20, 1);
		background: -moz-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.2rem,
			rgba(100, 102, 109, 1) 3.2rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: -webkit-gradient(
			left top,
			right top,
			color-stop(0%, rgba(219, 123, 20, 1)),
			color-stop(3.2rem, rgba(219, 123, 20, 1)),
			color-stop(3.2rem, rgba(100, 102, 109, 1)),
			color-stop(100%, rgba(100, 102, 109, 1))
		);
		background: -webkit-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.2rem,
			rgba(100, 102, 109, 1) 3.2rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: -o-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.2rem,
			rgba(100, 102, 109, 1) 3.2rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: -ms-linear-gradient(
			left,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.2rem,
			rgba(100, 102, 109, 1) 3.2rem,
			rgba(100, 102, 109, 1) 100%
		);
		background: linear-gradient(
			to right,
			rgba(219, 123, 20, 1) 0%,
			rgba(219, 123, 20, 1) 3.2rem,
			rgba(100, 102, 109, 1) 3.2rem,
			rgba(100, 102, 109, 1) 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db7b14', endColorstr='#64666d', GradientType=1 );
	}
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
