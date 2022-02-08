import MutationsType from "./mutation_types";

export default {
    state: {
        user: null,
        isAuth: false,
        subjects: [],
    },

    getters: {
      getAuthUser(state) {
            return state.user;
        },
        getAuthStatus(state) {
            return state.isAuth;
        },
        getUserSubjects(state) {
            return state.subjects;
        },
    },

    actions: {
        login({ commit }, payload) {
            MutationsType.login(payload).then((res) => {
                commit("SET_AUTH_FLAG", true);
                commit("SET_USER", res.data.user);
                localStorage.setItem('token_local', res.data.token);
            });
        },
        logout({ commit }) {
            MutationsType.logout()
                .then(() => {
                    commit("SET_AUTH_FLAG", false);
                    window.location.href = "/";
                })
                .catch((err) => console.log("err", err));
        },
        getSubjects({ commit }) {
            MutationsType.getSubjects().then((res) => {
                commit("SET_SUBJECTS", res.data.subjects);
            });
        },
    },

    mutations: {
        SET_AUTH_FLAG(state, data) {
            return (state.isAuth = data);
        },
        SET_SUBJECTS(state, data) {
            return (state.subjects = data);
        },
        SET_USER(state, data) {
            return (state.user = data);
        },
    },
};
