import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import './assets/css/main.css'

import App from './App.vue'
import router from './router'
import SvgIcon from "@/components/icons/SvgIcon.vue";

const app = createApp(App)


app.config.globalProperties.$axios = axios
app.use(createPinia())
/*app.provide('$store', {
    global: useGlobalStore(),
});*/
app.use(router)
app.component("SvgIcon", SvgIcon)

app.mount('#app')
