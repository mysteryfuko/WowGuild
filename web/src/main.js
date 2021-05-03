/*
 * @Author: your name
 * @Date: 2021-04-19 13:50:41
 * @LastEditTime: 2021-04-21 15:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'

const app = createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
app.echarts = echarts
