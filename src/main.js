import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createBootstrap} from 'bootstrap-vue-next'
import router from './router'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n';
import translation from "@/libs/translation.js"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

const i18n = createI18n(translation);

const pinia = createPinia()
app.use(createBootstrap()) // Important
app.use(router)
app.use(pinia)
app.use(i18n);
app.mount('#app')
