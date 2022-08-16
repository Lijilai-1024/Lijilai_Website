import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ELementPlusIcons from '@element-plus/icons-vue'
const app = createApp(App);
app.config.globalProperties.$BaseUrl = 'http://127.0.0.1:8000/';
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.use(ElementPlus);
for (const iconName in ELementPlusIcons) {
    if (Reflect.has(ELementPlusIcons, iconName)) {
        const item = ELementPlusIcons[iconName]
        app.component(iconName, item)
    }
}
app.mount('#app');