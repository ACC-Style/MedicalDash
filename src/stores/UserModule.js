const UserModule = {
  state: {
    dash: 5,
    gems: 100,
    level: 1,
    points: 0,
    experience: 0,
    totalexperience: 20000,
    intervalId: "",
    timerString: "30:00"
  },
  mutations: {
    CONSUME_DASH: function(state) {
      if(state.dash > 0)
        state.dash--;
    },
    RECHARGE_DASH: function(state) {
      if(state.dash < 5)
        state.dash++;
    },
    RESET_TIMER: function(state) {
      state.timerString = "30:00";
      clearInterval(state.intervalId);
      state.intervalId = "";
    },
    UPDATE_TIMER: function(state) {
      var minutes = parseInt(state.timerString.split(":")[0]);
      var seconds = minutes * 60 + parseInt(state.timerString.split(":")[1]);
      seconds--;
      minutes = parseInt(seconds / 60);
      seconds = seconds % 60;
      if(seconds < 10)
        seconds = "0"+seconds;
      if(minutes < 10)
        minutes = "0"+minutes;

      state.timerString = minutes + ":" + seconds;
    },
    UPDATE_GEMS: function(state, amount) {
      state.gems += amount;
    },
    UPDATE_POINTS: function(state, amount) {
      state.points += amount;
    },
    UPDATE_EXPERIENCE: function(state, amount) {
      state.experience += amount;
      while(state.experience >= state.totalexperience) {
        state.experience -= state.totalexperience;
        state.level++;
      }
    }
  },
  getters: {
    dashRechargeTimer: function(state) {
      if(state.dash === 5)
        return "dash full!"
      else
        return state.timerString;
    }
  },
  actions: {
    startDashRecharge: function(context) {
      if(context.state.intervalId !== "")
        return;
      context.state.intervalId = setInterval(function() {
        context.commit('UPDATE_TIMER');
        if(context.state.timerString === "00:00") {
          context.commit('RECHARGE_DASH');
          context.commit('RESET_TIMER');
          if(context.state.dash !== 5)
            context.dispatch('startDashRecharge');
        }
      }, 1000);
    }
  }
}

export default UserModule;
