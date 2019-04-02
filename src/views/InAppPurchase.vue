<template>
	<div class="about" id="inAppPurchase">
		<userbar></userbar>
		<div class="relative">
			<router-link to="dashboard" class="absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3">
				<i class="fas fa-arrow-left"></i>
			</router-link>
			<h1 class="c_white text-center font_3 br_white-5 br_dotted br_0 br-b_1 p-t_2 p-b_2 lh_1">
				<div class="uppercase">Store</div>
				<div class="font_n1 c_white-8">Gain a Little Edge</div>
			</h1>
			<div class="grid-x grid-margin-y grid-margin-x">
				<productitem v-for="(item, index) in items" v-bind:key="index" v-bind="item"></productitem>
			</div>
		</div>
	</div>
</template>

<script>
import userbar from "@/components/userBar.vue";
import productitem from "@/components/productItem.vue";
export default {
	name: "inapppurchase",
	components: {
		productitem,
		userbar
	},
	data() {
		return {
			items: [
				{
					icon: "fa-gem",
					price: "1.99",
					currency: "usd",
					count: "5",
					name: "A Few Gems"
				},
				{
					icon: "fa-gem",
					price: "4.99",
					currency: "usd",
					count: "20",
					name: "Handful Gems"
				},
				{
					icon: "fa-gem",
					price: "19.99",
					currency: "usd",
					count: "100",
					name: "Bucket of Gems"
				},
				{
					icon: "fa-running",
					price: "25",
					currency: "gem",
					count: "5",
					name: "Sprint of Dashes"
				},
				{
					icon: "fa-running",
					price: "100",
					currency: "gem",
					count: "30",
					name: "Marathon of Dashes"
				},
				{
					icon: "fa-ghost",
					price: "30",
					currency: "gem",
					count: "5",
					name: "Ghosts"
				},
				{
					icon: "fa-axe",
					price: "50",
					currency: "gem",
					count: "2",
					name: "Cut Time"
				},
				{
					icon: "fa-alicorn",
					price: "100",
					currency: "gem",
					count: "1",
					name: "Skip"
				}
			]
		};
	}
};
</script>

<style scoped>
</style>
