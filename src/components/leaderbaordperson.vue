<template>
	<div class="c_white grid-x font_3 br-b_1 br_solid br_white-2 p-x_4 p-y_2">
		<div class="cell shrink p-r_3">
			<span class="font_bold counter counter_increment">:</span>
		</div>
		<div class="cell auto lh_1">
			<div class="font_display font_1 uppercase">{{first_name}} {{last_name}}</div>
			<div class="font_copy c_primary-3 font_0 m-t_2 font_italic">{{visiblescore}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		first_name: { type: String, default: "Player 1" },
		last_name: { type: String, default: "Player 2" },
		score: { type: Number, default: 0 },
		highlighted: { type: Boolean, default: false }
	},
	data() {
		return {
			visiblescore: this.score.toString()
		};
	}
};
</script>

<style scoped>
</style>