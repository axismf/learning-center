import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from
import router from "./router.js"; ./i18n.js

createApp(App).mount('#app')
    .use(i18n)
    .use(router)
    .mount("App")
