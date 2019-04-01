<template>
	<section id="userbar" class="m-x_n4 m-t_n4 p_4 p-t_2 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1">
		<router-link to="profile" class="d_block r_0 l_0 c_white-4" style="width:100%">
			<div class="grid-x flex-child-auto">
				<div class="cell shrink self-end">
					<i class="fas fa-bolt font-golden_1"></i>
					<i class="fas fa-times p-y_3 p-x_2 font-golden_0"></i>
					<span class>105</span>
				</div>
				<div class="cell auto text-center">
					<span class="font_bold font-golden_1">
						<i class="fas fa-user"></i>
					</span>
					<i class="fas fa-times p-y_3 p-x_2 font-golden_0"></i>
					<span class>32</span>
				</div>
				<div class="cell shrink self-end">
					<i class="far fa-gem font-golden_1"></i>
					<i class="fas fa-times p-y_3 p-x_2 font-golden_0"></i>
					<span class>105</span>
				</div>
				<div class="small-12 cell">
					<div
						style="height:5px"
						class="primary progress m-b_2"
						role="progressbar"
						tabindex="0"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuetext="25 percent"
						aria-valuemax="100"
					>
						<div class="progress-meter" style="width: 45%">
							<p class="progress-meter-text m-b_2">&nbsp;</p>
						</div>
					</div>
					<p class="font_n3 c_primary-4 m-b_2">100,254 xp to next level</p>
				</div>
			</div>
		</router-link>
	</section>
</template>

<script>
export default {
	name: "UserBar"
};
</script>

<style scoped>
</style>