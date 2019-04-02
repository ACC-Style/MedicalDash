<template>
	<div class="challenges">
		<userbar></userbar>
		<div class="relative">
			<router-link to="dashboard" class="absolute br_circle bg_warning t_2 l_0 thumbnail c_white p_3">
				<i class="fas fa-arrow-left"></i>
			</router-link>
			<h1 class="c_white text-center font_3 br_white-5 br_dotted br_0 br-b_1 p-t_2 p-b_2 lh_1 p-l_3">
				<div class="uppercase">Daily Challenges</div>
				<div class="font_n1 c_white-8">Complete Challenges and Get Rewards!</div>
			</h1>
		</div>
	</div>
</template>

<script>
import userbar from "@/components/userBar.vue";
export default {
	components: {
		userbar
	}
};
</script>

<style scoped>
</style>