<template>
	<div class="cell auto card br_white-4 br_2 bg_primary" id="productItem">
		<div class="grid-y">
			<div
				class="cell shrink card-section br_white-4 br_0 br-b_2 br_solid text-center font_n1 c_white bg_primary-n1 p_3 p-y_2"
			>{{name}}</div>
			<div class="cell shrink">
				<i class="fas fa-running"></i>
				<i class="fas fa-times"></i>
				<span class>5</span>
			</div>
			<div class="cell shrink card-section">
				<a href class="button tiny highlighted">$4.99</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: productItem,
	props: {
		name: { type: String, default: "Hand Full of Dash" }
	}
};
</script>

<style scoped>
</style>   