import {createApp} from 'vue'
import Vuex from 'vuex'
import storeCustom from './store/store.js'

export const store = new Vuex.Store({
  modules: {
    storeCustom
  },
});


import App from './components/App.vue'
import axios from 'axios'
import router from './router/router'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.use(store)
app.mount('#app')