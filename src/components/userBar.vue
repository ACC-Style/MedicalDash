<template>
	<section id="userbar" class="m-x_n4 m-t_n4 p_4 p-t_3 p-b_1 m-b_4 bg_primary-n2 grid-x font_n1">
		<div class="grid-x flex-child-auto c_white-4">
			<router-link to="dash" tag="div" class="cell shrink self-end">
				<i class="fas fa-bolt font-golden_1 c_white-6"></i>
				<i class="fas fa-times p-y_3 p-x_2 font-golden_0"></i>
				<span class>{{ getDash() }}</span><br/>
				<small>{{ getRechargeTimer() }}</small>
			</router-link>
			<router-link to="profile" tag="div" class="cell auto text-center">
				<span class>
					<i class="fas fa-user font-golden_1 c_white-6"></i> Level: {{ getLevel() }}
				</span>
			</router-link>
			<router-link to="inapppurchase" tag="div" class="cell shrink">
				<i class="far fa-gem font-golden_1 c_white-6"></i>
				<i class="fas fa-times p-y_3 p-x_2 font-golden_0"></i>
				<span class>{{ getGems() }}</span>
			</router-link>
		</div>
		<router-link to="profile" class="d_block c_white-4 m-t_3" style="width:100%">
			<div class="grid-x">
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
						<div class="progress-meter" style="width: 45%" v-bind:style="{width: progress}">
							<p class="progress-meter-text m-b_2">&nbsp;</p>
						</div>
					</div>
					<p class="font_n3 c_primary-4 m-b_2">{{getTotalExp() - getExp()}} xp to next level</p>
				</div>
			</div>
		</router-link>
	</section>
</template>

<script>
export default {
	name: "UserBar",
	methods: {
		getDash () {
      return this.$store.state.userModule.dash;
    },
    getGems () {
      return this.$store.state.userModule.gems;
    },
    getExp () {
      return this.$store.state.userModule.experience;
    },
		getTotalExp() {
			return this.$store.state.userModule.totalexperience;
		},
    getLevel () {
      return this.$store.state.userModule.level;
    },
		getRechargeTimer () {
			return this.$store.getters.dashRechargeTimer;
		}
	},
	computed: {
		progress() {
			return (this.getExp() / this.getTotalExp()) * 100 + "%";
		}
	}
};
</script>

<style scoped>
</style>
