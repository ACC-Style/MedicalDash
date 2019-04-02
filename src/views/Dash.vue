<template>
	<div class="dash">
		<userbar></userbar>
		<div class="relative">
			<router-link to="dashboard" class="absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3">
				<i class="fas fa-arrow-left"></i>
			</router-link>
			<h1 class="c_white text-center font_2 br_white-5 br_dotted br_0 br-b_1 p-t_4">DASH</h1>
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