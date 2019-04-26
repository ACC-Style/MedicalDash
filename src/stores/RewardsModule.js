const RewardsModule = {
    state: {
        gems: 0,
        experience: 0,
        points: 0
    },
    mutations: {
        ADD_REWARD: function(state, rewards) {
            state.gems = rewards.gems;
            state.experience = rewards.experience;
            state.points = rewards.points;
        }
    }
}

export default RewardsModule;