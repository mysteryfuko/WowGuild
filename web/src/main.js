/*
 * @Author: your name
 * @Date: 2021-04-19 13:50:41
 * @LastEditTime: 2021-05-06 15:55:15
 * @LastEditors: MysteryFuko
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
