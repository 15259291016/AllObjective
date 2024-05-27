/*
 * @Date: 2024-05-27 15:09:42
 * @LastEditors: 牛智超
 * @LastEditTime: 2024-05-27 16:46:46
 * @FilePath: \personal_resume\src\main.ts
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {i18n} from './i18n';

const app = createApp(App)
app.use(i18n); // 使用 i18n
app.use(createPinia())
app.use(router)
app.mount('#app')
