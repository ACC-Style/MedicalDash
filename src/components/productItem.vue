<template>
	<div class="cell auto card br_white-4 br_2 bg_primary" id="productItem">
		<div class="grid-y text-center">
			<div
				class="cell shrink card-section br_white-4 br_0 br-b_2 br_solid font_n1 c_white bg_primary-n1 p_3 p-y_2"
			>{{name}}</div>
			<div class="cell shrink card-section font_1 c_white">
				<i v-bind:class="icon" class="fas font-golden_1"></i>
				<i class="fas fa-times font-golden_0"></i>
				<span class="font-golden_2 font_bold">5</span>
			</div>
			<div class="cell shrink card-action">
				<a href class="button small secondary">{{price}}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: { type: String, default: "Handfull of Dashes" },
		icon: { type: String, default: "fa-running" },
		price: { type: String, default: "$0.00" }
	}
};
</script>

<style scoped>
</style>
