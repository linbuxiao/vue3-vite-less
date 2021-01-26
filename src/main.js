import { createApp } from 'vue'
import router from '/@/router'
import store from '/@/store'


import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css';
import { ElButton } from 'element-plus';




const app = createApp(App)
app.use(ElButton)
app.use(router)
app.use(store)
app.mount('#app')
