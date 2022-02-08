import MutationsType from './mutation_types'

export default {
    state: {
        isAuth: false,
    },

    getters: {
        getAuthState(state) {
            return state.isAuth;
        },
    },

    actions: {
        login({ commit }, payload) {
          MutationsType.login(payload).then(res=>{
            // commit.SET_AUTH_FLAG(res.success)
          }).catch(err=>{
            console.log('err',err)
            // commit.SET_AUTH_FLAG(false)
          })
        },
    },

    mutations: {
        SET_AUTH_FLAG(state, data) {
            return (state.isAuth = data);
        },
    },
};
