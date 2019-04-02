<template>
	<div class="about p_4" id="inAppPurchase">
		<h1 class="c_white">Store</h1>
		<div class="grid-y grid-margin-y">
			<div class="cell shrink">
				<div class="grid-x grid-margin-x">
					<productitem :icon="'fa-gem'" :price="'$4.99'" :name="'Label'"></productitem>

					<div class="cell auto card br_white-4 br_2 bg_primary"></div>
				</div>
			</div>
			<div class="cell shrink">
				<div class="grid-x grid-margin-x">
					<div class="cell auto card br_white-4 br_2 bg_primary"></div>
					<div class="cell auto card br_white-4 br_2 bg_primary"></div>
				</div>
			</div>
			<div class="cell shrink">
				<div class="grid-x grid-margin-x">
					<div class="cell auto card br_white-4 br_2 bg_primary"></div>
					<div class="cell auto card br_white-4 br_2 bg_primary"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import productitem from "@/components/productItem.vue";
export default {
	name: "inapppurchase",
	components: {
		productitem
	}
};
</script>

<style scoped>
</style>
