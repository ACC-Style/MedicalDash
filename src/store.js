import Vue from "vue";
import Vuex from "vuex";
import userModule from "@/stores/UserModule";
import appModule from "@/stores/ApplicationModule";
import rewardsModule from "@/stores/RewardsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    appModule,
    rewardsModule
  },
  mutations: {
    ASSIGN_REWARDS: function(state) {
      state.userModule.gems += state.rewardsModule.gems;
      state.userModule.points += state.rewardsModule.points;
      state.userModule.experience += state.rewardsModule.experience;
    }   
  }
});
