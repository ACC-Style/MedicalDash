<template>
	<div class="leaderboard">
		<userbar></userbar>
		<div class="relative">
			<router-link to="dashboard" class="absolute br_circle bg_warning t_2 l_2 thumbnail c_white p_3">
				<i class="fas fa-arrow-left"></i>
			</router-link>
			<h1 class="c_white text-center font_3 br_white-5 br_dotted br_0 br-b_1 p-t_2 p-b_2 lh_1">
				<div class="uppercase">Leaderboard</div>
				<div class="font_n1 c_white-8">This weeks scores who will be on top!</div>
			</h1>
			<div class="counter_reset">
				<playerlisting v-for="(player, index) in playersByScore" v-bind:key="index" v-bind="player"></playerlisting>
			</div>
		</div>
	</div>
</template>

<script>
import userbar from "@/components/userBar.vue";

import playerlisting from "@/components/leaderbaordperson.vue";

export default {
	components: {
		userbar,
		playerlisting
	},
	data() {
		return {
			players: [
				{
					id: 1,
					first_name: "Olin",
					last_name: "Whatson",
					score: 241445,
					highlighted: true
				},
				{
					id: 2,
					first_name: "Andreana",
					last_name: "Elcomb",
					score: 461693,
					highlighted: true
				},
				{
					id: 3,
					first_name: "Lyndsey",
					last_name: "Kingsland",
					score: 566275,
					highlighted: false
				},
				{
					id: 4,
					first_name: "Vivian",
					last_name: "Swarbrick",
					score: 542632,
					highlighted: false
				},
				{
					id: 5,
					first_name: "Ham",
					last_name: "Boutcher",
					score: 343927,
					highlighted: false
				},
				{
					id: 6,
					first_name: "Pat",
					last_name: "Ingley",
					score: 263101,
					highlighted: true
				},
				{
					id: 7,
					first_name: "Winslow",
					last_name: "Collman",
					score: 832399,
					highlighted: false
				},
				{
					id: 8,
					first_name: "Elyn",
					last_name: "Bernocchi",
					score: 691154,
					highlighted: false
				},
				{
					id: 9,
					first_name: "Felic",
					last_name: "Fuster",
					score: 779744,
					highlighted: true
				},
				{
					id: 10,
					first_name: "Johna",
					last_name: "Jecks",
					score: 458088,
					highlighted: false
				},
				{
					id: 11,
					first_name: "Teena",
					last_name: "Garz",
					score: 304525,
					highlighted: false
				},
				{
					id: 12,
					first_name: "Hamlin",
					last_name: "Joskowitz",
					score: 332849,
					highlighted: false
				},
				{
					id: 13,
					first_name: "Beaufort",
					last_name: "Lepoidevin",
					score: 880361,
					highlighted: true
				},
				{
					id: 14,
					first_name: "Hillier",
					last_name: "Candlish",
					score: 293121,
					highlighted: false
				},
				{
					id: 15,
					first_name: "Juliette",
					last_name: "Draco",
					score: 260286,
					highlighted: true
				},
				{
					id: 16,
					first_name: "Sharity",
					last_name: "Drew-Clifton",
					score: 714499,
					highlighted: true
				},
				{
					id: 17,
					first_name: "Arlette",
					last_name: "Linklater",
					score: 76791,
					highlighted: false
				},
				{
					id: 18,
					first_name: "Jeffie",
					last_name: "Pauleau",
					score: 434428,
					highlighted: true
				},
				{
					id: 19,
					first_name: "Creight",
					last_name: "MacCrackan",
					score: 413106,
					highlighted: false
				},
				{
					id: 20,
					first_name: "Cordy",
					last_name: "Broose",
					score: 556991,
					highlighted: false
				},
				{
					id: 21,
					first_name: "Koralle",
					last_name: "Gebhard",
					score: 328998,
					highlighted: false
				},
				{
					id: 22,
					first_name: "Quill",
					last_name: "Kilduff",
					score: 429763,
					highlighted: false
				},
				{
					id: 23,
					first_name: "Brina",
					last_name: "Ainsby",
					score: 62876,
					highlighted: true
				},
				{
					id: 24,
					first_name: "Reynold",
					last_name: "Lerwill",
					score: 242203,
					highlighted: false
				},
				{
					id: 25,
					first_name: "Richardo",
					last_name: "Leythley",
					score: 803850,
					highlighted: false
				}
			]
		};
	},
	computed: {
		playersByScore: function() {
			return this.players.sort(this.compare("score", "desc"));
		}
	},
	methods: {
		compare: function(key, order = "asc") {
			return function(a, b) {
				if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
					// property doesn't exist on either object
					return 0;
				}
				const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
				const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
				let comparison = 0;
				if (varA > varB) {
					comparison = 1;
				} else if (varA < varB) {
					comparison = -1;
				}
				return order == "desc" ? comparison * -1 : comparison;
			};
		}
	}
};
</script>

<style scoped>
</style>