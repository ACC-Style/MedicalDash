<template>
	<div class="cell small-6 medium-4 card br_white-4 br_2 bg_secondary" id="productItem">
		<div class="grid-y text-center">
			<div
				class="cell shrink card-section br_white-8 br_0 br-b_1 br_solid font_n1 c_white bg_secondary-n3 p_3 p-y_2"
			>{{name}}</div>
			<div class="cell text-center font_0 c_white p-t_4">
				<i v-bind:class="icon" class="fas font-golden_2"></i>
				<i class="fas fa-times font-golden_0 p-x_2 p-y-3 p-b_4 d_inline-block"></i>
				<span class="font-golden_1 font_bold">{{count}}</span>
			</div>
			<div class="cell shrink card-action">
				<a @click="$refs.buyReveal.openReveal()" class="button small bg_warning-n1 br_radius m-x_4">
					<span>
						<i class="fas" v-bind:class="{'fa-usd-circle':currency == 'usd','fa-gem': currency =='gem'}"></i>
					</span>
					{{price}}
				</a>
			</div>
		</div>
		<reveal ref="buyReveal" class="bg_secondary-n2">
			<h1 slot="header" class="c_white">Buy {{name}}</h1>
			<div slot="content" class="c_white-9">
				<div class="grid-x">
					<div class="cell auto">
						<p class="font_1">
							You are about to buy {{name}} for
							{{price}}
							<i
								class="fas"
								v-bind:class="{'fa-usd-circle':currency == 'usd','fa-gem': currency =='gem'}"
							></i>
						</p>
					</div>
				</div>
				<div class="flex flex-dir-row-reverse">
					<div class="d_inline-block m-x_3">
						<a class="button secondary br_radius">Buy</a>
					</div>
					<div class="d_inline-block m-x_3">
						<a class="button secondary br_radius" data-close aria-label="Close modal">Close</a>
					</div>
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
		name: { type: String, default: "Handfull of Dashes" },
		icon: { type: String, default: "fa-running" },
		price: { type: String, default: "0" },
		count: { type: String, default: "0" },
		currency: { type: String, default: "usd" }
	}
};
</script>

<style scoped>
</style>
