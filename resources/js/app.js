import {createApp} from 'vue'

import App from './components/App.vue'
import axios from 'axios'
import router from './router/router'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')